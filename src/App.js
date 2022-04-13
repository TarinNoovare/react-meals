import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { OpenPhrase } from "./OpenPhrase/OpenPhrase";
import { Menu } from "./Menu/Menu";
import CartContext from "./context/cart-context";

function App() {
  const menuList = [
    {
      id: 0,
      title: "Sushi",
      phrase: "Delicious Shushi U wanna Try",
      price: 28.99,
      amount: 0,
    },
    {
      id: 1,
      title: "Fried Rice",
      phrase: "Rice with Fried, You know it...",
      price: 10.99,
      amount: 0,
    },
    {
      id: 2,
      title: "Green Bowl",
      phrase: "Healthy and Green",
      price: 18.99,
      amount: 0,
    },
    {
      id: 3,
      title: "Barbecue Burger",
      phrase: "American, Raw, Meaty",
      price: 12.99,
      amount: 0,
    },
    {
      id: 4,
      title: "Schnitzel",
      phrase: "A German Specialty",
      price: 16.99,
      amount: 0,
    },
  ];

  return (
    <div className="App">
      <CartContext.Provider value={{ menuList }}>
        <NavBar />
        <OpenPhrase />
        <Menu />
      </CartContext.Provider>
    </div>
  );
}

export default App;
