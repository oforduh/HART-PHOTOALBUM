import React from "react";
import Header from "../../components/Headers/Header";
import PhotoAlbum from "../../components/photoalbum/PhotoAlbum";
import styles from "./oluwatosin.module.scss";
import { tosinPictures } from "./Pictures";

const Oluwatosin = () => {
  return (
    <div className={styles.oluwatosinParentDiv}>
      <div className={styles.oluwatosinContDiv}>
        <Header marqueeText="I Love it Beautiful, Classy and Simple🥰😌😍" />
        <div className={styles.photoContainerDiv}>
          <PhotoAlbum pictures={tosinPictures} />
        </div>
      </div>
    </div>
  );
};

export default Oluwatosin;
