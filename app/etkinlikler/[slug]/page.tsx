import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { etkinlikler } from "../../data/siteData";
import ScrollReveal from "../../components/ScrollReveal";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const event = etkinlikler.find(e => e.slug === slug);
    if (!event) return { title: "Etkinlik Bulunamadı" };
    return { title: `${event.baslik} | YAGE Etkinlikleri`, description: event.ozet };
}

export default async function EventDetailPage({ params }: { params: Params }) {
    const { slug } = await params;
    const event = etkinlikler.find(e => e.slug === slug);

    if (!event) return notFound();

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b] pt-32 pb-32">

            {/* İçerik Kapsayıcısı (Okuma konforu için max-w-5xl) */}
            <article className="max-w-5xl mx-auto px-6 w-full">

                {/* GERİ DÖN & ÜST METADATA */}
                <ScrollReveal>
                    <Link href="/etkinlikler" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-brand-muted hover:text-white transition-colors uppercase mb-12 group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> ETKİNLİKLER ARŞİVİ
                    </Link>

                    <div className="flex items-center gap-3 mb-6 font-mono text-xs">
                        <span className="text-brand-primary font-bold uppercase tracking-[0.2em]">{event.kategori}</span>
                        <span className="text-white/20">/</span>
                        <span className="text-brand-muted uppercase tracking-widest">{event.tarih}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-12 leading-[1.1]">
                        {event.baslik}<span className="text-brand-primary">.</span>
                    </h1>
                </ScrollReveal>

                {/* DEV ANA GÖRSEL (Statik, Alta Doğru Eriyen) */}
                <ScrollReveal delay={100} className="relative w-full h-[50vh] md:h-[65vh] rounded-sm overflow-hidden mb-12 border border-white/5">
                    {event.gorsel.startsWith("/") ? (
                        <Image
                            src={event.gorsel}
                            alt={event.baslik}
                            fill
                            priority
                            className="object-cover" // Hover zoom kaldırıldı
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 font-mono text-sm bg-[#111113]">
                            {event.gorsel} - ANA GÖRSEL
                        </div>
                    )}

                    {/* Alta Doğru Saydamlaşma (Zemin rengi olan #09090b'ye kaynar) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent pointer-events-none"></div>
                </ScrollReveal>

                {/* İNCE BİLGİ BANDI (Düzenleyen kaldırıldı) */}
                <ScrollReveal delay={150}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-16 py-5 border-y border-white/5 mb-16">
                        <div>
                            <div className="text-[10px] font-mono text-brand-muted/40 uppercase tracking-[0.2em] mb-1.5">TARİH / YIL</div>
                            <div className="text-white font-medium text-sm">{event.tarih} <span className="text-brand-muted ml-1">({event.yil})</span></div>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-brand-muted/40 uppercase tracking-[0.2em] mb-1.5">KONUM</div>
                            <div className="text-white font-medium text-sm">{event.konum}</div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* UZUN METİN (Çoklu Paragraf Desteği) */}
                <ScrollReveal>
                    <div className="prose prose-invert prose-lg max-w-none text-brand-muted/90 leading-relaxed font-medium">
                        {/* siteData.ts içinde metne \n (alt satır) eklersen ayrı paragraf olarak basar */}
                        {event.aciklama.split('\n').map((paragraf, index) => (
                            paragraf.trim() !== "" ? <p key={index} className="mb-6">{paragraf}</p> : null
                        ))}
                    </div>
                </ScrollReveal>

                {/* ETKİNLİKTEN KARELER (GALERİ) */}
                {event.galeri && event.galeri.length > 0 && (
                    <ScrollReveal className="mt-24 border-t border-white/5 pt-16">
                        <div className="flex items-center gap-3 mb-10">
                            <ImageIcon size={18} className="text-brand-primary" />
                            <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                                KARELER
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {event.galeri.map((foto, idx) => (
                                <div key={idx} className="aspect-square bg-[#111113] rounded-sm border border-white/5 flex items-center justify-center text-brand-muted/30 text-xs font-mono hover:border-white/30 transition-colors cursor-pointer overflow-hidden relative group">
                                    {foto.startsWith("/") ? (
                                        <Image src={foto} alt={`${event.baslik} Kare ${idx + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                    ) : (
                                        <span className="relative z-10">{foto}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                )}

            </article>
        </main>
    );
}