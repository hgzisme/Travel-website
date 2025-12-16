import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar, Users, ArrowRight } from "lucide-react";

const DestinationCard = ({ destination, index }) => {
    return (
        <div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="text-white font-bold text-sm">{destination.rating}</span>
                    <span className="text-white/60 text-xs">({destination.reviews})</span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <MapPin className="text-purple-400" size={16} />
                    <span className="text-white font-semibold text-sm">{destination.name}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                    {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                            {highlight}
                        </span>
                    ))}
                </div>

                {/* Details */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>2-8 people</span>
                        </div>
                    </div>
                </div>

                {/* Price & Booking */}
                <div className="flex items-center justify-between pt-2">
                    <div>
                        <p className="text-xs text-gray-400">Starting from</p>
                        <p className="text-2xl font-bold text-white">{destination.price}</p>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-full font-bold group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                        Book Now <ArrowRight className="ml-2" size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
