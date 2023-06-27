"use client"
import { useContext, useState } from "react";
import styles from "./CardHorizontal.module.css";
import { AppContext } from "@/app/_context/ContextWrapper";

const CardHorizontal = () => {
  const { state } = useContext(AppContext);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`${styles.card} ${styles[state.viewMode]} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.front}>
        <div className={styles.topSection}>
          <h3>Tech Stack</h3>
          <p style={{fontStyle: 'italic', fontSize: '.75rem'}}>Click me for more info</p>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listSection}>
            <p>Programming Languages</p>
            <div className={styles.list}>
              <ul >
                <li>
                  <p>Javascript</p>
                </li>
                <li>
                  <p>Python</p>
                </li>
                <li>
                  <p>Typescript</p>
                </li>
                <li>
                  <p>HTML/CSS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.listSection}>
            <p>Frameworks</p>
            <div className={styles.list}>
              <ul >
                <li>
                  <p>React</p>
                </li>
                <li>
                  <p>Flask</p>
                </li>
                <li>
                  <p>Next</p>
                </li>
                <li>
                  <p>Node.JS</p>
                </li>
                <li>
                  <p>Django</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.back}>
      <div className={styles.topSection}>
          <h3>More Tech Stack</h3>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listSection}>
            <p>Technologies</p>
            <div className={styles.list}>
              <ul >
                <li>
                  <p>Git</p>
                </li>
                <li>
                  <p>Axios</p>
                </li>
                <li>
                  <p>Redux</p>
                </li>
                <li>
                  <p>Service Workers</p>
                </li>
                <li>
                  <p>GraphQL</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.listSection}>
            <p>CI/CD Tools</p>
            <div className={styles.list}>
              <ul >
                <li>
                  <p>GCP</p>
                </li>
                <li>
                  <p>Microsoft Azure</p>
                </li>
                <li>
                  <p>AWS</p>
                </li>
                <li>
                  <p>Docker</p>
                </li>
                <li>
                  <p>Kubernetes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;