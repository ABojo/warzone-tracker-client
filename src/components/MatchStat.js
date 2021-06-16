function MatchStat(props) {
  const { name, value } = props;

  return (
    <div className="p-3 bg-true-gray-800 bg-opacity-5 rounded">
      <h1 className="text-true-gray-500 text-sm">{name}</h1>
      <p className="font-bold text-lg text-true-gray-800">{value}</p>
    </div>
  );
}

export default MatchStat;
