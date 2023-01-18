import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WELCOME TO THE SITE WHO DISPLAY</h1>
      <h1 className={styles.title}>
        THE
        <Link to="/snow-condition" className={styles.link}>
          {" "}
          SNOW LEVEL{" "}
        </Link>
        AND THE{" "}
        <Link to="/forecast" className={styles.link}>
          FORECAST
        </Link>{" "}
        OF ALL THE WORLD SKI RESORTS
      </h1>
    </div>
  );
}

export default HomePage;
