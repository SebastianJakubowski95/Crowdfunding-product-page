import classes from "./Section_1.module.css";
import logo from "../../assets/logo-mastercraft.svg";
import WrapperCard from "../WrapperCard";
import Button from "../Button";
import Bookmark from "../Bookmark";

const Section_1 = () => {
  return (
    <div className={classes.section}>
      <img className={classes.logo} src={logo} alt="logo" />
      <WrapperCard type="section_1-modal">
        <div className={classes.cardContent}>
          <div className={classes.heading}>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>
          <div className={classes.buttons}>
            <Button type="regular" size="large" name="Back this project" />
            <Bookmark idName="Section_1" type="small" />
          </div>
        </div>
      </WrapperCard>
    </div>
  );
};
export default Section_1;
