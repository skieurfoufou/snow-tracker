import React from "react";
import styles from "./InputLabel.module.css";

function InputLabel({ title, handleOnChange }) {
  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{title}</label>
      <input
        className={styles.input}
        onChange={(e) => handleOnChange(e.target.value)}
      ></input>
    </div>
  );
}

export default InputLabel;
