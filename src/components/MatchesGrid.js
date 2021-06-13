import formatDate from '../utils/formatDate';
import Heading from './Heading';

function MatchesGrid(props) {
  const { matches } = props;
  /* Placement, kd, kills, damage, spm */

  return (
    <div>
      <Heading headingText="Recent Matches" />
      {matches.map((match) => {
        return (
          <div className="w-full p-3 bg-purple-100 mb-6 rounded">
            <div className="flex items-baseline mb-3">
              <p className="text-lg text-true-gray-800 font-bold mr-3">
                {match.mode}
              </p>
              <p className="text-sm text-true-gray-500">
                {formatDate(match.startTime)}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="row-span-3 flex-col flex">
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold block">
                  Placing
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center flex-grow	">
                  <p className="font-bold text-6xl">
                    {match.teamPlacement || '?'}
                  </p>
                </div>
              </div>

              <div>
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold text-sm">
                  KD Ratio
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center ">
                  <p className="font-bold text-xl">{match.kdRatio}</p>
                </div>
              </div>

              <div>
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold text-sm">
                  Kills
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center ">
                  <p className="font-bold text-xl">{match.kills}</p>
                </div>
              </div>

              <div>
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold text-sm">
                  Assists
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center ">
                  <p className="font-bold text-xl">{match.assists}</p>
                </div>
              </div>

              <div>
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold text-sm">
                  Damage
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center ">
                  <p className="font-bold text-xl">{match.damageDone}</p>
                </div>
              </div>

              <div>
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold text-sm">
                  % Moving
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center ">
                  <p className="font-bold text-xl">{match.percentTimeMoving}</p>
                </div>
              </div>

              <div>
                <p className="bg-purple-500 text-white text-center p-1 rounded-t font-bold text-sm">
                  SPM
                </p>
                <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center ">
                  <p className="font-bold text-xl">{match.scorePerMinute}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MatchesGrid;
