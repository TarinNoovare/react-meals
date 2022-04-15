import styles from "./ErrorModal.module.css";

import ReactDOM from "react-dom";
import { useContext } from "react";

import CartContext from "../context/cart-context";

export const ErrorModal = () => {
  const { showErrorModal, setShowErrorModal } = useContext(CartContext);

  const errorModalComponents = (
    <div
      className={`${styles["error-modal"]} ${
        showErrorModal === "" ? styles["close"] : ""
      }`}
      onClick={() => {
        setShowErrorModal("");
      }}
    >
      <div className={styles["error-modal-content"]}>
        Error Occured!
        <div>{showErrorModal}</div>
      </div>
    </div>
  );

  const portalContainer = document.getElementById("modal-root");

  return ReactDOM.createPortal(errorModalComponents, portalContainer);
};
