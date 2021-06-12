import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardGrid from './CardGrid';
import Heading from './Heading';

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
      <Heading
        headingText={`${username} Warzone Player Card`}
        subText={`View your up to date warzone stats below`}
      />
      {userData && <CardGrid profile={userData.profile} />}
      <Heading
        headingText={`${username} Recent Matches`}
        subText={`View your recent warzone matches below`}
      />
    </div>
  );
}

export default ProfileBox;
