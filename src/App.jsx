import Navbar from "./components/Navbar";
import Banner from "./components/Banner"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <Banner />
    </div>
  );
}