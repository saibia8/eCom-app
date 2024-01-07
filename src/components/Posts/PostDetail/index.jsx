import { useParams } from "react-router-dom";
import { url } from "../../../constants/api";
import useApi from "../../../hooks/useApi";
import { Button, Card } from "react-daisyui";
import { useCart } from "../../../context/CartContext";

function PostDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useApi(`${url}/${id}`);
  const { addToCart } = useCart();

  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const { title, description, imageUrl, discountedPrice, rating } = product;

  return (
    <div>
      <div className="mb-3"></div>
      <Card side="lg">
        <Card.Image src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title tag="h2">{title}</Card.Title>
          <p>{description}</p>
          {rating !== 0 ? <p>Rating: {rating}</p> : ""}
          {/* <ul>Reviews: </ul> */}
          {/* {reviews.length || reviews.length !== 0
            ? reviews.map((review) => (
                <li key={review.id}>
                  {review.description} Rating: {review.rating} Username:{" "}
                  {review.username}
                </li>
              ))
            : "No reviews"} */}
          <Card.Title tag="h3">Price: {discountedPrice} kr.</Card.Title>
          <Card.Actions className="justify-center">
            <Button onClick={() => addToCart(product)} color="primary">
              Add to cart
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostDetail;
