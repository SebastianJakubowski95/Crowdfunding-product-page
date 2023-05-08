import classes from "./RewardCardHome.module.css";
import Button from "../Button";
import WrapperCard from "../WrapperCard";

const RewardCardHome = ({ title, pledgePrice, bodyText, itemsLeft, id }) => {
  if (id !== "pledgewithnoreward") {
    return (
      <WrapperCard type="reward-card-home">
        <div className={classes.main}>
          <div>
            <h1
              className={
                itemsLeft < 1 ? classes["not-available"] : classes.null
              }>
              {title}
            </h1>
            <h2
              className={
                itemsLeft < 1 ? classes["not-available"] : classes.null
              }>
              Pledge ${pledgePrice} or more
            </h2>
          </div>
          <div>
            <p
              className={
                itemsLeft < 1 ? classes["not-available"] : classes.null
              }>
              {bodyText}
            </p>
          </div>
          <div>
            <p>
              <span
                className={
                  itemsLeft > 1
                    ? classes["items-left"]
                    : `${classes["items-left"]} not-available`
                }>
                {itemsLeft}
              </span>
              left
            </p>
            <Button
              type="regular"
              size="medium"
              name="Select Reward"
              id={id}
              disabled={itemsLeft < 1}
            />
          </div>
        </div>
      </WrapperCard>
    );
  }
};

export default RewardCardHome;
