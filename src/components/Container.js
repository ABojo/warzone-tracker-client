function Container(props) {
  const { children } = props;
  return (
    <div className="p-5 w-11/12 max-w-xl mx-auto bg-true-gray-100 rounded shadow">
      {children}
    </div>
  );
}

export default Container;
