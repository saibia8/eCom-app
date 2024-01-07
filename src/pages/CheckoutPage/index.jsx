import { Button, Card } from "react-daisyui";
import CartList from "../../components/Cart/CartList";
import { useCart } from "../../context/CartContext";

function CheckoutPage() {
  const { clearCart, totalPrice } = useCart();
  return (
    <>
      <h1>Checkout page</h1>
      <CartList />
      <Card.Actions className="justify-center">
        <Card.Title tag="h2">
          Total price: {totalPrice.toFixed(2)} kr.
        </Card.Title>
        <Button onClick={() => clearCart()} color="primary">
          Finish Order
        </Button>
      </Card.Actions>
    </>
  );
}

export default CheckoutPage;
