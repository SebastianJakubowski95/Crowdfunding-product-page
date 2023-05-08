import classes from "./Bookmark.module.css";
import iconActive from "../assets/bookmark/icon-bookmark_active.svg";
import iconDefault from "../assets/bookmark/icon-bookmark_default.svg";
import iconOnHover from "../assets/bookmark/icon-bookmark_onHover.svg";
import { useState } from "react";

const Bookmark = ({ idName }) => {
  let windowWidth = window.innerWidth;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [iconType, setIconType] = useState(iconDefault);

  const onClickHandler = () => {
    let svg = document.getElementById(idName);
    if (!isBookmarked) {
      setIsBookmarked(true);
      setIconType(iconActive);
      svg.classList.remove(`${classes.iconAnimationUnSub}`);
      svg.classList.add(`${classes.iconAnimationSub}`);
    } else if (isBookmarked) {
      setIsBookmarked(false);
      setIconType(iconDefault);
      svg.classList.add(`${classes.iconAnimationUnSub}`);
      svg.classList.remove(`${classes.iconAnimationSub}`);
    }
  };

  const onMouseEnterHandler = () => {
    if (!isBookmarked) {
      setIconType(iconOnHover);
    }
  };
  const onMouseLeaveHandler = () => {
    if (!isBookmarked) {
      setIconType(iconDefault);
    }
  };
  return (
    <button
      onClick={onClickHandler}
      className={classes.btn}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}>
      {windowWidth >= 768 && (
        <p
          className={isBookmarked ? classes.bookmarked : classes.notBookmarked}>
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </p>
      )}
      <img
        className={classes.icon}
        id={idName}
        src={iconType}
        alt="bookmark product button"
      />
    </button>
  );
};
export default Bookmark;
