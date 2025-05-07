import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <style>
        {`
          /* Navbar Styles */
          .navbar {
            background-color: #2d3748; /* Dark background for the navbar */
            padding: 1rem; /* Padding for the navbar */
          }

          /* Navbar Container for layout */
          .navbar-container {
            max-width: 1200px; /* Max width for the navbar */
            margin: 0 auto; /* Center the navbar */
            display: flex;
            justify-content: space-between; /* Space between items */
            align-items: center; /* Vertically center items */
          }

          /* Navbar Title */
          .navbar-title {
            font-size: 1.5rem; /* Font size */
            font-weight: bold; /* Make the title bold */
            color: white; /* White color */
          }

          /* Navbar Links */
          .navbar-links {
            display: flex; /* Flexbox for the links */
            gap: 1.5rem; /* Space between links */
          }

          .navbar-link {
            color: #e2e8f0; /* Light grey color for the links */
            font-size: 1rem; /* Font size */
            text-decoration: none; /* Remove underlines */
            transition: color 0.3s ease; /* Smooth transition for hover */
          }

          .navbar-link:hover {
            color: white; /* Change color to white on hover */
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .navbar-container {
              flex-direction: column; /* Stack items vertically */
              align-items: center; /* Center align items */
            }

            .navbar-links {
              flex-direction: column; /* Stack links vertically */
              gap: 1rem; /* Space between links */
            }
          }
        `}
      </style>

      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">MoodMusic</h1>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/detect" className="navbar-link">
              Detect Emotion
            </Link>
            <Link to="/recommendations" className="navbar-link">
              Recommendations
            </Link>
            <Link to="/songs" className="navbar-link">
              Songs Platform
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
