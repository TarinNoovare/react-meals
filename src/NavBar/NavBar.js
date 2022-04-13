import styles from "./NavBar.module.css";
import CartImage from "../resources/images/cart.svg";
import { useContext, useEffect, useState } from "react";

import CartContext from "../context/cart-context";

export const NavBar = () => {
  const { menuList } = useContext(CartContext);

  const [numberOfCart, setNumberOfCart] = useState(0);

  useEffect(() => {
    const totalCart = menuList
      .map((em) => em.amount)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    setNumberOfCart(totalCart);
  }, [menuList]);

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
