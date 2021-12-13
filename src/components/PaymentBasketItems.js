import PaymentOrder from "./PaymentOrder";
import React, { useState } from "react";
import { getBasketItems, getTotalPrice } from "../features/basket/basketSlice";
import { useSelector } from "react-redux";

export default function PaymentBasketItems(props) {
  const basketItems = useSelector(getBasketItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div id="orders">
      <PaymentOrder {...props} />
      <section id="finalOrderPrice">
        <hr></hr>
        <div className="orderPrice">
          <p>Total:</p>
          <p>{totalPrice} DKK</p>
        </div>
      </section>
    </div>
  );
}
