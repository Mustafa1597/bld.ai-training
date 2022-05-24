import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numCartItems = useSelector((state) => state.cart.numItems);

  const onClickHandler = () => {
    dispatch(CartActions.triggerShowCart());
  };

  return (
    <button onClick={onClickHandler} className={classes["cart-button"]}>
      <span>My Cart</span>
      <span className={classes["badg"]}>{numCartItems}</span>
    </button>
  );
};

export default CartButton;
