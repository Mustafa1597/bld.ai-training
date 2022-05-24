import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cart-slice";
import AuthenticationSlice from "./authentication-slice";

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    authentication: AuthenticationSlice.reducer,
  },
});

export default store;
