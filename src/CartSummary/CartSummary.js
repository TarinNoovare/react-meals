import styles from "./CartSummary.module.css";

import ReactDOM from "react-dom";
import React, { useContext, useState, useEffect } from "react";

import CartContext from "../context/cart-context";

export const CartSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const {
    menuList,
    currentInCart,
    setCurrentInCart,
    showCartSummary,
    setShowCartSummary,
    numberOfCart,
    maximumNumberPerMenu
  } = useContext(CartContext);

  useEffect(() => {
    let totalAmountTem = 0;
    for (const [, value] of Object.entries(currentInCart)) {
      totalAmountTem += value.amount * value.price;
    }
    setTotalAmount(Math.round(totalAmountTem * 100) / 100);
  }, [currentInCart]);

  const clearCartHandler = () => {
    setCurrentInCart(menuList);
    setShowCartSummary(false);
  };

  const submitCartHandler = () => {
    window.location.reload(false);
  };

  const appendItemHandler = (key) => {
    if (currentInCart[key]["amount"] < maximumNumberPerMenu) {
      setCurrentInCart((prevState) => {
        return {
          ...prevState,
          [key]: {
            title: prevState[key]["title"],
            phrase: prevState[key]["phrase"],
            price: prevState[key]["price"],
            amount: prevState[key]["amount"] + 1,
          },
        };
      });
    }
  };

  const removeItemHandler = (key) => {
    setCurrentInCart((prevState) => {
      return {
        ...prevState,
        [key]: {
          title: prevState[key]["title"],
          phrase: prevState[key]["phrase"],
          price: prevState[key]["price"],
          amount: prevState[key]["amount"] - 1,
        },
      };
    });
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
          <div className={styles["adjust-cart"]}>
            <button
              className={styles["remove"]}
              onClick={removeItemHandler.bind(this, key)}
            >
              -
            </button>
            <button
              className={`${styles["add"]} ${
                value.amount < maximumNumberPerMenu ? "" : styles["unable"]
              }`}
              onClick={appendItemHandler.bind(this, key)}
            >
              +
            </button>
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
          <React.Fragment>
            <ul>
              {selectedMenuComponents}
              <li className={styles["total-amount"]}>{totalAmount}</li>
            </ul>
            <div className={styles["buttons-container"]}>
              <button
                className={styles["clear-button"]}
                onClick={clearCartHandler}
              >
                Clear Cart
              </button>
              <button
                className={styles["submit-button"]}
                onClick={submitCartHandler}
              >
                Send Menu
              </button>
            </div>
          </React.Fragment>
        ) : (
          <h4 style={{ textAlign: "center" }}>
            None of the Menu Has Been Selected.
          </h4>
        )}
      </div>
    </div>
  );

  const portalContainer = document.getElementById("modal-root");

  return ReactDOM.createPortal(modalComponents, portalContainer);
};
