import PaymentBasketItems from "./PaymentBasketItems";
export default function CheckoutView() {
  return (
    <div id="order_final">
      <button className="editOrder">EDIT ORDER</button>
      <h2 className="yourOrder">Your Order</h2>
      <PaymentBasketItems />
    </div>
  );
}
