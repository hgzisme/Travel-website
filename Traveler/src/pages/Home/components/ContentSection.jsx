import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { BsGlobeAmericas, BsCalendarCheck, BsHeadset, BsShieldCheck, BsAward, BsRecycle } from "react-icons/bs";

const ContentSection = () => {
    return (
        <section className="w-full max-w-full mx-auto px-4 md:px-8 lg:px-12 py-16 space-y-20">

            {/* SEO: Introduction / Value Prop */}
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-[1600px] mx-auto">
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold text-white leading-tight">
                        Discover the World's <br />
                        <span className="text-purple-400">Hidden Gems</span>
                    </h2>
                    <p className="text-lg text-gray-300 font-['Inter'] leading-relaxed max-w-xl">
                        At <strong>Traveler</strong>, we curate unforgettable journeys for the modern explorer. From the bustling streets of Tokyo to the serene beaches of Bali, our mission is to connect you with the authentic soul of every destination.
                    </p>
                    <p className="text-lg text-gray-300 font-['Inter'] leading-relaxed max-w-xl">
                        Whether you are seeking luxury escapes, budget-friendly backpacking adventures, or cultural immersions in Asia and beyond, we provide the tools and guides to make your dream trip a reality.
                    </p>
                    <div className="pt-4">
                        <Button className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 transition-all font-['Syne'] font-bold shadow-lg shadow-white/10">
                            Start Your Journey
                        </Button>
                    </div>
                </div>
                {/* Visual - Placeholder for an inspiring travel image */}
                <div className="flex-1 h-[500px] w-full rounded-3xl overflow-hidden bg-gray-800 relative group border border-white/10 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                        alt="Scenic mountain landscape in Switzerland reflecting in a lake"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
            </div>

            {/* SEO: Featured Destinations Grid */}
            <div className="space-y-12 max-w-[1920px] mx-auto">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h3 className="text-4xl font-['Orbitron'] font-bold text-white">Trending Destinations</h3>
                    <p className="text-gray-400 font-['Inter'] text-lg">Explore our most popular travel packages and guides this season.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group cursor-pointer space-y-4 bg-white/5 p-4 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                        <div className="h-[350px] rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop"
                                alt="Neon streets of Tokyo, Japan at night"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider text-white border border-white/20">JAPAN</div>
                        </div>
                        <div className="px-2 pb-2">
                            <h4 className="text-2xl font-['Syne'] font-bold text-white group-hover:text-purple-400 transition-colors">Neon Nights in Tokyo</h4>
                            <p className="text-sm text-gray-400 font-['Inter'] line-clamp-2 mt-2">Experience the perfect blend of tradition and future tech in Japan's capital.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer space-y-4 bg-white/5 p-4 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                        <div className="h-[350px] rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop"
                                alt="Traditional temples in Bali, Indonesia"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider text-white border border-white/20">INDONESIA</div>
                        </div>
                        <div className="px-2 pb-2">
                            <h4 className="text-2xl font-['Syne'] font-bold text-white group-hover:text-purple-400 transition-colors">Spiritual Bali Retreats</h4>
                            <p className="text-sm text-gray-400 font-['Inter'] line-clamp-2 mt-2">Recharge your soul with yoga, pristine beaches, and ancient temple visits.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer space-y-4 bg-white/5 p-4 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                        <div className="h-[350px] rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
                                alt="Eiffel Tower view in Paris, France"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider text-white border border-white/20">FRANCE</div>
                        </div>
                        <div className="px-2 pb-2">
                            <h4 className="text-2xl font-['Syne'] font-bold text-white group-hover:text-purple-400 transition-colors">Romantic Paris Getaway</h4>
                            <p className="text-sm text-gray-400 font-['Inter'] line-clamp-2 mt-2">Walk the Seine, visit the Louvre, and indulge in world-class culinary delights.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO: Benefits/Features - Redesigned */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 max-w-[1920px] mx-auto relative overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-['Orbitron'] font-bold text-white">Why Choose <span className="text-purple-400">Traveler?</span></h2>
                    <p className="text-gray-400 font-['Inter'] max-w-2xl mx-auto">We don't just book trips; we craft experiences that stay with you forever.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="space-y-6 text-center group">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/10">
                            <BsGlobeAmericas className="text-5xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold font-['Syne'] text-white mb-3">Expert Local Guides</h5>
                            <p className="text-gray-400 font-['Inter'] text-base leading-relaxed px-4">
                                Go beyond the tourist traps. Our network of verified local experts gives you access to hidden gems and authentic cultural experiences.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-6 text-center group">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/10">
                            <BsCalendarCheck className="text-5xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold font-['Syne'] text-white mb-3">Seamless Itineraries</h5>
                            <p className="text-gray-400 font-['Inter'] text-base leading-relaxed px-4">
                                We handle every detail, from flights and accommodations to exclusive reservations, so you can focus entirely on making memories.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-6 text-center group">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/10">
                            <BsHeadset className="text-5xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold font-['Syne'] text-white mb-3">24/7 Global Support</h5>
                            <p className="text-gray-400 font-['Inter'] text-base leading-relaxed px-4">
                                Travel with confidence. Our dedicated support team is available around the clock to assist you with any needs during your journey.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-6 text-center group">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/10">
                            <BsShieldCheck className="text-5xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold font-['Syne'] text-white mb-3">Secure Payments</h5>
                            <p className="text-gray-400 font-['Inter'] text-base leading-relaxed px-4">
                                Your peace of mind is our priority. We use state-of-the-art encryption to ensure every transaction is safe and secure.
                            </p>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="space-y-6 text-center group">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/10">
                            <BsAward className="text-5xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold font-['Syne'] text-white mb-3">Exclusive Deals</h5>
                            <p className="text-gray-400 font-['Inter'] text-base leading-relaxed px-4">
                                Unlock member-only pricing and VIP perks. We negotiate directly with partners to bring you luxury for less.
                            </p>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="space-y-6 text-center group">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-purple-500/10">
                            <BsRecycle className="text-5xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold font-['Syne'] text-white mb-3">Sustainable Travel</h5>
                            <p className="text-gray-400 font-['Inter'] text-base leading-relaxed px-4">
                                Explore responsibly. We partner with eco-conscious providers to minimize impact and support preservation efforts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContentSection;
