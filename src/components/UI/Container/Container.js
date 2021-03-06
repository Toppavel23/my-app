import React from "react";
import styles from "./Container.module.scss";

const container = (props) => (
  <div className={styles.Container}>{props.children}</div>
);

export default container;
