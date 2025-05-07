import { useState } from "react";

export default function SongsPlatform() {
  const [localSong, setLocalSong] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLocalSong(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-purple-500 min-h-screen flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Music Player Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 transition-transform transform hover:scale-105">
          Fancy Music Player
        </h1>

        {/* Local Song Upload Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Play Local Songs</h2>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="block mx-auto p-3 bg-teal-600 text-white rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform"
          />

          {/* Local Audio Player */}
          {localSong && (
            <div className="relative mt-6">
              <audio controls src={localSong} className="w-full h-12 rounded-lg">
                Your browser does not support the audio element.
              </audio>
              {/* Simulated Audio Waveform Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="waveform-animation w-full h-2 rounded-full bg-teal-400"></div>
              </div>
            </div>
          )}
        </div>

        <hr className="my-8" />

        {/* Spotify Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Play from Spotify</h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            title="Spotify Playlist"
            className="transition-transform transform hover:scale-105 shadow-lg rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Styles for Animations and Visual Effects */}
      <style jsx>{`
        .waveform-animation {
          animation: wave 1.5s ease-in-out infinite;
        }

        @keyframes wave {
          0% {
            transform: scaleX(0.2);
            opacity: 0.8;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
