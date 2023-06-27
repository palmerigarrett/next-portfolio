import styles from "./ComingSoonPage.module.css";
import GoToResumeButton from "../FindOutMoreButton/GoToResumeButton";

const ComingSoonPage = () => {
  return (
    <div className={styles.container}>
      <h1 style={{textAlign: "center", marginBottom: "2rem"}}>
        This is currently being worked on. For more information about my professional experience, please checkout my resume page.
      </h1>
      <GoToResumeButton/>
    </div>
  );
};

export default ComingSoonPage;