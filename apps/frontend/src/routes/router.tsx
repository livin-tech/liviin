import { Navigate, RouteObject } from 'react-router-dom';
import SidebarLayout from '../layouts/SidebarLayout';

import SignIn from '../components/Signin/SignIn';
import SignUp from '../components/Signin/SignUp';
import Property from '../content/pages/property';
import StatusComingSoon from '../content/pages/Status/ComingSoon';
import Status404 from '../content/pages/Status/Status404';
import Users from '../content/pages/users';
import DashboardCrypto from '../content/dashboards/Crypto';
import ProtectedRoute from './protectedRoutes'; // Import the ProtectedRoute component

import {
  OVERVIEW,
  USERS as USERS_ROUTE,
  PROPERTY as PROPERTY_ROUTE,
  QUESTIONNAIRE,
  PAYMENT,
  SIGNIN,
  SIGNUP,
} from './routesConstants';

export const Router: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <SidebarLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Navigate to={OVERVIEW} replace />,
      },
      {
        path: OVERVIEW,
        element: <DashboardCrypto />,
      },
      {
        path: USERS_ROUTE,
        element: <Users />,
      },
      {
        path: PROPERTY_ROUTE,
        element: <Property />,
      },
      {
        path: QUESTIONNAIRE,
        element: <StatusComingSoon />,
      },
      {
        path: PAYMENT,
        element: <StatusComingSoon />,
      },
    ],
  },
  {
    path: '/',
    children: [
      {
        path: SIGNIN,
        element: <SignIn />,
      },
      {
        path: SIGNUP,
        element: <SignUp />,
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
];
