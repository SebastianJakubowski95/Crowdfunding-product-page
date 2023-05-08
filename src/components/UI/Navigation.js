import classes from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import bgLarge from "../../assets/image-hero-desktop.jpg";
import bgSmall from "../../assets/image-hero-mobile.jpg";
import burgerIcon from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close-menu.svg";
import { useState } from "react";
import WrapperCard from "../WrapperCard";

const Navigation = () => {
  let screenWidth = window.innerWidth;
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const menuIconClickHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
    let page = document.getElementById("root");
    if (!isBurgerOpen) {
      page.classList.add(`${classes.noscroll}`);
    } else {
      page.classList.remove(`${classes.noscroll}`);
    }
  };

  const navigationLarge = (
    <nav className={classes["navigation-large"]}>
      <ul className={classes.ul}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">GetStarted</a>
        </li>
      </ul>
    </nav>
  );

  const navigationSmall = (
    <>
      <img
        src={isBurgerOpen ? closeIcon : burgerIcon}
        alt="menu"
        onClick={menuIconClickHandler}
      />
      {isBurgerOpen && (
        <div className={classes.modal}>
          <div className={classes.wrapper}>
            <WrapperCard type="nav-modal">
              <nav className={classes["navigation-small"]}>
                <ul className={classes.ul}>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <div />
                  <li>
                    <a href="#">Discover</a>
                  </li>
                  <div />
                  <li>
                    <a href="#">GetStarted</a>
                  </li>
                </ul>
              </nav>
            </WrapperCard>
          </div>
          <div className={classes.modalBg} onClick={menuIconClickHandler} />
        </div>
      )}
    </>
  );
  return (
    <div className={classes.section}>
      <div className={classes.main}>
        <img className={classes.logo} src={logo} alt="logo" />
        {screenWidth >= 768 ? navigationLarge : navigationSmall}
      </div>
      <img
        src={screenWidth >= 768 ? bgLarge : bgSmall}
        alt="background image"
      />
    </div>
  );
};
export default Navigation;
