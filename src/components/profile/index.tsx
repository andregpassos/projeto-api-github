import styles from "./styles.module.scss";
import profileImg from "../../assets/images/profile_picture.jpg";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profileImg} src={profileImg} />
      <div className={styles.infoProfileContainer}>
        <h1 className={styles.profileName}>Eu Mesmo</h1>
        <p>Company Name</p>
        <p>Location</p>
        <p>Bio</p>
        <p>Number of public repositories</p>
        <p>Link to acess profile</p>
      </div>
    </div>
  );
}

export default Profile;
