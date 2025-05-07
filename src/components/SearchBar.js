export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs or artists..."
          className="flex-1 p-2 border-none outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>
    );
  }
  