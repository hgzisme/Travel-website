import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-20">
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center border border-white/10 shadow-2xl">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

                {/* Content */}
                <div className="relative z-20 text-center max-w-3xl px-6 space-y-8 pt-4">
                    <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold text-white leading-tight">
                        Ready for your next <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Adventure?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 font-['Inter'] leading-relaxed">
                        Join our community of travelers and get exclusive offers, travel guides, and inspiration delivered straight to your inbox.
                    </p>

                    {/* Newsletter Form */}
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 backdrop-blur-md transition-all"
                        />
                        <Button className="rounded-full px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-lg shadow-purple-900/30 font-['Syne']">
                            Subscribe
                        </Button>
                    </div>

                    <h3 className="text-xs text-purple-400 font-['Inter'] pt-4 pb-4">
                        By subscribing, you agree to our Terms of Service and Privacy Policy.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
