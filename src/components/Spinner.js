function Spinner(props) {
  const { colorClass } = props;
  return (
    <div className={`spinner ${colorClass ? colorClass : 'text-white'}`}></div>
  );
}

export default Spinner;
