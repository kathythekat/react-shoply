import "./App.css";
import rootReducer from "./rootReducer";
import data from "./data.json";
import { useReducer } from "react";
import ProductContext from "./productContext";
import DispatchContext from "./dispatchContext";
import Routes from "./Routes";
import NavBar from "./NavBar";

const allProducts = Object.keys(data.products).map((id) => ({
  ...data.products[id],
  id,
}));

function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    allProducts,
    cartProducts: []
  });

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={state}>
          <NavBar />
          <Routes/>
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
