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
        price: 40,
        amount: action.payload.amount, //How do i get the amount from product view??
        totalPrice: 40 * action.payload.amount,
      });
    },
  },
});

export const getBasketItems = (state) => state.basket.basketItems;

export const { addItemToBasket } = slice.actions;

export default slice.reducer;
