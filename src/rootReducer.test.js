import rootReducer from "./rootReducer";

let state;

beforeEach(async function () {
  state = {
    allProducts: [
      {
        name: "tv",
        id: "47314fa1-ae56-4eae-80be-af6691145951",
      },
      {
        name: "microwave",
        id: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
      },
    ],
    cartProducts: [],
  };
});

it("tests for adding to cart", function () {
  const action = {
    type: "ADD_TO_CART",
    product: { name: "tv", id: "47314fa1-ae56-4eae-80be-af6691145951" },
  };

  expect(rootReducer(state, action)).toEqual({
    allProducts: [
      {
        name: "tv",
        id: "47314fa1-ae56-4eae-80be-af6691145951",
      },
      {
        name: "microwave",
        id: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
      },
    ],
    cartProducts: [
      {
        name: "tv",
        id: "47314fa1-ae56-4eae-80be-af6691145951",
        quantity: 1,
      },
    ],
  });
});

it("tests for removing from cart", function () {
  const action = {
    type: "REMOVE_FROM_CART",
    id: "47314fa1-ae56-4eae-80be-af6691145951",
    product: { name: "tv", id: "47314fa1-ae56-4eae-80be-af6691145951" },
  };

  expect(
    rootReducer(
      {
        ...state,
        cartProducts: [
          {
            name: "tv",
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            quantity: 1,
          },
        ],
      },
      action
    )
  ).toEqual({
    allProducts: [
      {
        name: "tv",
        id: "47314fa1-ae56-4eae-80be-af6691145951",
      },
      {
        name: "microwave",
        id: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
      },
    ],
    cartProducts: [],
  });
});

it("tests for invalid action", () => {
  const action = {
    type: "REMOVE",
    id: "47314fa1-ae56-4eae-80be-af6691145951",
    product: { name: "tv", id: "47314fa1-ae56-4eae-80be-af6691145951" },
  };
  expect(() => rootReducer(state, action)).toThrow();
});

it("tests for removing invalid item from cart", function () {
  const action = {
    type: "REMOVE_FROM_CART",
    id: "",
    product: { name: "", id: "" },
  };
  expect(rootReducer(state, action)).toEqual(state);
});
