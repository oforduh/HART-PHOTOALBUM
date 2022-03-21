import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import PublicRoute from "./publicRoutes";


const getRouteType = ({ element, type }) => {
  const routeType = {
    public: <PublicRoute>{element}</PublicRoute>,
  };

  // fetch the value of the key
  return routeType[type];
};

const AppSwitch = () => {
  return (
    <Switch>
      {routes.map(({ path, element, type }, idx) => {
        return (
          <Route
            path={path}
            key={idx}
            exact
            render={() => getRouteType({ element, type })}
          />
        );
      })}

    </Switch>
  );
};

export default AppSwitch;
