import React from "react";
import styles from "./homepage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePageParentDiv}>
      <div className={styles.homePageContDiv}>
        <div className={styles.image}>
          <img src="../../../assets/date1.jpeg" alt="save the date" />
        </div>
        <div className={styles.image}>
          <img src="../../../assets/date3.jpeg" alt="save the date" />.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
