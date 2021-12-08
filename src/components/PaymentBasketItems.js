import PaymentOrder from "./PaymentOrder";

export default function PaymentBasketItems(props) {
  return (
    <div id="orders">
      <PaymentOrder {...props} />
      <section id="finalOrderPrice">
        <hr></hr>
        <div className="orderPrice">
          <p>Total:</p>
          <p>240 DKK</p>
        </div>
      </section>
    </div>
  );
}
