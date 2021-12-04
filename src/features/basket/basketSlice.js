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
        name: action.payload.props.name,
        amount: action.payload.props.amount,
        price: action.payload.props.amount + action.payload.props.alc,
      });
    },
  },
});

export const getBasketItems = (state) => state.basket.basketItems;

export const { addItemToBasket } = slice.actions;

export default slice.reducer;
