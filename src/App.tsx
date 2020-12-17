import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils";
import { AuthContext, CurrentUser } from "./utils/authContext";
import { Router } from "./Router";
import { validateAuthToken } from "./utils/api";

function App() {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<CurrentUser | undefined>(
    undefined
  );

  React.useEffect(() => {
    const access_token = document.location.hash.match(
      /#access_token=([a-zA-Z0-9]*)/g
    );

    if (access_token?.length) {
      const token = access_token![0].substring(14);

      const authFlow = async (access_token: string) => {
        const response = await validateAuthToken(token);

        const { login: username, user_id } = response;

        if (response) {
          setCurrentUser({
            user_id,
            username,
            access_token: token,
          });
          localStorage.setItem("access_token", token);
          return login();
        }
      };

      authFlow(token);
    }
  }, []);

  const login = () => {
    setIsLogged(true);
    localStorage.setItem("is_logged", "true");
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("is_logged");
    localStorage.removeItem("access_token");
    document.location.hash = "";
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLogged: isLogged,
        handleLogin: login,
        handleLogout: logout,
      }}
    >
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </AuthContext.Provider>
  );
}

export default App;
