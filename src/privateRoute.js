import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from './store/auth';

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  if (!auth.authToken) {
    return <Navigate to="/" />;
  }
  return children;
};
