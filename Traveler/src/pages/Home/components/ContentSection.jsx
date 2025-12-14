import React from 'react';
import { Button } from "@/components/ui/button";

const ContentSection = () => {
    return (
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 py-16 space-y-20">

            {/* SEO: Introduction / Value Prop */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold text-gray-900 leading-tight">
                        Discover the World's <br />
                        <span className="text-gray-500">Hidden Gems</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-['Inter'] leading-relaxed">
                        At <strong>Traveler</strong>, we curate unforgettable journeys for the modern explorer. From the bustling streets of Tokyo to the serene beaches of Bali, our mission is to connect you with the authentic soul of every destination.
                    </p>
                    <p className="text-lg text-gray-600 font-['Inter'] leading-relaxed">
                        Whether you are seeking luxury escapes, budget-friendly backpacking adventures, or cultural immersions in Asia and beyond, we provide the tools and guides to make your dream trip a reality.
                    </p>
                    <div className="pt-4">
                        <Button className="rounded-full px-8 py-6 text-lg bg-black text-white hover:bg-gray-800 transition-all font-['Syne']">
                            Start Your Journey
                        </Button>
                    </div>
                </div>
                {/* Visual - Placeholder for an inspiring travel image */}
                <div className="flex-1 h-[400px] w-full rounded-3xl overflow-hidden bg-gray-200 relative group">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                        alt="Scenic mountain landscape in Switzerland reflecting in a lake"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
            </div>

            {/* SEO: Featured Destinations Grid */}
            <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h3 className="text-3xl font-['Orbitron'] font-bold text-gray-900">Trending Destinations</h3>
                    <p className="text-gray-600 font-['Inter']">Explore our most popular travel packages and guides this season.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group cursor-pointer space-y-3">
                        <div className="h-[300px] rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop"
                                alt="Neon streets of Tokyo, Japan at night"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider">JAPAN</div>
                        </div>
                        <h4 className="text-xl font-['Syne'] font-bold group-hover:text-gray-600 transition-colors">Neon Nights in Tokyo</h4>
                        <p className="text-sm text-gray-500 font-['Inter'] line-clamp-2">Experience the perfect blend of tradition and future tech in Japan's capital.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer space-y-3">
                        <div className="h-[300px] rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop"
                                alt="Traditional temples in Bali, Indonesia"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider">INDONESIA</div>
                        </div>
                        <h4 className="text-xl font-['Syne'] font-bold group-hover:text-gray-600 transition-colors">Spiritual Bali Retreats</h4>
                        <p className="text-sm text-gray-500 font-['Inter'] line-clamp-2">Recharge your soul with yoga, pristine beaches, and ancient temple visits.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer space-y-3">
                        <div className="h-[300px] rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
                                alt="Eiffel Tower view in Paris, France"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider">FRANCE</div>
                        </div>
                        <h4 className="text-xl font-['Syne'] font-bold group-hover:text-gray-600 transition-colors">Romantic Paris Getaway</h4>
                        <p className="text-sm text-gray-500 font-['Inter'] line-clamp-2">Walk the Seine, visit the Louvre, and indulge in world-class culinary delights.</p>
                    </div>
                </div>
            </div>

            {/* SEO: Benefits/Features */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <h5 className="text-xl font-bold font-['Orbitron']">Expert Guides</h5>
                        <p className="text-gray-600 font-['Inter'] text-sm">Our local experts provide insider knowledge you won't find in guidebooks.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <h5 className="text-xl font-bold font-['Orbitron']">Seamless Booking</h5>
                        <p className="text-gray-600 font-['Inter'] text-sm">From flights to hotels, we handle the logistics so you can focus on the adventure.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <h5 className="text-xl font-bold font-['Orbitron']">24/7 Support</h5>
                        <p className="text-gray-600 font-['Inter'] text-sm">Travel with peace of mind knowing our support team is always just a click away.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContentSection;
