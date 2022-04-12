import styles from "./Menu.module.css";

export const Menu = () => {
  const menuList = [
    {
      id: 0,
      title: "Shushi",
      phrase: "Delicious Shushi U wanna Try",
      price: 28.9,
    },
    {
      id: 1,
      title: "Fried Rice",
      phrase: "Rice with Fried, You know it...",
      price: 10.7,
    },
    {
      id: 2,
      title: "Fried Rice",
      phrase: "Rice with Fried, You know it...",
      price: 10.7,
    },
    {
      id: 3,
      title: "Fried Rice",
      phrase: "Rice with Fried, You know it...",
      price: 10.7,
    },
    {
      id: 4,
      title: "Fried Rice",
      phrase: "Rice with Fried, You know it...",
      price: 10.7,
    },
  ];

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
                <div>Add</div>
              </div>
            </li>
          );
        })}
        {/* <li>
          <div className={styles["description"]}>
            <div className={styles["title"]}>Shushi</div>
            <div className={styles["phrase"]}>Delicious Shushi U wanna Try</div>
            <div className={styles["price"]}>$28.90</div>
          </div>
          <div className={styles["add-to-cart"]}>
            <div>Add</div>
          </div>
        </li> */}
      </ul>
    </section>
  );
};
