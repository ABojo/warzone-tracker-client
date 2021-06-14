import React from 'react';

function CardGrid(props) {
  const { profile } = props;

  return (
    <React.Fragment>
      <div className="grid grid-cols-3 auto-rows-max gap-4 mb-6">
        {Object.keys(profile).map((property) => {
          return (
            <div className="border-green-500 rounded bg-purple-100 p-3">
              <p className="text-left text-sm text-true-gray-500">{property}</p>

              <p className="text-left text-xl text-true-gray-800 font-bold">
                {profile[property]}
              </p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default CardGrid;
