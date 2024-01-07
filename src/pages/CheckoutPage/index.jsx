import { Button, Card } from "react-daisyui";
import CartList from "../../components/Cart/CartList";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleFinishOrder = () => {
    clearCart();
    navigate("/checkout");
  };

  return (
    <>
      <h1>Checkout page</h1>
      <CartList />
      <Card.Actions className="justify-center">
        <Card.Title tag="h2">
          Total price: {totalPrice.toFixed(2)} kr.
        </Card.Title>
        <Button onClick={handleFinishOrder} color="primary">
          Finish Order
        </Button>
      </Card.Actions>
    </>
  );
}

export default CheckoutPage;
