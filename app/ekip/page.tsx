"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { yonetimKurulu } from "../data/siteData";
import ScrollReveal from "../components/ScrollReveal";

// Lucide mimarisine uygun özel ikon bileşenleri
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
    const [activeBirim, setActiveBirim] = useState("TÜMÜ");

    // Dinamik olarak birimleri (kategorileri) çıkartıyoruz
    const birimler = ["TÜMÜ", ...Array.from(new Set(yonetimKurulu.map(k => k.birim)))];

    // Birime göre filtreleme
    const filteredEkip = activeBirim === "TÜMÜ"
        ? yonetimKurulu
        : yonetimKurulu.filter(k => k.birim === activeBirim);

    // Filtrelenmiş kişileri birimlere göre gruplama (Ekrana basarken bölüm bölüm ayırmak için)
    const groupedEkip = filteredEkip.reduce((acc, kisi) => {
        if (!acc[kisi.birim]) acc[kisi.birim] = [];
        acc[kisi.birim].push(kisi);
        return acc;
    }, {} as Record<string, typeof yonetimKurulu>);

    // Watermark için çeviri haritası (Arka planda havalı isimler yazması için)
    const watermarkMap: Record<string, string> = {
        "Yönetim": "BOARD",
        "Etkinlik ve Organizasyon": "EVENTS",
        "Sponsorluk": "SPONSORS",
        "Sosyal Medya": "MEDIA",
        "İletişim": "CONTACT",
        "Eğitim ve Proje Geliştirme": "R&D / EDU"
    };

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b]">

            {/* 1. MİNİMAL HERO ALANI */}
            <section className="relative w-full pt-40 pb-12 border-b border-white/5 overflow-hidden bg-[#09090b]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col justify-between">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-brand-primary font-mono text-sm">/</span>
                            <span className="text-brand-muted/50 font-mono text-xs tracking-[0.2em] uppercase">TEAM / ORGANIZATION</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
                            Ekibimiz<span className="text-brand-primary">.</span>
                        </h1>
                        <p className="text-lg text-brand-muted/80 max-w-xl leading-relaxed">
                            Fikri koda, kodu sisteme dönüştüren çekirdek kadro. Sınırları zorlayan projelerin arkasındaki beyinler.
                        </p>
                    </ScrollReveal>

                    {/* Sağ Alt Köşe Minimal Metadata */}
                    <div className="absolute bottom-0 right-6 hidden md:block text-right pb-2">
                        <span className="text-brand-muted/30 font-mono text-xs tracking-[0.2em] uppercase leading-relaxed">
                          ACTIVE MEMBERS<br/>[ {yonetimKurulu.length} DEVELOPERS ]
                        </span>
                    </div>
                </div>
            </section>

            {/* 2. KONTROL ÇUBUĞU (Control Bar) */}
            <section className="max-w-6xl mx-auto px-6 w-full pt-12 pb-8 sticky top-[72px] z-40 bg-[#09090b]/90 backdrop-blur-md border-b border-white/5">
                <ScrollReveal delay={0}>
                    <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-1">
                        {birimler.map(birim => (
                            <button
                                key={birim}
                                onClick={() => setActiveBirim(birim)}
                                className={`pb-3 text-xs md:text-sm font-bold tracking-[0.15em] whitespace-nowrap uppercase transition-colors relative ${
                                    activeBirim === birim
                                        ? "text-white"
                                        : "text-brand-muted/40 hover:text-brand-muted"
                                }`}
                            >
                                {birim}
                                {/* İnce Mor Çizgi (Aktif Durum) */}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary transition-transform duration-300 origin-left ${
                                    activeBirim === birim ? "scale-x-100" : "scale-x-0"
                                }`}></span>
                            </button>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* 3. EKİP LİSTESİ (BİRİMLERE GÖRE GRUPLANMIŞ) */}
            <section className="max-w-6xl mx-auto px-6 w-full pb-32 min-h-[50vh]">

                {Object.keys(groupedEkip).map((birim) => (
                    <div key={birim} className="relative mt-24 md:mt-32 mb-12">

                        {/* Devasa Tipografik Watermark (SOFTWARE, HARDWARE vb.) */}
                        <div className="absolute top-0 left-0 -translate-y-12 md:-translate-y-20 z-0 pointer-events-none select-none overflow-hidden w-full">
                          <span className="text-[6rem] md:text-[12rem] font-black text-white/[0.02] whitespace-nowrap tracking-tighter">
                            {watermarkMap[birim] || birim.toUpperCase()}
                          </span>
                        </div>

                        {/* Birim Başlığı */}
                        <ScrollReveal delay={0} className="relative z-10 mb-12">
                            <div className="flex items-center gap-6">
                                <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-widest">{birim} EKİBİ</h2>
                                <div className="h-px bg-white/10 flex-1"></div>
                            </div>
                        </ScrollReveal>

                        {/* Ekip Kartları Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
                            {groupedEkip[birim].map((kisi, i) => (
                                <ScrollReveal key={i} delay={i * 50}>
                                    <div className="flex flex-col items-center group">
                                        {/* Profil Fotoğrafı Alanı */}
                                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#111113] mb-5 border border-white/5 overflow-hidden relative transition-all duration-500 group-hover:scale-105 group-hover:border-brand-primary/50 grayscale group-hover:grayscale-0 shadow-lg">
                                            <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono group-hover:opacity-0 transition-opacity">IMG</div>
                                        </div>

                                        {/* İsim ve Görev */}
                                        <h3 className="text-base md:text-lg font-bold text-white text-center leading-tight">{kisi.isim}</h3>
                                        <p className="text-brand-muted/70 text-xs md:text-sm mt-1 text-center">{kisi.gorev}</p>

                                        {/* Sosyal İkonlar */}
                                        <div className="flex gap-4 mt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                            {kisi.github && (
                                                <a href={kisi.github} target="_blank" rel="noreferrer" className="text-brand-muted/50 hover:text-white transition-colors">
                                                    <GithubIcon size={16} />
                                                </a>
                                            )}
                                            {kisi.linkedin && (
                                                <a href={kisi.linkedin} target="_blank" rel="noreferrer" className="text-brand-muted/50 hover:text-[#0077B5] transition-colors">
                                                    <LinkedinIcon size={16} />
                                                </a>
                                            )}
                                            <a href={`mailto:iletisim@yage.gazi.edu.tr`} className="text-brand-muted/50 hover:text-white transition-colors">
                                                <Mail size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                    </div>
                ))}

            </section>

            {/* 4. MİNİ CTA - EKİBE KATIL */}
            <section className="max-w-4xl mx-auto px-6 w-full pb-32 text-center">
                <ScrollReveal>
                    <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#111113] to-[#09090b] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sen de bu ekibin bir parçası ol.</h2>
                        <p className="text-brand-muted text-sm md:text-base mb-8 max-w-lg">Yazılım, donanım veya araştırma... İlgini çeken alanda projeler üretmek ve kendini geliştirmek için başvurunu bekliyoruz.</p>
                        <Link href="/katil" className="flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-colors duration-300">
                            Başvuru Formuna Git <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}