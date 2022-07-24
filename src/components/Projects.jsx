import websitepreview from "../images/websitepreview.png";
import styles from "../css/Projects.module.css";

const Project = () => {
  return (
    <div className={styles.projectsContainer}>
      <img
        className={styles.websitepreview}
        src={websitepreview}
        alt="samsmasterpiece website"
      />
      <div className={styles.contentInformation}>
        <h2 id="projects">Projects</h2>
        <p><a className={styles.link} href="https://samsmasterpiece.com">samsmasterpiece</a></p>
        <p>My website featuring 2D/3D design work.</p>
      </div>
    </div>
  );
};

export default Project;
