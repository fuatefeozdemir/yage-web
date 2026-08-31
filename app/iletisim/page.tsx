"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#09090b]">

            {/* 1. MİNİMAL HERO ALANI */}
            <section className="w-full pt-40 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-8">
              <span className="text-brand-primary font-mono text-xs tracking-[0.2em] uppercase">
                CONTACT / YAGE
              </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-4">
                            İletişim<span className="text-brand-primary">.</span>
                        </h1>

                        <h2 className="text-3xl md:text-5xl font-bold text-white/90 tracking-tight leading-tight mb-8">
                            Bir fikrin mi var? <br className="hidden md:block" />
                            <span className="text-brand-muted">Konuşalım.</span>
                        </h2>

                        <p className="text-lg text-brand-muted/80 max-w-xl leading-relaxed">
                            Projeler, iş birlikleri, etkinlikler veya topluluk hakkında bizimle iletişime geçebilirsiniz.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* 2. ANA BÖLÜM (İLETİŞİM KANALLARI & FORM) */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal delay={100}>
                        {/* Dev Ayraç */}
                        <div className="w-full h-px bg-white/10 mb-16"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

                            {/* SOL KOLON: Editoryal İletişim Kanalları */}
                            <div className="flex flex-col gap-12">

                                {/* E-Mail */}
                                <div>
                                    <h3 className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest mb-3">E-MAIL</h3>
                                    <div className="w-full h-px bg-white/5 mb-4"></div>
                                    <a href="mailto:iletisim@yage.gazi.edu.tr" className="text-xl md:text-2xl text-white hover:text-brand-primary transition-colors tracking-tight">
                                        iletisim@yage.gazi.edu.tr
                                    </a>
                                </div>

                                {/* Sosyal Medya */}
                                <div>
                                    <h3 className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest mb-3">SOSYAL MEDYA</h3>
                                    <div className="w-full h-px bg-white/5 mb-4"></div>
                                    <ul className="flex flex-col gap-3">
                                        <li>
                                            <a href="#" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-brand-primary transition-colors">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-brand-primary transition-colors">LinkedIn</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-brand-primary transition-colors">GitHub</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-brand-primary transition-colors">Discord</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Konum */}
                                <div>
                                    <h3 className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest mb-3">KONUM</h3>
                                    <div className="w-full h-px bg-white/5 mb-4"></div>
                                    <p className="text-lg text-white leading-relaxed">
                                        Gazi Üniversitesi <br/>
                                        Mühendislik Fakültesi <br/>
                                        <span className="text-brand-muted">Ankara, Türkiye</span>
                                    </p>
                                </div>

                            </div>

                            {/* SAĞ KOLON: İletişim Formu */}
                            <div>
                                <h3 className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest mb-8">MESAJ GÖNDER</h3>

                                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                                    {/* Ad Soyad */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-[10px] font-mono text-brand-muted/70 uppercase tracking-widest">Ad Soyad</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-[#111113] border-b border-white/10 p-3 text-white focus:outline-none focus:border-brand-primary transition-colors rounded-t-sm"
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>

                                    {/* E-posta */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-[10px] font-mono text-brand-muted/70 uppercase tracking-widest">E-posta</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-[#111113] border-b border-white/10 p-3 text-white focus:outline-none focus:border-brand-primary transition-colors rounded-t-sm"
                                            placeholder="ornek@mail.com"
                                        />
                                    </div>

                                    {/* Konu (Dropdown) */}
                                    <div className="flex flex-col gap-2 relative">
                                        <label htmlFor="subject" className="text-[10px] font-mono text-brand-muted/70 uppercase tracking-widest">Konu</label>
                                        <select
                                            id="subject"
                                            className="bg-[#111113] border-b border-white/10 p-3 text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer rounded-t-sm"
                                        >
                                            <option value="" disabled selected>Konu Seçiniz</option>
                                            <option value="genel">Genel Bilgi</option>
                                            <option value="is_birligi">İş Birliği</option>
                                            <option value="sponsorluk">Sponsorluk</option>
                                            <option value="proje">Proje</option>
                                            <option value="etkinlik">Etkinlik</option>
                                            <option value="diger">Diğer</option>
                                        </select>
                                        <div className="absolute right-3 top-[38px] pointer-events-none text-brand-muted/50 text-xs">▼</div>
                                    </div>

                                    {/* Mesaj */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-[10px] font-mono text-brand-muted/70 uppercase tracking-widest">Mesaj</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="bg-[#111113] border-b border-white/10 p-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none rounded-t-sm"
                                            placeholder="Mesajınızı buraya yazın..."
                                        ></textarea>
                                    </div>

                                    {/* Gönder Butonu */}
                                    <div className="mt-4">
                                        <button type="submit" className="flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-black transition-colors duration-300 rounded-sm">
                                            GÖNDER <ArrowRight size={16} />
                                        </button>
                                        <p className="text-[11px] text-brand-muted/40 mt-4 font-mono">
                                            Mesajınızı aldığımızda mümkün olan en kısa sürede dönüş yapacağız.
                                        </p>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 3. ALT BÖLÜM (Harita / Alan Gösterimi) */}
            <section className="w-full bg-[#111113] border-t border-white/5 py-24 px-6">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase mb-4">
                            ANKARA / TÜRKİYE
                        </h3>
                        <p className="text-brand-muted text-lg mb-12">
                            Gazi Üniversitesi <br/>
                            Mühendislik Fakültesi
                        </p>

                        {/* Harita Placeholder */}
                        <div className="w-full h-64 md:h-96 bg-[#18181b] border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            <span className="text-brand-muted/30 font-mono text-sm tracking-[0.2em] relative z-10 group-hover:scale-105 transition-transform duration-700 select-none">
                [ HARİTA / KONUM ALANI ]
              </span>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}