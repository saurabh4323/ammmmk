"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        designation: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [hasConsented, setHasConsented] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const resp = await fetch('https://www.leadforgrow.com/api/forms/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: 'lfg_form_9c799b2a7bac88f7e8a7c5cc39cddd0503c7b86bac870d7912624cf61c9831cf',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.designation
                })
            });

            if (resp.ok) {
                setIsSuccess(true);
            } else {
                console.error("Submission failed");
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-lg mx-auto p-10 flex flex-col items-center text-center space-y-6 bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-xl">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Spot Reserved!</h3>
                <p className="text-slate-300 text-sm">
                    You have successfully registered for the entire series.
                    <br />
                    Check your Email & WhatsApp for the join link.
                </p>
                <button
                    onClick={() => window.open('https://chat.whatsapp.com/BRpMqwQtVDfE4YHbIp7Poh', '_blank')}
                    className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all flex items-center justify-center gap-2"
                >
                    Join WhatsApp Announcement Group
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-slate-900/60 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="px-8 py-6 border-b border-white/5 bg-white/5">
                <h3 className="text-2xl font-bold text-white text-left">Architect Your Future</h3>
                <p className="text-slate-400 text-xs mt-1 text-left">
                    One registration grants access to all 5 strategic sessions.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 text-left ml-1">Full Name</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 text-left ml-1">Work Email</label>
                        <input
                            required
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 text-left ml-1">Phone Number</label>
                    <input
                        required
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>

                <div className="space-y-2 bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                    <div className="flex gap-3 items-start text-left">
                        <div className="pt-1 shrink-0">
                            <input
                                id="consent-checkbox-page"
                                type="checkbox"
                                checked={hasConsented}
                                onChange={(e) => setHasConsented(e.target.checked)}
                                className="w-4 h-4 rounded-md border-white/10 text-amber-500 focus:ring-amber-500 bg-white/5"
                            />
                        </div>
                        <label htmlFor="consent-checkbox-page" className="text-[10px] text-slate-500 leading-tight block">
                            By submitting my details, I acknowledge that I am overriding my National Do Not Call (NDNC) registration. I hereby authorize CXOhive, and its authorized representatives to contact me via Email / SMS / Call / RCS / WhatsApp. I further consent to share my information on confidential basis with third parties for evaluating and processing this proposal.
                            <br />
                            <span className="mt-1 block">Note: We respect your privacy and will ensure that your information is handled in accordance with our privacy policy</span>
                        </label>
                    </div>
                </div>

                <button
                    disabled={isSubmitting || !hasConsented}
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold text-base shadow-xl shadow-amber-500/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
                >
                    {isSubmitting ? 'Securing Spot...' : 'REGISTER FOR THE SUMMITSYNC SERIES'}
                </button>

                <p className="text-center text-[10px] text-slate-600">
                    Free access for a limited time.
                </p>
            </form>
        </div>
    );
}
