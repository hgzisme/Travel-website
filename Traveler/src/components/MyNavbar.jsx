import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function MyNavbar() {
    return (
        <nav className="bg-zinc-950 text-white border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <Link to="/" className="flex items-center group">
                        <img src="/logo.png" alt="Traveler Logo" className="h-14 w-14 object-contain hover:opacity-80 transition-opacity" />
                        <span className="text-xl font-bold font-['Orbitron'] tracking-wider text-white group-hover:text-gray-200 transition-colors">
                            Traveler
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium hover:text-gray-300 transition-colors">Home</Link>
                        <Link to="/flight" className="text-sm font-medium hover:text-gray-300 transition-colors">Flight</Link>
                        <Link to="/destinations" className="text-sm font-medium hover:text-gray-300 transition-colors">Destinations</Link>
                        <Link to="/about" className="text-sm font-medium hover:text-gray-300 transition-colors">About Us</Link>
                        <Link to="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">Contact Us</Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-medium hover:text-gray-300 transition-colors">
                            Sign In
                        </Link>
                        <Button asChild className="text-black bg-white hover:bg-black hover:text-white border border-white hover:border-white transition-all">
                            <Link to="/contact">Contact</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar;