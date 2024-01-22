// PrivateRoutes.js
import React from "react";
import {Route, Navigate} from "react-router-dom";
import  A;

const PrivateRoutes = ({component: Component, ...rest}) => {
  const {user} = useAuth();

  return (
    <Route
      {...rest}
      element={
        user.isLogIn ? <Component {...rest} /> : <Navigate to="/" replace />
      }
    />
  );
};

export default PrivateRoutes;
