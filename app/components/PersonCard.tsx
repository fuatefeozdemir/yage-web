import Image from "next/image";
import { EkipUyesi } from "../data/siteData";

const GithubIcon = ({ size = 16, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

interface PersonCardProps {
    kisi: EkipUyesi;
    roleOverride?: string | null;
    hideRole?: boolean;
}

export default function PersonCard({ kisi, roleOverride, hideRole = false }: PersonCardProps) {
    return (
        <div className="flex flex-col items-center group text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-brand-surface mb-4 border border-white/5 overflow-hidden relative transition-colors duration-500 group-hover:border-brand-primary/30 grayscale group-hover:grayscale-0 shadow-lg">
                {kisi.foto && kisi.foto.startsWith("/") ? (
                    <Image src={kisi.foto} alt={kisi.isim} fill className="object-cover" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono group-hover:opacity-0 transition-opacity">IMG</div>
                )}
            </div>

            <h3 className="text-base md:text-lg font-bold text-white leading-tight">{kisi.isim}</h3>

            {!hideRole && (
                <p className="text-brand-muted text-xs md:text-sm mt-1">{roleOverride || kisi.gorev}</p>
            )}

            <div className="flex gap-4 mt-3 opacity-60 md:group-hover:opacity-100 transition-opacity duration-300">
                {kisi.github && kisi.github !== "#" && (
                    <a href={kisi.github} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-white transition-colors">
                        <GithubIcon size={16} />
                    </a>
                )}
                {kisi.linkedin && kisi.linkedin !== "#" && (
                    <a href={kisi.linkedin} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-[#0077B5] transition-colors">
                        <LinkedinIcon size={16} />
                    </a>
                )}
            </div>
        </div>
    );
}