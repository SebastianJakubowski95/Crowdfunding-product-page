import classes from "./ItemsModal.module.css";
import closeIcon from "../../assets/icon-close-modal.svg";
import WrapperCard from "../WrapperCard";
import RewardCardModal from "./RewardCardModal";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../../store/modalsSlice";

const ItemsModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalsActions.closeBackThisProjectModal());
  };

  const data = useSelector((store) => store.data);
  const currentOption = data.selectedReward;
  const items = data.data.map((item, index) => {
    return (
      <RewardCardModal
        isCardSelected={item.id === currentOption}
        key={index}
        id={item.id}
        cardName={`card${item.id}`}
        title={item.title}
        pledgePrice={item.pledge}
        itemsLeft={item.leftItems}
        bodyText={item.description}
      />
    );
  });
  const modal = (
    <>
      <div className={classes.wrapper}>
        <WrapperCard type="large-itemCard">
          <div className={classes.content}>
            <div className={classes.header}>
              <button>
                <img src={closeIcon} alt="close modal" onClick={closeModal} />
              </button>
              <div>
                <h2>Back this project</h2>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Monitor
                  Riser out in the world?
                </p>
              </div>
            </div>
            <div className={classes["list-of-options"]}>{items}</div>
          </div>
        </WrapperCard>
      </div>
      <div className={classes.bg} onClick={closeModal} />
    </>
  );

  return <>{createPortal(modal, document.getElementById("modal"))}</>;
};

export default ItemsModal;
