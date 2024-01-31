// PrivateRoute.js
import React, {use} from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../store/authContext';

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
