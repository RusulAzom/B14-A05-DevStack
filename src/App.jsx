import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold">Navbar Ready!</h2>
      </div>
    </div>
  );
}