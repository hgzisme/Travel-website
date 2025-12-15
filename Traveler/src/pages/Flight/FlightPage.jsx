import React, { useState } from 'react';
import FlightSearchHero from './components/FlightSearchHero';
import FlightSearchResults from './components/FlightSearchResults';
import FlightDetailsModal from './components/FlightDetailsModal';
import PassengerForm from './components/PassengerForm';
import BookingReview from './components/BookingReview';
import { mockFlights } from './components/flightData';
import { CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const FlightPage = () => {
    const [step, setStep] = useState('search'); // search, results, passenger, review, confirmation
    const [searchParams, setSearchParams] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [passengerDetails, setPassengerDetails] = useState(null);

    const handleSearch = (params) => {
        setSearchParams(params);
        setStep('results');
        // In a real app, we would fetch data here based on params
    };

    const handleSelectFlight = (flight) => {
        setSelectedFlight(flight);
        setIsDetailsModalOpen(true);
    };

    const handleBookFlight = () => {
        setIsDetailsModalOpen(false);
        setStep('passenger');
        window.scrollTo(0, 0);
    };

    const handlePassengerSubmit = (details) => {
        setPassengerDetails(details);
        setStep('review');
        window.scrollTo(0, 0);
    };

    const handlePaymentSuccess = () => {
        setStep('confirmation');
        window.scrollTo(0, 0);
    };

    const handleReset = () => {
        setStep('search');
        setSearchParams(null);
        setSelectedFlight(null);
        setPassengerDetails(null);
        setIsDetailsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white pb-20">

            {/* Hero Section Background - Only show large hero on initial search */}
            <div className={`relative ${step === 'search' ? 'h-[60vh]' : 'h-[40vh]'} transition-all duration-500 ease-in-out`}>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")' }}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-['Orbitron'] tracking-wider">
                        {step === 'confirmation' ? 'Bon Voyage!' : 'Discover the World'}
                    </h1>
                    {step === 'search' && (
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md">
                            Find the best flights at the best prices. Your journey starts here.
                        </p>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-20">

                {/* Search Bar - Always visible unless in confirmation, but maybe read-only or compact in later steps? 
                    For simplicity, we keep the Hero Search visible in 'search' and 'results' modes.
                */}
                {(step === 'search' || step === 'results') && (
                    <FlightSearchHero onSearch={handleSearch} />
                )}

                {/* Results Step */}
                {step === 'results' && (
                    <FlightSearchResults
                        flights={mockFlights}
                        onSelectFlight={handleSelectFlight}
                    />
                )}

                {/* Passenger Step */}
                {step === 'passenger' && (
                    <div className="-mt-12 relative z-30">
                        <PassengerForm
                            onSubmit={handlePassengerSubmit}
                            onBack={() => setStep('results')}
                        />
                    </div>
                )}

                {/* Review Step */}
                {step === 'review' && (
                    <div className="-mt-12 relative z-30">
                        <BookingReview
                            flight={selectedFlight}
                            passenger={passengerDetails}
                            onBack={() => setStep('passenger')}
                            onPay={handlePaymentSuccess}
                        />
                    </div>
                )}

                {/* Confirmation Step */}
                {step === 'confirmation' && (
                    <div className="w-full max-w-2xl mx-auto -mt-12 relative z-30 px-4">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center shadow-2xl">
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
                            <p className="text-zinc-400 mb-8">
                                Your flight to <strong>{selectedFlight?.destination}</strong> has been booked successfully.
                                A confirmation email has been sent to <strong>{passengerDetails?.email}</strong>.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button onClick={handleReset} variant="outline" className="bg-transparent border-zinc-700 hover:bg-zinc-800 text-white">
                                    Book Another
                                </Button>
                                <Button asChild className="bg-white text-black hover:bg-gray-200">
                                    <Link to="/">Go Home</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Details Modal */}
            <FlightDetailsModal
                flight={selectedFlight}
                onClose={() => setIsDetailsModalOpen(false)}
                onBook={handleBookFlight}
            />

            {isDetailsModalOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsDetailsModalOpen(false)} />
            )}

        </div>
    );
};

export default FlightPage; 