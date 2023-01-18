import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface EditableTextProps extends PropsWithChildren {
  dataTitle1: string;
  dataTitle2: string;
  dataTitle3: string;
  dataTitle4: string;
  dataTitle5: string;
  dataTitle6: string;
  dataTitle7: string;
  title: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  borderColor: string;
}

function Card({
  dataTitle1,
  dataTitle2,
  dataTitle3,
  dataTitle4,
  dataTitle5,
  dataTitle6,
  dataTitle7,
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  fontColor1,
  fontColor2,
  fontColor3,
  borderColor,
}: EditableTextProps) {
  return (
    <div className={`${styles[borderColor]} ${styles.card}`}>
      <h2> {title}</h2>
      <div className={styles.subContainer}>
        <h3>{title1}</h3>
        <div className={`${styles[fontColor1]} ${styles.sizeFont2}`}>
          {dataTitle1}
        </div>
      </div>
      <div className={styles.subContainer}>
        <h3>{title2}</h3>
        <div className={`${styles[fontColor1]} ${styles.sizeFont2}`}>
          {dataTitle2}
        </div>
        <h3>{title3} </h3>
        <div className={`${styles[fontColor2]} ${styles.sizeFont2}`}>
          {dataTitle3}
        </div>
      </div>
      <div className={styles.subContainer}>
        <h3>{title4}</h3>
        <div className={`${styles[fontColor3]} ${styles.sizeFont2}`}>
          {dataTitle4}
        </div>
        <h3>{title5}</h3>
        <div className={`${styles[fontColor3]} ${styles.sizeFont2}`}>
          {dataTitle5}
        </div>
      </div>
      <div className={styles.subContainer}>
        <h3>{title6}</h3>
        <div className={`${styles[fontColor3]} ${styles.sizeFont2}`}>
          {dataTitle6}
        </div>
        <h3>{title7}</h3>
        <div className={`${styles[fontColor3]} ${styles.sizeFont2}`}>
          {dataTitle7}
        </div>
      </div>
    </div>
  );
}

export default Card;
