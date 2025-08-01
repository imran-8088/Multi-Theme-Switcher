import { Link } from "react-router-dom";
import { useTheme, type ThemeType } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const isTheme2 = theme === "theme2";

  return (
    <header
      className={`fixed top-0 w-full z-50 px-4 py-2 sm:px-6 flex justify-between items-center
        ${isTheme2 ? "bg-gray-900 text-white shadow-lg" : "bg-white text-black shadow-md"}
      `}
    >
      <div className="font-bold text-xl">🎨 ThemeApp</div>

      {/* Desktop Nav */}
      {!isTheme2 && (
        <nav className="hidden sm:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}

      {/* Right-side controls (hamburger + theme selector) */}
      <div className="flex items-center gap-4">
        {/* Hamburger icon (mobile only) */}
        {!isTheme2 && (
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}

        {/* Theme selector */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as ThemeType)}
          className={`px-2 py-1 rounded
            ${isTheme2 ? "bg-gray-800 text-white border border-white" : "border"}
          `}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>

      {/* Mobile menu dropdown */}
      {!isTheme2 && isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 sm:hidden">
          <nav className="flex flex-col gap-2">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
