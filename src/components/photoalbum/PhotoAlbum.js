import React from "react";
import { tosinPictures } from "../../pages/Oluwatosin/Pictures";
import styles from "./photo.module.scss";

const PhotoAlbum = () => {
  return (
    <div className={styles.container}>
      {tosinPictures.map(({ src, name, widthSpan, heightSpan }, idx) => {
        return (
          <div
            key={idx}
            className={`${styles.galleryContainer} ${styles[widthSpan]} ${styles[heightSpan]}`}
          >
            <div className={styles.galleryItem}>
              <div className={styles.image}>
                <img src={src} alt={name} key={idx} />
              </div>
              <div className={styles.text}>{name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoAlbum;
