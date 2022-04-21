import React from 'react';
import { Route, Routes, useLocation, Navigate, Outlet } from 'react-router-dom';

//import { AuthProvider } from './components/auth';
//import { useAuth } from './auth';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { auth } = useAuth();
  return auth?.username ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

/* const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children; 
 
};

export default ProtectedRoute; 
 */
