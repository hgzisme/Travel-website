import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const PassengerForm = ({ onSubmit, onBack }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        passport: '',
        dob: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">Passenger Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">First Name</label>
                            <input
                                required
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Last Name</label>
                            <input
                                required
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Email Address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Passport / ID Number</label>
                            <input
                                required
                                name="passport"
                                value={formData.passport}
                                onChange={handleChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Date of Birth</label>
                            <input
                                required
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                        <Button type="button" variant="outline" onClick={onBack} className="flex-1 bg-transparent border-zinc-700 text-white hover:bg-zinc-800">
                            Back
                        </Button>
                        <Button type="submit" className="flex-1 bg-white text-black hover:bg-gray-200 font-bold">
                            Continue to Payment
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default PassengerForm;
