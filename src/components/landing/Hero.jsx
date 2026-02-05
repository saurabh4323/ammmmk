"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function Hero({ onRegister }) {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950 selection:bg-amber-500/30">
            {/* Richer Background Gradients/Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/10 blur-[120px] rounded-full opacity-60 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Next Session: The Authority Drop (Global Intel)
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Master the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-sm">
                            C-Suite Architecture
                        </span>
                    </h1>

                    <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
                        Join the <strong className="text-white font-semibold">CXO-SummitSync Live Series</strong>.
                        30 Minutes of High-Level Intel on the 2026 Global Summit.
                        Discover the roadmap, meet the achievers, and see why the <span className="text-amber-400 font-medium">₹18K Gold Pass</span> is the most strategic investment of your career.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-slate-400 uppercase tracking-widest text-[10px]">
                            <span className="w-8 h-[1px] bg-slate-700"></span>
                            <span className="font-semibold text-white">Next Sync Title</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                            onClick={onRegister}
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10">SAVE MY FREE SEAT</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-xs text-slate-500 mt-2 sm:mt-0 sm:self-center max-w-[200px] leading-tight opacity-80">
                            One registration grants access to <span className="text-slate-300">all 5 strategic sessions</span>.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-700 flex items-center justify-center text-xs text-white overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center text-xs font-medium text-white">
                                +2k
                            </div>
                        </div>
                        <div className="text-sm text-slate-400">
                            <strong className="text-white block">2,400+ Leaders</strong>
                            have already saved their seat.
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Visual/Video Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                        <iframe
                            src="https://player.vimeo.com/video/1152548733?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0"
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="SummitSync Video"
                        ></iframe>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}