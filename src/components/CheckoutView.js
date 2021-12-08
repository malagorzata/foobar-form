import PaymentBasketItems from "./PaymentBasketItems";
import { Link } from "react-router-dom";

export default function CheckoutView(props) {
  return (
    <div id="order_final">
      <Link to="/">
        <button className="editOrder">EDIT ORDER</button>
      </Link>
      <h2 className="yourOrder">Your Order</h2>
      <PaymentBasketItems {...props} />
    </div>
  );
}
