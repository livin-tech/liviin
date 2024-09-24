import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from '../src/layouts/SidebarLayout';

import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signin/SignUp';
import Property from './content/pages/property';
import StatusComingSoon from './content/pages/Status/ComingSoon';
import Status404 from './content/pages/Status/Status404';
import DashboardCrypto from './content/dashboards/Crypto';
import ApplicationsTransactions from './content/applications/Transactions';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="overview" replace />,
      },
      {
        path: 'overview',
        element: <DashboardCrypto />,
      },
      {
        path: 'users',
        element: <ApplicationsTransactions />,
      },
      {
        path: 'property',
        element: <Property />,
      },
      {
        path: 'questionnaires',
        element: <StatusComingSoon />,
      },
      {
        path: 'payment',
        element: <StatusComingSoon />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
];

export default routes;
