import PostList from "../../components/Posts/ProductList";

function HomePage() {
  return (
    <>
      <article className="prose lg:prose-xl mx-auto">
        <h1>Home page</h1>
      </article>
      <PostList />
    </>
  );
}

export default HomePage;
