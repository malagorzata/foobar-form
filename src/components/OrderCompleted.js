function OrderCompleted(props) {
  return (
    <>
      <div className="foobar_wrapper">
        <h1>Foobar</h1>
      </div>
      <div className="ordercompleted_wrapper">
        <div className="ordercompleted">
          <h1>Thank you for your order!</h1>
          <h2>Order id: {props.orderID}</h2>
          <p>We have now received your order - please check the queue to see when to pick it up!</p>
        </div>
      </div>
    </>
  );
}

export default OrderCompleted;
