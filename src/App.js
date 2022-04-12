import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { OpenPhrase } from "./OpenPhrase/OpenPhrase";
import { Menu } from "./Menu/Menu";
import CartContext from "./context/cart-context";

function App() {
  const numberOfCart = 0;

  return (
    <div className="App">
      <CartContext.Provider value={{ numberOfCart }}>
        <NavBar />
        <OpenPhrase/>
        <Menu />
      </CartContext.Provider>
    </div>
  );
}

export default App;
