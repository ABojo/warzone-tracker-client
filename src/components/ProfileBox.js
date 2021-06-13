import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StatsGrid from './StatsGrid';
import MatchesGrid from './MatchesGrid';
import LinkArrow from './LinkArrow';
import ProfileUsername from './ProfileUsername';
import LoadingMessage from './LoadingMessage';
import React from 'react';
import ProfileCard from './ProfileCard';

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
      console.log(json);

      if (json.status === 'success') {
        setUserData(json.data);
      }

      setIsLoading(false);
    };

    getUserData();
  }, []);

  if (isLoading) {
    return <LoadingMessage />;
  } else {
    return (
      <ProfileCard profile={userData.profile} matches={userData.matches} />
    );
  }
}

export default ProfileBox;
