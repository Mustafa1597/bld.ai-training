import React from "react";

import { useDispatch } from "react-redux";
import { performSignUpAction } from "../../store/authentication-slice";

import useInput from "./hooks/use-input";

import classes from "./LoginForm.module.css";

const SignUpForm = (props) => {
  const dispatch = useDispatch();

  const {
    enteredValue: enteredUsername,
    isValidValue: isValidUsername,
    isBlurred: isUsernameBlurred,
    setEnteredValue: setEnteredUsername,
    setIsBlurred: setIsUsernameBlurred,
  } = useInput((username) => username.length >= 1);

  const {
    enteredValue: enteredEmail,
    isValidValue: isValidEmail,
    isBlurred: isEmailBlurred,
    setEnteredValue: setEnteredEmail,
    setIsBlurred: setIsEmailBlurred,
  } = useInput((email) => email.includes("@"));

  const {
    enteredValue: enteredPassword,
    isValidValue: isValidPassword,
    isBlurred: isPasswordBlurred,
    setEnteredValue: setEnteredPassword,
    setIsBlurred: setIsPasswordBlurred,
  } = useInput((password) => password.length >= 5);

  const {
    enteredValue: enteredConfirmPassword,
    isValidValue: isValidConfirmPassword,
    isBlurred: isConfirmPasswordBlurred,
    setEnteredValue: setEnteredConfirmPassword,
    setIsBlurred: setIsConfirmPasswordBlurred,
  } = useInput((confirmPassword) => confirmPassword === enteredPassword);

  const {
    enteredValue: enteredShippingAddress,
    isValidValue: isValidShippingAddress,
    isBlurred: isShippingAddressBlurred,
    setEnteredValue: setEnteredShippingAddress,
    setIsBlurred: setIsShippingAddressBlurred,
  } = useInput((shippingAddress) => shippingAddress.length >= 1);

  const isValidForm =
    isValidUsername &&
    isValidEmail &&
    isValidPassword &&
    isValidConfirmPassword &&
    isValidShippingAddress;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      performSignUpAction(
        enteredUsername,
        enteredEmail,
        enteredPassword,
        enteredConfirmPassword,
        enteredShippingAddress
      )
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes["form"]}>
      <h1 className={classes["title"]}>SignUp</h1>
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
          <label htmlFor="email">Email</label>
          <input
            onBlur={() => setIsEmailBlurred(true)}
            onChange={(event) => setEnteredEmail(event.target.value)}
            value={enteredEmail}
            id="email"
            type="email"
          />
          {isEmailBlurred && !isValidEmail && (
            <p className={classes["error"]}>Invalid Email</p>
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

        <div className={classes["form-control"]}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onBlur={() => setIsConfirmPasswordBlurred(true)}
            onChange={(event) => setEnteredConfirmPassword(event.target.value)}
            value={enteredConfirmPassword}
            id="confirm-password"
            type="password"
          />
          {isConfirmPasswordBlurred && !isValidConfirmPassword && (
            <p className={classes["error"]}>Not equal to the password</p>
          )}
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="shipping-address">Shipping Address</label>
          <input
            onBlur={() => setIsShippingAddressBlurred(true)}
            onChange={(event) => setEnteredShippingAddress(event.target.value)}
            value={enteredShippingAddress}
            id="shipping-address"
            type="text"
          />
          {isShippingAddressBlurred && !isValidShippingAddress && (
            <p className={classes["error"]}>Invalid Address</p>
          )}
        </div>
      </div>

      <div className={classes["form-actions"]}>
        <button
          className={classes["button"]}
          type="submit"
          disabled={!isValidForm}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
