import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { etkinlikler } from "../../data/siteData";
import ScrollReveal from "../../components/ScrollReveal";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const event = etkinlikler.find(e => e.slug === slug);
    if (!event) return { title: "Etkinlik Bulunamadı" };
    return { title: `${event.baslik} | YAGE`, description: event.ozet };
}

export default async function EventDetailPage({ params }: { params: Params }) {
    const { slug } = await params;
    const event = etkinlikler.find(e => e.slug === slug);

    if (!event) return notFound();

    return (
        <main className="flex flex-col min-h-screen bg-brand-bg pt-40 pb-32">
            <article className="max-w-5xl mx-auto px-6 w-full">
                <ScrollReveal>
                    <Link href="/etkinlikler" className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted hover:text-white transition-colors mb-10 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Etkinliklere Dön
                    </Link>
                    <div className="flex items-center gap-3 mb-4 text-xs font-mono font-bold tracking-widest uppercase">
                        <span className="text-brand-primary">{event.kategori}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-brand-muted">{event.tarih}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                        {event.baslik}
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={100} className="relative w-full h-[40vh] md:h-[60vh] rounded-sm overflow-hidden mb-12 border border-white/5 bg-brand-surface">
                    {event.gorsel.startsWith("/") ? (
                        <Image src={event.gorsel} alt={event.baslik} fill sizes="100vw" priority className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 font-mono text-sm">
                            {event.gorsel}
                        </div>
                    )}
                </ScrollReveal>

                <ScrollReveal delay={150}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-16 py-6 border-y border-white/5 mb-12">
                        <div>
                            <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-[0.2em] mb-2">Tarih</div>
                            <div className="text-white font-medium">{event.tarih}</div>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-[0.2em] mb-2">Konum</div>
                            <div className="text-white font-medium">{event.konum}</div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-3xl text-brand-muted/90 text-base md:text-lg leading-relaxed font-medium">
                        {event.aciklama.split('\n').map((paragraf, index) => (
                            paragraf.trim() !== "" ? <p key={index} className="mb-6">{paragraf}</p> : null
                        ))}
                    </div>
                </ScrollReveal>

                {event.galeri && event.galeri.length > 0 && (
                    <ScrollReveal className="mt-20 border-t border-white/5 pt-16">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white tracking-tight">Etkinlikten Kareler</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {event.galeri.map((foto, idx) => (
                                <div key={idx} className="aspect-square bg-brand-surface rounded-sm border border-white/5 flex items-center justify-center text-brand-muted/30 text-xs font-mono overflow-hidden relative group cursor-pointer">
                                    {foto.startsWith("/") ? (
                                        <Image src={foto} alt={`${event.baslik} Kare ${idx + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
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