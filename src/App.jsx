import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load JSON Data
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load JSON data:", err);
        setLoading(false);
      });
  }, []);

  // Add item handler
  const handleAddToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already added!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove single item handler
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${itemToRemove?.name || "Item"} removed from stack.`);
  };

  // Remove all handler
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("Cleared all technologies from your stack.");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={2000} />

      <div>
        <Navbar />
        <Banner />

        {/* Main Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Technology Directory
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Select technologies to compose and evaluate your custom web stack.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20 gap-3">
              <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-500 font-medium text-sm">Loading technologies...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Technology Grid: 1 col mobile, 2 tablet, 3 desktop */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAddToStack}
                    isAdded={stack.some((item) => item.id === tech.id)}
                  />
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Sidebar
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}