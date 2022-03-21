import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <section className={styles.widget}>
            {/* <marquee>
          <b>I Love it Beautiful, Classy and Simple🥰😌😍</b>
        </marquee> */}
        <div className={styles.marquee}>
          <span>I Love it Beautiful, Classy and Simple🥰😌😍</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
