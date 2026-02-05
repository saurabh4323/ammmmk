
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 text-center md:text-left">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src="https://globalcxoaccelerator.com/wp-content/uploads/2025/01/2-4.jpg"
                                    alt="Global CXO Accelerator"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-semibold text-white">Global CXO Accelerator</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs">
                            Empowering the next generation of global leaders through strategic insights and high-level networking.
                        </p>
                    </div>

                    <div className="text-center md:text-right space-y-2">
                        <p className="text-white font-medium">February 21-22, 2026</p>
                        <p className="text-slate-400 text-sm">Bengaluru & Online</p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-6 text-xs text-slate-600">
                    <div className="space-y-2 text-center">
                        <p>© 2026 Global CXO Accelerator. All rights reserved.</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Contact Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
