import styles from "./NavBar.module.css";
import CartImage from "../resources/images/cart.svg";
import { useContext } from "react";

import CartContext from "../context/cart-context";

export const NavBar = () => {
  const { numberOfCart } = useContext(CartContext);

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
