import { useDispatch, useSelector } from "react-redux";
import classes from "./InputPrice.module.css";
import { useEffect, useState } from "react";
import { dataActions } from "../store/dataSlice";

const InputPrice = ({ minValue }) => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [currentValue, setCurrentValue] = useState(minValue);
  let inputFocus = `${classes.input} ${classes.onFocus}`;
  let inputBlur = `${classes.input} ${classes.onBlur}`;

  const changeHandler = (event) => {
    const newValue = event.target.value;
    setCurrentValue((prev) => newValue);
  };
  useEffect(() => {
    dispatch(dataActions.setUserPledge(+currentValue));
  }, [currentValue]);

  return (
    <div className={isFocused ? inputFocus : inputBlur}>
      <p className={classes.dollar}>$</p>
      <input
        type="number"
        min={minValue}
        value={currentValue}
        onChange={changeHandler}
        className={classes.priceText}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </div>
  );
};
export default InputPrice;
