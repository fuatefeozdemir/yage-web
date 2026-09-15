"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Users, Calendar, Rocket, ArrowUpRight } from "lucide-react";

import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import { etkinlikler, faaliyetler, yonetimKurulu } from "./data/siteData";

// --- DİNAMİK VİTRİN VE SPONSOR VERİLERİ ---

const vitrinKareler = [
  "/images/galeri/foto-1.png",
  "/images/galeri/foto-2.jpg",
  "/images/galeri/foto-3.jpeg",
  "/images/galeri/foto-4.jpeg",
  "/images/galeri/foto-5.jpeg"
];

const destekciler = [
  { isim: "Gazi Üniversitesi", logo: "/images/sponsorlar/gazi-logo.png" },
  { isim: "TÜBİTAK", logo: "/images/sponsorlar/tubitak-logo.png" },
];

export default function Home() {
  const seciliEkip = yonetimKurulu.filter(kisi => kisi.featured).slice(0, 4);

  return (
      <main className="flex flex-col min-h-screen">

        {/* ====================================================
          1. AÇILIŞ EKRANI (SADECE HERO - Sıkışıklık Giderildi)
        ==================================================== */}
        <div className="relative bg-[#09090b] border-b border-white/5 min-h-screen flex flex-col justify-center">

          {/* Hareketli Arka Plan */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-pan [mask-image:linear-gradient(to_bottom,transparent,black_30%,transparent_90%)] z-0 pointer-events-none"></div>

          {/* Ana İçerik */}
          <section className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 md:px-6">
            <div className="text-center max-w-4xl animate-fade-up flex flex-col items-center">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-surface border border-white/5 text-brand-muted text-xs font-mono mb-10 select-none shadow-xl">
                <span className="text-brand-primary">~</span>
                <span>./yage_init</span>
                <span className="w-1.5 h-3 bg-brand-muted animate-pulse"></span>
              </div>

              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 text-white">
                YAGE<span className="text-brand-primary">.</span>
              </h1>

              <h2 className="text-lg md:text-2xl font-semibold mb-6 text-white/90 tracking-wide">
                Yazılım Araştırma ve Geliştirme Topluluğu
              </h2>

              <p className="text-base md:text-lg text-brand-muted/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Fikirden çalışan sisteme. Yazılım, donanım ve araştırma odaklı projeler geliştiren çok disiplinli mühendislik ekibi.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <Link href="/katil" className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-white hover:text-brand-bg transition-colors shadow-lg shadow-brand-primary/10">
                  YAGE'ye Katıl
                </Link>
                {/* WHATSAPP LİNKİ DÜZELTİLDİ: target="_blank" eklendi, preventDefault silindi */}
                <a href="https://chat.whatsapp.com/I0uLyeqGZ12LMNTKAYaCIn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-surface text-brand-text border border-white/10 px-8 py-3.5 rounded-md font-semibold hover:bg-white/5 transition-colors group">
                  <Phone size={16} className="text-[#25D366]" /> WhatsApp Grubu <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

            </div>
          </section>

          {/* En Alt Status Bar */}
          <div className="relative z-10 w-full px-6 pb-8 flex justify-between items-center text-[10px] sm:text-xs font-mono text-brand-muted/40 uppercase tracking-widest">
            <span className="hidden sm:inline-block">[ Gazi University ]</span>
            <span>[ Ankara / TR ]</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></span> System Online
            </span>
          </div>
        </div>

        {/* ====================================================
          2. BİZ KİMİZ & VERİ BANDI (Kusursuz Geçiş)
        ==================================================== */}
        <div className="bg-[#0c0c0f]">

          {/* BİZ KİMİZ */}
          <section className="py-24 md:py-32 px-6 relative z-10">
            <ScrollReveal className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Teoriyi <br className="hidden md:block"/>
                  Pratiğe <br className="hidden md:block"/>
                  <span className="text-brand-muted">Dönüştürüyoruz.</span>
                </h2>
                <div className="flex flex-col gap-6 text-lg text-brand-muted/90 leading-relaxed border-l-2 border-brand-primary/20 pl-6 md:pl-8 font-medium">
                  <p>
                    YAGE, mühendislik vizyonuna sahip öğrencilerin sıfırdan sistem mimarileri tasarladığı bir çalışma alanıdır.
                  </p>
                  <p>
                    Sektörle kurduğumuz köprü ile akademik gelişimi destekliyor, sadece tüketen değil, üreten bir ekosistem inşa ediyoruz.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* KAYAN ŞERİT */}
          <div className="flex overflow-hidden py-8 relative select-none border-y border-white/5 bg-[#0a0a0d]">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0d] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0d] to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-fit animate-marquee-slow">
              <div className="flex items-center shrink-0">
                {faaliyetler.map((faaliyet, i) => (
                    <div key={i} className="flex items-center">
                      <span className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-muted/40 uppercase whitespace-nowrap">
                        {faaliyet}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-50 mx-16 md:mx-32"></span>
                    </div>
                ))}
              </div>
              <div className="flex items-center shrink-0">
                {faaliyetler.map((faaliyet, i) => (
                    <div key={`clone-${i}`} className="flex items-center">
                      <span className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-muted/40 uppercase whitespace-nowrap">
                        {faaliyet}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-50 mx-16 md:mx-32"></span>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* İSTATİSTİKLER */}
          <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:divide-x divide-white/5">
                  <div className="flex flex-col items-center justify-center">
                    <Users className="text-brand-muted mb-4 opacity-50" size={28} />
                    <AnimatedCounter end={700} suffix="+" />
                    <span className="text-xs text-brand-muted/70 mt-2 font-mono uppercase tracking-widest">Topluluk Üyesi</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Calendar className="text-brand-muted mb-4 opacity-50" size={28} />
                    <AnimatedCounter end={etkinlikler.length} />
                    <span className="text-xs text-brand-muted/70 mt-2 font-mono uppercase tracking-widest">Düzenlenen Etkinlik</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Rocket className="text-brand-muted mb-4 opacity-50" size={28} />
                    <AnimatedCounter end={2} />
                    <span className="text-xs text-brand-muted/70 mt-2 font-mono uppercase tracking-widest">AR-GE Projesi</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>

        {/* ====================================================
          3. İÇERİK MERKEZİ (GALERİ + ETKİNLİKLER)
        ==================================================== */}

        {/* BİZDEN KARELER */}
        <section className="py-24 bg-[#111113] border-t border-b border-white/5">
          <ScrollReveal delay={0}>
            <div className="max-w-6xl mx-auto px-6 mb-12 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Vitrin</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex overflow-x-auto md:overflow-hidden h-64 md:h-[450px] w-full snap-x snap-mandatory hide-scrollbar">
              {vitrinKareler.map((gorsel, i) => (
                  <div
                      key={i}
                      className="shrink-0 w-[85vw] md:w-auto md:flex-1 md:hover:flex-[3] transition-all duration-700 ease-in-out h-full bg-[#18181b] snap-center relative group border-r border-white/5 overflow-hidden cursor-pointer"
                  >
                    {gorsel.startsWith("/") ? (
                        <Image src={gorsel} alt={`YAGE Vitrin ${i + 1}`} fill className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm font-mono z-0">IMG_{i+1}</div>
                    )}
                    <div className="absolute inset-0 bg-black/20 md:group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10"></div>
                  </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ETKİNLİKLER */}
        <section id="etkinlikler" className="py-24 px-6 bg-[#09090b]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                <h2 className="text-3xl font-bold text-white tracking-tight">Son Etkinlikler</h2>
                <Link href="/etkinlikler" className="flex items-center gap-2 text-brand-muted text-sm hover:text-white transition-colors group uppercase tracking-widest font-mono">
                  Arşive Git <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {etkinlikler.slice(0, 3).map((etkinlik, i) => (
                  <ScrollReveal key={etkinlik.id} delay={i * 100}>
                    <Link href={`/etkinlikler/${etkinlik.slug}`} className="group flex flex-col bg-[#111113] rounded-sm overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full relative">

                      <div className="h-52 bg-[#18181b] relative overflow-hidden border-b border-white/5">
                        {etkinlik.gorsel?.startsWith("/") ? (
                            <Image src={etkinlik.gorsel} alt={etkinlik.baslik} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                            <>
                              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-[#18181b]"></div>
                              <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm font-mono">{etkinlik.gorsel}</div>
                            </>
                        )}
                        <ArrowUpRight size={20} className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-mono text-brand-primary uppercase tracking-widest">{etkinlik.tarih}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted/50">{etkinlik.kategori}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white leading-tight">{etkinlik.baslik}</h3>
                        <p className="text-brand-muted text-sm line-clamp-2 mt-auto leading-relaxed">{etkinlik.ozet}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================
          4. KAPANIŞ (CTA + YÖNETİM + DESTEKÇİLER)
        ==================================================== */}
        <section id="katil" className="py-32 px-6 bg-[#111113] relative overflow-hidden flex items-center justify-center border-y border-white/5">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[7rem] md:text-[16rem] font-black text-white/[0.02] select-none leading-none tracking-tighter whitespace-nowrap">
              EXEC_JOIN()
            </span>
          </div>

          <ScrollReveal className="relative z-10 text-center max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ekibimizin bir parçası olmak ister misin?</h2>
            <p className="text-brand-muted mb-10 text-lg leading-relaxed">Hangi seviyede olursan ol, üreten bir ağın parçası ol.</p>
            <Link href="/katil" className="inline-block bg-white text-black px-10 py-4 rounded-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-brand-primary/20 uppercase tracking-widest text-sm">
              Başvuru Formu
            </Link>
          </ScrollReveal>
        </section>

        <section className="py-32 px-6 bg-[#09090b]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
                <h2 className="text-3xl font-bold text-white tracking-tight">Yönetim Kurulu</h2>
                <Link href="/ekip" className="hidden md:flex items-center gap-2 text-brand-muted text-sm hover:text-white transition-colors group uppercase tracking-widest font-mono">
                  Tüm Ekibi İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {seciliEkip.map((kisi, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="flex flex-col items-center group">
                      <div className="w-36 h-36 rounded-full bg-[#111113] mb-6 border border-white/5 overflow-hidden relative transition-transform duration-500 group-hover:scale-105 group-hover:border-brand-primary/30 grayscale group-hover:grayscale-0 shadow-lg">
                        {(kisi as any).foto && (kisi as any).foto.startsWith("/") ? (
                            <Image src={(kisi as any).foto} alt={kisi.isim} fill className="object-cover" />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono group-hover:opacity-0 transition-opacity">IMG</div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white">{kisi.isim}</h3>
                      <p className="text-brand-muted text-sm mt-1">{kisi.gorev}</p>
                    </div>
                  </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
              <Link href="/ekip" className="flex items-center gap-2 text-brand-muted text-sm hover:text-white transition-colors group uppercase tracking-widest font-mono">
                Tüm Ekibi İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* DESTEKÇİLER (SPONSORLAR) */}
        <section className="py-24 bg-[#0c0c0f] border-t border-white/5 px-6">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-brand-muted/40 uppercase mb-20">Destekçilerimiz ve Partnerlerimiz</h2>

              <div className="flex flex-wrap justify-center items-end gap-16 md:gap-32">
                {destekciler.map((destekci, i) => (
                    <div key={i} className="group cursor-pointer flex flex-col items-center gap-6">

                      <span className="text-sm md:text-base font-bold text-brand-muted/50 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                      {destekci.isim}
                    </span>

                      <div className="w-40 h-16 md:w-48 md:h-20 relative grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        {destekci.logo.startsWith("/") ? (
                            <Image src={destekci.logo} alt={destekci.isim} fill className="object-contain" />
                        ) : (
                            <span className="flex items-center justify-center w-full h-full border border-white/5 text-brand-muted/20 font-mono text-sm tracking-widest">[ LOGO ]</span>
                        )}
                      </div>

                    </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>
  );
}