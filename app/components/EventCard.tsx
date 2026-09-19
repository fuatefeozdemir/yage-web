import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Etkinlik } from "../data/siteData";

export default function EventCard({ etkinlik }: { etkinlik: Etkinlik }) {
    return (
        <Link href={`/etkinlikler/${etkinlik.slug}`} className="group flex flex-col bg-brand-surface rounded-sm overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full relative">
            <div className="h-56 bg-brand-surface-lighter relative overflow-hidden border-b border-white/5">
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 rounded-sm uppercase tracking-widest">{etkinlik.tarih}</span>
                    <span className="bg-brand-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest">{etkinlik.kategori}</span>
                </div>

                {etkinlik.gorsel?.startsWith("/") ? (
                    <Image src={etkinlik.gorsel} alt={etkinlik.baslik} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                    <>
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-brand-surface-lighter"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-sm font-mono">{etkinlik.gorsel}</div>
                    </>
                )}
                <ArrowUpRight size={20} className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/50 rounded-full p-2 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white leading-tight">{etkinlik.baslik}</h3>
                <p className="text-brand-muted text-sm line-clamp-2 mt-auto leading-relaxed">{etkinlik.ozet}</p>
            </div>
        </Link>
    );
}