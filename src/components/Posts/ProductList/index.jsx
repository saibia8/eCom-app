import { url } from "../../../constants/api.js";
import PostItem from "../ProductItem/index.jsx";
import useApi from "../../../hooks/useApi/index.js";

function PostList() {
  const { data: products, isLoading, isError } = useApi(url);

  if (isLoading || !products) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <PostItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default PostList;
