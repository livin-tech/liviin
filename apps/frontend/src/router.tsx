import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from '../src/layouts/SidebarLayout';
import BaseLayout from '../src/layouts/BaseLayout';

import SuspenseLoader from '../src/components/SuspenseLoader';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signin/SignUp';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const Crypto = Loader(lazy(() => import('../src/content/dashboards/Crypto')));

// Applications

const Transactions = Loader(
  lazy(() => import('../src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('../src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('../src/content/applications/Users/settings'))
);

// Status

const Status404 = Loader(
  lazy(() => import('../src/content/pages/Status/Status404'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
      ,
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />,
      },
      {
        path: 'overview',
        element: <Crypto />,
      },
      {
        path: 'users',
        element: <Transactions />,
      },
    ],
  },
];

export default routes;
