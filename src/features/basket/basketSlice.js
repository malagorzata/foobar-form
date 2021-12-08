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
        totalPrice: 50 * action.payload.amount,
      });
    },
    removeItemFromBasket: (state, action) => {
      console.log("delete");
      state.basketItems = state.basketItems.filter((basketItem) => basketItem.id !== action.payload.basketItemId);
    },
  },
});

export const getBasketItems = (state) => state.basket.basketItems;

export const getTotalPrice = (state) => {
  return state.basket.basketItems.reduce((total, basketItem) => {
    return basketItem.totalPrice + total;
  }, 0);
};

export const { addItemToBasket, removeItemFromBasket } = slice.actions;

export default slice.reducer;
