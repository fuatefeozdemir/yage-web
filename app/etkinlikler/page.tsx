"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { etkinlikler } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("TÜMÜ");
    const [activeYear, setActiveYear] = useState("TÜM YILLAR");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["TÜMÜ", "EĞİTİM", "TEKNİK", "PANEL", "GEZİ", "YARIŞMA"];
    const academicYears = ["TÜM YILLAR", "2026-2027", "2025-2026", "2024-2025"];

    const filteredEvents = etkinlikler.filter(e => {
        const matchCategory = activeCategory === "TÜMÜ" || e.kategori.toUpperCase() === activeCategory;
        const matchYear = activeYear === "TÜM YILLAR" || e.yil === activeYear;
        const matchSearch = e.baslik.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.ozet.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchYear && matchSearch;
    });

    const groupedEvents = filteredEvents.reduce((acc, event) => {
        const year = event.yil;
        if (!acc[year]) acc[year] = [];
        acc[year].push(event);
        return acc;
    }, {} as Record<string, typeof etkinlikler>);

    const sortedYears = Object.keys(groupedEvents).sort((a, b) => b.localeCompare(a));

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b]">

            {/* 1. EDİTORYAL HERO (Sade ve Net) */}
            <section className="w-full pt-40 pb-16 px-6 border-b border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4">
                            Etkinlikler<span className="text-brand-primary">.</span>
                        </h1>
                        <p className="text-lg text-brand-muted/80 max-w-xl leading-relaxed">
                            Birlikte öğrendiğimiz, ürettiğimiz ve deneyimlediğimiz anlar.
                        </p>
                    </ScrollReveal>

                    {/* Sağ Tarafta Gerçek Veri / Metadata */}
                    <ScrollReveal delay={100} className="font-mono text-xs text-brand-muted/50 tracking-widest uppercase">
                        <div>TOPLAM ARŞİV: {etkinlikler.length} ETKİNLİK</div>
                        <div className="mt-1">SON GÜNCELLEME: 2026</div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 2. SADE KONTROL ÇUBUĞU (Sticky Kaldırıldı, Admin Paneli Hissi Giderildi) */}
            <section className="max-w-6xl mx-auto px-6 w-full pt-12 pb-8">
                <ScrollReveal delay={0}>

                    {/* Arama ve Yıl Seçimi */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                        <div className="relative w-full sm:w-80">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted/40" />
                            <input
                                type="text"
                                placeholder="Etkinlik ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#111113] border border-white/10 rounded-sm py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-brand-muted/40 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div className="w-full sm:w-48">
                            <select
                                value={activeYear}
                                onChange={(e) => setActiveYear(e.target.value)}
                                className="w-full bg-[#111113] border border-white/10 rounded-sm py-2.5 px-4 text-sm text-brand-muted focus:outline-none focus:border-white/30 transition-colors cursor-pointer"
                            >
                                {academicYears.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Kategori Sekmeleri (Altı Çizgili Editoryal Stil) */}
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
                </ScrollReveal>
            </section>

            {/* 3. ETKİNLİK LİSTESİ (Watermarklar Kaldırıldı, Kurumsal Yıl Başlıkları) */}
            <section className="max-w-6xl mx-auto px-6 w-full pb-32">
                {sortedYears.length === 0 && (
                    <div className="text-brand-muted/50 py-16 mt-8 font-mono text-sm text-center border border-white/5 bg-[#111113]">
                        [ KAYIT BULUNAMADI ]
                    </div>
                )}

                {sortedYears.map((year) => {
                    const yearEventCount = groupedEvents[year].length;

                    return (
                        <div key={year} className="mb-20">

                            {/* Kurumsal Yıl Başlığı + Etkinlik Sayısı */}
                            <ScrollReveal delay={0}>
                                <div className="flex items-center gap-6 mb-8 pt-8">
                                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{year}</h2>
                                    <span className="text-xs font-mono text-brand-muted/50 tracking-widest">{yearEventCount} ETKİNLİK</span>
                                    <div className="h-px bg-white/10 flex-1"></div>
                                </div>
                            </ScrollReveal>

                            {/* Etkinlik Kartları Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groupedEvents[year].map((etkinlik, i) => (
                                    <ScrollReveal key={etkinlik.id} delay={i * 100}>
                                        <Link href={`/etkinlikler/${etkinlik.slug}`} className="group flex flex-col bg-[#111113] rounded-sm overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full relative">
                                            <div className="h-48 bg-[#18181b] relative overflow-hidden border-b border-white/5">
                                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"></div>
                                                <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm font-mono">{etkinlik.gorsel}</div>
                                                <ArrowUpRight size={20} className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/50 rounded-full p-1 backdrop-blur-sm" />
                                            </div>

                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono text-brand-muted/70 flex items-center gap-2">
                            {etkinlik.tarih}
                          </span>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted/50">
                            {etkinlik.kategori}
                          </span>
                                                </div>
                                                {/* Başlık hover'da renk değiştirmez, temiz kalır */}
                                                <h3 className="text-lg font-bold mb-3 text-white leading-tight">{etkinlik.baslik}</h3>
                                                <p className="text-brand-muted text-sm line-clamp-2 mt-auto leading-relaxed">{etkinlik.ozet}</p>
                                            </div>
                                        </Link>
                                    </ScrollReveal>
                                ))}
                            </div>

                        </div>
                    );
                })}
            </section>
        </main>
    );
}