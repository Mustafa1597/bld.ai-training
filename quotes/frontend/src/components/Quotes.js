import React from "react";

import { useSearchParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { quotesActions } from "../store/quotes-slice";

import Quote from "./Quote";

import classes from "./Quotes.module.css";

const Quotes = (props) => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);

  const [searchParams, setSearchParams] = useSearchParams();

  let ascOrDesc = "Ascending";
  if (searchParams.has("sort") && searchParams.get("sort") === "asc") {
    ascOrDesc = "Descending";
  }

  const onSortHandler = () => {
    if (ascOrDesc === "Ascending") {
      setSearchParams({ sort: "asc" });
      dispatch(quotesActions.sortAscending());
    } else {
      setSearchParams({ sort: "desc" });
      dispatch(quotesActions.sortDescending());
    }
  };

  return (
    <main className={classes["quotes"]}>
      <button onClick={onSortHandler} className={classes["sort-button"]}>
        Sort {ascOrDesc}
      </button>
      <hr />
      {quotes.map((quote) => (
        <Quote
          key={quote.id}
          id={quote.id}
          content={quote.content}
          author={quote.author}
        />
      ))}
    </main>
  );
};

export default Quotes;
