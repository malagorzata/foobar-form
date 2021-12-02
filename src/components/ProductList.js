import Product from "./Product";
import Nav from ".//Nav";

export default function ProductList(props) {
  console.log(props);
  const mapped = props.products.map((product) => <Product key={product.id} {...product} />);
  return (
    <section className="productListHead">
      <Nav />

      <h1>Order your favourite beer</h1>
      <h2>Beer is served from the tap in a glass</h2>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
