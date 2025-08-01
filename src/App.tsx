import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  const isSidebar = theme === "theme2";

  return (
    <Router>
      <Header />
      <div className="pt-20 flex">
        {isSidebar && <Sidebar />}
        
        <main className="flex-1 px-4 max-w-7xl mx-auto">
          <Routes>
            <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
