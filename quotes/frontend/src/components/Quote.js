import React from "react";

import { Link } from "react-router-dom";

import classes from "./Quote.module.css";

const Quote = (props) => {
  return (
    <div className={classes["quote"]}>
      <div className={classes["info"]}>
        <p className={classes["content"]}>{props.content}</p>
        <span className={classes["author"]}>{props.author}</span>
      </div>
      <Link className={classes["detail-button"]} to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </div>
  );
};

export default Quote;
