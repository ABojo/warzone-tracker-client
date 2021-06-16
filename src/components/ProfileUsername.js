import platforms from '../utils/platforms';
import { useParams } from 'react-router-dom';

function ProfileUsername() {
  const { platform, username } = useParams();

  return (
    <h1 className="font-bold text-2xl text-center mb-6">
      <i
        className={`mr-3 fab fa-${
          platforms.find((x) => x.id === platform).icon
        }`}
      ></i>
      {decodeURIComponent(username)}
    </h1>
  );
}

export default ProfileUsername;
