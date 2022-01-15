import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Basket from "./Basket";

function Wrapper(props) {
  // const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <ProductList products={props.tap} />
      <Basket basket={props.basket} />
    </div>
  );
}

export default Wrapper;
