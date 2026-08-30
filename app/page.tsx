"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// ArrowDown ikonu import listesine eklendi
import { ArrowRight, Camera, Phone, Users, Calendar, Rocket, ArrowUp, ArrowDown, Globe, Link as LinkIcon } from "lucide-react";

// Oluşturduğumuz bileşenleri ve verileri çağırıyoruz
import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import Footer from "./components/Footer";
import { etkinlikler, yonetimKurulu } from "./data/siteData";

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Şerit için yeni kelimeler
  const faaliyetler = ["YAZILIM", "EĞİTİMLER", "TEKNİK GEZİLER", "YARIŞMALAR", "PROJELER"];

  return (
      <main className="flex flex-col min-h-screen">

        {/* 1. HERO - bg-[#09090b] */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-16 bg-[#09090b]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

          <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-surface border border-white/5 text-brand-muted text-xs font-mono mb-8 select-none">
              <span className="text-brand-primary">~</span>
              <span>./yage_init</span>
              <span className="w-1.5 h-3 bg-brand-muted animate-pulse"></span>
            </div>

            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-4 text-white">
              YAGE<span className="text-brand-primary">.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white/90">
              Yazılım Araştırma ve Geliştirme Topluluğu
            </h2>
            <p className="text-base md:text-lg text-brand-muted/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Gazi Üniversitesi bünyesinde faaliyet gösteren çok disiplinli mühendislik ekibi. Sadece kod yazmıyor, yazılım ve donanımı birleştirerek gerçek dünya problemlerine somut sistemler geliştiriyoruz.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* 1. Buton: WhatsApp Grubu (Birincil Aksiyon) */}
              <a href="https://chat.whatsapp.com/LİNK_BURAYA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-8 py-3.5 rounded-md font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-lg shadow-[#25D366]/5">
                <Phone size={18} /> WhatsApp Grubuna Katıl
              </a>

              {/* 2. Buton: Keşfet / Aşağı Kaydır (İkincil Aksiyon) */}
              <Link href="#biz-kimiz" className="flex items-center justify-center gap-2 bg-brand-surface text-brand-text border border-white/10 px-8 py-3.5 rounded-md font-bold hover:bg-white/5 transition-colors">
                Neler Yapıyoruz? <ArrowDown size={18} className="animate-bounce" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. BİZ KİMİZ? - bg-[#0c0c0f] */}
        {/* id="biz-kimiz" eklendi ki yukarıdaki buton buraya kayabilsin */}
        <section id="biz-kimiz" className="py-24 px-6 border-b border-white/5 bg-[#0c0c0f]">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Teoriyi Pratiğe Dönüştürüyoruz</h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                YAGE, mühendislik vizyonuna sahip öğrencilerin sıfırdan sistem mimarileri tasarladığı bir çalışma alanıdır. Sektörle köprü kurarak akademik gelişimi destekliyor, AR-GE kültürünü üniversite ekosistemine entegre ediyoruz.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. ÇALIŞMA ALANLARI (ŞERİT) - bg-[#111113] */}
        <div className="flex overflow-hidden bg-[#111113] border-b border-white/5 py-5 whitespace-nowrap relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111113] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111113] to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee items-center gap-16 px-6">
            {/* Diziyi sonsuz hissettirmek için 4 kez kopyaladık */}
            {[...faaliyetler, ...faaliyetler, ...faaliyetler, ...faaliyetler].map((faaliyet, i) => (
                <span key={i} className="text-sm md:text-base font-bold tracking-[0.2em] text-brand-muted/70 flex items-center gap-16">
              {faaliyet} <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-50"></span>
            </span>
            ))}
          </div>
        </div>

        {/* 4. İSTATİSTİKLER (3 Sütunlu) - bg-[#09090b] */}
        <section className="py-16 bg-[#09090b] border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                <div className="flex flex-col items-center justify-center py-4 sm:py-0">
                  <Users className="text-brand-muted mb-3 opacity-60" size={24} />
                  <AnimatedCounter end={700} suffix="+" />
                  <span className="text-sm text-brand-muted mt-2">Topluluk Üyesi</span>
                </div>
                <div className="flex flex-col items-center justify-center py-4 sm:py-0">
                  <Calendar className="text-brand-muted mb-3 opacity-60" size={24} />
                  <AnimatedCounter end={etkinlikler.length} suffix="" />
                  <span className="text-sm text-brand-muted mt-2">Düzenlenen Etkinlik</span>
                </div>
                <div className="flex flex-col items-center justify-center py-4 sm:py-0">
                  <Rocket className="text-brand-muted mb-3 opacity-60" size={24} />
                  <AnimatedCounter end={2} suffix="" />
                  <span className="text-sm text-brand-muted mt-2">AR-GE Projesi</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 5. SON ETKİNLİKLER - bg-[#0c0c0f] */}
        <section id="etkinlikler" className="py-24 px-6 border-b border-white/5 bg-[#0c0c0f]">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl font-bold text-white">Son Etkinlikler</h2>
                <Link href="/etkinlikler" className="flex items-center gap-1 text-brand-muted text-sm hover:text-white transition-colors group">
                  Tümünü Gör <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {etkinlikler.map((etkinlik) => (
                    <Link href={`/etkinlikler/${etkinlik.id}`} key={etkinlik.id} className="group flex flex-col bg-brand-surface rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                      <div className="h-48 bg-[#111113] relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm group-hover:scale-105 transition-transform duration-700">
                          [Etkinlik Görseli]
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-mono text-brand-muted mb-2">{etkinlik.tarih}</span>
                        <h3 className="text-lg font-bold mb-2 text-white">{etkinlik.baslik}</h3>
                        <p className="text-brand-muted text-sm line-clamp-2 mt-auto">{etkinlik.ozet}</p>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 6. BİZDEN KARELER (TAM GENİŞLİK / FULL-WIDTH) - bg-[#111113] */}
        <section className="py-24 border-b border-white/5 bg-[#111113]">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto px-6 text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Bizden Kareler</h2>
            </div>

            {/* Akordeon artık px-6 sınırlarından çıktı, ekranın tamamını kaplıyor ve yazılar silindi */}
            <div className="accordion-gallery flex-col md:flex-row h-auto md:h-[400px] w-full">
              <div className="accordion-item group h-24 md:h-full rounded-none border-y-0 border-x border-white/5">
                <div className="absolute inset-0 bg-white/5 transition-transform duration-700 group-hover:scale-110"></div>
                {/* Buraya sonradan <img /> gelecek */}
              </div>
              <div className="accordion-item group h-24 md:h-full rounded-none border-y-0 border-r border-white/5">
                <div className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:scale-110"></div>
              </div>
              <div className="accordion-item group h-24 md:h-full rounded-none border-y-0 border-r border-white/5">
                <div className="absolute inset-0 bg-white/5 transition-transform duration-700 group-hover:scale-110"></div>
              </div>
              <div className="accordion-item group h-24 md:h-full rounded-none border-y-0 border-r border-white/5">
                <div className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:scale-110"></div>
              </div>
              <div className="accordion-item group h-24 md:h-full rounded-none border-y-0 border-r border-white/5">
                <div className="absolute inset-0 bg-white/5 transition-transform duration-700 group-hover:scale-110"></div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 7. İNCE BANNER (ARAMIZA KATIL) - bg-brand-primary */}
        <section id="katil" className="py-16 px-6 border-b border-white/5 bg-brand-primary/10 relative overflow-hidden">
          {/* İnce bir renk detayı katmak için bg-brand-primary/10 kullandık */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent"></div>
          <ScrollReveal>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ekibimizin bir parçası olmak ister misin?</h2>
                <p className="text-brand-primary/80">Sektör standartlarında projeler üret ve yeteneklerini keşfet.</p>
              </div>
              <Link href="/katil" className="bg-brand-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-white hover:text-brand-bg transition-colors duration-300 shrink-0 shadow-xl shadow-brand-primary/20">
                Başvuru Yap
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* 8. YÖNETİM KURULU (Sadece 4 Kişi) - bg-[#0c0c0f] */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#0c0c0f]">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              {/* Başlık ve Tümünü Gör Linki eklendi */}
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl font-bold text-white">Yönetim Kurulu</h2>
                <Link href="/ekip" className="hidden md:flex items-center gap-1 text-brand-muted text-sm hover:text-white transition-colors group">
                  Tüm Ekibi İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {yonetimKurulu.slice(0, 4).map((kisi, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="w-32 h-32 rounded-full bg-brand-surface mb-5 border border-white/5 overflow-hidden relative transition-transform duration-300 group-hover:scale-105 group-hover:border-white/20">
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs">Foto</div>
                      </div>
                      <h3 className="text-lg font-bold text-white">{kisi.isim}</h3>
                      <p className="text-brand-muted text-sm mt-1">{kisi.gorev}</p>
                      <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href="#" className="text-brand-muted hover:text-white transition-colors"><LinkIcon size={16} /></Link>
                        <Link href="#" className="text-brand-muted hover:text-white transition-colors"><Globe size={16} /></Link>
                      </div>
                    </div>
                ))}
              </div>

              {/* Mobilde görünmesi için eklendi */}
              <div className="mt-12 flex justify-center md:hidden">
                <Link href="/ekip" className="flex items-center gap-1 text-brand-muted text-sm hover:text-white transition-colors group">
                  Tüm Ekibi İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 9. DESTEKÇİLER - bg-[#111113] */}
        <section className="py-16 bg-[#111113] border-b border-white/5 px-6">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-xs font-bold tracking-widest text-brand-muted uppercase mb-8">DESTEKÇİLERİMİZ VE PARTNERLERİMİZ</h2>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-lg font-bold text-white">Gazi Üniversitesi</div>
                <div className="text-lg font-bold text-white">TÜBİTAK</div>
                <div className="text-lg font-bold text-white">Sponsor Firma</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* YUKARI ÇIK BUTONU */}
        <button onClick={scrollToTop} className={`btn-top ${showTopBtn ? "opacity-100" : "opacity-0 pointer-events-none"}`} aria-label="Yukarı Çık">
          <ArrowUp className="svgIcon" />
        </button>

        {/* FOOTER BİLEŞENİ */}
        <Footer />

      </main>
  );
}