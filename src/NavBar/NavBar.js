import styles from "./NavBar.module.css";
import CartImage from "../resources/images/cart.svg";
import { useContext, useEffect, useState } from "react";

import CartContext from "../context/cart-context";

export const NavBar = () => {
  const {
    currentInCart,
    setShowCartSummary,
    numberOfCart,
    setNumberOfCart,
    addCartAnimation,
    setAddCartAnimation,
  } = useContext(CartContext);

  useEffect(() => {
    let totalAmount = 0;
    for (const [, value] of Object.entries(currentInCart)) {
      totalAmount += value.amount;
      setNumberOfCart(totalAmount);
    }
  }, [currentInCart, setNumberOfCart]);

  return (
    <nav className={styles["nav-bar-and-cart-summary"]}>
      <h1>ReactMeals</h1>
      <div
        className={`${styles["cart-summary"]} ${
          addCartAnimation ? styles["animation"] : ""
        }`}
        onClick={() => {
          setShowCartSummary(true);
        }}
        onAnimationEnd={() => {
          setAddCartAnimation(false);
        }}
      >
        <img src={CartImage} alt="" />
        <div>Your Cart</div>
        <div className={`${styles["cart-summary"]} ${styles["number-cart"]}`}>
          {numberOfCart}
        </div>
      </div>
    </nav>
  );
};
