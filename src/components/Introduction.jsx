import profilepicture from "../images/profilepicture.jpeg";
import styles from "../css/Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introductionFlexContainer}>
    <div className={styles.introductionContainer}>
      <img src={profilepicture} alt="Author" className={styles.img} />
      <p>
        My name is Kofi and I am a self taught developer from London! On this
        page you will find{" "}
        <a className={styles.link} href="#projects">
          <span>projects</span>
        </a>{" "}
        I've created, the{" "}
        <a className={styles.link} href="#technology">
          <span>technologies</span>
        </a>{" "}
        I use, my{" "}
        <a className={styles.link} href="#workExperience">
          <span>previous work history</span>
        </a>{" "}
        and a little bit about me.{" "}
        Scroll down and have a look.
      </p>
      </div>
    </div>
  );
};

export default Introduction;
