function rootReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cartProducts: [...state.cartProducts, { ...action.product }],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartProducts: state.cartProducts.filter((item) => item.id !== action.id),
    };
  }
  throw new Error("Invalid action!");
}

export default rootReducer;
