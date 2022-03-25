import React from "react";
import styles from "./homepage.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider1 from "../../assets/d1.png";
import Slider2 from "../../assets/d2.png";
import Slider3 from "../../assets/d3.png";

const HomePage = () => {
  return (
    <div className={styles.homePageParentDiv}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
      >
        <div className={styles.imageContainer}>
          <img src={Slider1} alt="slider 1" />
        </div>
        <div className={styles.imageContainer}>
          <img src={Slider2} alt="slider 2" />
        </div>
        <div className={styles.imageContainer}>
          <img src={Slider3} alt="slider 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
