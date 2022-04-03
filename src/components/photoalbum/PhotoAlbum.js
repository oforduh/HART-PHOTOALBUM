import React, { useState } from "react";
import PreviewImage from "../PreviewImage/PreviewImage";
import styles from "./photo.module.scss";

const PhotoAlbum = ({ pictures }) => {
  const [togglePreview, settogglePreview] = useState(false);
  const [previewSrc, setpreviewSrc] = useState("");
  const imagePreview = (src) => {
    console.log(src);
    settogglePreview(!togglePreview);
    setpreviewSrc(src);
  };

  return (
    <div className={styles.container}>
      {!togglePreview ? (
        <div className={styles.container2}>
          {pictures.map(({ src, name, widthSpan, heightSpan }, idx) => {
            return (
              <div
                onClick={() => {
                  imagePreview(src);
                }}
                key={idx}
                className={`${styles.galleryContainer} ${styles[widthSpan]} ${styles[heightSpan]}`}
              >
                {
                  <div className={styles.galleryItem}>
                    <div className={styles.image}>
                      <img src={src} alt={name} key={idx} />
                    </div>
                    <div className={styles.text}>{name}</div>
                  </div>
                }
              </div>
            );
          })}
        </div>
      ) : (
        <PreviewImage imagePreview={imagePreview} previewSrc={previewSrc} />
      )}
    </div>
  );
};

export default PhotoAlbum;
