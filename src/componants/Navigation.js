import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { authenticationActions } from "../store/index";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authenticationActions.logout());
  };

  const rightElements = (
    <div className={classes["right"]}>
      <a className={classes["link"]} href="#">
        My Products
      </a>
      <a className={classes["link"]} href="#">
        My Sales
      </a>
      <button onClick={onLogoutHandler} className={classes["button"]}>
        Logout
      </button>
    </div>
  );

  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes["left"]}>Redux Auth</div>
      {isLoggedIn ? rightElements : ""}
    </nav>
  );
};

export default Navigation;
