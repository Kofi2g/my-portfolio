import profilepicture from "../images/profilepicture.jpg";
import styles from "../css/Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introductionContainer}>
      <img src={profilepicture} alt="Author" className={styles.img} />
      <p>
        My name is Kofi and I am a self taught
        developer from London! On this page you will find <span className={styles.span}>projects</span> I've created, the <span className={styles.span}>technologies</span> I use, my <span className={styles.span}>previous work history</span> and a
        little bit about me. <span className={styles.span}>Scroll down</span> and have a look.
      </p>
    </div>
  )
};

export default Introduction;
