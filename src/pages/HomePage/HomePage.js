import React from "react";
import styles from "./homepage.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider1 from "../../assets/date1.jpeg";
import Slider2 from "../../assets/date2.jpeg";
import Slider3 from "../../assets/date3.jpeg";

const HomePage = () => {
  return (
    <div className={styles.homePageParentDiv}>
      <div className={styles.homePageContDiv}>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
        >
          <div>
            <img src={Slider1} alt="slider 1" />
          </div>
          <div>
            <img src={Slider2} alt="slider 2" />
          </div>
          <div>
            <img src={Slider3} alt="slider 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
