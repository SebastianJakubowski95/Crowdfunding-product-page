import classes from "./App.module.css";
import { useSelector } from "react-redux";
import Navigation from "./components/UI/Navigation";
import Section_1 from "./components/UI/Section_1";
import Section_2 from "./components/UI/Section_2";
import Section_3 from "./components/UI/Section_3";
import ItemsModal from "./components/UI/ItemsModal";
import SuccesfullMess from "./components/UI/SuccesfullMess";

function App() {
  const backThisProjectModal = useSelector(
    (store) => store.modals.backThisProjectModal
  );
  const successMessageModal = useSelector(
    (store) => store.modals.successMessageModal
  );

  return (
    <>
      {backThisProjectModal && <ItemsModal />}
      {successMessageModal && <SuccesfullMess />}
      <Navigation />
      <div className={classes["main-content"]}>
        <Section_1 />
        <Section_2 />
        <Section_3 />
      </div>
    </>
  );
}

export default App;
