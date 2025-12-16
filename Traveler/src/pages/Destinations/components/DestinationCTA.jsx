import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const DestinationCTA = () => {
    return (
        <section className="py-20 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-12 text-center space-y-6 shadow-2xl shadow-purple-500/10">
                    <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
                        Can't Find Your Dream Destination?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Let us create a custom itinerary tailored to your preferences and budget.
                    </p>
                    <Button asChild className="h-14 px-10 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
                        <Link to="/contact">
                            Contact Our Travel Experts <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DestinationCTA;
