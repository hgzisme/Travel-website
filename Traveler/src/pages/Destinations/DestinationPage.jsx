import React, { useState } from 'react';
import DestinationHero from './components/DestinationHero';
import DestinationFilter from './components/DestinationFilter';
import DestinationGrid from './components/DestinationGrid';
import DestinationCTA from './components/DestinationCTA';

const DestinationPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const destinations = [
        {
            id: 1,
            name: "Tokyo, Japan",
            image: "Destinations/tokyo.png",
            description: "Experience the perfect blend of ancient tradition and cutting-edge technology in Japan's vibrant capital.",
            price: "$1,299",
            duration: "7 Days",
            rating: 4.9,
            reviews: 1234,
            category: "asia",
            highlights: ["Mount Fuji Views", "Cherry Blossoms", "Shibuya Crossing"]
        },
        {
            id: 2,
            name: "Paris, France",
            image: "Destinations/paris.png",
            description: "Discover the city of lights, romance, and world-class cuisine in the heart of Europe.",
            price: "$1,499",
            duration: "6 Days",
            rating: 4.8,
            reviews: 2156,
            category: "europe",
            highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"]
        },
        {   
            id: 3,
            name: "Bali, Indonesia",
            image: "Destinations/bali.png",
            description: "Relax in tropical paradise with stunning beaches, ancient temples, and lush rice terraces.",
            price: "$899",
            duration: "8 Days",
            rating: 4.9,
            reviews: 1876,
            category: "asia",
            highlights: ["Beach Resorts", "Temple Tours", "Rice Terraces"]
        },
        {
            id: 4,
            name: "Santorini, Greece",
            image: "Destinations/santorini.png",
            description: "Explore the iconic white-washed buildings and breathtaking sunsets of this Aegean gem.",
            price: "$1,199",
            duration: "5 Days",
            rating: 4.9,
            reviews: 1543,
            category: "europe",
            highlights: ["Caldera Views", "Wine Tasting", "Sunset Cruises"]
        },
        {
            id: 5,
            name: "New York, USA",
            image: "Destinations/newyork.png",
            description: "Immerse yourself in the energy of the city that never sleeps, from Broadway to Central Park.",
            price: "$1,099",
            duration: "6 Days",
            rating: 4.7,
            reviews: 2987,
            category: "americas",
            highlights: ["Times Square", "Broadway Shows", "Central Park"]
        },
        {
            id: 6,
            name: "Dubai, UAE",
            image: "Destinations/dubai.png",
            description: "Experience luxury and innovation in this futuristic desert metropolis.",
            price: "$1,399",
            duration: "5 Days",
            rating: 4.8,
            reviews: 1654,
            category: "middle-east",
            highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping"]
        }
    ];

    const categories = [
        { id: 'all', name: 'All Destinations' },
        { id: 'asia', name: 'Asia' },
        { id: 'europe', name: 'Europe' },
        { id: 'americas', name: 'Americas' },
        { id: 'middle-east', name: 'Middle East' }
    ];

    const filteredDestinations = selectedCategory === 'all'
        ? destinations
        : destinations.filter(dest => dest.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
            <DestinationHero />
            <DestinationFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <DestinationGrid destinations={filteredDestinations} />
            <DestinationCTA />
        </div>
    );
};

export default DestinationPage;