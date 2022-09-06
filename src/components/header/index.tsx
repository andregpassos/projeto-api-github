import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.nameProfile}>Your Name</h1>
      <div className={styles.linksHeader}>
        <a className={styles.linkHdr} target="blank" href="/">
          Home
        </a>
        <a className={styles.linkHdr} href="/">
          Repositories
        </a>
      </div>
    </header>
  );
}

export default Header;
