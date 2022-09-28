import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>BloGram</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="create-link">
          <button className="create-btn">Create</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
