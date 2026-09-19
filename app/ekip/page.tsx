"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { yonetimKurulu } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";
import PersonCard from "../components/PersonCard";
import CtaLink from "../components/CtaLink";

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

            <section className="py-16 px-6 relative overflow-hidden border-t border-white/5 bg-brand-surface-darker">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[100px] bg-white/5 blur-[50px] rounded-full pointer-events-none z-0"></div>

                <ScrollReveal className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                            Yönetim Kurulunda Yer Al
                        </h2>
                        <p className="text-brand-muted text-sm md:text-base">
                            YAGE'nin etkinliklerini koordine eden, sponsorluklarını yürüten ve topluluğun altyapısını şekillendiren çekirdek ekibe katıl.
                        </p>
                    </div>

                    <CtaLink href="/katil" className="shrink-0 px-8 py-4">
                        Başvuru Formu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </CtaLink>
                </ScrollReveal>
            </section>
        </main>
    );
}