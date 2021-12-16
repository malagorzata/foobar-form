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
          <h2>Your order number is:</h2>
          <div className="circle">#{props.orderID}</div>

          <p>We have now received your order - please check the queue to see when to pick it up!</p>
        </div>
        <div className="beers">
          <div className="beer-left">
            <div className="beerGlass">
              <img src="../images/glass2.svg" alt="beer glass" />
            </div>
            <div className="beerLiquid">
              <img className="serving" src="../images/beer2.svg" alt="beer" />
            </div>
            <div className="beerGlass">
              <img src="../images/shadows2.svg" alt="beer glass" />
            </div>
          </div>
          <div className="beer-right">
            <div className="beerGlass">
              <img src="../images/glass.svg" alt="beer glass" />
            </div>
            <div className="beerLiquid">
              <img className="serving" src="../images/beer.svg" alt="beer" />
            </div>
            <div className="beerGlass">
              <img src="../images/shadows.svg" alt="beer glass" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCompleted;
