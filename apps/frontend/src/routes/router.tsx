import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from '../layouts/SidebarLayout';

import SignIn from '../components/Signin/SignIn';
import SignUp from '../components/Signin/SignUp';
import Property from '../content/pages/property';
import StatusComingSoon from '../content/pages/Status/ComingSoon';
import Status404 from '../content/pages/Status/Status404';
import DashboardCrypto from '../content/dashboards/Crypto';
import Users from '../content/pages/users';

export const Router: RouteObject[] = [
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
        element: <Users />,
      },
      {
        path: 'property',
        element: <Property />,
      },
      {
        path: 'questionnaire',
        element: <StatusComingSoon />,
      },
      {
        path: 'payment',
        element: <StatusComingSoon />,
      },
    ],
  },
  {
    path: '/',
    children: [
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
