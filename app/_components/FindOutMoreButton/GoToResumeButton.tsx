"use client";
import styles from "./FindOutMoreButton.module.css";

const GoToResumeButton = () => {

  const handleClick = () => {
    window.open(
      '/GarrettPalmeri-Resume.pdf',
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  return (
    <button className={styles.findButton} onClick={handleClick}>
      <p>Check out my resume here</p><p>📜</p>
    </button>
  )
}

export default GoToResumeButton;