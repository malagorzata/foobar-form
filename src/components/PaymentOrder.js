import { getBasketItems } from "../features/basket/basketSlice";
import { useSelector } from "react-redux";

export default function PaymentOrder({ basket }) {
  const basketItems = useSelector(getBasketItems);

  return (
    <div className="allOrders">
      {basketItems.map((basketItem) => (
        <PaymentBasketItem {...basketItem} />
      ))}
    </div>
  );
}

function PaymentBasketItem(props) {
  const totalPrice = 50 * props.amount;

  return (
    <article className="fullOrder">
      <img src={`../beer-images/${props.img}`} alt="el hefe" className="checkoutImg" />
      <div className="orderDetails">
        <h2 className="beerNameOrder">{props.name}</h2>
        <p className="beerPriceOrder">50 DKK</p>
        <div className="qtCheckout">{props.amount}</div>
      </div>
      <p className="finalBeerPrice">{totalPrice} DKK</p>
    </article>
  );
}
