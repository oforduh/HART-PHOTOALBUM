import React, { useState, useEffect, useCallback } from "react";
import styles from "./navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarData } from "./Sidebar";
import { NavLink } from "react-router-dom";
import NavLogo from "./NavLogo.jpg";
const Navbar = ({ setnavOpen, navOpen }) => {
  const [closeNav, setcloseNav] = useState(false);
  const [showVerticalMenu, setshowVerticalMenu] = useState(false);

  const handleNavbarIcons = () => {
    setcloseNav(!closeNav);
  };

  const handleNavbarSlide = () => {
    setshowVerticalMenu(!showVerticalMenu);
  };

  // from the public route
  const navOpensetter = () => {
    setnavOpen(!navOpen);
  };

  const clickDBodyToCloseNavFunction = useCallback(
    function (e) {
      console.log(showVerticalMenu);
    },
    [showVerticalMenu]
  );

  // console.log(showVerticalMenu);

  useEffect(() => {
    document.body.addEventListener("click", clickDBodyToCloseNavFunction);

    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className={styles.navbarParentDiv}>
      <div className={styles.horizontalBar}>
        <div className={styles.horizontalBarContent}>
          {!closeNav ? (
            <AiOutlineClose
              onClick={() => {
                handleNavbarIcons();
                handleNavbarSlide();
                navOpensetter();
              }}
            />
          ) : (
            <GiHamburgerMenu
              id="HamburgerMenu"
              onClick={() => {
                handleNavbarIcons();
                handleNavbarSlide();
                navOpensetter();
              }}
            />
          )}
        </div>
      </div>
      <div
        className={
          !showVerticalMenu
            ? `${styles.verticalBar}`
            : `${styles.verticalBar} ${styles.active}`
        }
      >
        <div
          className={styles.verticalBarContainer}
          // onClick={clickDBodyToCloseNavFunction}
          id="verticalBarContainerId"
        >
          <img alt="Navbar Logo" src={NavLogo} height="150" />

          <ul className={styles.navbarUL}>
            {sidebarData.map((item, idx) => {
              return (
                <li key={idx}>
                  <NavLink
                    to={item.path}
                    activeClassName={styles.navTextActive}
                    // onClick={clickDBodyToCloseNavFunction}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
