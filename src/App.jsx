import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Banner from "./components/TechCard"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <Banner />
      <TechCard />
    </div>
  );
}