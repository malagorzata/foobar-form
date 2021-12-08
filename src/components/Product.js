import { useState } from "react";
import ProductView from "./ProductView";

// import image from "../beer-images/elhefe.png";
export default function Product(props) {
  /* console.log(props.addToBasket); */

  /* for showing the selected product */
  const [shown, showProduct] = useState(false);
  const toggleProduct = () => {
    showProduct(!shown);
  };

  return (
    <div>
      <article>
        <a className="beerView" onClick={toggleProduct}>
          <img src={`../beer-images/${props.label}`} alt={props.label} className="beerImage" />
          {/* <img src={image} alt="img" className="beerImage" /> */}
          <h2>{props.name}</h2>
          <div className="beer-price">
            <h3>{props.category}</h3>
            <div className="line"></div>
            <p>50 dkk</p>
          </div>
        </a>
        <div className="addBasket">
          <button className="addToBasket">ADD TO BASKET</button>
        </div>
      </article>
      {shown && <ProductView addToBasket={props.addToBasket} handleClose={toggleProduct} {...props} />}
    </div>
  );
}
