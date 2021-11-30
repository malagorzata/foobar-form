export default function ProductView(props) {
  return (
    <div className="productView">
      <div className="productContainer">
        <div className="productPhoto">
          <img src={`../beer-images/${props.label}`} />
        </div>
        <div className="productInfo">
          <h1>{props.name}</h1>
          <div className="perCountry">
            <span className="alcPer">{props.alc}</span>% alc, <span>Denmark</span>
          </div>
          <div className="qualities">
            <div className="quality 1">{props.category}</div>
            <div className="quality 2">light</div>
            <div className="quality 3">bitter</div>
          </div>
          <div className="productDesc">{props.description.overallImpression}</div>
          <div className="productVPrice">40dkk</div>
          <div className="singleProductButtons">
            <button className="minusBtn">-</button>
            <p>2</p>
            <button className="plusBtn">+</button>
            <button className="addBtn">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
