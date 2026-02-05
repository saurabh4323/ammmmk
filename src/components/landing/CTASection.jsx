"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

export default function CTASection({ id }) {
    return (
        <section id={id} className="py-20 relative overflow-hidden bg-slate-950">
            {/* Richer Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950" />

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[0.9]">
                            Don't Just Watch the Future. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                                Architect It.
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Join the next CXO-SummitSync and get the clarity you need to claim your seat at the table in Bengaluru.
                        </p>
                    </div>

                    {/* Embedded Registration Form */}
                    <div className="flex justify-center">
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
