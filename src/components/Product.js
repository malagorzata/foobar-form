import { useState } from "react";

// import image from "../beer-images/elhefe.png";
export default function Product(props) {
  const [setMessage] = useState("hi mom");

  const color = props.soldOut ? "red" : "white";
  function handleClick() {
    setMessage((prevState) => prevState + " and dad");
  }

  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <a href="#">
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
  );
}
