import classes from "./RewardCardModal.module.css";
import Button from "../Button";
import InputPrice from "../InputPrice";
import { useRef, useState } from "react";

const RewardCardModal = ({
  title,
  pledgePrice,
  itemsLeft,
  bodyText,
  id,
  isCardSelected,
  cardName,
}) => {
  let isZero = itemsLeft < 1;
  let screenWidth = window.innerWidth;
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const radioRef = useRef();
  const radioSelect = () => {
    if (!isZero) {
      radioRef.current.radioButtonToggle();
    }
  };

  let cardSelectedModalClasses = `${classes.wrapper} ${classes.cardIsSelected}`;
  let cardNotSelectedModalClasses = `${classes.wrapper}`;
  if (isZero) {
    cardSelectedModalClasses = `${classes.wrapper} ${classes.cardIsSelected} ${classes["not-available"]}`;
    cardNotSelectedModalClasses = `${classes.wrapper} ${classes["not-available"]}`;
  }

  const cardForLargeScreens = (
    <div
      id={cardName}
      className={
        isCardSelected ? cardSelectedModalClasses : cardNotSelectedModalClasses
      }>
      <div className={classes.main}>
        <div>
          <Button
            ref={radioRef}
            type="radio"
            id={id}
            isCardSelected={isCardSelected}
            disabled={itemsLeft < 1}
          />
          <div>
            <div className={classes.heading}>
              <button>
                <h1 onClick={radioSelect}>{title}</h1>
              </button>
              {id !== "pledgewithnoreward" && (
                <p className={classes.left}>
                  <span>{itemsLeft}</span> left
                </p>
              )}
              {id !== "pledgewithnoreward" && (
                <h2>Pledge ${pledgePrice} or more</h2>
              )}
            </div>
            <p>{bodyText}</p>
          </div>
        </div>
        {id !== "pledgewithnoreward" && isCardSelected && (
          <div>
            <p>Enter your pledge</p>
            <div>
              <InputPrice
                minValue={pledgePrice}
                isInputInvalid={isInputInvalid}
              />
              <Button type="regular" size="small" name="Continue" />
            </div>
          </div>
        )}
        {id === "pledgewithnoreward" && isCardSelected && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "-webkit-fill-available",
            }}>
            <Button type="regular" size="small" name="Continue" />
          </div>
        )}
      </div>
    </div>
  );
  const cardForSmallScreens = (
    <div
      id={cardName}
      className={
        isCardSelected ? cardSelectedModalClasses : cardNotSelectedModalClasses
      }>
      <div className={classes.main}>
        <div>
          <Button
            ref={radioRef}
            type="radio"
            id={id}
            isCardSelected={isCardSelected}
            disabled={itemsLeft < 1}
          />
          <div className={classes.heading}>
            <button>
              <h1 onClick={radioSelect}>{title}</h1>
            </button>
            {id !== "pledgewithnoreward" && (
              <h2>Pledge ${pledgePrice} or more</h2>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            padding: "1.5rem 0",
          }}>
          <p>{bodyText}</p>
          {id !== "pledgewithnoreward" && (
            <p className={classes.left}>
              <span className={classes.span}>{itemsLeft}</span> left
            </p>
          )}
        </div>
        {id !== "pledgewithnoreward" && isCardSelected && (
          <div className={classes["bottom-section"]}>
            <p>Enter your pledge</p>
            <div>
              <InputPrice
                minValue={pledgePrice}
                isCardSelected={isCardSelected}
                isInputInvalid={isInputInvalid}
              />
              <Button type="regular" size="small" name="Continue" />
            </div>
          </div>
        )}
        {id === "pledgewithnoreward" && isCardSelected && (
          <div style={{ display: "grid", placeItems: "center", width: "100%" }}>
            <Button type="regular" size="small" name="Continue" />
          </div>
        )}
      </div>
    </div>
  );

  return <>{screenWidth > 768 ? cardForLargeScreens : cardForSmallScreens}</>;
};

export default RewardCardModal;
