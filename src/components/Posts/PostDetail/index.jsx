import { useParams } from "react-router-dom";
import { url } from "../../../constants/api";
import useApi from "../../../hooks/useApi";

function PostDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useApi(`${url}/${id}`);

  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(product);

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>Product page</h1>
      <div>id: {product.id}</div>
      <div>title: {product.title}</div>
      <div>description: {product.description}</div>
    </article>
  );
}

export default PostDetail;
