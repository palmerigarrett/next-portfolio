"use client";
import { useRouter } from "next/navigation";
import styles from "./FindOutMoreButton.module.css";

const FindOutMoreButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <button className={styles.findButton} onClick={handleClick}>
      <p>Find out more about me</p><p>🙎🏼‍♂️</p>
    </button>
  )
}

export default FindOutMoreButton;