import classes from "./SuccesfullMess.module.css";
import WrapperCard from "../WrapperCard";
import Button from "../Button";
import logo from "../../assets/icon-check.svg";
import { createPortal } from "react-dom";

const SuccesfullMess = () => {
  const modal = (
    <>
      <div className={classes.wrapper}>
        <WrapperCard type="large-modal">
          <div className={classes.content}>
            <img src={logo} alt="success" />
            <div>
              <h1>Thanks for your support!</h1>
              <p>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <Button type="regular" size="small" name="Got it!" />
            </div>
          </div>
        </WrapperCard>
      </div>
      <div className={classes.bg} />
    </>
  );
  return <>{createPortal(modal, document.getElementById("modal"))}</>;
};

export default SuccesfullMess;
