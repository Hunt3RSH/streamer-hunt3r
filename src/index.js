import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from 'utils/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const basename = (process.env.PUBLIC_URL || '/')
  .replace(/^https?:\/\/[^/]+/, '')
  .replace(/\/$/, '') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
