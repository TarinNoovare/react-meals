import styles from "./Menu.module.css";

import { useContext } from "react";

import CartContext from "../context/cart-context";

export const Menu = () => {
  const { menuList } = useContext(CartContext);

  return (
    <section className={styles["menu"]}>
      <h2>Menu</h2>
      <ul>
        {menuList.map((menu) => {
          return (
            <li key={menu.id}>
              <div className={styles["description"]}>
                <div className={styles["title"]}>{menu.title}</div>
                <div className={styles["phrase"]}>{menu.phrase}</div>
                <div className={styles["price"]}>{`$${menu.price}`}</div>
              </div>
              <div className={styles["add-to-cart"]}>
                <div className={styles["amount"]}>
                  <label>Amount</label>
                  <input type="number" />
                </div>
                <button type="submit">+ Add</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
