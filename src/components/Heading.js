function Heading(props) {
  const { headingText, subText } = props;
  return (
    <div className="mb-6">
      {headingText && (
        <h2 className="mb-2 text-true-gray-800 text-lg">{headingText}</h2>
      )}
      {subText && <p className="text-sm text-true-gray-400">{subText}</p>}
    </div>
  );
}

export default Heading;
