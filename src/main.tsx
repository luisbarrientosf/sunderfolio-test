import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// SPA redirect support for GitHub Pages
if (window.location.search.startsWith('?redirect=')) {
  const redirectPath = decodeURIComponent(window.location.search.replace('?redirect=', ''));
  window.history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
