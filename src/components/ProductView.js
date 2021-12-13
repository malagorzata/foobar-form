import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket } from "../features/basket/basketSlice";

export default function ProductView(props) {
  //console.log(props);
  const [colors, setColors] = useState([]);

  /*  function fetchColors() {
    fetch("beer-colors.json")
      .then((response) => response.json())
      .then((colorsData) => {
        setColors(colorsData);
      });
  }
  fetchColors(); */

  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  //adding to cart functions
  function minus() {
    if (amount <= 0) return;

    const newAmount = amount - 1;
    setAmount(newAmount);
  }

  function plus() {
    const newAmount = amount + 1;
    setAmount(newAmount);
  }

  return (
    <div className="productView">
      <div className="backArrow" onClick={props.handleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path id="Icon_material-arrow_back" data-name="Icon material-arrow_back" d="M30,16.5H11.745L20.13,8.115,18,6,6,18,18,30l2.115-2.115L11.745,19.5H30Z" transform="translate(-6 -6)" />
        </svg>
      </div>
      <div className="productContainer">
        <div className="productPhoto">
          <img src={`../beer-images/${props.label}`} />
        </div>
        <div className="productInfo">
          <h1>{props.name}</h1>
          <div className="perCountry">
            <span className="alcPer">{props.alc}</span>% alc, <span>Denmark</span>
          </div>
          <div className="qualities">
            <div className="quality 1">{props.category}</div>
            <div className="quality 2">light</div>
            <div className="quality 3">bitter</div>
          </div>
          <div className="productDesc">{props.description.overallImpression}</div>
          <div className="productVPrice">50dkk</div>
          <div className="singleProductButtons">
            <div className="plusMinusBtn">
              <button onClick={minus} disabled={props.soldout || amount === 0} className="minusBtn">
                -
              </button>
              <p>{amount}</p>
              <button onClick={plus} disabled={props.soldout} className="plusBtn">
                +
              </button>
            </div>
            <button
              onClick={() => {
                dispatch(addItemToBasket({ props, amount, basketItemName: props.name }));
              }}
              className="addBtn"
              disabled={props.soldout || amount === 0}
            >
              add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
