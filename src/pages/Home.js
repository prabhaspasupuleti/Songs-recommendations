import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmotionDetection";

export default function HomePage() {
  const navigate = useNavigate();
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="bg-gradient-to-r from-teal-400 to-purple-500 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg mb-6 shadow-lg">
        Welcome to Music Emotion!
      </div>

      <p className="text-lg text-white text-center mb-6">
        Discover songs based on your mood and expressions.
      </p>
      <button
        onClick={() => navigate("/detect")}
        className="bg-teal-600 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-700 transition duration-300 mb-4"
      >
        Get Started
      </button>

      {/* Tutorial Button */}
      <button
        onClick={() => setShowTutorial(true)}
        className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg hover:bg-purple-700 transition duration-300"
      >
        How It Works
      </button>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-gray-800 relative">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">How It Works</h2>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                Click <strong>"Get Started"</strong> to proceed to the emotion detection page.
              </li>
              <li>
                Use the webcam or upload an image to capture your expression.
              </li>
              <li>
                Click <strong>"Start Detection"</strong> to analyze your emotions.
              </li>
              <li>
                Based on the detected emotion, a list of recommended songs will be displayed.
              </li>
              <li>
                Enjoy the songs or explore more based on your mood.
              </li>
            </ol>
            <button
              onClick={() => setShowTutorial(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <button
                onClick={() => {
                  setShowTutorial(false);
                  navigate("/detect");
                }}
                className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300 mt-4"
              >
                Try It Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Optional Section */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
        <p className="text-white text-lg">
          Our system detects your emotions and suggests personalized songs!
        </p>
      </div>
    </div>
  );
}
