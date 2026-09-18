"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { etkinlikler } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("TÜMÜ");
    const [activeYear, setActiveYear] = useState("TÜM DÖNEMLER");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["TÜMÜ", "EĞİTİM", "TEKNİK", "PANEL", "GEZİ", "YARIŞMA", "SOSYAL"];
    const academicYears = ["TÜM DÖNEMLER", "2026-2027", "2025-2026", "2024-2025"];

    const filteredEvents = etkinlikler.filter(e => {
        const matchCategory = activeCategory === "TÜMÜ" || e.kategori.toUpperCase() === activeCategory;
        const matchYear = activeYear === "TÜM DÖNEMLER" || e.yil === activeYear;
        const matchSearch = e.baslik.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.ozet.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchYear && matchSearch;
    });

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b]">

            {/* 1. SADE HERO (Açıklama ve dekorasyonlar kaldırıldı) */}
            <section className="w-full pt-40 pb-24 px-6 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Etkinlikler
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* 2. FİLTRELER VE ARAMA */}
            <section className="max-w-6xl mx-auto px-6 w-full pt-12 pb-8">
                <ScrollReveal delay={0}>
                    <div className="flex flex-col gap-6">

                        {/* Kategori Filtresi */}
                        <div className="flex gap-8 overflow-x-auto hide-scrollbar border-b border-white/5 pb-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`pb-3 text-xs md:text-sm font-bold tracking-[0.15em] whitespace-nowrap uppercase transition-colors relative ${
                                        activeCategory === cat
                                            ? "text-white"
                                            : "text-brand-muted/40 hover:text-brand-muted"
                                    }`}
                                >
                                    {cat}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary transition-transform duration-300 origin-left ${
                                        activeCategory === cat ? "scale-x-100" : "scale-x-0"
                                    }`}></span>
                                </button>
                            ))}
                        </div>

                        {/* Dönem Filtresi & Arama */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex gap-6 overflow-x-auto hide-scrollbar w-full md:w-auto">
                                {academicYears.map(year => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`text-xs font-mono tracking-widest whitespace-nowrap uppercase transition-colors ${
                                            activeYear === year
                                                ? "text-brand-primary font-bold"
                                                : "text-brand-muted/50 hover:text-white"
                                        }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full md:w-72 shrink-0">
                                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted/40" />
                                <input
                                    type="text"
                                    placeholder="Etkinlik ara..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#111113] border border-white/10 rounded-sm py-2 pl-11 pr-4 text-sm text-white placeholder:text-brand-muted/40 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </section>

            {/* 3. ETKİNLİK AKIŞI (Ana sayfadaki editoryal kart yapısı) */}
            <section className="max-w-6xl mx-auto px-6 w-full pb-32">
                {filteredEvents.length === 0 ? (
                    <div className="text-brand-muted/50 py-16 mt-8 font-mono text-sm text-center border border-white/5 bg-[#111113]">
                        [ ETKİNLİK BULUNAMADI ]
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        {filteredEvents.map((etkinlik, i) => (
                            <ScrollReveal key={etkinlik.id} delay={i * 50}>
                                <Link href={`/etkinlikler/${etkinlik.slug}`} className="group flex flex-col bg-[#111113] rounded-sm overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full relative">

                                    <div className="h-56 bg-[#18181b] relative overflow-hidden border-b border-white/5">
                                        {/* Editoryal Etiketler Görselin Üzerinde */}
                                        <div className="absolute top-4 left-4 flex gap-2 z-20">
                                            <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 rounded-sm uppercase tracking-widest">{etkinlik.tarih}</span>
                                            <span className="bg-brand-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest">{etkinlik.kategori}</span>
                                        </div>

                                        {etkinlik.gorsel?.startsWith("/") ? (
                                            <Image src={etkinlik.gorsel} alt={etkinlik.baslik} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-[#18181b]"></div>
                                                <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm font-mono">{etkinlik.gorsel}</div>
                                            </>
                                        )}
                                        <ArrowUpRight size={20} className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/50 rounded-full p-2 backdrop-blur-sm" />
                                        {/* Görseli hafif karartarak etiketlerin okunmasını kolaylaştırır */}
                                        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold mb-3 text-white leading-tight">{etkinlik.baslik}</h3>
                                        <p className="text-brand-muted text-sm line-clamp-2 mt-auto leading-relaxed">{etkinlik.ozet}</p>
                                    </div>

                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </section>

        </main>
    );
}