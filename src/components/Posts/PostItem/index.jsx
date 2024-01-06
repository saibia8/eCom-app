import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostItem({ product }) {
  const { title, description, id } = product;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`product/${id}`}>Product page</Link>
    </div>
  );
}

PostItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
