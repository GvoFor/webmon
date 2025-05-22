import {
  RouterProvider as LibraryRouterProvider,
  RouteObject,
  createBrowserRouter,
} from 'react-router-dom';

type Properties = {
  routes: RouteObject[];
};

const RouterProvider = ({ routes }: Properties): React.JSX.Element => {
  return <LibraryRouterProvider router={createBrowserRouter(routes)} />;
};

export { RouterProvider };
