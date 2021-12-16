import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket } from "../features/basket/basketSlice";

export default function ProductView(props) {
  //console.log(props);

  let color = "";
  let button = "";
  let buttonHover = "";
  let gradientColor = "";
  setColors();

  function setColors() {
    //setting background colors
    if (props.name === "El Hefe") {
      color = "#FED13D";
      button = "#F9E8B1";
      buttonHover = "#F3DA87";
      gradientColor = "linear-gradient(180deg, #FDEEBB 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Fairy Tale Ale") {
      color = "#EFACFF";
      button = "#F4C9FF";
      buttonHover = "#DCAEE8";
      gradientColor = "linear-gradient(180deg, #F9E1FF 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Row 26") {
      color = "#AEC1FF";
      button = "#CED6F3";
      buttonHover = "#AFBBEA";
      gradientColor = "linear-gradient(180deg, #C7D3FA 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "GitHop") {
      color = "#FFCBBB";
      button = "#F8D8CE";
      buttonHover = "#EEC2B4";
      gradientColor = "linear-gradient(180deg, #FDD1D0 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Hollaback Lager") {
      color = "#FFBB87";
      button = "#F9D7BC";
      buttonHover = "#EFCBAF";
      gradientColor = "linear-gradient(180deg, #FEE2CD 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Mowintime") {
      color = "#A5FFDA";
      button = "#C1F7E1";
      buttonHover = "#BAEAD7";
      gradientColor = "linear-gradient(180deg, #B8FCE1 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Hoppily Ever After") {
      color = "#A2E34C";
      button = "#C9E89F";
      buttonHover = "#B4D981";
      gradientColor = "linear-gradient(180deg, #DAFCAE 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Steampunk") {
      color = "#A0B3C2";
      button = "#D6E6F3";
      buttonHover = "#CCDAE4";
      gradientColor = "linear-gradient(180deg, #CDDEEB 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Ruined Childhood") {
      color = "#E9EF39";
      button = "#F2F5AA";
      buttonHover = "#E7EB81";
      gradientColor = "linear-gradient(180deg, #FBFDB6 0%, rgba(255, 255, 255, 1) 100%)";
    } else if (props.name === "Sleighride") {
      color = "#CAABFF";
      button = "#E2D4FC";
      buttonHover = "#CFBEEE";
      gradientColor = "linear-gradient(180deg, #E0D0FD 0%, rgba(255, 255, 255, 1) 100%)";
    }
  }

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
    <div
      className="productView"
      style={{
        background: gradientColor,
      }}
    >
      <div className="backArrow" onClick={props.handleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path id="Icon_material-arrow_back" data-name="Icon material-arrow_back" d="M30,16.5H11.745L20.13,8.115,18,6,6,18,18,30l2.115-2.115L11.745,19.5H30Z" transform="translate(-6 -6)" />
        </svg>
      </div>
      <div className="productContainer">
        <div className="productPhoto">
          <img src={`../beer-images/${props.label}.webp`} alt={props.label} />
        </div>
        <div className="productInfo">
          <h1>{props.name}</h1>
          <div className="perCountry">
            <span className="alcPer">{props.alc}</span>% alc, <span>Denmark</span>
          </div>
          <div className="qualities">
            <div className="quality 1" style={{ borderColor: color }}>
              {props.category}
            </div>
            <div className="quality 2" style={{ borderColor: color }}>
              light
            </div>
            <div className="quality 3" style={{ borderColor: color }}>
              bitter
            </div>
          </div>
          <div className="productDesc">{props.description.overallImpression}</div>
          <div className="productVPrice">40dkk</div>
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
              style={{
                backgroundColor: button,
              }}
            >
              add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
