import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";
import { getBasketItems } from "../features/basket/basketSlice";

export default function MyBasket(props) {
  const basketItems = useSelector(getBasketItems);

  return (
    <div>
      <ul className="basketList">
        {/* <BasketItem basket={props.basket} {...props} /> */}
        {basketItems.map((basketItem) => (
          <BasketItem basketItem={basketItem} basket={props.basket} {...props} />
        ))}
      </ul>
      <div className="paymentLine"></div>
      <div className="totalBasket">
        <p>Total:</p>
        <div className="totalPrice">240,-</div>
      </div>
    </div>
  );
}
