import styles from "./Hero.module.css";
import AnimatedNumber from "react-animated-numbers";

const Hero = () => {
  return (
    <div className={styles.heroMainWrapper}>
      <div className={styles.heroOverlay}>
        <div></div>
        <div className={styles.heroTitleDiv}>
          <h1>RentMNE</h1>
          <h2>Make your journey unforgettable </h2>
          <a href="#cars">
            <button>Pick a car</button>
          </a>
        </div>
        <div className={styles.heroNumbers}>
          <div className={styles.heroOneNumberWrapper}>
            <span className={styles.heroNumberValue}>
              <AnimatedNumber
                includeComma
                animateToNumber={10}
                fontStyle={{ fontSize: "4rem" }}
                locale="en-US"
                configs={[{ mass: 5, tension: 125, friction: 55 }]}
              />
            </span>
            <br />
            <span className={styles.heroNumberText}>Cars</span>
          </div>
          <div className={styles.heroOneNumberWrapper}>
            <span className={styles.heroNumberValue}>
              <AnimatedNumber
                animateToNumber={600}
                fontStyle={{ fontSize: "4rem" }}
                locale="en-US"
                configs={[{ mass: 5, tension: 125, friction: 55 }]}
              />
            </span>
            <br />
            <span className={styles.heroNumberText}>Satisfied clients</span>
          </div>
          <div className={styles.heroOneNumberWrapper}>
            <span className={styles.heroNumberValue}>
              <AnimatedNumber
                animateToNumber={10}
                fontStyle={{ fontSize: "4rem" }}
                locale="en-US"
                configs={[{ mass: 5, tension: 125, friction: 55 }]}
              />
            </span>
            <br />
            <span className={styles.heroNumberText}>Years of experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
