import Nav from "./Nav";
function OrderCompleted(props) {
  return (
    <div id="order_completed">
      <div className="foobar_wrapper">
        <Nav />
      </div>
      <div className="ordercompleted_wrapper">
        <div className="ordercompleted">
          <h1>Thank you for your order!</h1>
          <h2>Your order ID is</h2>
          <div className="circle">#{props.orderID}</div>

          <p>We have now received your order - please check the queue to see when to pick it up!</p>
        </div>
      </div>
    </div>
  );
}

export default OrderCompleted;
