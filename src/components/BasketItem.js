export default function BasketItem(props) {
  return (
    <div>
      <li className="listItem">
        <div className="basketItem">
          <div className="deleteItem">x</div>
          <div className="basketImg">
            <img src="../beer-images/elhefe.png" />
          </div>
          <div className="itemInfo">
            <h3>Row26</h3>
            <div>40,-</div>
            <div className="itemButtons">
              <button className="minusBtn">-</button>
              <p>2</p>
              <button className="plusBtn">+</button>
            </div>
          </div>
          <div className="itemTotalPrice">80,-</div>
        </div>
      </li>
    </div>
  );
}
