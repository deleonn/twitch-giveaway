import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage } from "../Pages";
import { AuthContext } from "../utils/authContext";

const PrivateRoutes = (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
);

const PublicRoutes = (
  <Switch>
    <Route path="/" component={LoginPage} />
  </Switch>
);

function Router(): React.ReactElement {
  const { isLogged } = useContext(AuthContext);
  return (
    <BrowserRouter>{isLogged ? PrivateRoutes : PublicRoutes}</BrowserRouter>
  );
}

export default Router;
