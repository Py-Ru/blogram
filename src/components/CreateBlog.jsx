import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState(""),
    [body, setBody] = useState(""),
    [author, setAuthor] = useState("Aikou"),
    [isPending, setIsPending] = useState(false),
    navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:3002/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <>
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Blog Body:</label>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <select
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          >
            <option>Aikou</option>
            <option>Unknown</option>
          </select>
          <button disabled={isPending}>
            {isPending ? "loading" : "Add Blog"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
