import PaymentForm from "./PaymentForm";
import Nav from "./Nav";
import CheckoutView from "./CheckoutView";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostData from "./PostData";

export default function PaymentSection(props) {
  let PostOrders = props.basket.map((order) => {
    return { name: order.product.name, amount: Number(order.amount) };
  });
  let navigate = useNavigate();
  function orderSubmit(orderData) {
    PostData(orderData, "https://foo-bar-database.herokuapp.com/order", (data) => {
      return data.message === "added" ? <div>{props.setOrderID(data.id)}</div> : null;
    });
    console.log(orderData);
  }

  return (
    <main>
      <Nav />
      <h1>Payment Details</h1>
      <div id="payment_section">
        <CheckoutView {...props} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            orderSubmit(PostOrders);
            navigate("/ordercompleted");
          }}
        >
          <PaymentForm />
          <button type="submit" className="payNow">
            PAY NOW
          </button>
        </form>
      </div>
    </main>
  );
}
