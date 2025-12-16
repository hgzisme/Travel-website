import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationGrid = ({ destinations }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationGrid;
