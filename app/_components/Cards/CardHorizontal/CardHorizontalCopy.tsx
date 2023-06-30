"use client"
import { useContext, useState } from "react";
import styles from "./CardHorizontal.module.css";
import { AppContext } from "@/app/_context/ContextWrapper";

interface ICardHorizontalCopy {
  title: string;
  copy: string
}

const CardHorizontalCopy = ({
  title,
  copy
}: ICardHorizontalCopy) => {
  const { state } = useContext(AppContext);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`${styles.card} ${styles[state.viewMode]} ${styles.horizontalCopyCard}`}
      onClick={handleFlip}
    >
      <div className={styles.topSection}>
        <h3>{title}</h3>
      </div>
      <div className={styles.mainContainer}>
        <p>{copy}</p>
      </div>
    </div>
  );
};

export default CardHorizontalCopy;