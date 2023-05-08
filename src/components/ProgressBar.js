import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={classes["progress-bar"]}>
      <div style={{ width: `${props.value}%` }} />
    </div>
  );
};

export default ProgressBar;
