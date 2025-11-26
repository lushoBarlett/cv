import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

// For static sites, we use createRoot instead of hydrateRoot
// since the HTML is pre-rendered at build time, not server-rendered per request
const container = document.getElementById('app')!;
createRoot(container).render(<App />);
