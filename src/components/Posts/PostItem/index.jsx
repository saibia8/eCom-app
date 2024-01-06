import PropTypes from "prop-types";
import { Button, Card } from "react-daisyui";
import { Link } from "react-router-dom";

function PostItem({ product }) {
  const { title, description, id, imageUrl, discountedPrice, rating, reviews } =
    product;
  console.log(product);
  console.log(reviews.length);
  return (
    <div>
      <div className="mb-3"></div>
      <Card side="lg">
        <Card.Image src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title tag="h1">{title}</Card.Title>
          <p>{description}</p>
          {rating !== 0 ? <p>Rating: {rating}</p> : ""}
          <ul>Reviews: </ul>
          {reviews.length !== 0
            ? reviews.map((review) => (
                <li key={review.id}>
                  {review.description} Rating: {review.rating} Username:{" "}
                  {review.username}
                </li>
              ))
            : "No reviews"}
          <Card.Title tag="h3">Price: {discountedPrice} kr.</Card.Title>
          <Card.Actions className="justify-end">
            <Button color="primary">
              <Link to={`product/${id}`}>View product</Link>
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
}

PostItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    discountedPrice: PropTypes.number.isRequired,
    rating: PropTypes.number,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default PostItem;
