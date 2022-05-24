import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Navigation from "./components/navigation/Navigation";
import ProductList from "./components/products/ProductList";
import LoginFrom from "./components/users/LoginForm";
import SignUpForm from "./components/users/SignUpForm";
import Cart from "./components/carts/Cart";

import "./App.css";
import { AuthenticationActions } from "./store/authentication-slice";
import { loadCartItemsAction } from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();

  const [prodcuts, setProducts] = useState([]);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const [view, setview] = useState(1);
  const showCart = useSelector((state) => state.cart.showCart);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data);
    });

    if (localStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `token ${localStorage.getItem("token")}`;
      dispatch(AuthenticationActions.login());
      dispatch(loadCartItemsAction());
    }
  }, []);

  const onHomeClickHandler = () => {
    setview(1);
  };

  const onSignUpClickHandler = () => {
    setview(2);
  };

  const onLoginClickHandler = () => {
    setview(3);
  };

  return (
    <Fragment>
      <Navigation
        onHomeClick={onHomeClickHandler}
        onSignUpClick={onSignUpClickHandler}
        onLoginClick={onLoginClickHandler}
      />
      {showCart && <Cart />}
      {(view === 1 || isAuthenticated) && <ProductList products={prodcuts} />}
      {view === 2 && !isAuthenticated && <SignUpForm />}
      {view === 3 && !isAuthenticated && <LoginFrom />}
    </Fragment>
  );
}

export default App;
