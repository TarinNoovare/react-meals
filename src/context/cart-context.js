import React from "react";

const CartContext = React.createContext({
  menuList: [],
  currentInCart: [],
  setCurrentInCart: () => {},
});

export default CartContext;
