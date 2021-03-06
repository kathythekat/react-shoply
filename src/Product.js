import { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "./dispatchContext";

function Product({ product }) {
  const { name, price, id, quantity } = product;
  const dispatch = useContext(DispatchContext);

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
      <Link to={`/product/${id}`}>
        <p>{name}</p>
      </Link>
      <p>{price}</p>
      {quantity && <p>Quantity: {quantity}</p>}
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
}

export default Product;
