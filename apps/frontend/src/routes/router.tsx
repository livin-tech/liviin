import { Navigate, RouteObject } from 'react-router-dom';
import SidebarLayout from '../layouts/SidebarLayout';

import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import Property from '../pages/property';
import StatusComingSoon from '../pages/status/ComingSoon';
import Status404 from '../pages/status/Status404';
import Users from '../pages/users';
import DashboardCrypto from '../pages/overview';
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
