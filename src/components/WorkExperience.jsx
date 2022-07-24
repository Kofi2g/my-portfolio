import styles from "../css/WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <div className={styles.workExperienceContainer}>
      <div className={styles.temp}>
        <p>Malorees Infant School</p>
        <p>IT Assistant</p>
        <p>Hardware and Networking</p>
      </div>

      <div className={styles.contentInformation}>
        <h2>Work Experience</h2>
        <p>2022</p>
      </div>
    </div>
  );
};

export default WorkExperience;
