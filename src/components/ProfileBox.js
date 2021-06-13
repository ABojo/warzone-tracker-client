import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StatsGrid from './StatsGrid';
import Heading from './Heading';
import Spinner from './Spinner';
import React from 'react';

function ProfileBox() {
  const { platform, username } = useParams();
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        `https://warzone-tracker-server.herokuapp.com/api/platforms/${platform}/usernames/${username}`
      );
      const json = await response.json();

      if (json.status === 'success') {
        setUserData(json.data);
      }

      setIsLoading(false);
    };

    getUserData();
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <Heading headingText="Loading data..." />
        <Spinner colorClass="text-green-500" />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Heading
          headingText={`${username} Warzone Player Card`}
          subText={`View your up to date warzone stats below`}
        />
        {userData && <StatsGrid profile={userData.profile} />}
        <Heading
          headingText={`${username} Recent Matches`}
          subText={`View your recent warzone matches below`}
        />
      </React.Fragment>
    );
  }
}

export default ProfileBox;
