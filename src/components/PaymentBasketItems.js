export default function PaymentBasketItems() {
  return (
    <div id="orders">
      <div className="allOrders">
        <article className="fullOrder">
          <img src="../beer-images/elhefe.png" alt="el hefe" className="checkoutImg" />
          <div className="orderDetails">
            <h2 className="beerNameOrder">El Hefe</h2>
            <p className="beerPriceOrder">40 DKK</p>
            <div className="qtCheckout">
              <button className="minus"> - </button>2<button className="plus"> + </button>
            </div>
          </div>
          <p className="finalBeerPrice">80 DKK</p>
        </article>
      </div>

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
