"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Lock } from "lucide-react";

const scheduleData = [
    {
        date: "Feb 03",
        time: "8:00 PM",
        topic: "The Market Awareness Hook",
        status: "Upcoming"
    },
    {
        date: "Feb 06",
        time: "8:00 PM",
        topic: "The Authority Drop",
        status: "Locked"
    },
    {
        date: "Feb 10",
        time: "8:00 PM",
        topic: "The Momentum Builder",
        status: "Locked"
    },
    {
        date: "Feb 13",
        time: "8:00 PM",
        topic: "The Family/Career Strategy",
        status: "Locked"
    },
    {
        date: "Feb 15",
        time: "7:00 PM",
        topic: "The Final Countdown",
        status: "Locked",
        highlight: true
    }
];

export default function Schedule() {
    return (
        <section className="pt-8 pb-12 bg-slate-950 relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20 relative">
                    <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full -z-10" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Choose Your Session <br />
                        <span className="text-slate-500 text-2xl md:text-3xl font-light italic">(or Attend All Five)</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">
                        Register once to receive calendar invites for the <span className="text-white font-medium">entire series</span>.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {scheduleData.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border transition-all duration-300 group
                                ${item.highlight
                                    ? 'bg-amber-900/10 border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-900/20'
                                    : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                                } backdrop-blur-sm`}
                        >
                            {/* Connector Line */}
                            {index !== scheduleData.length - 1 && (
                                <div className="absolute left-[3.25rem] md:left-[5.5rem] top-[5.5rem] bottom-[-2rem] w-[1px] bg-white/5 md:block hidden" />
                            )}

                            {/* Date & Time */}
                            <div className={`flex flex-col items-center justify-center w-full md:w-36 p-4 rounded-xl border shrink-0 transition-colors
                                ${item.highlight ? 'bg-amber-950/30 border-amber-500/20' : 'bg-slate-900/50 border-white/5'}`}>
                                <div className={`flex items-center gap-2 font-bold mb-1 text-lg ${item.highlight ? 'text-amber-400' : 'text-slate-200'}`}>
                                    {item.date}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-black/20 px-3 py-1 rounded-full uppercase tracking-wider">
                                    {item.time}
                                </div>
                            </div>

                            {/* Topic */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${item.highlight ? 'text-amber-400' : 'text-white'} group-hover:text-amber-300 transition-colors`}>
                                    {item.topic}
                                </h3>
                                <div className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                    The "Intel" Reveal
                                </div>
                            </div>

                            {/* Action/Status */}
                            <div className="w-full md:w-auto flex flex-col items-center gap-4">
                                {index === 0 ? (
                                    <div className="flex flex-col items-center gap-4">
                                        <a href="https://www.linkedin.com/events/7424113166231470080/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group/img">
                                            <img
                                                src="/a.jpeg"
                                                alt="Session Preview"
                                                className="w-48 rounded-lg border border-white/20 shadow-lg group-hover/img:scale-105 transition-all group-hover/img:border-emerald-500/50"
                                            />
                                        </a>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <button
                                                onClick={() => window.open('https://www.linkedin.com/events/7424113166231470080/', '_blank')}
                                                className="px-8 py-3 rounded-xl bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 whitespace-nowrap"
                                            >
                                                Watch Session
                                            </button>
                                            <button
                                                onClick={() => window.open('https://drive.google.com/file/d/1wM-guQoA0U9qd7FJ8i55KrCMJP41D4Y2/view?usp=drive_link', '_blank')}
                                                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                                            >
                                                PDF
                                            </button>
                                        </div>
                                    </div>
                                ) : index === 1 ? (
                                    <div className="flex flex-col items-center gap-4">
                                        <a href="https://drive.google.com/file/d/1wM-guQoA0U9qd7FJ8i55KrCMJP41D4Y2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group/img">
                                            <img
                                                src="/a.jpeg"
                                                alt="Session Preview"
                                                className="w-48 rounded-lg border border-white/20 shadow-lg group-hover/img:scale-105 transition-all group-hover/img:border-emerald-500/50"
                                            />
                                        </a>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <button
                                                onClick={() => window.open('https://www.youtube.com/live/yXiRqtPVtZQ?si=sVS30PbeJ405R40f', '_blank')}
                                                className="px-8 py-3 rounded-xl bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 whitespace-nowrap"
                                            >
                                                Watch Session
                                            </button>
                                            <button
                                                onClick={() => window.open('https://drive.google.com/file/d/1Nc2y7nmtsUA5COEOtF0lXv0Lr_0n6nlz/view?usp=sharing', '_blank')}
                                                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                                            >
                                                PDF
                                            </button>
                                        </div>
                                    </div>
                                ) : index === 2 ? (
                                    <div className="flex flex-col items-center gap-4">
                                        <a href="https://www.youtube.com/watch?v=Evl1Rk25XaU" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group/img">
                                            <img
                                                src="/c.jpeg"
                                                alt="Session 3 Preview"
                                                className="w-48 rounded-lg border border-white/20 shadow-lg group-hover/img:scale-105 transition-all group-hover/img:border-emerald-500/50"
                                            />
                                        </a>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <button
                                                onClick={() => window.open('https://www.youtube.com/watch?v=Evl1Rk25XaU', '_blank')}
                                                className="px-8 py-3 rounded-xl bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 whitespace-nowrap"
                                            >
                                                Watch Session
                                            </button>
                                            <button
                                                onClick={() => window.open('https://drive.google.com/file/d/14Wn460TBAdBLBYAs9QIFoGAVsQ-tWtVj/view?usp=sharing', '_blank')}
                                                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                                            >
                                                PDF
                                            </button>
                                        </div>
                                    </div>
                                ) : index === 3 ? (
                                    <button
                                        onClick={() => window.open('https://us06web.zoom.us/meeting/register/KGX9_cAvRi67lBeNmcRhsw', '_blank')}
                                        className="px-8 py-3 rounded-xl bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95"
                                    >
                                        Join Sync
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                                        <Lock className="w-3 h-3" />
                                        {item.status}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}