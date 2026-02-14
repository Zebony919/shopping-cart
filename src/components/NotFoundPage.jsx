import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found!</h1>
      <Link to="/">
        <button>Return to Home Page</button>
      </Link>
    </>
  );
}

export default NotFoundPage;
