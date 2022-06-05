import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import classes from "./QuoteDetails.module.css";

const QuoteDetails = (props) => {
  const [quote, setQuote] = useState({ comments: [] });
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/quotes/${params.quoteId}`)
      .then((response) => setQuote(response.data))
      .catch((error) => console.log(error));
  }, [params.quoteId]);

  const hide =
    location.pathname.endsWith("comments") ||
    location.pathname.endsWith("comments/") ||
    location.pathname.endsWith("add") ||
    location.pathname.endsWith("add/");
  return (
    <div className={classes["quote"]}>
      <div className={classes["quote-details"]}>
        <p>{quote.content}</p>
        <span>{quote.author}</span>
      </div>

      {!hide ? (
        <Link
          className={classes["link"]}
          to={`/quotes/${params.quoteId}/comments`}
        >
          Load Comments
        </Link>
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
};

export default QuoteDetails;
