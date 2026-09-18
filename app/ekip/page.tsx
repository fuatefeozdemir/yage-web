"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { yonetimKurulu } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";

const GithubIcon = ({ size = 16, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export default function TeamPage() {
    const [activeTab, setActiveTab] = useState("Yönetim");

    const tabs = [
        "Yönetim",
        "Etkinlik ve Organizasyon",
        "Sponsorluk",
        "Sosyal Medya",
        "İletişim",
        "Eğitim ve Proje Geliştirme"
    ];

    const baskan = yonetimKurulu.filter(k => k.gorev === "Başkan" || k.gorev === "Yönetim Kurulu Başkanı");
    const baskanYardimcilari = yonetimKurulu.filter(k => k.gorev.includes("Başkan Yardımcısı"));
    const birimBaskanlari = yonetimKurulu.filter(k => k.gorev.includes("Başkanı") && !k.gorev.includes("Yardımcısı") && k.gorev !== "Başkan" && k.gorev !== "Yönetim Kurulu Başkanı");

    const PersonCard = ({ kisi, roleOverride, hideRole = false }: { kisi: any, roleOverride?: string | null, hideRole?: boolean }) => (
        <div className="flex flex-col items-center group">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#111113] mb-4 border border-white/5 overflow-hidden relative transition-colors duration-500 group-hover:border-brand-primary/30 grayscale group-hover:grayscale-0 shadow-lg">
                {kisi.foto && kisi.foto.startsWith("/") ? (
                    <Image src={kisi.foto} alt={kisi.isim} fill className="object-cover" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono group-hover:opacity-0 transition-opacity">IMG</div>
                )}
            </div>

            <h3 className="text-base md:text-lg font-bold text-white text-center leading-tight">{kisi.isim}</h3>

            {!hideRole && (
                <p className="text-brand-muted text-xs md:text-sm mt-1 text-center">{roleOverride || kisi.gorev}</p>
            )}

            <div className="flex gap-4 mt-3 opacity-60 md:group-hover:opacity-100 transition-opacity duration-300">
                {kisi.github && kisi.github !== "#" && (
                    <a href={kisi.github} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-white transition-colors">
                        <GithubIcon size={16} />
                    </a>
                )}
                {kisi.linkedin && kisi.linkedin !== "#" && (
                    <a href={kisi.linkedin} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-[#0077B5] transition-colors">
                        <LinkedinIcon size={16} />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b]">

            <section className="w-full pt-40 pb-16 px-6 bg-[#09090b] border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Ekibimiz
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full pt-4 pb-6 sticky top-[72px] md:top-[90px] z-40 bg-[#09090b]/90 backdrop-blur-md px-6">
                <ScrollReveal delay={0} className="max-w-6xl mx-auto flex justify-center pointer-events-none">
                    <div className="bg-[#111113] border border-white/5 p-1.5 rounded-sm flex items-center gap-1 overflow-x-auto max-w-full hide-scrollbar pointer-events-auto shadow-xl">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-sm text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-brand-primary text-white shadow-md"
                                        : "text-brand-muted/70 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            <section className="max-w-6xl mx-auto px-6 w-full pt-8 pb-24 min-h-[50vh]">
                {activeTab === "Yönetim" && (
                    <div key="yonetim-tab" className="animate-fade-in flex flex-col items-center gap-10 md:gap-14">
                        {baskan.length > 0 && <ScrollReveal><PersonCard kisi={baskan[0]} /></ScrollReveal>}
                        {baskanYardimcilari.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                                {baskanYardimcilari.map((kisi, i) => <ScrollReveal key={i} delay={i * 100}><PersonCard kisi={kisi} /></ScrollReveal>)}
                            </div>
                        )}
                        {birimBaskanlari.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-8 w-full justify-items-center">
                                {birimBaskanlari.map((kisi, i) => <ScrollReveal key={`birim-${i}`} delay={i * 50}><PersonCard kisi={kisi} roleOverride={`${kisi.birim} Birim Başkanı`} /></ScrollReveal>)}
                            </div>
                        )}
                    </div>
                )}
                {activeTab !== "Yönetim" && (() => {
                    const activeBirimBaskani = yonetimKurulu.find(k => k.birim === activeTab && k.gorev.includes("Başkanı"));
                    const activeBirimUyeleri = yonetimKurulu.filter(k => k.birim === activeTab && !k.gorev.includes("Başkanı"));
                    return (
                        <div key={`birim-tab-${activeTab}`} className="animate-fade-in flex flex-col items-center gap-10 md:gap-14">
                            {activeBirimBaskani && <ScrollReveal><PersonCard kisi={activeBirimBaskani} roleOverride={`${activeTab} Birim Başkanı`} /></ScrollReveal>}
                            {activeBirimUyeleri.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
                                    {activeBirimUyeleri.map((kisi, i) => <ScrollReveal key={`uye-${i}`} delay={i * 50}><PersonCard kisi={kisi} hideRole={true} /></ScrollReveal>)}
                                </div>
                            )}
                        </div>
                    );
                })()}
            </section>

            <section className="py-24 border-t border-white/5 text-center px-6 bg-[#0c0c0f]">
                <ScrollReveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Ekipte görev almak ister misin?</h2>
                    <p className="text-brand-muted mb-8 text-sm md:text-base">Çalışma gruplarımızda ve projelerimizde yer al.</p>
                    <Link href="/katil" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-sm font-bold hover:bg-white hover:text-black transition-colors shadow-lg">
                        Ekip Başvuru Formu <ArrowRight size={18} />
                    </Link>
                </ScrollReveal>
            </section>
        </main>
    );
}