import classes from "./WrapperCard.module.css";

const WrapperCard = (props) => {
  // type: small-modal/large-modal/small-itemCard/large-itemCard

  return (
    <div className={`${classes["wrapper-card"]} ${classes[props.type]}`}>
      {props.children}
    </div>
  );
};
export default WrapperCard;
