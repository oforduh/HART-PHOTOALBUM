import React from "react";
import Header from "../../components/Headers/Header";
import PhotoAlbum from "../../components/photoalbum/PhotoAlbum";
import styles from "./prephoto.module.scss";
import { prePhotoShootPictures } from "./Pictures";

const PrephotoShoot = () => {
  return (
    <div className={styles.PrephotoShootParentDiv}>
      <div className={styles.PrephotoShootContDiv}>
        <Header marqueeText="Communication within a relationship helps ease confusion between you and your partner" />
        <div className={styles.photoContainerDiv}>
          <PhotoAlbum pictures={prePhotoShootPictures} />
        </div>
      </div>
    </div>
  );
};

export default PrephotoShoot;
