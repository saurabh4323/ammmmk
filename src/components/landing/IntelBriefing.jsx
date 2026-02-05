"use client";

import { motion } from "framer-motion";
import { Zap, Target, Lock, TrendingUp } from "lucide-react";

export default function IntelBriefing() {
    const features = [
        {
            icon: <Zap className="w-6 h-6 text-amber-500" />,
            title: "The Intel",
            description: "Behind-the-scenes of the Silicon Valley speaker lineup."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
            title: "The Proof",
            description: "Real-time case studies of past participants’ career leaps."
        },
        {
            icon: <Target className="w-6 h-6 text-amber-500" />,
            title: "The Reality",
            description: "Why the \"Need of the Hour\" demands a new leadership playbook."
        }
    ];

    return (
        <section className="pt-12 pb-8 relative overflow-hidden bg-slate-950">
            {/* Decorative Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest px-2">The Concept</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        What is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">SummitSync?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                        This isn’t a webinar. It’s a <strong className="text-amber-400 font-semibold">30-minute Live Intel Briefing</strong>.
                        We’re pulling back the curtain on the Feb 21–22 Summit in Bengaluru to show you exactly how our participants bridge the gap from Senior Management to Global Leadership.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all hover:bg-white/[0.04] hover:-translate-y-1 group backdrop-blur-sm shadow-2xl"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-500/30 transition-all shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
