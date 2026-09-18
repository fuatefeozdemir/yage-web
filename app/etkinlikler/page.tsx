"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { etkinlikler } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";
import EventCard from "../components/EventCard";

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

            {/* STANDART HERO (pt-40 pb-16) */}
            <section className="w-full pt-40 pb-16 px-6 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Etkinlikler
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 w-full pt-12 pb-8">
                <ScrollReveal delay={0}>
                    <div className="flex flex-col gap-6">

                        <div className="flex gap-8 overflow-x-auto hide-scrollbar border-b border-white/5 pb-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`pb-3 text-xs md:text-sm font-bold tracking-[0.15em] whitespace-nowrap uppercase transition-colors relative ${
                                        activeCategory === cat ? "text-white" : "text-brand-muted/40 hover:text-brand-muted"
                                    }`}
                                >
                                    {cat}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary transition-transform duration-300 origin-left ${
                                        activeCategory === cat ? "scale-x-100" : "scale-x-0"
                                    }`}></span>
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex gap-6 overflow-x-auto hide-scrollbar w-full md:w-auto">
                                {academicYears.map(year => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`text-xs font-mono tracking-widest whitespace-nowrap uppercase transition-colors ${
                                            activeYear === year ? "text-brand-primary font-bold" : "text-brand-muted/50 hover:text-white"
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

            <section className="max-w-6xl mx-auto px-6 w-full pb-32">
                {filteredEvents.length === 0 ? (
                    <div className="text-brand-muted/50 py-16 mt-8 font-mono text-sm text-center border border-white/5 bg-[#111113]">
                        [ ETKİNLİK BULUNAMADI ]
                    </div>
                ) : (
                    <ScrollReveal delay={50}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                            {filteredEvents.map((etkinlik) => (
                                <EventCard key={etkinlik.id} etkinlik={etkinlik} />
                            ))}
                        </div>
                    </ScrollReveal>
                )}
            </section>

        </main>
    );
}