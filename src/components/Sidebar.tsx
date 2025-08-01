import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isTheme2 = theme === "theme2";

  const linkStyle = "block py-2 px-4 rounded hover:bg-gray-800";
  const activeStyle = "bg-gray-800 font-semibold";

  return (
    <>
      {isTheme2 && (
        <>
          {/* Sidebar for desktop (md and up) */}
          <div className="hidden md:block fixed top-12 left-0 h-full w-64 bg-gray-900 text-white p-4 shadow-lg z-50">
            <nav className="mt-12">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeStyle : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeStyle : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeStyle : ""}`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Hamburger + drawer for mobile (below md) */}
          <div className="md:hidden fixed top-12 left-4 z-50">
            <button
              className="bg-gray-900 text-white p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden fixed top-20 left-0 w-3/4 h-full bg-gray-900 text-white p-4 z-40 shadow-lg">
              <nav className="flex flex-col gap-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive ? activeStyle : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </nav>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
