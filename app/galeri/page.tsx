"use client";

import { Camera } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function GalleryPage() {
    return (
        <main className="flex flex-col min-h-screen bg-brand-bg">
            <section className="w-full pt-40 pb-16 px-6 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Galeri</h1>
                        <p className="text-lg md:text-xl text-brand-muted/80 max-w-2xl leading-relaxed">
                            YAGE etkinliklerinden, atölyelerinden ve birlikte çalışma anlarımızdan geriye kalan kareler.
                        </p>
                    </ScrollReveal>
                </div>
            </section>
            <section className="w-full pb-32 px-6 flex-1">
                <div className="max-w-6xl mx-auto pt-16 relative min-h-[500px] flex items-center justify-center">
                    <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 pt-16 opacity-10 pointer-events-none select-none">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-square bg-brand-surface border border-white/10 rounded-sm"></div>
                        ))}
                    </div>
                    <ScrollReveal delay={100} className="relative z-10 flex flex-col items-center text-center p-6 bg-brand-bg/60 backdrop-blur-sm rounded-sm border border-white/5 shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                            <Camera size={28} className="text-brand-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Çok Yakında</h2>
                        <p className="text-brand-muted text-base md:text-lg max-w-md">
                            Fotoğraf arşivimiz derleniyor. Geçmiş etkinliklerimize ait kareler yakında burada olacak.
                        </p>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}