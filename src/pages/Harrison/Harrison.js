import React from "react";
import Header from "../../components/Headers/Header";
import PhotoAlbum from "../../components/photoalbum/PhotoAlbum";
import styles from "./harrison.module.scss";
import { harrisonPictures } from "./Pictures";

const Harrison = () => {
  // return <div>Lorem2000</div>;
  return (
    <div className={styles.harrisonParentDiv}>
      <div className={styles.harrisonContDiv}>
        <Header marqueeText="I Love it Charming, Classy and Sweet🥰😌😍" />
        <div className={styles.photoContainerDiv}>
          <PhotoAlbum pictures={harrisonPictures} />
        </div>
      </div>
    </div>
  );
};

export default Harrison;
