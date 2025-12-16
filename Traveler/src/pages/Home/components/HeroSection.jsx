import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center justify-center bg-black">

            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    {/* High-quality travel video: Flying over mountains/coast at sunset */}
                    <source src="https://cdn.coverr.co/videos/coverr-flying-over-the-coast-5324/1080p.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>


            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center space-y-8">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium text-white/90 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    New Destinations Available
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-['Orbitron'] font-black text-transparent bg-clip-text bg-gradient-to-b from-violet-800 to-purple-400 tracking-tighter drop-shadow-2xl animate-fade-in-up delay-100">
                    TRAVELER
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-2xl text-gray-200 font-['Inter'] max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 drop-shadow-md">
                    Experience the world like never before. Curated journeys, exclusive deals, and memories that last a lifetime.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up delay-300">
                    <Button asChild className="h-14 px-8 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
                        <Link to="/flight">
                            Book a Flight <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-14 px-8 rounded-full text-lg font-bold border-white/20 hover:bg-white/10 text-black backdrop-blur-sm">
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>

        </div>
    );
};

export default HeroSection;