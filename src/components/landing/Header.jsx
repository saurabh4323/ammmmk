import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                            src="https://globalcxoaccelerator.com/wp-content/uploads/2025/01/2-4.jpg"
                            alt="Global CXO Accelerator"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-white">
                        Global CXO Accelerator
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mr-2">Next Session In:</span>
                    <CountdownTimer compact={true} />
                    <button
                        onClick={() => window.open('https://wa.me/916364904890', '_blank')}
                        className="text-emerald-400 text-xs font-bold hover:text-emerald-300 transition-colors flex items-center gap-1.5 ml-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Talk to us
                    </button>
                </div>

                <button className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10">
                    Register Series
                    <MoveRight className="w-4 h-4" />
                </button>
            </div>
        </header>
    );
}