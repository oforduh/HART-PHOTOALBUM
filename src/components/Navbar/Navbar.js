import React, { useState, useEffect, useCallback } from "react";
import styles from "./navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarData } from "./Sidebar";
import { NavLink, Link } from "react-router-dom";
import NavLogo from "./NavLogo.jpg";
const Navbar = ({ setnavOpen, navOpen }) => {
  const [closeNav, setcloseNav] = useState(false);
  const [showVerticalMenu, setshowVerticalMenu] = useState(true);

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

  const clickDBodyToCloseNavFunction = () => {
    handleNavbarIcons();
    handleNavbarSlide();
    navOpensetter();
  };

  useEffect(() => {
    clickDBodyToCloseNavFunction();
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
          showVerticalMenu
            ? `${styles.verticalBar}`
            : `${styles.verticalBar} ${styles.active}`
        }
      >
        <div
          className={styles.verticalBarContainer}
          onClick={clickDBodyToCloseNavFunction}
        >
          <img alt="Navbar Logo" src={NavLogo} height="150" />

          <ul className={styles.navbarUL}>
            {sidebarData.map((item, idx) => {
              return (
                <li key={idx}>
                  <NavLink
                    to={item.path}
                    activeClassName={styles.navTextActive}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
            <div className={styles.buttonContainer}>
              <button>
                {" "}
                <Link to="/gift">Gift Registry</Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
