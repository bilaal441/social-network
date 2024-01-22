// PrivateRoute.js
import React, {useContext} from "react";
import {Route, Navigate} from "react-router-dom";
import AuthContext from "../store/authContext";

const PrivateRoute = () => {
  const {user} = useContext(AuthContext);

  return  user.isLogIn ? 
    
  
};

export default PrivateRoute;
