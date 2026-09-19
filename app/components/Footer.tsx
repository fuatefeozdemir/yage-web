import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-brand-bg pt-20 pb-8 px-6 border-t border-white/5 overflow-hidden">
            <div
                className="absolute -bottom-16 -right-16 w-96 h-96 opacity-20 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(circle at 100% 100%, black, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black, transparent 70%)'
                }}
            ></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="font-bold text-4xl tracking-tight mb-4 text-white">
                            YAGE
                        </div>
                        <p className="text-brand-muted text-sm max-w-sm leading-relaxed font-medium">
                            Yazılım Araştırma ve Geliştirme Topluluğu.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-bold text-brand-muted/50 uppercase tracking-[0.2em] mb-6">
                            BİZİ TAKİP ET
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium">
                            <li>
                                <a href="https://www.instagram.com/gaziyage" target="_blank" rel="noopener noreferrer" className="group text-brand-muted hover:text-[#E1306C] transition-colors flex items-center gap-2 w-fit">
                                    Instagram <span className="text-brand-muted/30 font-mono text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/gaziyage" target="_blank" rel="noopener noreferrer" className="group text-brand-muted hover:text-[#0077b5] transition-colors flex items-center gap-2 w-fit">
                                    LinkedIn <span className="text-brand-muted/30 font-mono text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/orgs/teamtulpar/" target="_blank" rel="noopener noreferrer" className="group text-brand-muted hover:text-white transition-colors flex items-center gap-2 w-fit">
                                    GitHub <span className="text-brand-muted/30 font-mono text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-bold text-brand-muted/50 uppercase tracking-[0.2em] mb-6">
                            KONUM
                        </h4>
                        <div className="text-sm text-white mb-1 font-normal">Gazi Üniversitesi</div>
                        <div className="text-sm text-brand-muted mb-8 font-normal">Teknoloji Fakültesi</div>

                        <h4 className="text-[10px] font-mono font-bold text-brand-muted/50 uppercase tracking-[0.2em] mb-3">
                            İLETİŞİM
                        </h4>
                        <a href="mailto:yagegazi@gmail.com" className="text-sm font-mono text-brand-primary font-normal hover:text-white transition-colors">
                            yagegazi@gmail.com
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-[11px] font-mono text-brand-muted/50 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} YAGE
                    </div>
                    <div className="text-[11px] font-mono text-brand-muted/50 uppercase tracking-widest">
                        Gazi Üniversitesi Teknoloji Fakültesi
                    </div>
                </div>
            </div>
        </footer>
    );
}