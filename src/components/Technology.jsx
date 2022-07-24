import html5 from "../images/html5logo.svg";
import css from "../images/csslogo.svg";
import javascript from "../images/javascriptlogo.svg";
import react from "../images/reactlogo.svg";
import styles from "../css/Technology.module.css";

const Technology = () => {
  return (
    <div className={styles.technologyContainer}>
        <img src={react} alt="react logo" width={130} />
        <img src={javascript} alt="javascript logo" width={140} />
        <img src={css} alt="css logo" width={160} />
        <img src={html5} alt="html5 logo" width={130} />
    <div className={styles.contentInformation}>
    <h2>Technology</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>React</p>
      </div>
    </div>
  );
};

export default Technology;
