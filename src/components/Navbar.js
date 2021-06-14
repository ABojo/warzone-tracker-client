import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="text-white bg-true-gray-800 p-5 flex justify-center items-baseline mb-6">
      <Link
        to="/"
        className="text-2xl font-bold hover:text-true-gray-300 transition duration-200"
      >
        WZTracker
      </Link>
    </div>
  );
}

export default Navbar;
