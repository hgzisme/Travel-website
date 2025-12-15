import React, { useState } from 'react';
import FlightCard from './FlightCard';
import { SlidersHorizontal } from "lucide-react";

const FlightSearchResults = ({ flights, onSelectFlight }) => {
    const [sortBy, setSortBy] = useState('cheapest');

    const sortedFlights = [...flights].sort((a, b) => {
        if (sortBy === 'cheapest') return a.price - b.price;
        if (sortBy === 'fastest') {
            const durationHeaderA = parseInt(a.duration.split('h')[0]);
            const durationHeaderB = parseInt(b.duration.split('h')[0]);
            return durationHeaderA - durationHeaderB;
        }
        return 0;
    });

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <div className="lg:w-1/4 space-y-8">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <SlidersHorizontal className="w-4 h-4 text-white" />
                            <h3 className="text-lg font-bold text-white">Filters</h3>
                        </div>

                        {/* Price Range Mock */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Price Range</label>
                            <input type="range" className="w-full accent-white" />
                            <div className="flex justify-between text-xs text-zinc-500 mt-2">
                                <span>$100</span>
                                <span>$2000</span>
                            </div>
                        </div>

                        {/* Stops Mock */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Stops</label>
                            <div className="space-y-2">
                                {['Direct', '1 Stop', '2+ Stops'].map((stop) => (
                                    <label key={stop} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-white focus:ring-0" />
                                        <span className="text-zinc-300 text-sm">{stop}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Airlines Mock */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Airlines</label>
                            <div className="space-y-2">
                                {['SkyWings', 'Oceanic Air', 'Global Jet'].map((airline) => (
                                    <label key={airline} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-white focus:ring-0" />
                                        <span className="text-zinc-300 text-sm">{airline}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Results List */}
                <div className="lg:w-3/4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white">{flights.length} Flights Found</h2>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            <option value="cheapest">Cheapest First</option>
                            <option value="fastest">Fastest First</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {sortedFlights.map(flight => (
                            <FlightCard key={flight.id} flight={flight} onSelect={onSelectFlight} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FlightSearchResults;
