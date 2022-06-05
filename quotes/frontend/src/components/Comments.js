import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams, Link, Outlet, useLocation } from "react-router-dom";

import Comment from "./Comment";

import classes from "./QuoteDetails.module.css";

const Comments = () => {
  const params = useParams();
  const location = useLocation();

  const [comments, setComments] = useState([]);

  const hide =
    location.pathname.endsWith("add") || location.pathname.endsWith("add/");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/quotes/${params.quoteId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, [params.quoteId]);

  return (
    <div style={{ textAlign: "center" }}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          comment={comment.comment}
          quote={comment.quote}
        />
      ))}

      {!hide ? (
        <Link
          className={classes["link"]}
          to={`/quotes/${params.quoteId}/comments/add`}
        >
          Add Comment
        </Link>
      ) : (
        ""
      )}

      <Outlet />
    </div>
  );
};

export default Comments;
