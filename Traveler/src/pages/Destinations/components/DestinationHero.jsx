import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const DestinationHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
                <h1 className="text-6xl md:text-8xl font-['Orbitron'] font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-600 tracking-tighter animate-fade-in-up">
                    Explore the World
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-['Inter'] max-w-3xl mx-auto animate-fade-in-up delay-100">
                    Discover handpicked destinations that will create memories for a lifetime
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mt-8 animate-fade-in-up delay-200">
                    <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 shadow-2xl">
                        <Search className="absolute left-6 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="flex-1 bg-transparent px-12 py-3 text-white placeholder-gray-400 outline-none"
                        />
                        <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold">
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default DestinationHero;
