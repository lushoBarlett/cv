import fs from 'node:fs/promises';
import express, { type Request, type Response } from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import compression from 'compression';
import sirv from 'sirv';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

/**
 * Load cached production assets
 */
async function loadProductionAssets() {
  if (!isProduction) return { templateHtml: '', ssrManifest: undefined };

  const templateHtml = await fs.readFile(resolve(__dirname, './dist/client/index.html'), 'utf-8');
  const ssrManifest = await fs.readFile(
    resolve(__dirname, './dist/client/.vite/ssr-manifest.json'),
    'utf-8'
  );

  return { templateHtml, ssrManifest };
}

/**
 * Setup Vite dev server or production middlewares
 */
async function setupMiddlewares(app: express.Application) {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    });
    app.use(vite.middlewares);
    return vite;
  }

  app.use(compression());
  app.use(base, sirv(resolve(__dirname, './dist/client'), { extensions: [] }));

  return null;
}

/**
 * Render the application and inject into HTML template
 */
async function renderApp(url: string, vite: ViteDevServer | null, templateHtml: string) {
  let template: string;
  let render: () => string;

  if (!isProduction && vite) {
    template = await fs.readFile(resolve(__dirname, './index.html'), 'utf-8');
    render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
  } else {
    template = templateHtml;
    // @ts-ignore
    const entryServer = await import('./dist/server/entry-server.js');
    render = entryServer.render;
  }

  const rendered = render();
  const cssLink = !isProduction ? '<link rel="stylesheet" href="/src/style.css">' : '';

  let html = template.replace(`<!--app-head-->`, cssLink).replace(`<!--app-html-->`, rendered);

  // Transform HTML after injection in dev mode
  if (!isProduction && vite) {
    html = await vite.transformIndexHtml(url, html);
  }

  return html;
}

/**
 * Main server setup
 */
async function createServer() {
  const app = express();
  const { templateHtml } = await loadProductionAssets();
  const vite = await setupMiddlewares(app);

  app.use('*all', async (req: Request, res: Response) => {
    try {
      const url = req.originalUrl.replace(base, '');
      const html = await renderApp(url, vite, templateHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    } catch (error: any) {
      vite?.ssrFixStacktrace(error);
      console.error(error.stack);
      res.status(500).end(error.stack);
    }
  });

  app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
  });
}

createServer();
