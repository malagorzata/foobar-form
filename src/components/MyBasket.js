import BasketItem from "./BasketItem";

export default function MyBasket(props) {
  return (
    <div>
      <ul className="basketList">
        <BasketItem />
      </ul>
    </div>
  );
}
