import PropTypes from "prop-types";
import { Button, Card } from "react-daisyui";
import { Link } from "react-router-dom";

function PostItem({ product }) {
  const { title, description, id, imageUrl } = product;
  return (
    <div>
      <div>
        <div className="mb-3"></div>
        <Card side="lg">
          <Card.Image src={imageUrl} alt="Shoes" />
          <Card.Body>
            <Card.Title tag="h2">{title}</Card.Title>
            <p>{description}</p>
            <Card.Actions className="justify-end">
              <Button color="primary">
                <Link to={`product/${id}`}>View product</Link>
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default PostItem;
