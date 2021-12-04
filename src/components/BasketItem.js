export default function BasketItem(props) {
  return (
    <div>
      <li className="listItem">
        <div className="basketItem">
          <div className="deleteItem">x</div>
          <div className="basketImg">
            <img src={`../beer-images/${props.label}`} />
          </div>
          <div className="itemInfo">
            <h3>Name: {props.name}</h3>
            <div> Price: {props.alc}</div>
            <div className="itemButtons">
              <button className="minusBtn">-</button>
              <p> Q:{props.basket.length}</p>
              <button className="plusBtn">+</button>
            </div>
          </div>
          <div className="itemTotalPrice"> Total: 80,-</div>
        </div>
      </li>
    </div>
  );
}
