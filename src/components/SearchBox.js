import { useState } from 'react';
import platforms from '../utils/platforms';
import PlatformButton from './PlatformButton';
import Heading from './Heading';
import { Link, useHistory } from 'react-router-dom';
import Container from './Container';

function SearchBox() {
  const [username, setUsername] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('battle');
  const history = useHistory();

  const onEnter = (e) => {
    if (username && e.key === 'Enter') {
      history.push(`/platforms/${selectedPlatform}/usernames/${username}`);
    }
  };

  return (
    <Container>
      <Heading
        headingText="Track your Warzone Stats"
        subText="Select your platform and enter your username below"
      />

      <div className="mb-3 flex justify-between items-baseline text-sm mx-auto max-w-sm">
        {platforms.map((platform) => {
          return (
            <PlatformButton
              key={platform.id}
              platform={platform}
              setSelectedPlatform={setSelectedPlatform}
              selectedPlatform={selectedPlatform}
            />
          );
        })}
      </div>
      <div className="w-full mb-3 relative">
        <i className="fas fa-user absolute input-icon left-2 text-true-gray-800"></i>
        <input
          onKeyPress={onEnter}
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          placeholder="Username"
          className={`${
            username ? 'bg-opacity-100' : 'bg-opacity-30'
          } bg-purple-200 placeholder-true-gray-500 px-8 py-3 rounded border-none focus:bg-opacity-100 transition duration-200 text-true-gray-800 w-full outline-none`}
        />
      </div>
      <Link
        disabled={!username}
        to={`/platforms/${selectedPlatform}/usernames/${username}`}
        className={`block px-5 py-3 w-full font-bold text-center rounded duration-200 transition bg-green-500 text-white ${
          username ? 'hover:bg-green-600 shadow' : 'opacity-30 cursor-default'
        }`}
      >
        Search
      </Link>
    </Container>
  );
}

export default SearchBox;
