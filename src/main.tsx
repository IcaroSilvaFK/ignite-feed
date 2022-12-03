import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Home } from './Pages/Home';
import { GlobalCSS } from './styles/global';
import { theme } from './styles/theme';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Home />
    </ThemeProvider>
  </StrictMode>
);
