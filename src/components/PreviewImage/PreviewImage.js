import React from "react";
import styles from "./preview.module.scss";

const PreviewImage = ({ imagePreview, previewSrc }) => {
  return (
    <div className={styles.PreviewContainer} onClick={imagePreview}>
      <img src={previewSrc} height={400} />
    </div>
  );
};

export default PreviewImage;
