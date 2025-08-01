import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { API_ENDPOINTS } from "../config/api";
import { homeText } from "./data";

const Home = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const isTheme1 = theme === "theme1";
  const isTheme2 = theme === "theme2";
  const isTheme3 = theme === "theme3";

  const layoutClass = isTheme2
    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
    : isTheme3
    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    : "flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.products);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className={`p-4 transition-all ${
        isTheme2 ? "md:ml-64 mt-14" : "mt-16"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-2 ${
          isTheme1 ? "text-gray-800" : ""
        }`}
      >
        🏠 Home Page
      </h1>
      <p className={`mb-6 ${isTheme1 ? "text-gray-600" : ""}`}>
        <b>{homeText.welcomeText}</b>{homeText.productDetails}
      </p>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className={layoutClass}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`p-4 rounded-lg transition-all duration-300 border
                ${isTheme1
                  ? "bg-gray-50 border-gray-200 hover:shadow-md hover:-translate-y-1"
                  : "bg-white  shadow hover:scale-105"}
              `}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-3"
              />
              <h2
                className={`font-semibold text-lg mb-1 line-clamp-1 ${
                  isTheme1 ? "text-gray-900" : ""
                }`}
              >
                {product.title}
              </h2>
              <p
                className={`text-sm line-clamp-2 mb-2 ${
                  isTheme1 ? "text-gray-500" : "text-gray-600"
                }`}
              >
                {product.description}
              </p>
              <p
                className={`font-bold ${
                  isTheme1 ? "text-indigo-600" : "text-blue-600"
                }`}
              >
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
