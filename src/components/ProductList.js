import Product from "./Product";
export default function ProductList(props) {
  console.log(props);
  const mapped = props.products.map((product) => <Product key={product.id} {...product} />);
  return (
    <section className="productListHead">
      <h1>Order your favourite beer</h1>
      <h2>Beer is served from the tap in a glass</h2>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
