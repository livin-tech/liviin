import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userToken = localStorage.getItem('token');

  if (!userToken) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
