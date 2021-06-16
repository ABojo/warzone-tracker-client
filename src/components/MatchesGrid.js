import MatchItem from './MatchItem';
import Heading from './Heading';

function MatchesGrid(props) {
  const { matches } = props;

  return (
    <div>
      <Heading headingText="Recent Matches" />
      {matches.map((match) => {
        return <MatchItem key={match.startTime} match={match} />;
      })}
    </div>
  );
}

export default MatchesGrid;
