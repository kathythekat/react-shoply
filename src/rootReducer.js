function rootReducer(state, action) {
  const { cartProducts } = state;
  const { product, id } = action;

  if (action.type === "ADD_TO_CART") {
    if (cartProducts.some(p => p.id === id)) {
      return {
        ...state,
        cartProducts: cartProducts.map(p => p.id === id ? ({ ...p, quantity: p.quantity + 1 }) : p)
      };
    }
    return {
      ...state,
      cartProducts: [...cartProducts, { ...product, quantity: 1 }],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const cartProduct = cartProducts.find(p => p.id === id);
    if (!cartProduct) {
      return state;
    }
    else if (cartProduct.quantity === 1) {
      return {
        ...state,
        cartProducts: cartProducts.filter((item) => item.id !== id)
      };
    } else {
      return {
        ...state,
        cartProducts: cartProducts.map(p => p.id === id ? ({ ...p, quantity: p.quantity - 1 }) : p)
      };
    }
  }
  throw new Error("Invalid action!");
}

export default rootReducer;
