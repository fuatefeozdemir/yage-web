"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
      <main className="flex flex-col min-h-screen bg-[#09090b]">

        {/* STANDART HERO (pt-40 pb-16) */}
        <section className="w-full pt-40 pb-16 px-6 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                Hakkımızda
              </h1>
              <p className="text-lg md:text-xl text-brand-muted/80 max-w-2xl leading-relaxed">
                YAGE, Gazi Üniversitesi öğrencilerinin yazılım ve teknoloji alanında bir araya geldiği öğrenci topluluğudur.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* YAGE HAKKINDA */}
        <section className="w-full pb-24 px-6">
          <div className="max-w-6xl mx-auto pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
              <div className="md:col-span-4">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold text-white">YAGE Hakkında</h2>
                </ScrollReveal>
              </div>
              <div className="md:col-span-8">
                <ScrollReveal delay={100}>
                  <div className="text-brand-muted/90 text-base md:text-lg leading-relaxed font-medium space-y-6">
                    <p>Yazılım Araştırma ve Geliştirme Topluluğu (YAGE), üniversite yıllarını sadece teorik eğitimle değil, pratik projelerle, takım çalışmasıyla ve sektörle iç içe geçirmek isteyen öğrenciler tarafından kuruldu.</p>
                    <p>Amacımız, farklı bölümlerden ve farklı bilgi seviyelerinden öğrencileri bir araya getirerek yazılım, donanım ve sistem geliştirme alanlarında ortak bir öğrenme ekosistemi yaratmak. Burada sadece kod yazmıyor; problemlere birlikte yaklaşıyor, teknolojiyi tartışıyor ve üretiyoruz.</p>
                    <p>Üniversite bünyesinde bir öğrenci kulübü olmanın ötesinde, üyelerimizin kendilerini teknik ve sosyal anlamda geliştirebilecekleri, hata yapmaktan korkmadan yeni şeyler deneyebilecekleri bir ortam sunuyoruz.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* NE YAPIYORUZ? */}
        <section className="w-full py-24 px-6 bg-[#0c0c0f] border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-16">Ne Yapıyoruz?</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <ScrollReveal delay={0}>
                <h3 className="text-lg font-bold text-white mb-3">Etkinlikler</h3>
                <p className="text-brand-muted leading-relaxed">Teknik eğitimler, sektörel paneller, tanışma toplantıları ve topluluk içi sosyal etkinlikler düzenliyoruz.</p>
              </ScrollReveal>
              <ScrollReveal delay={50}>
                <h3 className="text-lg font-bold text-white mb-3">Çalışma Grupları</h3>
                <p className="text-brand-muted leading-relaxed">Öğrencilerin farklı yazılım ve teknoloji alanlarında küçük ekipler halinde bir araya gelip odaklanmış çalışmalar yapmasını sağlıyoruz.</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h3 className="text-lg font-bold text-white mb-3">Projeler</h3>
                <p className="text-brand-muted leading-relaxed">Topluluk üyelerinin bireysel veya ekip olarak geliştirdiği yazılım, tasarım ve AR-GE projelerine destek veriyoruz.</p>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <h3 className="text-lg font-bold text-white mb-3">Öğrenme ve Paylaşım</h3>
                <p className="text-brand-muted leading-relaxed">Üyelerimizin edindiği bilgi ve deneyimlerin birbirleriyle sürekli olarak paylaşılmasını ve topluluk kültürüne dönüşmesini teşvik ediyoruz.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* EKİP VE KÜLTÜR */}
        <section className="w-full py-32 px-6 border-t border-white/5 bg-[#09090b]">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Birlikte Öğreniyoruz, <br className="hidden sm:block"/> Birlikte Üretiyoruz.
              </h2>
              <p className="text-brand-muted text-lg max-w-xl mb-8">
                YAGE'de farklı bölümlerden ve farklı seviyelerden öğrenciler bir araya geliyor.
              </p>
              <Link href="/ekip" className="inline-flex items-center gap-2 text-sm font-bold bg-[#111113] border border-white/10 text-white px-8 py-3 rounded-sm hover:border-white/30 transition-colors uppercase tracking-widest font-mono">
                Ekibimizi Görüntüle <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
  );
}