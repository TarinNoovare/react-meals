import styles from "./Menu.module.css";

import { useContext, useState, useEffect } from "react";

import CartContext from "../context/cart-context";

export const Menu = (props) => {
  const { menuList, setCurrentInCart } = useContext(CartContext);

  const [currentMenuSelect, setCurrentMenuSelect] = useState(menuList);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Current Selected");
      console.log(currentMenuSelect);
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [currentMenuSelect]);

  const inputMenuHandler = (key, title, phrase, price, event) => {
    const enterdAmount = event.target.value;
    setCurrentMenuSelect((prevState) => {
      return {
        ...prevState,
        [key]: {
          title: title,
          phrase: phrase,
          price: price,
          amount: enterdAmount ? parseInt(enterdAmount) : 0,
        },
      };
    });
  };

  const addToCartHandler = (key, title, phrase, price, amount) => {
    setCurrentInCart((prevState) => {
      return {
        ...prevState,
        [key]: {
          title: title,
          phrase: phrase,
          price: price,
          amount: amount,
        },
      };
    });

    setCurrentMenuSelect((prevState) => {
      return {
        ...prevState,
        [key]: {
          title: title,
          phrase: phrase,
          price: price,
          amount: 0,
        },
      };
    });
  };

  const menuListComponent = [];
  for (const [key, value] of Object.entries(currentMenuSelect)) {
    menuListComponent.push(
      <li key={key}>
        <div className={styles["description"]}>
          <div className={styles["title"]}>{value.title}</div>
          <div className={styles["phrase"]}>{value.phrase}</div>
          <div className={styles["price"]}>{`$${value.price}`}</div>
        </div>
        <div className={styles["add-to-cart"]}>
          <div className={styles["amount"]}>
            <label>Amount</label>
            <input
              type="number"
              value={value.amount}
              onChange={inputMenuHandler.bind(
                this,
                key,
                value.title,
                value.phrase,
                value.price
              )}
            />
          </div>
          <button
            type="submit"
            onClick={addToCartHandler.bind(
              this,
              key,
              value.title,
              value.phrase,
              value.price,
              value.amount
            )}
          >
            + Add
          </button>
        </div>
      </li>
    );
  }

  return (
    <section className={styles["menu"]}>
      <h2>Menu</h2>
      <ul>{menuListComponent}</ul>
    </section>
  );
};
