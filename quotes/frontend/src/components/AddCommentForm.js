import React, { useRef } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import classes from "./AddCommentForm.module.css";

const AddCommentForm = () => {
  const commentRef = useRef();

  const params = useParams();

  const onAddCommentHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/api/quotes/${params.quoteId}/comments`, {
        comment: commentRef.current.value,
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={onAddCommentHandler}
      id="add-comment-form"
      className={classes["add-comment-form"]}
    >
      <h3>Write a Comment</h3>
      <label htmlFor="comment-text">Comment</label>
      <textarea
        ref={commentRef}
        id="comment-text"
        form="add-comment-form"
        rows="5"
        cols="20"
      />
      <button type="sumbit">Add Comment</button>
    </form>
  );
};

export default AddCommentForm;
