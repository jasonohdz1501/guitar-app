import React from "react";
import styles from "../styles/Blog.module.css";
import Entry from "./Entry";
const ListOfEntries = ({ entries }) => {
  return (
    <div className={styles.blog}>
      {entries &&
        entries.map((entry) => <Entry key={entry._id} entry={entry} />)}
    </div>
  );
};

export default ListOfEntries;
