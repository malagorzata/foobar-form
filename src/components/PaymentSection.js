import PaymentForm from "./PaymentForm";
import Nav from "./Nav";
import CheckoutView from "./CheckoutView";
import { useNavigate } from "react-router-dom";
import PostData from "./PostData";
import { getBasketItems } from "../features/basket/basketSlice";
import { useSelector } from "react-redux";

export default function PaymentSection(props) {
  const basketItems = useSelector(getBasketItems);
  // console.log(basketItems);

  let PostOrders = basketItems.map((order) => {
    return { name: order.name, amount: Number(order.amount), price: order.price };
  });

  // console.log(PostOrders);

  let navigate = useNavigate();
  function orderSubmit(orderData) {
    PostData(orderData, "https://foo-bar-database.herokuapp.com/order", (data) => {
      return data.message === "added" ? <div>{(PostOrders, data, props.setOrderID(data.id))}</div> : null;
    });
    // console.log(orderData);
  }

  return (
    <main>
      <Nav />
      <h1>Payment Details</h1>
      <div id="payment_section">
        <CheckoutView {...props} />
        <form
          autocomplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            orderSubmit(PostOrders);
            navigate("/ordercompleted");
          }}
        >
          <div class="form">
            <PaymentForm />
            <button type="submit" className="payNow">
              PAY NOW
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
