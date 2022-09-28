import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link className="links" to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
