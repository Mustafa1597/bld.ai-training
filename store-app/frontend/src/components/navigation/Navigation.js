import React, { Fragment } from "react";

import { performLogoutAction } from "../../store/authentication-slice";

import CartButton from "./CartButton";

import { useSelector, useDispatch } from "react-redux";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const onLogoutHandler = () => {
    dispatch(performLogoutAction());
  };

  const authenticated = (
    <Fragment>
      <CartButton />
      <button onClick={onLogoutHandler} className={classes["button"]}>
        Logout
      </button>
    </Fragment>
  );

  const notAuthenticated = (
    <Fragment>
      <button onClick={props.onSignUpClick} className={classes["button"]}>
        SignUp
      </button>
      <button onClick={props.onLoginClick} className={classes["button"]}>
        Login
      </button>
    </Fragment>
  );

  return (
    <nav className={classes["nav-bar"]}>
      <button onClick={props.onHomeClick} className={classes["title"]}>
        Redux Cart
      </button>
      <div className={classes["right"]}>
        {isAuthenticated ? authenticated : notAuthenticated}
      </div>
    </nav>
  );
};

export default Navigation;
