import React from 'react'
import { useState, useEffect } from 'react';
import { BsGrid3X3GapFill } from "react-icons/bs";

const HeroSection = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Format Helper
    const formatTime = (date, timeZone) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: timeZone
        }).format(date);
    };

    const asianCities = [
        { city: 'Tokyo', zone: 'Asia/Tokyo' },
        { city: 'Seoul', zone: 'Asia/Seoul' },
        { city: 'Bangkok', zone: 'Asia/Bangkok' },
        { city: 'Singapore', zone: 'Asia/Singapore' },
        { city: 'New Delhi', zone: 'Asia/Kolkata' },
    ];

    // User Local Time Breakdown
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    // Month Names
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="bg-[#E5E5E5] text-black font-['Syne'] overflow-hidden flex flex-col mx-4 md:mx-12 lg:mx-20 my-4 rounded-3xl shadow-lg border border-gray-200">

            {/* HEADER */}
            <header className="px-8 py-6 flex justify-between items-center w-full max-w-[1920px] mx-auto">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold tracking-widest font-['Orbitron']">WORLD TIME</h1>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-full transition">
                    <BsGrid3X3GapFill className="text-2xl" />
                </button>
            </header>

            {/* MAIN CLOCK DISPLAY */}
            <main className="flex-grow flex flex-col justify-center px-4 md:px-12 w-full max-w-[1920px] mx-auto z-10">

                {/* BIG NUMBERS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 w-full mb-12">

                    {/* HOURS */}
                    <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-['Inter'] pl-2">hours</span>
                        <div className="flex items-center justify-center md:justify-start h-[120px] md:h-[180px]">
                            <span className="font-['Orbitron'] text-6xl md:text-9xl lg:text-[10rem] leading-none font-black tracking-tighter tabular-nums">
                                {hours}
                            </span>
                        </div>
                    </div>

                    {/* MINUTES */}
                    <div className="flex flex-col md:border-l md:border-r border-gray-300 md:pl-12">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-['Inter'] pl-2">minutes</span>
                        <div className="flex items-center justify-center md:justify-start h-[120px] md:h-[180px]">
                            <span className="font-['Orbitron'] text-6xl md:text-9xl lg:text-[10rem] leading-none font-black tracking-tighter tabular-nums">
                                {minutes}
                            </span>
                        </div>
                    </div>

                    {/* SECONDS */}
                    <div className="flex flex-col md:pl-12 relative">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-['Inter'] pl-2">seconds</span>
                        <div className="flex items-center justify-center md:justify-start h-[120px] md:h-[180px]">
                            <span className="font-['Orbitron'] text-6xl md:text-9xl lg:text-[10rem] leading-none font-black tracking-tighter tabular-nums text-black/80">
                                {seconds}
                            </span>
                        </div>
                    </div>

                </div>

                {/* CITY TIMES ROW */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-4 border-t border-gray-300 pt-8 pb-12">
                    {asianCities.map((item) => (
                        <div key={item.city} className="flex flex-col">
                            <span className="text-sm font-['Inter'] text-gray-500 mb-1">{item.city}</span>
                            <span className="text-2xl md:text-3xl font-['Orbitron'] font-bold tracking-widest">
                                {formatTime(time, item.zone)}
                            </span>
                        </div>
                    ))}
                </div>
            </main>

            {/* BOTTOM IMAGE SECTION - PLACEHOLDER */}
            {/* 
          INSTRUCTIONS FOR USER:
          1. Replace 'bg-gray-800' with your image url in the style attribute or class.
          2. Example: style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
          3. Ensure the image covers the area (bg-cover bg-center).
      */}
            <div
                className="w-full h-[400px] md:h-[500px] relative bg-gray-800 bg-cover bg-center mt-auto"
                style={{
                    /* UNCOMMENT AND ADD YOUR URL BELOW */
                    backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2994&auto=format&fit=crop')"
                }}
            >
                {/* Placeholder Message - Remove this if you want */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-gray-500 font-['Inter'] text-lg opacity-20">[ IMAGE PLACEHOLDER AREA ]</span>
                </div>

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end text-white">

                    {/* LEFT: CITY NAME */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-5xl font-['Orbitron'] font-bold uppercase tracking-widest leading-tight">
                            Asia Pacific
                        </h2>
                        <p className="text-xl md:text-2xl font-['Orbitron'] opacity-80 mt-2 uppercase tracking-wide">
                            Region View
                        </p>
                    </div>

                    {/* RIGHT: DATE */}
                    <div className="text-right">
                        <span className="block text-lg md:text-xl font-['Inter'] opacity-90">
                            {time.toLocaleDateString('en-US', { weekday: 'long' })},
                        </span>
                        <span className="block text-3xl md:text-4xl font-['Orbitron'] font-bold">
                            {monthNames[time.getMonth()]} {time.getDate()}
                        </span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HeroSection