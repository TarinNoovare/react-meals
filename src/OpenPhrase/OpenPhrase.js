import styles from "./OpenPhrase.module.css";
import React from "react";

const OpenPhrase = () => {
  return (
    <section className={styles["open-phrase"]}>
      <h2>React Meals</h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat."
      </p>
    </section>
  );
};

export default React.memo(OpenPhrase);
