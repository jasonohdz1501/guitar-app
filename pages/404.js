import Link from "next/link";
import React from "react";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>Page not found</h1>
      <Link href="/">Return to home</Link>
    </div>
  );
};

export default NotFound;
