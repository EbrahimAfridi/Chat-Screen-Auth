import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>Sorry, we could not find the page you were looking for.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default Error;