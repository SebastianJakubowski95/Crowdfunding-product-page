import classes from "./Section_3.module.css";
import WrapperCard from "../WrapperCard";
import { useSelector } from "react-redux";
import RewardCardHome from "./RewardCardHome";
// Wrapper type: small-modal/large-modal/small-itemCard/large-itemCard
// RewardCardHome = ({ title, pledgePrice, bodyText, itemsLeft, itemId })
const Section_3 = () => {
  const data = useSelector((store) => store.data);
  const listOfItems = data.data.map((item, index) => {
    return (
      <RewardCardHome
        key={index}
        title={item.title}
        pledgePrice={item.pledge}
        bodyText={item.description}
        itemsLeft={item.leftItems}
        id={item.id}
      />
    );
  });

  return (
    <div className={classes.wrapper}>
      <WrapperCard type="large-modal">
        <div className={classes.content}>
          <div className={classes["text-section"]}>
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </div>
          <div className={classes["list-of-items"]}>{listOfItems}</div>
        </div>
      </WrapperCard>
    </div>
  );
};
export default Section_3;
