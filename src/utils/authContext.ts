import React from "react";

export interface CurrentUser {
  username: string;
  user_id: string;
  access_token: string;
}

export interface AuthState {
  isLogged: boolean;
  currentUser: CurrentUser | undefined;
  handleLogin?: () => void;
  handleLogout?: () => void;
}

const initialState: AuthState = {
  isLogged: false,
  currentUser: undefined,
  handleLogin: () => {},
  handleLogout: () => {},
};

export const AuthContext = React.createContext(initialState);
