import React from 'react';
import StatsItem from './StatsItem';

function StatsGrid(props) {
  const { profile } = props;

  return (
    <React.Fragment>
      <div className="grid grid-cols-3 auto-rows-max gap-4 mb-6">
        {Object.keys(profile).map((property) => {
          return (
            <StatsItem
              key={property}
              name={property}
              value={profile[property]}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default StatsGrid;
