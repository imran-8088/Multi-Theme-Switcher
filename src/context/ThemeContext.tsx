import React, { createContext, useContext, useEffect, useState } from "react";

// Define the supported theme types
export type ThemeType = "theme1" | "theme2" | "theme3";

// Define the shape of the ThemeContext
interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// Create the ThemeContext with default values
const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme1",
  setTheme: () => {},
});

// ThemeProvider component to wrap around the app and provide theme state
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");

  // Load saved theme from localStorage on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    if (storedTheme) setThemeState(storedTheme);
  }, []);

  // Update theme in both state and localStorage
  const setTheme = (theme: ThemeType) => {
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Apply the selected theme as a class on the main wrapper div */}
      <div className={`${theme} transition-all duration-500 ease-in-out min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming theme context easily in any component
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
