import { useContext } from "react";
import DispatchContext from "./dispatchContext";
import ProductContext from "./productContext";

function Product({ name, price, description, id, image_url }) {
  const dispatch = useContext(DispatchContext);
  const state = useContext(ProductContext);

  function addToCart(evt) {
    console.log(evt.target.closest("div"));
    dispatch({
      type: "ADD_TO_CART",
      product: state.allProducts.find((p) => p.id === id),
    });
  }

  function removeFromCart(evt) {
    const productId = evt.target.closest("div").id;
    dispatch({
      type: "REMOVE_FROM_CART",
      id: productId,
    });
  }

  return (
    <div data-product="" id={id}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src="" />
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove to Cart</button>
    </div>
  );
}

export default Product;
