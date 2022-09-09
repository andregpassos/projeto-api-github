import styles from "./styles.module.scss";

export interface RepositoryProps {
  name: string;
  description: string;
  html_url: string;
}

function Repository({ name, description, html_url }: RepositoryProps) {
  return (
    <div className={styles.divRepo}>
      <h2 className={styles.titleRepo}>
        <a href={html_url} target="blank">
          {name}
        </a>
      </h2>
      <p className={styles.descriptionRepo}>
        <b>Description</b>
      </p>
      <p className={styles.descriptionRepo}>{description}</p>
    </div>
  );
}

export default Repository;
