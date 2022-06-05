import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
  name: "quotes",
  initialState: { quotes: [] },
  reducers: {
    setQuotes: (state, action) => {
      state.quotes = action.payload;
    },
    addQuote: (state, action) => {
      state.quotes.push(action.payload);
    },
    removeQuote: (state, action) => {
      state.quotes = state.quotes.filter(
        (quote) => quote.id !== action.payload
      );
    },
    sortAscending: (state, action) => {
      state.quotes.sort((quote1, quote2) => {
        if (quote1.content < quote2.content) {
          return 1;
        } else if (quote1.content > quote2.content) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    sortDescending: (state, action) => {
      state.quotes.sort((quote1, quote2) => {
        if (quote1.content < quote2.content) {
          return -1;
        } else if (quote1.content > quote2.content) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
});

export const quotesActions = quotesSlice.actions;

export const loadQuotesAction = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/quotes/")
      .then((response) => dispatch(quotesActions.setQuotes(response.data)))
      .catch((error) => console.log(error));
  };
};

export const addQuoteAction = (quote) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/quotes/", { ...quote })
      .then((response) => {
        dispatch(quotesActions.addQuote(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export default quotesSlice;
