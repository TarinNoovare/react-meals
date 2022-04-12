import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import CartContext from "./context/cart-context";

function App() {
  const numberOfCart = 0;

  return (
    <div className="App">
      <CartContext.Provider value={{ numberOfCart }}>
        <NavBar />
      </CartContext.Provider>
    </div>
  );
}

export default App;
