import formatDate from '../utils/formatDate';
import MatchStat from './MatchStat';

function MatchItem(props) {
  const { match } = props;
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
        <MatchStat name="Placing" value={match.teamPlacement} large={true} />
        <MatchStat name="KD Ratio" value={match.kdRatio} />
        <MatchStat name="Kills" value={match.kills} />
        <MatchStat name="Assists" value={match.assists} />
        <MatchStat name="Damage" value={match.damageDone} />
        <MatchStat name="% Moving" value={match.percentTimeMoving} />
        <MatchStat name="SPM" value={match.scorePerMinute} />
      </div>
    </div>
  );
}

export default MatchItem;
