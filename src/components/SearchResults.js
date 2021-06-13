import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingMessage from './LoadingMessage';
import ProfileCard from './ProfileCard';

function SearchResults() {
  const { platform, username } = useParams();
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        `https://warzone-tracker-server.herokuapp.com/api/platforms/${platform}/usernames/${username}`
      );
      const json = await response.json();
      setResponse(json);
      setIsLoading(false);
    };

    getUserData();
  }, []);

  if (isLoading) return <LoadingMessage />;
  if (response.status === 'error') return <h1>ERROR</h1>;

  return (
    <ProfileCard
      profile={response.data.profile}
      matches={response.data.matches}
    />
  );
}

export default SearchResults;
