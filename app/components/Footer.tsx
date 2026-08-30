import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#09090b] py-16 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="font-bold text-3xl tracking-tighter mb-4 text-white">
                        YAGE<span className="text-brand-primary">.</span>
                    </div>
                    <p className="text-brand-muted text-sm max-w-sm mb-6 leading-relaxed">
                        Gazi Üniversitesi bünyesinde faaliyet gösteren Yazılım Araştırma ve Geliştirme Topluluğu.
                    </p>
                    <div className="text-brand-muted text-sm font-mono">
                        iletisim@yage.gazi.edu.tr
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h4>
                    <ul className="space-y-3 text-sm text-brand-muted">
                        <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                        <li><Link href="/projeler" className="hover:text-white transition-colors">Projeler</Link></li>
                        <li><Link href="/etkinlikler" className="hover:text-white transition-colors">Etkinlikler</Link></li>
                        <li><Link href="/ekip" className="hover:text-white transition-colors">Yönetim Kurulu</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Sosyal Medya</h4>
                    <ul className="space-y-3 text-sm text-brand-muted">
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted">
                <span>&copy; {new Date().getFullYear()} YAGE. Tüm hakları saklıdır.</span>
                <span>Gazi Üniversitesi - Ankara</span>
            </div>
        </footer>
    );
}