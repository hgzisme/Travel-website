import React from 'react';
import { Filter } from "lucide-react";

const DestinationFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <section className="py-8 border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-white/70">
                        <Filter size={20} />
                        <span className="font-medium">Filter by:</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => onCategoryChange(cat.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === cat.id
                                        ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/50'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationFilter;
