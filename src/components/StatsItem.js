function StatsItem(props) {
  const { name, value } = props;
  return (
    <div className="border-green-500 rounded bg-purple-100 p-3">
      <p className="text-left text-sm text-true-gray-500">{name}</p>
      <p className="text-left text-xl text-true-gray-800 font-bold">{value}</p>
    </div>
  );
}

export default StatsItem;
