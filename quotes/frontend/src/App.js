import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadQuotesAction } from "./store/quotes-slice";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Quotes from "./components/Quotes";
import NewQuoteForm from "./components/NewQuoteForm";
import QuoteDetails from "./components/QuoteDetails";
import Comments from "./components/Comments";
import AddCommentForm from "./components/AddCommentForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuotesAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="quotes" element={<Quotes />} />
        <Route path="quotes/:quoteId" element={<QuoteDetails />}>
          <Route path="comments" element={<Comments />}>
            <Route path="add" element={<AddCommentForm />} />
          </Route>
        </Route>
        <Route path="new-quote" element={<NewQuoteForm />} />
      </Route>
    </Routes>
  );
}

export default App;
