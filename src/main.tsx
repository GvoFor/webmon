import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App, RouterProvider } from './components/components';
import { AppRoutes } from './enums/enums';
import { Home } from './pages/pages';

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
