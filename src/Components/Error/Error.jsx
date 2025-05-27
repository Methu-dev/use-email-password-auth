import { Link, useRouteError } from "react-router-dom"


const Error = () => {
    const error = useRouteError();
  return (
    <div>
      <p>Uh Oh, something went wrong! {error.message}</p>
      <Link to="/">
        <button className="btn">Go Back Home</button>
      </Link>
    </div>
  );
}

export default Error
