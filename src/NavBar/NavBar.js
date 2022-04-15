import styles from "./NavBar.module.css";
import CartImage from "../resources/images/cart.svg";
import { useContext, useEffect } from "react";

import CartContext from "../context/cart-context";

export const NavBar = () => {
  const { currentInCart, setShowCartSummary, numberOfCart, setNumberOfCart } =
    useContext(CartContext);

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
        className={styles["cart-summary"]}
        onClick={() => {
          setShowCartSummary(true);
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
