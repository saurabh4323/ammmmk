"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate, compact = false }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const target = targetDate ? new Date(targetDate).getTime() : new Date("2026-02-15T20:00:00+05:30").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const isCompact = !!compact;

    return (
        <div className={`flex text-center ${isCompact ? 'gap-1.5' : 'gap-4'}`}>
            {Object.entries(timeLeft).map(([unit, value]) => {
                if (unit === 'days' && value === 0) return null;
                return (
                    <div key={unit} className="flex flex-col items-center">
                        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-md flex items-center justify-center
                            ${isCompact ? 'px-1.5 py-1 min-w-[32px] h-8' : 'p-3 w-16 sm:w-20'}`}>
                            <span className={`${isCompact ? 'text-sm' : 'text-xl sm:text-2xl'} font-bold text-amber-500 font-mono leading-none`}>
                                {String(value).padStart(2, "0")}
                            </span>
                        </div>
                        <span className={`${isCompact ? 'text-[7px]' : 'text-[10px] sm:text-xs'} uppercase font-bold tracking-tighter text-slate-500 mt-0.5`}>
                            {unit.substring(0, 1)}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}