import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MyFooter = () => {
    return (
        <footer className="w-full bg-black/40 backdrop-blur-xl border-t border-white/10 text-white pt-16 pb-8 font-['Inter']">
            <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold font-['Orbitron'] tracking-wider">TRAVELER</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting unforgettable journeys for the modern explorer. Experience the world's hidden gems with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold font-['Syne']">Explore</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                            <li><Link to="/pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
                            <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold font-['Syne']">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold font-['Syne']">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all text-gray-400">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all text-gray-400">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all text-gray-400">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 Traveler. All rights reserved.</p>
                    <p className="text-gray-500 text-sm">Designed for Adventurers</p>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;
