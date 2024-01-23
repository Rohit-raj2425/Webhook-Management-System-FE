import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './store/auth';

const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth.authToken ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

