import React from "react";

import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes["nav-bar"]}>
      <h1 className={classes["title"]}>Great Quotes</h1>
      <div className={classes["actions"]}>
        <Link className={classes["link"]} to="/quotes">
          All Quotes
        </Link>
        <Link className={classes["link"]} to="/new-quote">
          Add a Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
