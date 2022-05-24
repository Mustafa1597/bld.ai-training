import { createSlice } from "@reduxjs/toolkit";

import { CartActions, loadCartItemsAction } from "./cart-slice";

import axios from "axios";

const initialAuthenticationState = {
  isAuthenticated: false,
};

const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const AuthenticationActions = AuthenticationSlice.actions;

export const perfromLoginAction = (username, password) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/users/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch(AuthenticationActions.login());
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `token ${response.data.token}`;

        dispatch(loadCartItemsAction());
      });
  };
};

export const performSignUpAction = (
  username,
  email,
  password,
  confirm_password,
  shipping_address
) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/users/signup", {
        username,
        email,
        password,
        confirm_password,
        shipping_address,
      })
      .then((response) => dispatch(perfromLoginAction(username, password)));
  };
};

export const performLogoutAction = () => {
  return (dispatch) => {
    axios.post("http://127.0.0.1:8000/api/users/logout");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");

    dispatch(CartActions.setShowCart(false));
    dispatch(AuthenticationActions.logout());
  };
};

export default AuthenticationSlice;
