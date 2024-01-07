import { Link } from "react-router-dom";

function CheckoutSuccessPage() {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>Checkout success page</h1>
      <p>Your order is send!</p>
      <Link to="/">Go back to Home page</Link>
    </article>
  );
}

export default CheckoutSuccessPage;
