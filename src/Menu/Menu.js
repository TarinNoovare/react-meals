import styles from "./Menu.module.css";

import { useContext, useState, useEffect } from "react";

import CartContext from "../context/cart-context";

export const Menu = (props) => {
  const {
    menuList,
    currentInCart,
    setCurrentInCart,
    setShowErrorModal,
    setAddCartAnimation,
  } = useContext(CartContext);

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

  const inputMenuHandler = (key, event) => {
    const enterdAmount = event.target.value ? parseInt(event.target.value) : 0;

    setCurrentMenuSelect((prevState) => {
      return {
        ...prevState,
        [key]: {
          title: prevState[key]["title"],
          phrase: prevState[key]["phrase"],
          price: prevState[key]["price"],
          amount: enterdAmount,
        },
      };
    });
  };

  const addToCartHandler = (key) => {
    if (currentMenuSelect[key]["amount"] <= 0) {
      setShowErrorModal("Amount must be more than 0");
    } else if (
      currentMenuSelect[key]["amount"] + currentInCart[key]["amount"] >
      99
    ) {
      setShowErrorModal("Amount for Each Menu cannot exceed 99");
    } else {
      setAddCartAnimation(true);
      setCurrentInCart((prevState) => {
        return {
          ...prevState,
          [key]: {
            title: prevState[key]["title"],
            phrase: prevState[key]["phrase"],
            price: prevState[key]["price"],
            amount: prevState[key]["amount"] + currentMenuSelect[key]["amount"],
          },
        };
      });

      setCurrentMenuSelect((prevState) => {
        return {
          ...prevState,
          [key]: {
            title: prevState[key]["title"],
            phrase: prevState[key]["phrase"],
            price: prevState[key]["price"],
            amount: 0,
          },
        };
      });
    }
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
              onChange={inputMenuHandler.bind(this, key)}
            />
          </div>
          <button type="submit" onClick={addToCartHandler.bind(this, key)}>
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
