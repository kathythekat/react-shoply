import { useContext } from "react";
import { useParams } from "react-router";
import DispatchContext from "./dispatchContext";
import ProductContext from "./productContext";

function ProductDetails() {
  const { id } = useParams();
  const state = useContext(ProductContext);
  const dispatch = useContext(DispatchContext);
  const product = state.allProducts.find(p => p.id === id);
  const { name, price, description, image_url } = product;

  function addToCart() {
    dispatch({
      type: "ADD_TO_CART",
      product,
      id
    });
  }

  function removeFromCart() {
    dispatch({
      type: "REMOVE_FROM_CART",
      product,
      id
    });
  }
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img style={{ maxWidth: "300px" }} src={image_url} />
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
}

export default ProductDetails;
