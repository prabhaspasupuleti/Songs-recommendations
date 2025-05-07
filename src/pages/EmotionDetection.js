import { useState, useRef } from "react";

export default function EmotionDetection() {
  const [emotion, setEmotion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(null); // To store uploaded or captured image
  const [songs, setSongs] = useState([]); // To store recommended songs
  const videoRef = useRef(null); // Reference to video element for webcam feed
  const canvasRef = useRef(null); // Reference to canvas element for capturing image
  const [isWebcamActive, setIsWebcamActive] = useState(false); // Track if webcam is active

  // Function to start the webcam
  const startWebcam = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          setIsWebcamActive(true);
        })
        .catch((err) => {
          console.error("Error accessing webcam: ", err);
        });
    }
  };

  // Function to capture an image from the webcam feed
  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const capturedImage = canvas.toDataURL("image/png");
    setImageSrc(capturedImage);

    // Stop webcam feed after capturing image
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsWebcamActive(false);
  };

  // Function to handle recapture action
  const recaptureImage = () => {
    setImageSrc(null);
    startWebcam();
  };

  // Function to simulate emotion detection (replace with actual backend API call)
  const detectEmotion = async () => {
    setLoading(true);
    try {
      // Replace this timeout with an API call
      setTimeout(() => {
        const emotions = ["Happy", "Sad", "Angry", "Surprised", "Neutral"];
        const detectedEmotion = emotions[Math.floor(Math.random() * emotions.length)];
        setEmotion(detectedEmotion);
        fetchRecommendedSongs(detectedEmotion);
      }, 2000);
    } catch (error) {
      console.error("Error detecting emotion:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch recommended songs based on detected emotion
  const fetchRecommendedSongs = async (detectedEmotion) => {
    // Replace this with an actual API call
    try {
      const mockSongs = [
        { id: 1, title: "Song 1", artist: "Artist A" },
        { id: 2, title: "Song 2", artist: "Artist B" },
        { id: 3, title: "Song 3", artist: "Artist C" },
      ];
      setSongs(mockSongs); // Simulated response
    } catch (error) {
      console.error("Error fetching recommended songs:", error);
    }
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-purple-500 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-gray-700 text-center mb-6">Emotion Detection</h1>

        {/* Webcam Feed or Image Upload */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 w-full h-60 rounded-lg flex justify-center items-center">
            {imageSrc ? (
              <img src={imageSrc} alt="Captured" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full object-cover rounded-lg"
              ></video>
            )}
          </div>
        </div>

        {/* Buttons for webcam or image upload */}
        <div className="flex justify-center gap-4 mb-6">
          {!isWebcamActive && !imageSrc && (
            <button
              onClick={startWebcam}
              className="bg-teal-500 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-600"
            >
              Start Webcam
            </button>
          )}
          {isWebcamActive && (
            <button
              onClick={captureImage}
              disabled={loading}
              className="bg-teal-500 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-600 disabled:opacity-50"
            >
              Capture Image
            </button>
          )}
          {imageSrc && (
            <button
              onClick={recaptureImage}
              disabled={loading}
              className="bg-teal-500 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-600 disabled:opacity-50"
            >
              Recapture
            </button>
          )}
        </div>

        {/* File upload option */}
        <div className="flex justify-center mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer"
          />
        </div>

        {/* Emotion detection button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={detectEmotion}
            disabled={loading || !imageSrc}
            className="bg-teal-500 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-600 disabled:opacity-50"
          >
            {loading ? "Detecting..." : "Start Detection"}
          </button>
        </div>

        {/* Detected emotion */}
        {emotion && (
          <div className="text-center mt-6">
            <h2 className="text-xl">
              Detected Emotion: <span className="text-teal-500 font-semibold">{emotion}</span>
            </h2>
          </div>
        )}

        {/* Recommended Songs */}
        {songs.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recommended Songs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-teal-600">{song.title}</h3>
                  <p className="text-gray-600">{song.artist}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Canvas to capture image for backend */}
        <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
      </div>
    </div>
  );
}
