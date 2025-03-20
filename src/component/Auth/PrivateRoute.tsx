import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authContext.token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
