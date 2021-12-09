import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
  },
  reducers: {
    addItemToBasket: (state, action) => {
      //generating unique id for item
      const id = new Date().getTime(); //generate id for basket item

      state.basketItems.push({
        id: id,
        img: action.payload.props.label,
        name: action.payload.props.name,
        price: 50,
        amount: action.payload.amount,
      });
    },

    removeItemFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter((basketItem) => basketItem.id !== action.payload.basketItemId);
    },

    minus: (state, action) => {
      state.basketItems = state.basketItems.map((basketItem) => {
        if (basketItem.id === action.payload.basketItemId) {
          basketItem.amount = basketItem.amount - 1;
        }
        return basketItem;
      });
      state.basketItems = state.basketItems.filter((basketItem) => basketItem.amount > 0);
    },

    plus: (state, action) => {
      state.basketItems = state.basketItems.map((basketItem) => {
        if (basketItem.id === action.payload.basketItemId) {
          basketItem.amount = basketItem.amount + 1;
        }
        return basketItem;
      });
    },
  },
});

export const getBasketItems = (state) => state.basket.basketItems;

export const getTotalPrice = (state) => {
  return state.basket.basketItems.reduce((total, basketItem) => {
    return basketItem.amount * basketItem.price + total;
  }, 0);
};

export const { addItemToBasket, removeItemFromBasket, minus, plus } = slice.actions;

export default slice.reducer;
