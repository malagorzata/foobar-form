import MyBasket from "./MyBasket";
import PaymentMethod from "./PaymentMethod";
import { getBasketItems } from "../features/basket/basketSlice";
import { useSelector } from "react-redux";

export default function Basket(props) {
  //for getting basket items and showing if basket if empty
  const basketItems = useSelector(getBasketItems);
  let visibility = "";
  let display = "";
  if (basketItems.length === 0) {
    visibility = "initial";
  } else {
    visibility = "hidden";
    display = "none";
  }

  return (
    <aside className="basketContainer">
      <h2>Your basket</h2>
      <p className="emptyBasket" style={{ visibility: visibility, display: display }}>
        Your basket is empty
      </p>
      <MyBasket basket={props.basket} {...props} />
      <PaymentMethod />
    </aside>
  );
}
