import logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Dev Stack Brand Logo Image */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
          </div>

          {/* Responsive nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-purple-600 transition-colors">Technologies</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>

          {/* Right login/signup area */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 hover:text-purple-600 px-3 py-2 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white brand-gradient px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}