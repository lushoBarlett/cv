# Vite SSR Application with TypeScript and Tailwind CSS

A modern server-side rendered (SSR) application built with Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Lightning-fast build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type safety and better DX
- 🚀 **SSR** - Server-Side Rendering for better SEO and performance
- 🔥 **HMR** - Hot Module Replacement in development

## Getting Started

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

This will create two builds:
- `dist/client` - Client-side assets
- `dist/server` - Server-side bundle

### Preview Production Build

Run the production build locally:

```bash
npm run preview
```

## Project Structure

```
web/
├── src/
│   ├── entry-client.ts    # Client-side entry point
│   ├── entry-server.ts    # Server-side entry point
│   ├── main.ts            # Application logic
│   └── style.css          # Tailwind CSS imports
├── server.ts              # Express server for SSR
├── index.html             # HTML template
└── package.json
```

## How It Works

1. **Development Mode**: The Express server uses Vite's middleware to serve and transform files on-the-fly
2. **Production Mode**: Pre-built assets are served from the `dist` directory
3. **SSR**: The server renders the initial HTML on the server for faster first paint and better SEO
4. **Hydration**: Client-side JavaScript takes over after the initial render for interactivity

## Technologies

- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type system
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Express](https://expressjs.com/) - Web server
