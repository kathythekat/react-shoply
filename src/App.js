import "./App.css";
import rootReducer from "./rootReducer";
import data from "./data.json";
import { useReducer } from "react";
import ProductList from "./ProductList";
import ProductContext from "./productContext";
import DispatchContext from "./dispatchContext";

const allProducts = Object.keys(data.products).map((id) => ({
  ...data.products[id],
  id,
}));

console.log(allProducts);

function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    allProducts,
    cartProducts: [],
  });

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={state}>
          <ProductList />
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
