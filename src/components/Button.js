import classes from "./Button.module.css";
import React, { useImperativeHandle } from "react";
import { modalsActions } from "../store/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../store/dataSlice";

const Button = React.forwardRef(
  ({ type, name, size, disabled, id, isCardSelected }, ref) => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.data);
    const userPledge = data.userPledge;

    useImperativeHandle(ref, () => {
      return {
        radioButtonToggle: radioSelect,
      };
    });
    const radioSelect = () => {
      dispatch(dataActions.setSelectReward(id));
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const regularOnClickHandler = (e) => {
      let action = e.target.name;
      let itemId = e.target.id;
      let item = data.data.filter((item) => item.id === itemId);
      if (action === "Select Reward" && disabled !== true) {
        dispatch(modalsActions.openBackThisProjectModal());
        dispatch(dataActions.setSelectReward(itemId));
        dispatch(dataActions.setMinimumPledge(item[0].pledge));
        scrollToTop();
      } else if (action === "Back this project") {
        dispatch(modalsActions.openBackThisProjectModal());
        scrollToTop();
      } else if (action === "Continue") {
        if (itemId === "pledgewithnoreward") {
          dispatch(modalsActions.closeBackThisProjectModal());
          dispatch(dataActions.calculate("0"));
          scrollToTop();
          dispatch(modalsActions.openSuccessMessageModal());
        } else {
          dispatch(dataActions.calculate(userPledge));
          dispatch(modalsActions.closeBackThisProjectModal());
          scrollToTop();
          dispatch(modalsActions.openSuccessMessageModal());
        }
      } else if (action === "Got it!") {
        dispatch(modalsActions.closeSuccessMessageModal());
      }
    };

    const radioOnClickHandler = (event) => {
      if (!disabled) {
        const selectedItemId = event.target.id;
        dispatch(dataActions.setSelectReward((prev) => selectedItemId));
      }
    };

    if (type === "regular") {
      let btnClassesRegular = classes["btn-regular"];
      if (disabled === "true" || disabled === true) {
        btnClassesRegular = `${classes["btn-regular"]} ${classes.disabled}`;
      }
      return (
        <button
          id={id}
          name={name}
          disabled={disabled === "true"}
          className={` ${btnClassesRegular}  ${classes[disabled]} ${classes[size]}`}
          onClick={regularOnClickHandler}>
          {name}
        </button>
      );
    } else if (type === "radio") {
      let btnClassesRadioNotSelected = ` ${classes["btn-radio"]} ${classes["border-not__active"]}`;
      let btnClassesRadioSelected = `   ${classes["btn-radio"]} ${classes["border-active"]}`;
      if (disabled === "true" || disabled === true) {
        btnClassesRadioNotSelected = ` ${classes["btn-radio"]} ${classes["disabled"]}`;
        btnClassesRadioSelected = ` ${classes["btn-radio"]} ${classes["disabled"]}`;
      }
      const centralDot = <div className={classes.radio__active} />;
      return (
        <button
          id={id}
          disabled={disabled === "true"}
          className={
            isCardSelected
              ? btnClassesRadioSelected
              : btnClassesRadioNotSelected
          }
          onClick={radioOnClickHandler}>
          {isCardSelected && centralDot}
        </button>
      );
    }
  }
);

export default Button;
