import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StatsGrid from './StatsGrid';
import MatchesGrid from './MatchesGrid';
import Heading from './Heading';
import Spinner from './Spinner';
import LinkArrow from './LinkArrow';
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
        <Spinner colorClass="text-purple-500" />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <LinkArrow to="/" />
        <Heading headingText="Global Stats" />
        {userData && <StatsGrid profile={userData.profile} />}
        <Heading headingText="Recent Matches" />
        {userData && <MatchesGrid matches={userData.matches} />}
      </React.Fragment>
    );
  }
}

export default ProfileBox;
