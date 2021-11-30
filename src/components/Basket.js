import MyBasket from "./MyBasket";
import PaymentMethod from "./PaymentMethod";

export default function Basket(props) {
  return (
    <aside className="basketContainer">
      <h2>Your basket</h2>
      <MyBasket {...props} />
      <PaymentMethod />
    </aside>
  );
}
