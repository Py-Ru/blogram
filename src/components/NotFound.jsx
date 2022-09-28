import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>
        {" "}
        <span>404</span> Sorry
      </h1>
      <p>This page does not exist</p>
      <Link to="/" className="back-home">
        Return to the Home page
      </Link>
    </div>
  );
};

export default NotFound;
