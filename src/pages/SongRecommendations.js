import { useState } from "react";

export default function SongRecommendations() {
  const [loading, setLoading] = useState({}); // Track loading state for each emotion
  const [error, setError] = useState({}); // Track error state for each emotion
  const [songsData, setSongsData] = useState({
    Happy: [],
    Sad: [],
    Angry: [],
    Surprised: [],
    Neutral: []
  });
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  // Placeholder function for fetching songs by emotion
  const fetchSongs = async (emotion) => {
    setLoading((prev) => ({ ...prev, [emotion]: true }));
    setError((prev) => ({ ...prev, [emotion]: null }));

    try {
      // BACKEND INTEGRATION: Replace this with actual API call
      // Example: `await fetch(`/api/songs?emotion=${emotion}`)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: [`Sample song 1 for ${emotion}`, `Sample song 2 for ${emotion}`] }), 2000)
      );

      setSongsData((prev) => ({
        ...prev,
        [emotion]: response.data
      }));
    } catch (err) {
      setError((prev) => ({ ...prev, [emotion]: `Failed to load ${emotion} songs.` }));
    } finally {
      setLoading((prev) => ({ ...prev, [emotion]: false }));
    }
  };

  // Placeholder function for searching songs
  const searchSongs = async (term) => {
    setLoading((prev) => ({ ...prev, search: true }));
    setError((prev) => ({ ...prev, search: null }));

    try {
      // BACKEND INTEGRATION: Replace this with actual API call
      // Example: `await fetch(`/api/search?term=${term}`)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: [`Search result 1 for "${term}"`, `Search result 2 for "${term}"`] }), 2000)
      );

      setSongsData((prev) => ({
        ...prev,
        SearchResults: response.data
      }));
    } catch (err) {
      setError((prev) => ({ ...prev, search: `Failed to search for "${term}".` }));
    } finally {
      setLoading((prev) => ({ ...prev, search: false }));
    }
  };

  const handleSearch = (emotion) => {
    if (!searchTerm.trim()) return songsData[emotion];
    return songsData[emotion].filter((song) =>
      song.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col items-center justify-start p-6 space-y-8">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Song Recommendations</h1>
      <p className="text-lg text-white text-center mb-6">
        Explore songs dynamically fetched by emotions.
      </p>

      {/* Global Search Bar */}
      <div className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (e.target.value.trim()) searchSongs(e.target.value); // Call backend for search
          }}
          className="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Song Sections */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg space-y-8">
        {Object.keys(songsData).map((emotion, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
              {emotion} Songs
            </h2>

            {/* Fetch Button */}
            <button
              onClick={() => fetchSongs(emotion)}
              className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 focus:outline-none mb-4"
            >
              Fetch {emotion} Songs
            </button>

            {/* Loading State */}
            {loading[emotion] && (
              <p className="text-gray-600">Loading {emotion} songs...</p>
            )}

            {/* Error State */}
            {error[emotion] && (
              <p className="text-red-500">{error[emotion]}</p>
            )}

            {/* Song Cards */}
            <div className="space-y-4">
              {handleSearch(emotion).length > 0 ? (
                handleSearch(emotion).map((song, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <p className="text-lg font-semibold">{song}</p>
                    <div className="mt-2 flex justify-between">
                      <button className="text-blue-500">Play on YouTube</button>
                      <button className="text-green-500">Play on Spotify</button>
                    </div>
                  </div>
                ))
              ) : (
                !loading[emotion] && (
                  <p className="text-gray-600">No songs available. Fetch songs to display.</p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
