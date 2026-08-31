export default function Footer() {
    return (
        <footer className="relative bg-[#09090b] pt-24 pb-8 px-6 border-t border-white/5 overflow-hidden">

            {/* Devasa YAGE Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none select-none w-full text-center overflow-hidden z-0">
        <span className="text-[12rem] md:text-[22rem] font-black text-white/[0.02] tracking-tighter leading-none">
          YAGE
        </span>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Üst Kısım: Grid Yapısı (mb-16 olarak güncellendi) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Marka & Vizyon (2 Kolon Kaplar) */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="font-bold text-5xl tracking-tighter mb-6 text-white">
                            YAGE<span className="text-brand-primary">.</span>
                        </div>
                        <p className="text-brand-muted text-base max-w-sm leading-relaxed">
                            Gazi Üniversitesi bünyesinde, fikri koda, kodu sisteme dönüştüren çok disiplinli mühendislik ekibi.
                        </p>
                    </div>

                    {/* Sosyal Ağlar (Başlık düzeltildi, group class eklendi) */}
                    <div>
                        <h4 className="text-[10px] font-mono font-bold text-brand-muted/50 uppercase tracking-[0.2em] mb-6">
                            SOSYAL AĞLAR
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="group text-white hover:text-brand-primary transition-colors flex items-center gap-2 w-fit">
                                    GitHub <span className="text-brand-muted/30 font-mono text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="group text-white hover:text-[#0077b5] transition-colors flex items-center gap-2 w-fit">
                                    LinkedIn <span className="text-brand-muted/30 font-mono text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="group text-white hover:text-[#E1306C] transition-colors flex items-center gap-2 w-fit">
                                    Instagram <span className="text-brand-muted/30 font-mono text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* İletişim & Konum (Başlık ve E-posta düzeltildi) */}
                    <div>
                        <h4 className="text-[10px] font-mono font-bold text-brand-muted/50 uppercase tracking-[0.2em] mb-6">
                            KONUM
                        </h4>
                        <div className="text-sm text-white mb-1">Gazi Üniversitesi</div>
                        <div className="text-sm text-brand-muted mb-8">Teknoloji Fakültesi</div>

                        <h4 className="text-[10px] font-mono font-bold text-brand-muted/50 uppercase tracking-[0.2em] mb-3">
                            İLETİŞİM
                        </h4>
                        <a href="mailto:yagegazi@gmail.com" className="text-sm font-mono text-brand-primary hover:text-white transition-colors">
                            yagegazi@gmail.com
                        </a>
                    </div>
                </div>

                {/* Alt Kısım: Status Bar (Tekrar eden System Online kaldırıldı) */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-[0.2em]">
                        TÜM HAKLARI SAKLIDIR.
                    </div>

                    <div className="text-[10px] font-mono text-brand-muted/50 uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} YAGE. ANKARA / TR
                    </div>
                </div>

            </div>
        </footer>
    );
}