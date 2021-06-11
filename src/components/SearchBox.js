function SearchBox() {
  return (
    <div className="p-5 w-11/12 max-w-xl mx-auto bg-true-gray-100 rounded shadow">
      <div className="mb-6 border-green-500 border-l-8 pl-3">
        <h2 className="mb-2 text-true-gray-800 text-lg">
          Open your Warzone Profile
        </h2>
        <p className="text-sm text-true-gray-400 ">
          Enter your username and select your platform to view your profile
        </p>
      </div>

      <div className="mb-3 flex justify-between items-baseline text-sm mx-auto max-w-sm">
        <button className="flex items-baseline p-2 rounded bg-yellow-300 shadow opacity-100 font-bold">
          <i className="fab fa-battle-net"></i>
          <p className="ml-1">Battle.net</p>
        </button>

        <button className="flex items-baseline bg-true-gray-200 p-2 rounded opacity-50">
          <i class="fab fa-playstation"></i>
          <p className="ml-1">Playstation</p>
        </button>

        <button className="flex items-baseline bg-true-gray-200 p-2 rounded opacity-50">
          <i className="fab fa-xbox"></i>
          <p className="ml-1">Xbox Live</p>
        </button>
      </div>
      <div className="w-full mb-3 relative">
        <i class="fas fa-user absolute input-icon left-2 text-true-gray-800"></i>
        <input
          placeholder="Username"
          className="placeholder-true-gray-500 px-8 py-3 rounded border-none bg-opacity-30 bg-green-100 focus:bg-opacity-100 transition duration-200 text-true-gray-800 w-full outline-none focus:shadow"
        />
      </div>

      <button className="bg-green-500 px-5 py-3 w-full text-white font-bold text-center rounded hover:bg-green-600 duration-200 transition shadow">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
