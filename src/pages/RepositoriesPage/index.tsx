import { useEffect, useState } from "react";
import Repository, { RepositoryProps } from "../../components/repository";
import styles from "./styles.module.scss";

function RepositoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [repoProps, setRepoProps] = useState([] as RepositoryProps[]);

  async function loadRepoPropsFromAPI() {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.github.com/users/andregpassos/repos"
      );

      const data = await response.json();

      console.log(data);
      setRepoProps(data);
    } catch (error) {
      console.log("Erro: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRepoPropsFromAPI();
  }, []);

  return (
    <div className={styles.reposContainer}>
      <h2 className={styles.authorRepo}>
        Repositories - {localStorage.getItem("profileName")}
      </h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        repoProps.map((repo) => (
          <Repository
            name={repo.name}
            description={
              repo.description === null
                ? "- no description -"
                : repo.description
            }
            html_url={repo.html_url}
          />
        ))
      )}
    </div>
  );
}

export default RepositoriesPage;
