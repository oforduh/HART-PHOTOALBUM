import React from "react";
import Header from "../../components/Headers/Header";
import PhotoAlbum from "../../components/photoalbum/PhotoAlbum";
import styles from "./couples.module.scss";
import { couplesPictures } from "./Pictures";

const Couples = () => {
  return (
    <div className={styles.couplesParentDiv}>
      <div className={styles.couplesContDiv}>
        <Header marqueeText=" Being in love is one thing, but having your partner’s back is altogether another story." />
        <div className={styles.photoContainerDiv}>
          <PhotoAlbum pictures={couplesPictures} />
        </div>
      </div>
    </div>
  );
};

export default Couples;
