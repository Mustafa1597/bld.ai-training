import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authenticationActions } from "./store/index";

import Counter from "./componants/Counter";
import Navigation from "./componants/Navigation";
import LoginForm from "./componants/LoginForm";
import Profile from "./componants/Profile";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <Fragment>
      <Navigation />
      {!isLoggedIn ? <LoginForm /> : <Profile />}
      <Counter />
    </Fragment>
  );
}

export default App;
