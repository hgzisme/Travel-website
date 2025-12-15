import React, { useState, useEffect } from 'react';

const WorldClockSection = () => {
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
        <div className="bg-white/5 backdrop-blur-lg text-white font-['Syne'] overflow-hidden flex flex-col mx-0 md:mx-4 lg:mx-8 my-4 md:rounded-3xl shadow-2xl border border-white/10 min-h-[85vh]">

            {/* HEADER */}
            <header className="px-6 py-6 flex justify-between items-center w-full max-w-[1920px] mx-auto">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold tracking-widest font-['Orbitron'] text-white">WORLD TIME</h1>
                </div>
            </header>

            {/* MAIN CLOCK DISPLAY */}
            <main className="flex-grow flex flex-col justify-center px-4 md:px-12 w-full max-w-[1920px] mx-auto z-10">

                {/* BIG NUMBERS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full">

                    {/* HOURS */}
                    <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-['Inter'] pl-2">hours</span>
                        <div className="flex items-center justify-center md:justify-start h-[120px] md:h-[180px]">
                            <span className="font-['Orbitron'] text-4xl md:text-6xl lg:text-[10rem] leading-none font-black tracking-tighter tabular-nums text-white">
                                {hours}
                            </span>
                        </div>
                    </div>

                    {/* MINUTES */}
                    <div className="flex flex-col md:border-l md:border-r border-white/10 md:pl-12">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-['Inter'] pl-2">minutes</span>
                        <div className="flex items-center justify-center md:justify-start h-[120px] md:h-[180px]">
                            <span className="font-['Orbitron'] text-4xl md:text-6xl lg:text-[10rem] leading-none font-black tracking-tighter tabular-nums text-white">
                                {minutes}
                            </span>
                        </div>
                    </div>

                    {/* SECONDS */}
                    <div className="flex flex-col md:pl-12 relative">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-['Inter'] pl-2">seconds</span>
                        <div className="flex items-center justify-center md:justify-start h-[120px] md:h-[180px]">
                            <span className="font-['Orbitron'] text-4xl md:text-6xl lg:text-[10rem] leading-none font-black tracking-tighter tabular-nums text-white/50">
                                {seconds}
                            </span>
                        </div>
                    </div>

                </div>

                {/* CITY TIMES ROW */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-4 border-t border-white/10 pt-8 pb-6">
                    {asianCities.map((item) => (
                        <div key={item.city} className="flex flex-col">
                            <span className="text-sm font-['Inter'] text-gray-400 mb-1">{item.city}</span>
                            <span className="text-2xl md:text-3xl font-['Orbitron'] font-bold tracking-widest text-white">
                                {formatTime(time, item.zone)}
                            </span>
                        </div>
                    ))}
                </div>
            </main>

            {/* BOTTOM IMAGE SECTION - PLACEHOLDER */}
            <div
                className="w-full h-[300px] md:h-[400px] relative bg-gray-800 bg-cover bg-center mt-auto"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2994&auto=format&fit=crop')"
                }}
            >

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-end text-white">

                    {/* LEFT: CITY NAME */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-5xl font-['Orbitron'] font-bold uppercase tracking-widest leading-tight">
                            Asia Pacific
                        </h2>
                        <p className="text-xl md:text-2xl font-['Orbitron'] opacity-80 mt-2 uppercase tracking-wide text-gray-300">
                            Region View
                        </p>
                    </div>

                    {/* RIGHT: DATE */}
                    <div className="text-right">
                        <span className="block text-lg md:text-xl font-['Inter'] opacity-90 text-gray-300">
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
export default WorldClockSection