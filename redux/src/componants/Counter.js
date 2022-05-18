import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";

// import { increment, decrement, increase } from "../store/index";

import classes from "./Counter.module.css";

const Counter = (props) => {
  const [hide, setHide] = useState(false);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const onIncremenetHandler = () => {
    dispatch(counterActions.increment());
  };

  const onDecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const onIncreaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const onToggleHandler = () => {
    setHide((prevHide) => {
      return !prevHide;
    });
  };

  return (
    <div className={classes["counter-container"]}>
      <div className={classes["title"]}>REDUX COUNTER</div>
      {!hide ? <div className={classes["counter"]}>{counter}</div> : ""}
      <div className={classes["actions"]}>
        <div>
          <button onClick={onDecrementHandler} className={classes["button"]}>
            -
          </button>
          <button onClick={onIncreaseHandler} className={classes["button"]}>
            increase by 10
          </button>
          <button onClick={onIncremenetHandler} className={classes["button"]}>
            +
          </button>
        </div>
        <button onClick={onToggleHandler} className={classes["button"]}>
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Counter;
