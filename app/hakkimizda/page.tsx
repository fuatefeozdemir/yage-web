"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal, Cpu, GitBranch, Crosshair } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#09090b] pt-32 pb-24">

      {/* 1. MİNİMAL HERO ALANI */}
      <section className="relative w-full pt-20 pb-24 border-b border-white/5 overflow-hidden">
        {/* Arka Plan Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-brand-primary font-mono text-sm">/</span>
              <span className="text-brand-muted/50 font-mono text-xs tracking-[0.2em] uppercase">SYSTEM.INFO / ABOUT</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-8">
              Sistemi <br className="hidden md:block"/>
              Yeniden <br className="hidden md:block"/>
              <span className="text-brand-primary">İnşa Ediyoruz.</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-muted/80 max-w-2xl leading-relaxed font-medium">
              Sadece kod yazmıyor, mühendislik disipliniyle çalışan, üreten ve sektörle köprü kuran bir ekosistem tasarlıyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. MANİFESTO (Asimetrik Okuma Alanı) */}
      <section className="w-full py-32 px-6 bg-[#0c0c0f]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Sol Kolon - Etiket */}
          <div className="md:col-span-4">
            <ScrollReveal>
              <h2 className="text-[10px] font-mono font-bold text-brand-muted/40 uppercase tracking-[0.2em] sticky top-32">
                [ 01 / MANİFESTO ]
              </h2>
            </ScrollReveal>
          </div>

          {/* Sağ Kolon - Ana Metin */}
          <div className="md:col-span-8">
            <ScrollReveal delay={100}>
              <div className="prose prose-invert prose-lg max-w-none text-brand-muted/90 leading-relaxed font-medium space-y-8">
                <p className="text-2xl text-white font-semibold leading-snug">
                  YAGE (Yazılım Araştırma ve Geliştirme Topluluğu), Gazi Üniversitesi çatısı altında salt tüketen değil, kalıcı değer üreten bir mühendislik kültürü oluşturmak için kuruldu.
                </p>
                <p>
                  Günümüz teknoloji dünyasında "yazılım", izole edilmiş bir ekranın arkasındaki kod satırlarından ibaret değildir. Biz yazılımı; elektronik, mekanik ve sistem mimarisiyle entegre bir bütün olarak görüyoruz. Bu nedenle topluluğumuz, yazılım geliştiricilerinden gömülü sistem mühendislerine, veri bilimcilerden donanım tasarımcılarına kadar geniş bir disiplin yelpazesini barındırıyor.
                </p>
                <p>
                  Temel amacımız, üniversite sıralarındaki teorik bilgiyi, sanayinin ve gerçek dünyanın ihtiyaç duyduğu pratik projelere dönüştürmek. Otonom sistemler, web mimarileri, savunma sanayii yazılımları ve açık kaynaklı araçlar geliştirerek kendi teknoloji ağımızı örüyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES (Teknik 3'lü Grid, Devasa Rakamlar) */}
      <section className="w-full py-32 px-6 bg-[#09090b] border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-[10px] font-mono font-bold text-brand-muted/40 uppercase tracking-[0.2em] mb-4">
                [ 02 / ÇEKİRDEK İLKELER ]
              </h2>
              <div className="w-full h-px bg-white/10"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">

            {/* İlke 1 */}
            <ScrollReveal delay={0} className="relative group">
              <div className="absolute -top-10 -left-4 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none select-none leading-none z-0">
                01
              </div>
              <div className="relative z-10">
                <Terminal className="text-brand-primary mb-6" size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-4">Sistem Odaklılık</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Problemleri tekil kod parçacıkları olarak değil, geniş çaplı sistem mimarileri olarak ele alırız. Mimarisi doğru kurgulanmamış hiçbir çözüm kalıcı değildir.
                </p>
              </div>
            </ScrollReveal>

            {/* İlke 2 */}
            <ScrollReveal delay={100} className="relative group">
              <div className="absolute -top-10 -left-4 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none select-none leading-none z-0">
                02
              </div>
              <div className="relative z-10">
                <GitBranch className="text-brand-primary mb-6" size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-4">Açık Kaynak & Paylaşım</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Öğrendiğimiz her yeni teknolojiyi ve geliştirdiğimiz araçları dökümante eder, eğitimler ve açık kaynak depolar aracılığıyla toplulukla paylaşırız.
                </p>
              </div>
            </ScrollReveal>

            {/* İlke 3 */}
            <ScrollReveal delay={200} className="relative group">
              <div className="absolute -top-10 -left-4 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none select-none leading-none z-0">
                03
              </div>
              <div className="relative z-10">
                <Crosshair className="text-brand-primary mb-6" size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-4">Sektörel Entegrasyon</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Akademinin teorik dünyasında kaybolmaz, doğrudan teknoloji firmaları, savunma sanayii ve start-up ekosistemleriyle dirsek teması halinde çalışırız.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. EKİP VİTRİNİ GÖRSELİ (Kültür) */}
      <section className="w-full bg-[#111113] border-t border-b border-white/5">
        <ScrollReveal>
          <div className="w-full h-[50vh] md:h-[70vh] relative group overflow-hidden flex items-center justify-center">

            {/* Fotoğraf geldiğinde burayı aktif edebilirsin
            <Image
              src="/images/hakkimizda/yage-ekibi.jpg"
              alt="YAGE Ekibi"
              fill
              className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />
            */}

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <Cpu size={48} className="text-brand-muted/30 mb-6" strokeWidth={1} />
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Donanım. Yazılım. İnsan.</h2>
              <p className="text-brand-muted text-lg max-w-xl mb-8">
                Disiplinler arası çalışmanın gücüne inanan bir laboratuvar kültürü.
              </p>
              <Link href="/ekip" className="flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-white transition-colors group/btn uppercase tracking-widest">
                Ekibi İncele <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}