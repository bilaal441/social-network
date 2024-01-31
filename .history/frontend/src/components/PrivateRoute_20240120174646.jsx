// PrivateRoute.js
import React, {useContext} from "react";
import {Route, Navigate} from "react-router-dom";
import AuthContext from "../store/authContext";

const PrivateRoute = ({component: Component, redirectTo, ...rest}) => {
  const {user} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={
        user.isLogIn ? (
          <Component />
        ) : (
          <Navigate to={redirectTo} replace state={{from: rest.location}} />
        )
      }
    />
  );
};

export default PrivateRoute;
