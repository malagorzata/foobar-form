import { useState } from "react";
import ProductView from "./ProductView";

export default function Product(props) {
  /* console.log(props.addToBasket); */

  const [setMessage] = useState("hi mom");

  const color = props.soldOut ? "red" : "white";
  function handleClick() {
    setMessage((prevState) => prevState + " and dad");
  }

  /* for showing the selected product */
  const [shown, showProduct] = useState(false);
  const toggleProduct = () => {
    showProduct(!shown);
  };

  return (
    <div>
      <article
        style={{
          backgroundColor: color,
        }}
      >
        <a onClick={toggleProduct}>
          <img src={`../beer-images/${props.label}`} alt={props.label} className="beerImage" />
          {/* <img src={image} alt="img" className="beerImage" /> */}
          <h2>{props.name}</h2>
          <div className="beer-price">
            <h3>{props.category}</h3>
            <div className="line">|</div>
            <p>50,-</p>
          </div>
        </a>
        <div className="addBasket">
          <button className="addToBasket" onClick={handleClick}>
            Add to basket
          </button>
        </div>
      </article>
      {shown && <ProductView addToBasket={props.addToBasket} handleClose={toggleProduct} {...props} />}
    </div>
  );
}
