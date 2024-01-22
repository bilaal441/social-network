// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import A

const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? (
        <Component />
      ) : (
        <Navigate to={redirectTo} replace state={{ from: rest.location }} />
      )}
    />
  );
};

export default PrivateRoute;
