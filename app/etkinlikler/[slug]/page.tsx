import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { etkinlikler } from "../../data/siteData";
import ScrollReveal from "../../components/ScrollReveal";

export function generateMetadata({ params }: { params: { slug: string } }) {
    const event = etkinlikler.find(e => e.slug === params.slug);
    if (!event) return { title: "Etkinlik Bulunamadı" };
    return { title: `${event.baslik} | YAGE Etkinlikleri`, description: event.ozet };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
    const event = etkinlikler.find(e => e.slug === params.slug);

    if (!event) return notFound();

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b] pt-32 pb-24">

            {/* ÜST BİLGİ VE GERİ BUTONU */}
            <section className="max-w-4xl mx-auto px-6 w-full mb-10">
                <ScrollReveal>
                    <Link href="/etkinlikler" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Etkinlikler
                    </Link>

                    {/* Kategori ve Tarih (Minimal Metadata) */}
                    <div className="flex items-center gap-3 mb-4 font-mono text-xs text-brand-muted">
                        <span className="text-white uppercase tracking-wider font-bold">{event.kategori}</span>
                        <span>/</span>
                        <span>{event.tarih}</span>
                    </div>

                    {/* Başlık ve Özet */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                        {event.baslik}
                    </h1>
                    <p className="text-xl text-brand-muted/90 leading-relaxed max-w-3xl">
                        {event.ozet}
                    </p>
                </ScrollReveal>
            </section>

            {/* ANA GÖRSEL (rounded-sm ile geometrik keskinlik) */}
            <section className="max-w-5xl mx-auto px-6 w-full mb-16">
                <ScrollReveal delay={100}>
                    <div className="w-full h-[40vh] md:h-[55vh] bg-[#111113] rounded-sm border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]"></div>
                        <span className="text-brand-muted/30 font-mono text-sm z-10">{event.gorsel} - ANA GÖRSEL</span>
                    </div>
                </ScrollReveal>
            </section>

            {/* İÇERİK VE DÜZ METADATA BLOKLARI (Kutu Tasarımı Kaldırıldı) */}
            <section className="max-w-4xl mx-auto px-6 w-full mb-24">
                <ScrollReveal className="mb-16">
                    <h2 className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest mb-6">ETKİNLİK HAKKINDA</h2>
                    <div className="text-brand-muted/90 leading-relaxed space-y-6 text-lg border-l border-white/10 pl-6">
                        <p>{event.aciklama}</p>
                    </div>
                </ScrollReveal>

                {/* Düz Metadata Satırı (Tarih - Konum - Düzenleyen) */}
                <ScrollReveal delay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/10 mb-16">
                    <div>
                        <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-widest mb-1">TARİH</div>
                        <div className="text-white font-medium">{event.tarih}</div>
                        <div className="text-brand-muted text-xs font-mono mt-0.5">{event.yil}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-widest mb-1">KONUM</div>
                        <div className="text-white font-medium">{event.konum}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-widest mb-1">DÜZENLEYEN</div>
                        <div className="text-white font-medium">YAGE ({event.kategori} Ekibi)</div>
                    </div>
                </ScrollReveal>

                {/* Etkinlikten Kareler (Varsa) */}
                {event.galeri && event.galeri.length > 0 && (
                    <ScrollReveal>
                        <h2 className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest mb-8 flex items-center gap-2">
                            <ImageIcon size={16} /> ETKİNLİKTEN KARELER
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {event.galeri.map((foto, idx) => (
                                <div key={idx} className="aspect-square bg-[#111113] rounded-sm border border-white/5 flex items-center justify-center text-brand-muted/30 text-xs font-mono hover:border-white/20 transition-colors cursor-pointer overflow-hidden relative group">
                                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"></div>
                                    <span className="relative z-10">{foto}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                )}
            </section>

        </main>
    );
}