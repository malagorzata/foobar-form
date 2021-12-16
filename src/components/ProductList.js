import Product from "./Product";
import Nav from "./Nav";

export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product addToBasket={props.addToBasket} {...product} />);

  return (
    <section className="productListHead">
      <Nav />
      <h1>Order your favourite beer</h1>
      <h2>Beer is served from the tap in a glass</h2>
      {/* <div className="introBeer">
        <div className="beerGlass">
          <img src="../images/glass.svg" alt="beer glass" />
        </div>
        <div className="beerLiquid">
          <img className="serving" src="../images/beer.svg" alt="beer" />
        </div>
        <div className="beerGlass">
          <img src="../images/shadows.svg" alt="beer glass" />
        </div>
      </div> */}
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
