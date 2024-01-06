import PostList from "../../components/Posts/PostList";

function HomePage() {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>Home page</h1>
      <PostList />
    </article>
  );
}

export default HomePage;
