import React from "react";
import MyBasket from "./MyBasket";
import PaymentMethod from "./PaymentMethod";

export default function MobileBasket(props) {
  return (
    <div className="mobileBasketContainer">
      <h2>Your basket</h2>
      <div className="closeBasket" onClick={props.handleClose}>
        x
      </div>
      <MyBasket basket={props.basket} {...props} />
      <PaymentMethod />
    </div>
  );
}
