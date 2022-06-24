import React from "react";
import Product from "./Product";
import styles from "../styles/List.module.css";
const List = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default List;
