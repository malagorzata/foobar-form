import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";
import { getBasketItems, getTotalPrice } from "../features/basket/basketSlice";
//import { basketAmount } from "./BasketItem";

export default function MyBasket(props) {
  const basketItems = useSelector(getBasketItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      <ul className="basketList">
        {basketItems.map((basketItem) => (
          <BasketItem basketItem={basketItem} key={basketItem.id} {...props} />
        ))}
      </ul>
      <div className="paymentLine"></div>
      <div className="totalBasket">
        <p>Total:</p>
        <div className="totalPrice">{totalPrice}dkk</div>
      </div>
    </div>
  );
}
