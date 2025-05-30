import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App, ProtectedPage, RouterProvider } from './components/components.js';
import { AppRoutes } from './enums/enums.js';
import { Auth, Dashboard, Home, Scripts } from './pages/pages.js';

import './assets/scss/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      routes={[
        {
          element: <App />,
          path: AppRoutes.ROOT,
          children: [
            {
              element: <Home />,
              path: AppRoutes.ROOT,
            },
            {
              element: <Auth />,
              path: AppRoutes.SIGN_IN,
            },
            {
              element: <Auth />,
              path: AppRoutes.SIGN_UP,
            },
            {
              element: (
                <ProtectedPage>
                  <Dashboard />
                </ProtectedPage>
              ),
              path: AppRoutes.DASHBOARD,
            },
            {
              element: (
                <ProtectedPage>
                  <Scripts />
                </ProtectedPage>
              ),
              path: AppRoutes.SCRIPTS,
            },
          ],
        },
        {
          element: <h1>Not Found Page</h1>,
          path: AppRoutes.ANY,
        },
      ]}
    />
  </StrictMode>,
);
