import { Link } from 'react-router-dom';

function LinkArrow(props) {
  const { to } = props;
  return (
    <Link to={to} className="mb-6 block">
      <i className="fas fa-arrow-left text-2xl text-true-gray-800 hover:text-true-gray-500 transition duration-200"></i>
    </Link>
  );
}

export default LinkArrow;
