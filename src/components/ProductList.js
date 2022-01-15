import Product from "./Product";
import Nav from "./Nav";
import React, { useState } from "react";

export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product {...product} key={product.name} addToBasket={props.addToBasket} />);
  const [modal, showModal] = useState(true);
  const toggleProduct = () => {
    showModal(!modal);
  };

  return (
    <section className="productListHead">
      <Nav />
      <h1>Order your favourite beer</h1>
      <h2>Beer is served from the tap in a glass</h2>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
