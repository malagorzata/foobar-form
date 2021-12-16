import { getBasketItems } from "../features/basket/basketSlice";
import { useSelector } from "react-redux";

export default function PaymentOrder() {
  const basketItems = useSelector(getBasketItems);
  // console.log(basketItems);
  return (
    <div className="allOrders">
      {basketItems.map((basketItem) => (
        <PaymentBasketItem {...basketItem} />
      ))}
    </div>
  );
}

function PaymentBasketItem(props) {
  const totalPrice = 40 * props.amount;
  //console.log(props);
  return (
    <article className="fullOrder">
      <img src={`../beer-images/${props.img}`} alt={props.img} className="checkoutImg" />
      <div className="orderDetails">
        <h2 className="beerNameOrder">{props.name}</h2>
        <p className="beerPriceOrder">40 DKK</p>
        <div className="qtCheckout">{props.amount}</div>
      </div>
      <p className="finalBeerPrice">{totalPrice} DKK</p>
    </article>
  );
}
