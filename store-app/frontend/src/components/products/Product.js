import React from "react";
import { useDispatch } from "react-redux";

import { addProductToCartAction } from "../../store/cart-slice";

import classes from "./Product.module.css";

const Product = (props) => {
  const dispatch = useDispatch();

  const onAddToCartHandler = (event) => {
    event.preventDefault();

    dispatch(addProductToCartAction(props.product));
  };

  return (
    <div className={classes["product"]}>
      <div className={classes["basic-inf"]}>
        <span className={classes["name"]}>{props.product.name}</span>
        <span className={classes["price"]}>
          {`$${props.product.price.toFixed(2)}`}
        </span>
      </div>

      <p className={classes["description"]}>{props.product.description}</p>

      <form onSubmit={onAddToCartHandler} className={classes["add-to-cart"]}>
        <button className={classes["button"]} type="submit">
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default Product;
