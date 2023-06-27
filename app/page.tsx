import styles from  "./page.module.css";
import data from "./_data.json";
import CardImageCopy from "./_components/Cards/CardImageCopy/CardImageCopy";
import CardHorizontal from "./_components/Cards/CardHorizontal/CardHorizontal";
import Typewriter from "./_components/Typewriter/Typewriter";
// import FindOutMoreButton from "./_components/FindOutMoreButton/FindOutMoreButton";
import GoToResumeButton from "./_components/FindOutMoreButton/GoToResumeButton";

const Home = () => {
  const { main } = data;

  return (
    <div
      id="container"
      className={styles.container}
    >
      <h1>{"Hi, I'm Garrett."}</h1>
      <Typewriter copy={main.summary}/>
      <div className={styles.cardContainer}>
        <CardImageCopy {...main.wup} />
        <CardImageCopy {...main.pin} />
        <CardHorizontal />
      </div>
      <div className={styles.buttonContainer}>
        <GoToResumeButton />
      </div>
    </div>
  );
}

export default Home;