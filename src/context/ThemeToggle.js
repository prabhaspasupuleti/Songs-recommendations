import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all"
    >
      {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
};

export default ThemeToggle;
