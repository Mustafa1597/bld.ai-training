import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (currentState) => {
      currentState.counter += 1;
    },
    decrement: (currentState) => {
      currentState.counter -= 1;
    },
    increase: (currentState, action) => {
      currentState.counter += action.payload;
    },
  },
});

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;
// export const { increment, decrement, increase } = counterSlice.actions;
export default store;
