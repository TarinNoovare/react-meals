import styles from "./CartSummary.module.css";

import ReactDOM from "react-dom";
import { useContext } from "react";

import CartContext from "../context/cart-context";

export const CartSummary = () => {
  const {
    menuList,
    currentInCart,
    setCurrentInCart,
    showCartSummary,
    setShowCartSummary,
    numberOfCart,
  } = useContext(CartContext);

  const clearCartHandler = () => {
    setCurrentInCart(menuList);
    setShowCartSummary(false);
  };

  const selectedMenuComponents = [];
  for (const [key, value] of Object.entries(currentInCart)) {
    selectedMenuComponents.push(
      <li
        key={key}
        className={`${styles["order"]} ${
          value.amount !== 0 ? styles["show"] : ""
        }`}
      >
        <div className={styles["left-summary"]}>
          <div className={styles["menu-title"]}>{value.title}</div>
        </div>
        <div className={styles["right-summary"]}>
          <div className={styles["amount-and-price"]}>
            {value.amount} x {value.price}
          </div>
          =
          <div className={styles["total-price"]}>
            {Math.round(value.amount * value.price * 100) / 100}
          </div>
        </div>
      </li>
    );
  }

  const modalComponents = (
    <div
      className={`${styles["modal"]} ${
        !showCartSummary ? styles["close"] : ""
      }`}
      onClick={() => {
        setShowCartSummary(false);
      }}
    >
      <div
        className={styles["modal-content"]}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h3>React Meals Cart Summary</h3>
        {numberOfCart !== 0 ? (
          <ul>{selectedMenuComponents}</ul>
        ) : (
          <h4 style={{ textAlign: "center" }}>
            None of the Menu Has Been Selected.
          </h4>
        )}
        <button onClick={clearCartHandler}>Clear Cart</button>
      </div>
    </div>
  );

  const portalContainer = document.getElementById("modal-root");

  return ReactDOM.createPortal(modalComponents, portalContainer);
};
