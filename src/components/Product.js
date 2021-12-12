import { useState } from "react";
import ProductView from "./ProductView";
import { useDispatch } from "react-redux";

import { addItemToBasket } from "../features/basket/basketSlice";

// import image from "../beer-images/elhefe.png";
export default function Product(props) {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

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
          <button
            className="addToBasket"
            onClick={() => {
              dispatch(addItemToBasket({ props, amount }));
            }}
          >
            ADD TO BASKET
          </button>
        </div>
      </article>
      {shown && <ProductView addItemToBasket={props.addItemToBasket} handleClose={toggleProduct} {...props} />}
    </div>
  );
}
