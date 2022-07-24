import websitepreview from "../images/websitepreview.png";
import styles from "../css/Projects.module.css";

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <img
        className={styles.websitepreview}
        src={websitepreview}
        alt="samsmasterpiece website"
      />
      <div className={styles.contentInformation}>
        <h2>Projects</h2>
        <p>samsmasterpiece</p>
      </div>
    </div>
  );
};

export default Project;
