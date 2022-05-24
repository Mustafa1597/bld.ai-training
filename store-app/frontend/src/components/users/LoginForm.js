import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { perfromLoginAction } from "../../store/authentication-slice";

import useInput from "./hooks/use-input";

import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const {
    enteredValue: enteredUsername,
    isValidValue: isValidUsername,
    isBlurred: isUsernameBlurred,
    setEnteredValue: setEnteredUsername,
    setIsBlurred: setIsUsernameBlurred,
  } = useInput((username) => username.length >= 1);

  const {
    enteredValue: enteredPassword,
    isValidValue: isValidPassword,
    isBlurred: isPasswordBlurred,
    setEnteredValue: setEnteredPassword,
    setIsBlurred: setIsPasswordBlurred,
  } = useInput((password) => password.length >= 5);

  const isValidForm = isValidUsername && isValidPassword;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const username = enteredUsername;
    const password = enteredPassword;

    if (!isValidForm) {
      return;
    }
    dispatch(perfromLoginAction(username, password));
  };

  return (
    <form className={classes["form"]} onSubmit={onSubmitHandler}>
      <h1 className={classes["title"]}>Login</h1>
      <div className={classes["form-controls"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            onBlur={() => setIsUsernameBlurred(true)}
            onChange={(event) => setEnteredUsername(event.target.value)}
            value={enteredUsername}
            id="username"
            type="text"
          />
          {isUsernameBlurred && !isValidUsername && (
            <p className={classes["error"]}>Invalid Username</p>
          )}
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            onBlur={() => setIsPasswordBlurred(true)}
            onChange={(event) => setEnteredPassword(event.target.value)}
            value={enteredPassword}
            id="password"
            type="password"
          />
          {isPasswordBlurred && !isValidPassword && (
            <p className={classes["error"]}>Invalid Password</p>
          )}
        </div>
      </div>

      <div className={classes["form-actions"]}>
        <button
          type="submit"
          className={classes["button"]}
          disabled={!isValidForm}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
