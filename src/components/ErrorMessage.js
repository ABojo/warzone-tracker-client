import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function ErrorMessage(props) {
  const { message } = props;
  return (
    <Fragment>
      <h1 className="mb-6 text-center font-bold text-true-gray-800">
        {message}
      </h1>
      <Link
        className="bg-purple-500 w-full p-3 block text-center text-white font-bold rounded transition hover:bg-purple-800 duration-200"
        to="/"
      >
        Go Back
      </Link>
    </Fragment>
  );
}

export default ErrorMessage;
