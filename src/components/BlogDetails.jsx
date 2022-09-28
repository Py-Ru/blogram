import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
      data: blog,
      isPending,
      error,
    } = useFetch("http://localhost:3002/blogs/" + id),
    navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:3002/blogs/" + id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {blog && (
        <article className="blog-details">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>

          <div>
            <small>Written by {blog.author}</small>
            <button onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}
    </>
  );
};

export default BlogDetails;
