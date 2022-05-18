import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { authenticationActions } from "../store/index";

import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch = useDispatch();

  const onLoginHandler = (event) => {
    event.preventDefault();

    dispatch(authenticationActions.login());
  };

  return (
    <form onSubmit={onLoginHandler} className={classes["form"]}>
      <div className={classes["form-controls"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="email" />
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="password">PASSWORD</label>
          <input id="password" type="password" />
        </div>
      </div>

      <div className={classes["form-actions"]}>
        <button className={classes["button"]} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
