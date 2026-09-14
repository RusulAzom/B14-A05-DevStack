import logo from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Empowering engineers and startup teams to architect, evaluate, and scale their web tech stacks efficiently.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Ecosystem</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Engineering Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Dev Stack Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}