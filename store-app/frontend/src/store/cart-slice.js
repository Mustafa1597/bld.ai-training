import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialCartState = { items: [], numItems: 0, showCart: false };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.numItems = state.items.reduce(
        (total, item) => (total += item.quantity),
        0
      );
    },
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.numItems += 1;
    },
    updateItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.numItems += 1;
      state.items[itemIndex].total_price = action.payload.total_price;
      state.items[itemIndex].quantity += 1;
    },
    removeItem: (state, action) => {
      if (action.payload.type === "decrement") {
        const target = state.items.find(
          (item) => item.id === action.payload.item.id
        );
        target.total_price = action.payload.item.total_price;
        target.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.item.id
        );
      }
      state.numItems -= 1;
    },
    triggerShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
});

export const CartActions = CartSlice.actions;

export const loadCartItemsAction = () => {
  return (dispatch) => {
    axios.get("http://127.0.0.1:8000/api/items/cart").then((response) => {
      dispatch(CartActions.setItems(response.data));
    });
  };
};

export const addProductToCartAction = (product) => {
  return (dispatch) => {
    axios
      .get(`http://127.0.0.1:8000/api/items/${product.id}`)
      .then((response) => {
        dispatch(updateItemAction(response.data));
      })
      .catch((error) => {
        axios
          .post("http://127.0.0.1:8000/api/items/cart", {
            product: product,
            quantity: 1,
          })
          .then((response) => dispatch(CartActions.addItem(response.data)));
      });
  };
};

export const updateItemAction = (item) => {
  return (dispatch) => {
    axios
      .put(`http://127.0.0.1:8000/api/items/cart/${item.id}`, {
        product: item.product,
        quantity: item.quantity + 1,
      })
      .then((response) => {
        dispatch(CartActions.updateItem(response.data));
      });
  };
};

export const removeItemAction = (item) => {
  return (dispatch) => {
    if (item.quantity === 1) {
      axios.delete(`http://127.0.0.1:8000/api/items/cart/${item.id}`);
      dispatch(CartActions.removeItem({ type: "remove", item: item }));
    } else {
      axios
        .put(`http://127.0.0.1:8000/api/items/cart/${item.id}`, {
          product: item.product,
          quantity: item.quantity - 1,
        })
        .then((response) => {
          dispatch(
            CartActions.removeItem({ type: "decrement", item: response.data })
          );
        });
    }
  };
};

export default CartSlice;
