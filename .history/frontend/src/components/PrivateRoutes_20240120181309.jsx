// PrivateRoute.js
import React, {useContext} from "react";
import {Outlet, Navigate} from "react-router-dom";
import AuthContext from "../store/authContext";

import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  // Add your authentication logic here
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
