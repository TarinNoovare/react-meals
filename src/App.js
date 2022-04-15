import "./App.css";
import { useState, useEffect } from "react";
import { NavBar } from "./NavBar/NavBar";
import { OpenPhrase } from "./OpenPhrase/OpenPhrase";
import { Menu } from "./Menu/Menu";
import { CartSummary } from "./CartSummary/CartSummary";
import { ErrorModal } from "./ErrorModal/ErrorModal";
import CartContext from "./context/cart-context";

function App() {
  const menuList = {
    0: {
      title: "Sushi",
      phrase: "Delicious Sushi U wanna Try",
      price: 28.99,
      amount: 0,
    },
    1: {
      title: "Fried Rice",
      phrase: "Rice with Fried, You know it...",
      price: 10.99,
      amount: 0,
    },
    2: {
      title: "Green Bowl",
      phrase: "Healthy and Green",
      price: 18.99,
      amount: 0,
    },
    3: {
      title: "Barbecue Burger",
      phrase: "American, Raw, Meaty",
      price: 12.99,
      amount: 0,
    },
    4: {
      title: "Schnitzel",
      phrase: "A German Specialty",
      price: 16.99,
      amount: 0,
    },
  };

  const [currentInCart, setCurrentInCart] = useState(menuList);
  const [showCartSummary, setShowCartSummary] = useState(false);
  const [numberOfCart, setNumberOfCart] = useState(0);

  const [showErrorModal, setShowErrorModal] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Current In Cart");
      console.log(currentInCart);
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [currentInCart]);

  return (
    <div className="App">
      <CartContext.Provider
        value={{
          menuList,
          currentInCart,
          setCurrentInCart,
          showCartSummary,
          setShowCartSummary,
          numberOfCart,
          setNumberOfCart,
          showErrorModal,
          setShowErrorModal,
        }}
      >
        <NavBar />
        <OpenPhrase />
        <Menu />
        <CartSummary />
        <ErrorModal />
      </CartContext.Provider>
    </div>
  );
}

export default App;
