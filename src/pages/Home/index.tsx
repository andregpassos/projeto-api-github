import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";

interface IProfile {
  id: number;
  name: string;
  company: string;
  location: string;
  bio: string;
  public_repos: number;
  link_profile: string;
  link_profile_pic: string;
}

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoProfile, setInfoProfile] = useState({} as IProfile);

  async function loadProfileFromAPI() {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.github.com/users/andregpassos");

      const data = await response.json();
      console.log(data);

      const profile: IProfile = {
        id: data.id,
        name: data.name,
        company: data.company,
        location: data.location,
        bio: data.bio,
        public_repos: data.public_repos,
        link_profile: data.html_url,
        link_profile_pic: data.avatar_url,
      };

      setInfoProfile(profile);

      localStorage.setItem("profileName", data.name);
    } catch (error) {
      console.log("Erro: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadProfileFromAPI();
  }, []);

  return (
    <div className={styles.profileContainer}>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <img
            className={styles.profileImg}
            src={infoProfile.link_profile_pic}
          />
          <div className={styles.infoProfileContainer}>
            <h1 className={styles.profileName}>{infoProfile.name}</h1>
            <p>
              Company:{" "}
              {infoProfile.company === null ? (
                <i>not informed by user</i>
              ) : (
                infoProfile.company
              )}
            </p>
            <p>
              Location:{" "}
              {infoProfile.location === null ? (
                <i>not informed by user</i>
              ) : (
                infoProfile.location
              )}
            </p>
            <p>
              Bio:{" "}
              {infoProfile.bio === null ? (
                <i>not informed by user</i>
              ) : (
                infoProfile.bio
              )}
            </p>
            <p>Number of public repositories: {infoProfile.public_repos}</p>
            <p>
              Link to acess profile:{" "}
              <a href={infoProfile.link_profile} target="blank">
                {infoProfile.link_profile}
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
