import React from 'react';
import { X, Clock, Plane, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlightDetailsModal = ({ flight, onClose, onBook }) => {
    if (!flight) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                    <div>
                        <h3 className="text-xl font-bold text-white">Flight Details</h3>
                        <p className="text-zinc-500 text-sm">{flight.origin} to {flight.destination}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">

                    {/* Flight Segment */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <div className="w-0.5 h-full bg-zinc-800 my-1"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <div className="text-lg font-bold text-white mb-1">{flight.departureTime} • {flight.origin}</div>
                                <div className="text-zinc-400 text-sm">Check-in counter opens 3 hours before departure</div>
                            </div>

                            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 flex gap-4 items-center">
                                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
                                    <Plane className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{flight.airline} • {flight.aircraft}</div>
                                    <div className="text-zinc-500 text-sm">{flight.duration} • Economy Class</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-lg font-bold text-white mb-1">{flight.arrivalTime} • {flight.destination}</div>
                            </div>
                        </div>
                    </div>

                    {/* Baggage Info */}
                    <div className="border-t border-zinc-800 pt-6">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Archive className="w-4 h-4" /> Baggage Allowance
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-sm text-zinc-300">
                                <span className="block text-xs text-zinc-500 uppercase mb-1">Carry-on</span>
                                1 x 7kg
                            </div>
                            <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-sm text-zinc-300">
                                <span className="block text-xs text-zinc-500 uppercase mb-1">Checked Baggage</span>
                                1 x 20kg
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-6 border-t border-zinc-800 flex items-center justify-between bg-zinc-950/50 rounded-b-2xl">
                    <div>
                        <div className="text-2xl font-bold text-white">${flight.price}</div>
                        <div className="text-zinc-500 text-sm">Total for 1 passenger</div>
                    </div>
                    <Button onClick={onBook} className="bg-white text-black hover:bg-gray-200 px-8 h-12 text-lg font-bold rounded-lg">
                        Select Flight
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default FlightDetailsModal;
