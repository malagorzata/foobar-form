export default function ProductView(props) {
  return (
    <div className="productView">
      <div className="backArrow" onClick={props.handleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path id="Icon_material-arrow_back" data-name="Icon material-arrow_back" d="M30,16.5H11.745L20.13,8.115,18,6,6,18,18,30l2.115-2.115L11.745,19.5H30Z" transform="translate(-6 -6)" />
        </svg>
      </div>
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
