import React from "react";
import { useDispatch } from "react-redux";
import { updateItemAction, removeItemAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch(updateItemAction(props.item));
  };

  const onDecrementHandler = () => {
    dispatch(removeItemAction(props.item));
  };

  return (
    <div className={classes["item"]}>
      <div className={classes["part1"]}>
        <span className={classes["product-name"]}>
          {props.item.product.name}
        </span>
        <span className={classes["price"]}>{`$${props.item.total_price.toFixed(
          2
        )}`}</span>
      </div>
      <div className={classes["part2"]}>
        <span
          className={classes["item-quantity"]}
        >{`x${props.item.quantity}`}</span>
        <div className={classes["actions"]}>
          <button onClick={onDecrementHandler} className={classes["button"]}>
            -
          </button>
          <button onClick={onIncrementHandler} className={classes["button"]}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
