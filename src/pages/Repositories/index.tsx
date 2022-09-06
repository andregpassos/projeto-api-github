import styles from "./styles.module.scss";

function Repositories() {
  return (
    <>
      <h2 className={styles.authorRepo}>Sicrano's Repositories</h2>
      <div className={styles.reposContainer}>
        <div className={styles.divRepo}>
          <h2 className={styles.titleRepo}>Repository 1</h2>
          <p className={styles.descriptionRepo}>Description</p>
          <p className={styles.descriptionRepo}>...</p>
        </div>
        <div className={styles.divRepo}>
          <h2 className={styles.titleRepo}>Repository 1</h2>
          <p className={styles.descriptionRepo}>Description</p>
          <p className={styles.descriptionRepo}>...</p>
        </div>
        <div className={styles.divRepo}>
          <h2 className={styles.titleRepo}>Repository 1</h2>
          <p className={styles.descriptionRepo}>Description</p>
          <p className={styles.descriptionRepo}>...</p>
        </div>
        <div className={styles.divRepo}>
          <h2 className={styles.titleRepo}>Repository 1</h2>
          <p className={styles.descriptionRepo}>Description</p>
          <p className={styles.descriptionRepo}>...</p>
        </div>
      </div>
    </>
  );
}

export default Repositories;
