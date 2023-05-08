import { useSelector } from "react-redux";
import classes from "./Section_2.module.css";
import WrapperCard from "../WrapperCard";
import ProgressBar from "../ProgressBar";

const Section_2 = () => {
  const data = useSelector((store) => store.data);
  const goalMoney = data.moneyGoal;
  const currentMoney = data.moneyCurrent;
  const totalBackers = data.totalBackers;
  const daysLeft = data.daysLeft;
  const progressBar = (currentMoney / goalMoney) * 100;

  return (
    <WrapperCard type="section_2-modal">
      <div className={classes["card-content"]}>
        <div className={classes.numbers}>
          <div>
            <h1> {currentMoney}</h1>
            <p>{` of $${goalMoney} backed `}</p>
          </div>
          <div>
            <h1>{totalBackers}</h1>
            <p>total backers</p>
          </div>
          <div>
            <h1>{daysLeft}</h1>
            <p>days left</p>
          </div>
        </div>
        <ProgressBar value={progressBar} />
      </div>
    </WrapperCard>
  );
};

export default Section_2;
