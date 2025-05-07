export default function SongCard({ song }) {
    return (
      <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img
          src={song.albumArt}
          alt="Album Art"
          className="w-16 h-16 rounded-lg mr-4"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className="text-sm text-gray-600">{song.artist}</p>
          <p className="text-sm text-gray-600">Duration: {song.duration}</p>
        </div>
        <button className="text-blue-500">Preview</button>
      </div>
    );
  }
  