import styles from "./NavBar.module.css";
import CartImage from "../resources/images/cart.svg";

export const NavBar = () => {
  return (
    <nav className={styles["nav-bar-and-cart-summary"]}>
      <h1>ReactMeals</h1>
      <div className={styles["cart-summary"]}>
        <img src={CartImage} />
        <div>Your Cart</div>
        <div className={`${styles["cart-summary"]} ${styles["number-cart"]}`}>
          2
        </div>
      </div>
    </nav>
  );
};
