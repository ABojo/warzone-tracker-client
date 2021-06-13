import StatsGrid from './StatsGrid';
import MatchesGrid from './MatchesGrid';
import LinkArrow from './LinkArrow';
import ProfileUsername from './ProfileUsername';
import React from 'react';

function ProfileCard(props) {
  const { profile, matches } = props;
  return (
    <React.Fragment>
      <LinkArrow to="/" />
      <ProfileUsername />
      <StatsGrid profile={profile} />
      <MatchesGrid matches={matches} />
    </React.Fragment>
  );
}

export default ProfileCard;
