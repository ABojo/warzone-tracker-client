import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardGrid from './CardGrid';

function ProfileBox() {
  const { platform, username } = useParams();
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        `https://warzone-tracker-server.herokuapp.com/api/platforms/${platform}/usernames/${username}`
      );
      const json = await response.json();

      if (json.status === 'success') {
        setUserData(json.data);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <div>
        <div className="mb-6">
          <h2 className="mb-2 text-true-gray-800 text-lg">
            {username} Warzone Player Card
          </h2>
          <p className="text-sm text-true-gray-400">
            View your up to date warzone stats below
          </p>
        </div>
      </div>
      {userData && <CardGrid profile={userData.profile} />}
      <h2 className="mb-2 text-true-gray-800 text-lg">
        {username} Recent Matches
      </h2>
      <p className="text-sm text-true-gray-400">
        View your recent warzone matches below
      </p>
    </div>
  );
}

export default ProfileBox;
