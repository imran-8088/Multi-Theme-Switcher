import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "theme1" | "theme2" | "theme3";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme1",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    if (storedTheme) setThemeState(storedTheme);
  }, []);

  const setTheme = (theme: ThemeType) => {
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme}  transition-all duration-500 ease-in-out min-h-screen`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
