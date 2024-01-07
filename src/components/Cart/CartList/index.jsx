import { Button, Card } from "react-daisyui";
import { useCart } from "../../../context/CartContext";

function CartList() {
  const { cart, addToCart, removeFromCart, totalItems } = useCart();

  if (totalItems === 0) {
    return (
      <div>
        <div>
          <Card side="lg">
            <Card.Body>
              <Card.Title tag="h2">Cart is empty!</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <div className="mb-3"></div>
          <Card side="lg">
            <Card.Image src={product.imageUrl} alt={product.title} />
            <Card.Body>
              <Card.Title tag="h2">{product.title}</Card.Title>
              <p>{product.description}</p>
              <Card.Title tag="h3">
                Price: {product.discountedPriceProduct.toFixed(2)} kr.
              </Card.Title>
              <Card.Title tag="h3">
                Quantity:{" "}
                <Button onClick={() => removeFromCart(product.id)}>-</Button>
                {product.quantity}
                <Button onClick={() => addToCart(product)}>+</Button>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CartList;
