import React from 'react';
import { Navigate } from 'react-router-dom';
import { APP_ROUTES } from './routes';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const LOCAL_STORAGE_TOKEN_KEY = 'token';

export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  children,
}) => {
  const userToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  if (!userToken) {
    return <Navigate to={APP_ROUTES.SIGNIN} replace />;
  }

  return children;
};
