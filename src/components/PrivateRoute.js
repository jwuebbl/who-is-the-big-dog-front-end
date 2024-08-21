import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
