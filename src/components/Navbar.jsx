import { useState } from 'react';
import logo from '../assets/logo-text.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* DESKTOP NAVBAR (invisible on mobile device) */}
                <div className="hidden md:flex items-center justify-between h-16">
                    {/*  Logo + Text */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
                    </div>

                    {/* nav menu items  */}
                    <div className="flex items-center space-x-8 text-sm font-medium text-gray-700">
                        <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
                        <a href="#technologies" className="hover:text-purple-600 transition-colors">Technologies</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">Projects</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">About</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
                    </div>

                    {/* Right nav area: Sign In area */}
                    <div className="flex items-center gap-3">
                        <button className="text-sm font-semibold text-gray-700 hover:text-purple-600 px-3 py-2 rounded-lg transition-colors">
                            Sign In
                        </button>
                        <button className="text-sm font-semibold text-white brand-gradient px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Responsive Mobile Hambarger */}
                {/* MOBILE NAVBAR */}
                <div className="flex md:hidden items-center justify-between h-16">
                    {/*  Hamburger Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-700 hover:text-purple-600 rounded-lg focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Center Logo */}
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="Dev Stack Logo" className="h-7 w-auto object-contain" />
                    </div>

                    {/*  Sign Up area */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        <button className="text-xs sm:text-sm font-semibold text-gray-700 px-2 py-1">
                            Sign In
                        </button>
                        <button className="text-xs sm:text-sm font-semibold text-white brand-gradient px-3 py-1.5 rounded-full shadow-sm">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu -dropdown */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-100 py-3 space-y-2 bg-white">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Home</a>
                        <a href="#technologies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Technologies</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Projects</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">About</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
                    </div>
                )}

            </div>
        </nav>
    );
}