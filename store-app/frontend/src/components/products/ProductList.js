import React, { Fragment } from "react";

import Product from "./Product";

import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <Fragment>
      <h2 className={classes["title"]}>BUY YOUR FAVORIT PRODUCTS</h2>
      <div className={classes["products"]}>
        {props.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
