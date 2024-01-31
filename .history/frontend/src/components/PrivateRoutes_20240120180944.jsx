// PrivateRoute.js
import React, {useContext} from "react";
import {Outlet, Navigate} from "react-router-dom";
import AuthContext from "../store/authContext";

const PrivateRoutes = () => {
  const {user} = useContext(AuthContext);
  return user.isLogIn ? <Outlet /> : <Navigate to={"/"} exact />;
};

export default PrivateRoutes;
