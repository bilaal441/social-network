// PrivateRoute.js
import React, {useContext} from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../store/authContext';

const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => {
  const { isAuthenticated } = element: <PrivateRoute component={<h1>hello bilal</h1>} redirectTo="/login" />

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
