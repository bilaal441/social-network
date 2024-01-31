// PrivateRoutes.js
import React, {useContext} from "react";
import {Route, Navigate} from "react-router-dom";
import AuthContext from "../store/authContext";

const PrivateRoutes = ({component: Component, ...rest}) => {
  const {user} = useContext(AuthContext);

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
