export default function ProductView() {
  return (
    <div className="productView">
      <div className="productContainer">
        <div className="productPhoto">
          <img src="../beer-images/el-hefe.png" />
        </div>
        <div className="productInfo">
          <h1>El Hefe</h1>
          <div className="perCountry">
            <span className="alcPer">5.4</span>% alc, <span>Germany</span>
          </div>
          <div className="qualities">
            <div className="quality 1">HEFEWEIZEN</div>
            <div className="quality 2">light</div>
            <div className="quality 3">bitter</div>
          </div>
          <div className="productDesc">Refreshing wheat or rye beers that can display more hop character and less yeast character than their German cousins.</div>
          <div className="productVPrice">40dkk</div>
          <div className="singleProductButtons">
            <button>-</button>
            <p>2</p>
            <button>+</button>
            <button className="addBtn">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
