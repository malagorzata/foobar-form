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
  return (
    <article className="fullOrder">
      <img src="../beer-images/elhefe.png" alt="el hefe" className="checkoutImg" />
      <div className="orderDetails">
        <h2 className="beerNameOrder">{props.name}</h2>
        <p className="beerPriceOrder">40 DKK</p>
        <div className="qtCheckout">
          <button className="minus"> - </button>2<button className="plus"> + </button>
        </div>
      </div>
      <p className="finalBeerPrice">80 DKK</p>
    </article>
  );
}
