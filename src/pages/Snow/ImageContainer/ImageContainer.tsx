import React from "react";
import styles from "./ImageContainer.module.css";

function ImageContainer() {
  return (
    <div className={styles.img_container}>
      <label>Seiser Alm,Italy</label>
      <img
        src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="Pietro de Grandi"
        className={styles.img1}
      />
      <img
        src="https://images.unsplash.com/photo-1453745558060-956d4c4deff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt="Robert Bye"
        className={styles.img2}
      />
      <label>Tignes,France</label>
    </div>
  );
}

export default ImageContainer;
