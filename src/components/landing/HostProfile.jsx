"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function HostProfile() {
    return (
        <section className="py-16 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">

                    {/* Image */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                            <Image
                                src="https://globalcxoaccelerator.com/wp-content/uploads/2025/11/1.ImpSiliconMagCover.jpg"
                                alt="Mudit Saxena"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />

                            <div className="absolute bottom-8 left-8 z-20">
                                <h3 className="text-3xl font-bold text-white mb-1">Mudit Saxena</h3>
                                <p className="text-amber-500 font-medium tracking-wide">Global Leadership Coach & Former CXO</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-500/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest shadow-lg">
                            The Authority
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Led by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Mudit Saxena</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                            <p>
                                A Global leadership coach who has been a <strong className="text-white font-semibold">former CXO himself</strong>.
                            </p>
                            <p>
                                Mudit has designed the CXO-SummitSync to be a <strong className="text-amber-400 font-medium">"Zero-Fluff" zone</strong>.
                                Each session is a 30-minute deep dive into the practical realities of high-stakes career growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 pt-6">
                            {['Former CXO Experience', 'Zero-Fluff Strategy', 'Global Perspective', 'Practical Realities'].map((item) => (
                                <div key={item} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                                        <Check className="w-3.5 h-3.5 text-amber-500" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
