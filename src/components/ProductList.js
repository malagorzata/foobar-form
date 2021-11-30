import Product from "./Product";
export default function ProductList(props) {
  console.log(props);
  const mapped = props.products.map((product) => <Product key={product.id} {...product} />);
  return (
    <section>
      <h1>Product List {props.break}</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
