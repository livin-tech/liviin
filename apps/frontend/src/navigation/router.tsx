import { Navigate, RouteObject } from 'react-router-dom';

// Pages
import Users from '../pages/users';
import Property from '../pages/property';
import Dashboard from '../pages/overview';
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import Status404 from '../pages/status/Status404';
import StatusComingSoon from '../pages/status/ComingSoon';

// Utils
import { APP_ROUTES } from './routes';
import { ProtectedRoutes } from './protectedRoutes';
import SidebarLayout from '../layouts/SidebarLayout';

const {
  MISC,
  USERS,
  SIGNIN,
  SIGNUP,
  PAYMENT,
  PROPERTY,
  OVERVIEW,
  QUESTIONNAIRE,
} = APP_ROUTES;

export const Router: RouteObject[] = [
  {
    path: '/',
    element: (
      // <ProtectedRoutes>
        <SidebarLayout />
      // </ProtectedRoutes>
    ),
    children: [
      {
        path: '',
        element: <Navigate to={OVERVIEW} replace />,
      },
      {
        path: OVERVIEW,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROPERTY,
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
        path: MISC,
        element: <Status404 />,
      },
    ],
  },
];
