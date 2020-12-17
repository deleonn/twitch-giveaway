import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage } from "../Pages";
import { AuthContext } from "../utils/authContext";
import { Loader } from "../UI";

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
  const { isLogged, isLoading } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Box>
        {isLoading ? <Loader /> : isLogged ? PrivateRoutes : PublicRoutes}
      </Box>
    </BrowserRouter>
  );
}

export default Router;
