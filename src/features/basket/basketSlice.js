import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
  },
  reducers: {
    addItemToBasket: (state, action) => {
      //generating unique id for item
      const itemID = Math.floor(Math.random());

      state.basketItems.push({
        id: itemID,
        img: action.payload.props.label,
        name: action.payload.props.name,
        price: 50,
        amount: action.payload.amount, //How do i get the amount from product view??
        totalPrice: 50 * action.payload.amount,
      });
    },
  },
});

export const getBasketItems = (state) => state.basket.basketItems;

export const getTotalPrice = (state) => {
  return state.basket.basketItems.reduce((total, basketItem) => {
    return basketItem.totalPrice + total;
  }, 0);
};

export const { addItemToBasket } = slice.actions;

export default slice.reducer;
