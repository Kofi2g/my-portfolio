import styles from "../css/WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <div className={styles.workExperienceContainer}>
      <div className={styles.workExperienceContent}>
        <p>
          <strong>Malorees Infant School</strong>
        </p>
        <ul className={styles.jobInformation}>
          <li>IT Assistant</li>
          <li>Hardware and Networking</li>
        </ul>
      </div>

      <div className={styles.contentInformation}>
        <h2 id="workExperience">Work Experience</h2>
        <p>2022</p>
      </div>
    </div>
  );
};

export default WorkExperience;
