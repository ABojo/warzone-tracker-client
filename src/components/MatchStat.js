function MatchStat(props) {
  const { name, value, large } = props;

  return (
    <div className={large && 'row-span-3 flex-col flex'}>
      <p
        className={`bg-purple-500 text-white text-center p-1 rounded-t font-bold block ${
          !large && 'text-sm'
        }`}
      >
        {name}
      </p>
      <div className="bg-true-gray-800 bg-opacity-5 rounded p-3 flex items-center justify-center flex-grow	">
        <p className={`font-bold text-${large ? '6' : ''}xl`}>{value || '?'}</p>
      </div>
    </div>
  );
}

export default MatchStat;
