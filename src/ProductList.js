import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "./productContext";

function ProductList({title, type}) {
  const state = useContext(ProductContext);
  const products = type === "cart" ? state.cartProducts : state.allProducts;

  return (
    <div>
      <h1>{title}</h1>
      <h2>Total items in cart: {state.cartProducts.reduce((acc, cur) => acc + cur.quantity, 0)}</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Product product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ProductList;
