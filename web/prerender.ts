import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Pre-render the application to static HTML for GitHub Pages
 */
async function prerender() {
  console.log('🔨 Pre-rendering application...');

  // Import the server render function
  const { render } = await import('./dist/server/entry-server.js');

  // Read the client HTML template
  const template = await fs.readFile(resolve(__dirname, './dist/client/index.html'), 'utf-8');

  // Render the app
  const appHtml = render();

  // Inject the rendered HTML into the template
  // Replace the empty div with id="app" with one that contains the rendered content
  const html = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`);

  // Write the final HTML file
  await fs.writeFile(resolve(__dirname, './dist/client/index.html'), html, 'utf-8');

  console.log('✅ Pre-rendering complete!');
  console.log('📦 Static files ready in dist/client/');
}

prerender().catch(error => {
  console.error('❌ Pre-rendering failed:', error);
  process.exit(1);
});
