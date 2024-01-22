// PrivateRoute.js
import React, {useContext} from "react";
import {Outlet, Navigate} from "react-router-dom";
import AuthContext from "../store/authContext";

const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
  // Add your authentication logic here
  const [ = useContext(AuthContext)
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default PrivateRoute;
