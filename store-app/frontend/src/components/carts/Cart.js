import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Fragment>
      <h2 className={classes["title"]}>YOUR CART</h2>
      <div className={classes["cart"]}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Cart;
