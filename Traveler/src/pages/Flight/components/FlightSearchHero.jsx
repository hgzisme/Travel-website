import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plane, Calendar, Users, MapPin } from "lucide-react";

const FlightSearchHero = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useState({
        origin: '',
        destination: '',
        departDate: '',
        returnDate: '',
        passengers: 1,
        travelClass: 'Economy'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Basic validation
        if (!searchParams.origin || !searchParams.destination || !searchParams.departDate) {
            alert("Please fill in all required fields.");
            return;
        }
        if (searchParams.returnDate && searchParams.returnDate < searchParams.departDate) {
            alert("Return date cannot be before departure date.");
            return;
        }
        onSearch(searchParams);
    };

    return (
        <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl shadow-xl w-full max-w-6xl mx-auto -mt-24 relative z-10">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

                {/* Origin */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Origin
                    </label>
                    <input
                        type="text"
                        name="origin"
                        placeholder="From where?"
                        value={searchParams.origin}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                    />
                </div>

                {/* Destination */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Destination
                    </label>
                    <input
                        type="text"
                        name="destination"
                        placeholder="Where to?"
                        value={searchParams.destination}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                    />
                </div>

                {/* Departure Date */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Depart
                    </label>
                    <input
                        type="date"
                        name="departDate"
                        value={searchParams.departDate}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium [color-scheme:dark]"
                    />
                </div>

                {/* Return Date */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Return
                    </label>
                    <input
                        type="date"
                        name="returnDate"
                        value={searchParams.returnDate}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium [color-scheme:dark]"
                    />
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                        <Users className="w-3 h-3" /> Passengers
                    </label>
                    <select
                        name="passengers"
                        value={searchParams.passengers}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium appearance-none"
                    >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>

                {/* Class */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                        <Plane className="w-3 h-3" /> Class
                    </label>
                    <select
                        name="travelClass"
                        value={searchParams.travelClass}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium appearance-none"
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First">First Class</option>
                    </select>
                </div>

                <div className="md:col-span-2 lg:col-span-2">
                    <Button type="submit" className="w-full h-[50px] bg-white text-black hover:bg-gray-200 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Search Flights
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default FlightSearchHero;
