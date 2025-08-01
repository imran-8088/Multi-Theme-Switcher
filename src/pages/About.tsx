import { useTheme } from "../context/ThemeContext";
import { aboutDetails } from "./data";

const About = () => {
  const { theme } = useTheme();
  const isTheme1 = theme === "theme1";
  const isTheme2 = theme === "theme2";

  return (
    <div
      className={`p-4 transition-all ${
        isTheme2 ? "md:ml-64 mt-14" : "mt-16"
      } max-w-3xl`}
    >
      <h1
        className={`text-3xl font-bold mb-4 ${
          isTheme1 ? "text-gray-800" : ""
        }`}
      >
        📖 About
      </h1>
      <p
        className={`leading-relaxed ${
          isTheme1 ? "text-gray-600" : ""
        }`}
      >
        {aboutDetails}
      </p>
    </div>
  );
};

export default About;
