function PlatformButton(props) {
  const { setSelectedPlatform, selectedPlatform, platform } = props;

  return (
    <button
      onClick={() => setSelectedPlatform(platform.id)}
      key={platform.id}
      className={`flex items-baseline p-2 rounded outline-none ${
        platform.id === selectedPlatform
          ? 'bg-yellow-300 shadow opacity-100 font-bold'
          : 'bg-true-gray-200 opacity-50'
      }`}
    >
      <i className={`fab fa-${platform.icon}`}></i>
      <p className="ml-1">{platform.name}</p>
    </button>
  );
}

export default PlatformButton;
