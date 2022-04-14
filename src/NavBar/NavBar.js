import styles from "./NavBar.module.css";
import CartImage from "../resources/images/cart.svg";
import { useContext, useEffect, useState } from "react";

import CartContext from "../context/cart-context";

export const NavBar = () => {
  const {currentInCart } = useContext(CartContext);

  const [numberOfCart, setNumberOfCart] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    for (const [_, value] of Object.entries(currentInCart)) {
      totalAmount += value.amount;
      setNumberOfCart(totalAmount);
    }
  }, [currentInCart]);

  return (
    <nav className={styles["nav-bar-and-cart-summary"]}>
      <h1>ReactMeals</h1>
      <div className={styles["cart-summary"]}>
        <img src={CartImage} alt="" />
        <div>Your Cart</div>
        <div className={`${styles["cart-summary"]} ${styles["number-cart"]}`}>
          {numberOfCart}
        </div>
      </div>
    </nav>
  );
};
