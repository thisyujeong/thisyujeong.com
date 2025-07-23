import type React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { type Paths, routePaths } from './config';
import HomePage from '@/pages/home/HomePage';
import ProjectPage from '@/pages/project/ProjectPage';
import DefaultLayout from '@/components/layout/DefaultLayout';

interface RouterConfig {
  key: string;
  path: Paths;
  // title: string;
  element: React.ReactNode;
  children?: RouterConfig[];
}

const routerConfig: RouterConfig[] = [
  {
    key: routePaths.Home,
    path: routePaths.Home,
    // title: 'Home page',
    element: <HomePage />,
  },
  {
    key: routePaths.Project,
    path: routePaths.Project,
    // title: 'Project',
    element: <ProjectPage />,
  },
];

const generateRoutes = (routes: RouterConfig[]): React.ReactNode =>
  routes.map(({ key, path, element, children }) => (
    <Route key={key} path={path} element={<DefaultLayout>{element}</DefaultLayout>}>
      {children && generateRoutes(children)}
    </Route>
  ));

const buildRoutes = () => <>{generateRoutes(routerConfig)}</>;
const router = createBrowserRouter(createRoutesFromElements(buildRoutes()));

export default router;
