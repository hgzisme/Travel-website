import React from 'react';
import { Plane, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlightCard = ({ flight, onSelect }) => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Airline Info */}
                <div className="flex items-center gap-4 min-w-[200px]">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400">
                        {/* Find a way to render icons dynamically or just fallback */}
                        <Plane className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">{flight.airline}</h3>
                        <p className="text-zinc-500 text-sm">{flight.aircraft}</p>
                    </div>
                </div>

                {/* Flight Times */}
                <div className="flex-1 flex items-center justify-center gap-8">
                    <div className="text-center">
                        <div className="text-xl font-bold text-white mb-1">{flight.departureTime}</div>
                        <div className="text-zinc-500 text-sm font-medium">{flight.origin}</div>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <div className="text-zinc-500 text-xs font-mono">{flight.duration}</div>
                        <div className="w-32 h-[1px] bg-zinc-700 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 border-2 border-zinc-700 rounded-full"></div>
                        </div>
                        <div className="text-zinc-400 text-xs">
                            {flight.stops === 0 ? "Direct" : `${flight.stops} Stop`}
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-xl font-bold text-white mb-1">{flight.arrivalTime}</div>
                        <div className="text-zinc-500 text-sm font-medium">{flight.destination}</div>
                    </div>
                </div>

                {/* Price & Action */}
                <div className="flex flex-col items-end gap-3 min-w-[150px]">
                    <div className="text-2xl font-bold text-white">${flight.price}</div>
                    <Button
                        onClick={() => onSelect(flight)}
                        className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
                    >
                        View Deal
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default FlightCard;
