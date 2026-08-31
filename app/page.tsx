import Link from "next/link";
import { ArrowRight, Phone, Users, Calendar, Rocket, Globe, Link as LinkIcon, ArrowUpRight } from "lucide-react";

import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { etkinlikler, faaliyetler, yonetimKurulu } from "./data/siteData";

export default function Home() {
  const seciliEkip = yonetimKurulu.filter(kisi => kisi.featured).slice(0, 4);

  return (
      <main className="flex flex-col min-h-screen">

        {/* ====================================================
          1. AÇILIŞ VE ANLATI (HERO + BİZ KİMİZ)
          Tek bir kapsayıcı içinde, Grid her ikisini de kapsıyor
      ==================================================== */}
        <div className="relative bg-[#09090b] border-b border-white/5">

          {/* Hareketli Grid (Hero'dan başlayıp Biz Kimiz'in ortalarında silinir) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-pan [mask-image:linear-gradient(to_bottom,transparent,black_30%,transparent_90%)] z-0 pointer-events-none"></div>

          {/* 1A. HERO */}
          <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 z-10">
            <div className="text-center px-4 md:px-6 max-w-4xl mt-auto animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-surface border border-white/5 text-brand-muted text-xs font-mono mb-8 select-none shadow-xl">
                <span className="text-brand-primary">~</span>
                <span>./yage_init</span>
                <span className="w-1.5 h-3 bg-brand-muted animate-pulse"></span>
              </div>

              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 text-white">
                YAGE<span className="text-brand-primary">.</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white/90">
                Yazılım Araştırma ve Geliştirme Topluluğu
              </h2>
              <p className="text-base md:text-lg text-brand-muted/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Fikirden çalışan sisteme. Yazılım, donanım ve araştırma odaklı projeler geliştiren çok disiplinli mühendislik ekibi.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#katil" className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-white hover:text-brand-bg transition-colors shadow-lg shadow-brand-primary/10">
                  YAGE'ye Katıl
                </Link>
                <a href="https://chat.whatsapp.com/LİNK_BURAYA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-surface text-brand-text border border-white/10 px-8 py-3.5 rounded-md font-semibold hover:bg-white/5 transition-colors group">
                  <Phone size={16} className="text-[#25D366]" /> WhatsApp Grubu <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="mt-auto pt-24 pb-12 w-full px-6 flex justify-between items-center text-[10px] sm:text-xs font-mono text-brand-muted/40">
              <span className="hidden sm:inline-block">[ GAZI UNIVERSITY ]</span>
              <span>[ ANKARA / TR ]</span>
              <span>[ SYSTEM STATUS: ONLINE ]</span>
            </div>
          </section>

          {/* 1B. BİZ KİMİZ? (Hero'nun doğal devamı, pb-16 ile sıkıştırıldı) */}
          <section className="pt-4 pb-16 px-6 relative z-10">
            <ScrollReveal className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Teoriyi <br className="hidden md:block"/>
                  Pratiğe <br className="hidden md:block"/>
                  <span className="text-brand-muted">Dönüştürüyoruz.</span>
                </h2>
                <div className="flex flex-col gap-6 text-lg text-brand-muted/90 leading-relaxed border-l-2 border-brand-primary/20 pl-6 md:pl-8">
                  <p>
                    YAGE, mühendislik vizyonuna sahip öğrencilerin sıfırdan sistem mimarileri tasarladığı bir çalışma alanıdır.
                  </p>
                  <p>
                    Sektörle köprü kurarak akademik gelişimi destekliyor, sadece tüketen değil, üreten bir ekosistem inşa ediyoruz.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </div>


        {/* ====================================================
          2. VERİ BANDI (ŞERİT + İSTATİSTİK)
          Şerit pt-4'e düşürüldü, alt border silindi.
      ==================================================== */}
        <div className="bg-[#0c0c0f]">
          {/* 2A. ŞERİT (İnce geçiş bandı) */}
          <div className="flex overflow-hidden py-4 relative select-none">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0c0f] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0c0f] to-transparent z-10 pointer-events-none"></div>
            <div className="flex w-fit animate-marquee-slow">
              <div className="flex items-center gap-16 px-8 min-w-full justify-around">
                {faaliyetler.map((faaliyet, i) => (
                    <span key={i} className="text-xs md:text-sm font-bold tracking-[0.2em] text-brand-muted/40 flex items-center gap-16 uppercase">
                  {faaliyet} <span className="w-1 h-1 rounded-full bg-brand-primary opacity-50"></span>
                </span>
                ))}
              </div>
              <div className="flex items-center gap-16 px-8 min-w-full justify-around">
                {faaliyetler.map((faaliyet, i) => (
                    <span key={`clone-${i}`} className="text-xs md:text-sm font-bold tracking-[0.2em] text-brand-muted/40 flex items-center gap-16 uppercase">
                  {faaliyet} <span className="w-1 h-1 rounded-full bg-brand-primary opacity-50"></span>
                </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2B. İSTATİSTİK (Kompakt veri bölgesi) */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-6">
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:divide-x divide-white/5">
                  <div className="flex flex-col items-center justify-center">
                    <Users className="text-brand-muted mb-2 opacity-50" size={24} />
                    <AnimatedCounter end={700} suffix="+" />
                    <span className="text-xs text-brand-muted/70 mt-1 font-mono uppercase tracking-wider">Topluluk Üyesi</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Calendar className="text-brand-muted mb-2 opacity-50" size={24} />
                    <AnimatedCounter end={etkinlikler.length} />
                    <span className="text-xs text-brand-muted/70 mt-1 font-mono uppercase tracking-wider">Düzenlenen Etkinlik</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Rocket className="text-brand-muted mb-2 opacity-50" size={24} />
                    <AnimatedCounter end={2} />
                    <span className="text-xs text-brand-muted/70 mt-1 font-mono uppercase tracking-wider">AR-GE Projesi</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>


        {/* ====================================================
          3. İÇERİK MERKEZİ (GALERİ + ETKİNLİKLER)
      ==================================================== */}

        {/* 3A. BİZDEN KARELER (Görsel Zirve - border-t ile güçlü giriş) */}
        <section className="py-24 bg-[#111113] border-t border-b border-white/5">
          <ScrollReveal delay={0}>
            <div className="max-w-6xl mx-auto px-6 mb-12">
              <h2 className="text-3xl font-bold text-white">Bizden Kareler</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex overflow-x-auto md:overflow-hidden h-64 md:h-[450px] w-full snap-x snap-mandatory hide-scrollbar">
              {[1,2,3,4,5].map((item, i) => (
                  <div key={i} className="shrink-0 w-[85vw] md:w-auto accordion-item h-full bg-[#18181b] snap-center relative group border-r border-white/5 overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-white/5 transition-transform duration-700 md:group-hover:scale-105"></div>
                  </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 3B. SON ETKİNLİKLER (Fragman - py-16'ya sıkıştırıldı) */}
        <section id="etkinlikler" className="py-16 px-6 bg-[#09090b]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex justify-between items-end mb-10">
                <h2 className="text-2xl font-bold text-white">Son Etkinlikler</h2>
                <Link href="/etkinlikler" className="flex items-center gap-1 text-brand-muted text-sm hover:text-white transition-colors group">
                  Arşive Git <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {etkinlikler.slice(0, 3).map((etkinlik, i) => (
                  <ScrollReveal key={etkinlik.id} delay={i * 100}>
                    <Link href={`/etkinlikler/${etkinlik.slug}`} className="group flex flex-col bg-[#111113] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full relative">
                      <div className="h-48 bg-[#18181b] relative overflow-hidden">
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"></div>
                        <ArrowUpRight size={24} className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/50 rounded-full p-1 backdrop-blur-sm" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-mono text-brand-primary mb-3">{etkinlik.tarih}</span>
                        <h3 className="text-lg font-bold mb-2 text-white leading-tight">{etkinlik.baslik}</h3>
                        <p className="text-brand-muted text-sm line-clamp-2 mt-auto">{etkinlik.ozet}</p>
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

        {/* 4A. CTA BANNER (Aksiyon Zirvesi - Özel Watermark) */}
        <section id="katil" className="py-20 px-6 bg-[#111113] relative overflow-hidden flex items-center justify-center border-y border-white/5">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[6rem] md:text-[14rem] font-black text-white/[0.02] select-none leading-none tracking-tighter whitespace-nowrap">
            EXEC_JOIN()
          </span>
          </div>

          <ScrollReveal className="relative z-10 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ekibimizin bir parçası olmak ister misin?</h2>
            <p className="text-brand-muted mb-8 text-lg">Hangi seviyede olursan ol, üreten bir ağın (network) parçası ol.</p>
            <Link href="/katil" className="inline-block bg-white text-black px-10 py-4 rounded-md font-bold hover:bg-brand-primary hover:text-white transition-colors duration-300 shadow-xl">
              Başvuru Yap
            </Link>
          </ScrollReveal>
        </section>

        {/* 4B. YÖNETİM KURULU (İnsan ve Kurumsallık, pb-24 ile alt boşluk artırıldı) */}
        <section className="pt-24 pb-24 px-6 bg-[#09090b]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-2xl font-bold text-white">Yönetim Kurulu</h2>
                <Link href="/ekip" className="hidden md:flex items-center gap-1 text-brand-muted text-sm hover:text-white transition-colors group">
                  Tüm Ekibi İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {seciliEkip.map((kisi, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="flex flex-col items-center group">
                      <div className="w-32 h-32 rounded-full bg-[#111113] mb-5 border border-white/5 overflow-hidden relative transition-transform duration-500 group-hover:scale-105 group-hover:border-white/20 grayscale group-hover:grayscale-0 shadow-lg">
                      </div>
                      <h3 className="text-base font-bold text-white">{kisi.isim}</h3>
                      <p className="text-brand-muted text-sm mt-1">{kisi.gorev}</p>
                    </div>
                  </ScrollReveal>
              ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
              <Link href="/ekip" className="flex items-center gap-1 text-brand-muted text-sm hover:text-white transition-colors group">
                Tüm Ekibi İncele <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4C. DESTEKÇİLER (Pre-Footer Güven Bandı - bg değiştirilerek ayrıştırıldı) */}
        <section className="py-16 bg-[#0c0c0f] border-t border-white/5 px-6">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-brand-muted/40 uppercase mb-8">Destekçilerimiz ve Partnerlerimiz</h2>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                <div className="text-base font-bold text-white opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Gazi Üniversitesi</div>
                <div className="text-base font-bold text-white opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer">TÜBİTAK</div>
                <div className="text-base font-bold text-white opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Sponsor Firma</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <BackToTop />
        <Footer />

      </main>
  );
}