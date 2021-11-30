export default function MyBasket(props) {
  return (
    <div>
      <h2>Your Basket</h2>
      <p>{props.basket.length} items</p>
      <p>$420</p>
    </div>
  );
}
