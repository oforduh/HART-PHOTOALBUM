import React from "react";
import Header from "../../components/Headers/Header";
import PhotoAlbum from "../../components/photoalbum/PhotoAlbum";
import { UserObject } from "../../context/User";
import styles from "./oluwatosin.module.scss";

const Oluwatosin = ({ navOpen }) => {
  const { clickDBodyToCloseNav } = UserObject();
  console.log(clickDBodyToCloseNav);
  return (
    <div className={styles.oluwatosinParentDiv}>
      <div className={styles.oluwatosinContDiv}>
        <Header />
        <div className={styles.photoContainerDiv}>
          <PhotoAlbum />
        </div>
      </div>
    </div>
  );
};

export default Oluwatosin;
