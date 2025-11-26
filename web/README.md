# CV Website - Static Site with Pre-rendering

A modern CV/portfolio website built with React, TypeScript, and Tailwind CSS, pre-rendered as a
static site for GitHub Pages deployment.

## Features

- ⚡️ **Vite** - Lightning-fast build tool
- ⚛️ **React** - UI library
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 📘 **TypeScript** - Type safety and better DX
- 📦 **Static Pre-rendering** - HTML pre-rendered at build time for GitHub Pages
- 🚀 **Fast Loading** - Optimized static assets with instant page loads

## Getting Started

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production (generates static site):

```bash
npm run build
```

This will:

1. Build client-side assets to `dist/client`
2. Build server-side bundle to `dist/server`
3. Pre-render the HTML with React content
4. Output static files ready for GitHub Pages in `dist/client`

### Preview Production Build

Run the production SSR server locally:

```bash
npm run preview
```

Or serve the static files:

```bash
cd dist/client && python3 -m http.server 8080
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`. The
workflow:

1. Installs dependencies
2. Runs the build process
3. Deploys `dist/client` to GitHub Pages

## Project Structure

```
web/
├── src/
│   ├── App.tsx            # Main React application
│   ├── entry-client.tsx   # Client-side entry point
│   ├── entry-server.tsx   # Server-side rendering entry
│   └── style.css          # Tailwind CSS styles
├── server.ts              # Express server for development SSR
├── prerender.ts           # Static site pre-rendering script
├── index.html             # HTML template
└── package.json
```

## How It Works

### Build Process

1. **Client Build**: Vite builds the React application with all assets
2. **Server Build**: Vite builds the SSR entry point as a Node.js bundle
3. **Pre-rendering**: The prerender script:
   - Imports the server render function
   - Renders the React app to HTML string
   - Injects the HTML into the client index.html
   - Outputs a fully static site

### Runtime

Since this is a static site for GitHub Pages:

- The HTML is pre-rendered at build time (not per-request)
- React hydrates the static HTML on the client for interactivity
- No server is needed - just static file hosting

## Technologies

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type system
- [Tailwind CSS v4](https://tailwindcss.com/) - CSS framework
- [Express](https://expressjs.com/) - Development server (SSR)
