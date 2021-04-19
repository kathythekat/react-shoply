import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "./productContext";

function ProductList() {
  const state = useContext(ProductContext);

  return (
    <div>
      <h2>Total items in cart: {state.cartProducts.length}</h2>
      <ul>
        {state.allProducts.map((p) => (
          <li key={p.id}>
            <Product {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
