import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmotionDetection from "./pages/EmotionDetection";
import SongRecommendations from "./pages/SongRecommendations";
import SongsPlatform from "./pages/SongsPlatform";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<EmotionDetection />} />
          <Route path="/recommendations" element={<SongRecommendations />} />
          <Route path="/songs" element={<SongsPlatform />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
