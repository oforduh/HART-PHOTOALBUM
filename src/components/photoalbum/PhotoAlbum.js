import React from "react";
import styles from "./photo.module.scss";

const PhotoAlbum = ({ pictures}) => {
  return (
    <div className={styles.container}>
      {pictures.map(({ src, name, widthSpan, heightSpan }, idx) => {
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
