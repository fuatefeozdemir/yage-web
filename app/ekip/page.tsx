"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { yonetimKurulu } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";
import PersonCard from "../components/PersonCard";

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

    return (
        <main className="flex flex-col min-h-screen bg-brand-bg">
            <section className="w-full pt-40 pb-16 px-6 bg-brand-bg border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal><h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Ekibimiz</h1></ScrollReveal>
                </div>
            </section>

            <section className="w-full pt-4 pb-6 sticky top-[72px] md:top-[90px] z-40 bg-brand-bg/90 backdrop-blur-md px-6">
                <ScrollReveal delay={0} className="max-w-6xl mx-auto flex justify-center pointer-events-none">
                    <div className="bg-brand-surface border border-white/5 p-1.5 rounded-sm flex items-center gap-1 overflow-x-auto max-w-full hide-scrollbar pointer-events-auto shadow-xl">
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

            <section className="py-24 border-t border-white/5 text-center px-6 bg-brand-surface-dark">
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