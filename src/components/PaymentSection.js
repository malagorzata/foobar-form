import PaymentForm from "./PaymentForm";
import Nav from "./Nav";
import CheckoutView from "./CheckoutView";

export default function PaymentSection(props) {
  return (
    <main>
      <Nav />
      <h1>Payment Details</h1>
      <div id="payment_section">
        <CheckoutView {...props} />
        <PaymentForm />
      </div>
    </main>
  );
}
