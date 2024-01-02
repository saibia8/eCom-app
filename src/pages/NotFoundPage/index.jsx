import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <article className="prose lg:prose-xl">
      <h1>404: Not Found page</h1>
      <p>
        <Link to="/">Go back to Home page</Link>
      </p>
    </article>
  );
}

export default NotFoundPage;
