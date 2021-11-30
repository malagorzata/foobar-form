import "./App.css";
import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://foo-bar-database.herokuapp.com/beertypes");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  });

  function addProduct() {
    setProducts((oldProducts) => oldProducts.concat({ productdisplayname: "Hi", price: 12 }));
  }
  function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }
  const productCopy = [...products];
  productCopy.sort((a, b) => {
    if (a.productdisplayname > b.productdisplayname) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className="App">
      <Nav />
      <button className="full-bleed" onClick={addProduct}>
        Add Product
      </button>
      <button onClick={addToBasket} className="full-bleed">
        Add to basket
      </button>

      <ProductList addToBasket={addToBasket} products={productCopy} break="hell yeah" />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
