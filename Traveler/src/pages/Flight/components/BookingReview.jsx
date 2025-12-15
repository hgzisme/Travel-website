import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, CheckCircle } from "lucide-react";

const BookingReview = ({ flight, passenger, onBack, onPay }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment delay
        setTimeout(() => {
            setIsProcessing(false);
            onPay();
        }, 2000);
    };

    const tax = flight.price * 0.1;
    const total = flight.price + tax;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Left Column: Itinerary & Passenger */}
                <div className="flex-1 space-y-6">

                    {/* Itinerary */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Flight Itinerary</h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold text-white mb-1">{flight.origin}</div>
                                <div className="text-zinc-500 text-sm">{flight.departureTime}</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-zinc-500 text-xs text-center mb-1">{flight.duration}</div>
                                <div className="w-24 h-[1px] bg-zinc-700"></div>
                                <div className="text-zinc-500 text-xs mt-1">{flight.airline}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-white mb-1">{flight.destination}</div>
                                <div className="text-zinc-500 text-sm">{flight.arrivalTime}</div>
                            </div>
                        </div>
                    </div>

                    {/* Passenger Info */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Passenger Details</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-zinc-500">Name</span>
                                <span className="text-white font-medium">{passenger.firstName} {passenger.lastName}</span>
                            </div>
                            <div>
                                <span className="block text-zinc-500">Passport</span>
                                <span className="text-white font-medium">{passenger.passport}</span>
                            </div>
                            <div>
                                <span className="block text-zinc-500">Email</span>
                                <span className="text-white font-medium">{passenger.email}</span>
                            </div>
                            <div>
                                <span className="block text-zinc-500">Phone</span>
                                <span className="text-white font-medium">{passenger.phone}</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Payment */}
                <div className="md:w-96 space-y-6">

                    {/* Price Summary */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Price Breakdown</h3>
                        <div className="space-y-3 pb-4 border-b border-zinc-800">
                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-400">Base Fare ({flight.travelClass || 'Economy'})</span>
                                <span className="text-white">${flight.price.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-400">Taxes & Fees</span>
                                <span className="text-white">${tax.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <span className="text-lg font-bold text-white">Total</span>
                            <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5" /> Payment
                        </h3>

                        <form onSubmit={handlePayment} className="space-y-4">
                            <div>
                                <label className="text-xs text-zinc-400 uppercase tracking-wider block mb-2">Card Number</label>
                                <input
                                    required
                                    placeholder="0000 0000 0000 0000"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-zinc-600 font-mono"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-zinc-400 uppercase tracking-wider block mb-2">Expiry</label>
                                    <input
                                        required
                                        placeholder="MM/YY"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-zinc-600 font-mono"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-zinc-400 uppercase tracking-wider block mb-2">CVC</label>
                                    <input
                                        required
                                        placeholder="123"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-zinc-600 font-mono"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold h-12 mt-2"
                            >
                                {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                            </Button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookingReview;
