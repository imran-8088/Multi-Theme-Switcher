import { contactDetails } from "./data";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isTheme1 = theme === "theme1";
  const isTheme2 = theme === "theme2";

  return (
    <div
      className={`p-4 space-y-4 transition-all ${
        isTheme2 ? "md:ml-64 mt-14" : "mt-16"
      } max-w-2xl`}
    >
      <h1
        className={`text-3xl font-bold mb-4 ${
          isTheme1 ? "text-gray-800" : ""
        }`}
      >
        📬 Contact
      </h1>
      <p className={`${isTheme1 ? "text-gray-600" : ""}`}>
        You can reach us at:
      </p>
      <ul
        className={`list-disc pl-6 space-y-1 ${
          isTheme1 ? "text-gray-700" : ""
        }`}
      >
        <li>{contactDetails.email}</li>
        <li>{contactDetails.phone}</li>
        <li>{contactDetails.twitter}</li>
      </ul>
    </div>
  );
};

export default Contact;
