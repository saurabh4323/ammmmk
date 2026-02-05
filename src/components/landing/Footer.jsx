import Image from "next/image";
import { Facebook, Linkedin, Youtube, Instagram, X } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-6 pb-8 text-center md:text-left">
            <div className="container mx-auto px-4">

                <div className="mb-12">
                    <img
                        src="/b.jpeg"
                        alt="Global CXO Summit 2026"
                        className="w-full rounded-lg border border-white/10"
                    />
                </div>

                {/* Company Below Banner */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src="/a.jpeg"
                                    alt="Global CXO Accelerator"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-semibold text-white text-lg">Global CXO Accelerator</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-6">
                            Empowering the next generation of global leaders through strategic insights and high-level networking.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://www.facebook.com/share/v/1C4Wv4DE7u/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-400 transition-all border border-white/5 group hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/20">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/events/7424113166231470080/theater/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-400 transition-all border border-white/5 group hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/20">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=xh4a16UTpAg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-400 transition-all border border-white/5 group hover:bg-[#FF0000]/10 hover:text-[#FF0000] hover:border-[#FF0000]/20">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/muditsaxenaglobalcxocoach/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-400 transition-all border border-white/5 group hover:bg-[#E4405F]/10 hover:text-[#E4405F] hover:border-[#E4405F]/20">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/i/broadcasts/1lPJqvODqqdxb" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-400 transition-all border border-white/5 group hover:bg-white/10 hover:text-white hover:border-white/20">
                                <X className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="text-left md:text-right space-y-2">
                        <p className="text-white font-medium">February 21 and 22 2026</p>
                        <p className="text-slate-400 text-sm">Bengaluru & Online</p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-6 text-xs text-slate-600">
                    <div className="space-y-2 text-center">
                        <p>© 2026 Global CXO Accelerator. All rights reserved.</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="https://docs.google.com/document/d/1ZU3bqVgoSxhsM-TTEQrEn9u5lGLTWElrGFSnDNOFv8U/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                        <a href="https://docs.google.com/document/d/1WW_fJc7sa3lCB5Q05fxIWpoBc7WiPjzndo0_cvHzubY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer >
    );
}