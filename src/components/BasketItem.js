import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromBasket, minus, plus } from "../features/basket/basketSlice";

export default function BasketItem(props) {
  const dispatch = useDispatch();

  //adding to cart functions
  function minus1() {
    dispatch(minus({ basketItemId: props.basketItem.id }));
  }

  function plus1() {
    dispatch(plus({ basketItemId: props.basketItem.id }));
  }

  return (
    <div>
      <li className="listItem">
        <div className="basketItem">
          <div className="deleteItem" onClick={() => dispatch(removeItemFromBasket({ basketItemId: props.basketItem.id }))}>
            x
          </div>
          <div className="basketImg">
            <img src={`../beer-images/${props.basketItem.img}`} alt={`${props.basketItem.img}`} />
          </div>
          <div className="itemInfo">
            <h3>{props.basketItem.name}</h3>
            <div> {props.basketItem.price}dkk</div>
            <div className="itemButtons">
              <button className="minusBtn" onClick={minus1} disabled={props.soldout || props.basketItem.amount === 0}>
                -
              </button>
              <p> {props.basketItem.amount}</p>
              <button className="plusBtn" onClick={plus1}>
                +
              </button>
            </div>
          </div>
          <div className="itemTotalPrice">{40 * props.basketItem.amount}dkk</div>
        </div>
      </li>
    </div>
  );
}
