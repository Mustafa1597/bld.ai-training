import React from "react";

import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <div className={classes["comment"]}>
      <p>{props.comment}</p>
    </div>
  );
};

export default Comment;
