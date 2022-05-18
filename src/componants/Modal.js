import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes["backdrop"]} />;
};

const ModalContent = (props) => {
  return <div className={classes["modal"]}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("modal"))}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
