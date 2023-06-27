import CardImageCopy from "../_components/Cards/CardImageCopy/CardImageCopy";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>More about me...</h1>
      <section className={styles.cardContainer}>
        <CardImageCopy
          title="Travel"
          image={{
            src: "/03.JPG",
            alt: "Rome Engagement"
          }}
          copy="In January 2023, my then girlfriend and I embarked on a 2.5 month trip to europe with only half the trip planned. In the first weekend I proposed and she said yes in Rome! We went on to visit Florence, Palermo, Sliemma, Munich, and Dublin."
        />
      </section>
    </div>
  );
}

export default About;