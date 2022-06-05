import React, { Fragment, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addQuoteAction } from "../store/quotes-slice";

import classes from "./NewQuoteForm.module.css";

const NewQuoteForm = (props) => {
  const authorRef = useRef();
  const contentRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      addQuoteAction({
        author: authorRef.current.value,
        content: contentRef.current.value,
      })
    );
    navigate("/quotes");
  };

  return (
    <Fragment>
      <h2 className={classes["title"]}>New Quote</h2>
      <form
        onSubmit={onSubmitHandler}
        id="new-quote-form"
        className={classes["new-quote-form"]}
      >
        <div className={classes["form-control"]}>
          <label htmlFor="author">Author</label>
          <input id="author" type="text" ref={authorRef} />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            form="new-quote-form"
            rows="10"
            cols="50"
            ref={contentRef}
          />
        </div>
        <button className={classes["button"]}>Submit</button>
      </form>
    </Fragment>
  );
};

export default NewQuoteForm;
