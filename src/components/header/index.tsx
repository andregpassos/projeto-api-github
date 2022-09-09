import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.nameProfile}>
        {localStorage.getItem("profileName")}
      </h1>
      <div className={styles.linksHeader}>
        <a className={styles.linkHdr} href="/">
          Home
        </a>
        <a className={styles.linkHdr} href="/repos">
          Repositories
        </a>
      </div>
    </header>
  );
}

export default Header;
