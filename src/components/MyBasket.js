import BasketItem from "./BasketItem";

export default function MyBasket(props) {
  return (
    <div>
      <ul className="basketList">
        <BasketItem />
        <BasketItem />
      </ul>
      <div className="paymentLine"></div>
      <div className="totalBasket">
        <p>Total:</p>
        <div className="totalPrice">240,-</div>
      </div>
    </div>
  );
}
