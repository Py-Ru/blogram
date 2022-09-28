import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3002/blogs");

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
