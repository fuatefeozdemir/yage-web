"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // Hangi sayfada olduğumuzu anlar

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Hakkımızda", path: "/hakkimizda" },
        { name: "Projeler", path: "/projeler" },
        { name: "Etkinlikler", path: "/etkinlikler" },
        { name: "Ekibimiz", path: "/ekip" },
        { name: "İletişim", path: "/iletisim" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_1px_0_rgba(255,255,255,0.02)]"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* Sol: Logo */}
                <Link href="/">
                    <div className="font-bold text-2xl tracking-tighter text-white transition-transform hover:scale-105 cursor-pointer">
                        YAGE<span className="text-brand-primary">.</span>
                    </div>
                </Link>

                {/* Orta: Menü (Mobil hariç) */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;

                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`relative transition-colors duration-300 ${
                                    isActive
                                        ? "text-brand-primary" // Aktif sekme YAGE moru
                                        : "text-brand-muted hover:text-white"
                                }`}
                            >
                                {link.name}
                                {/* Aktif sekmenin altına zarif bir indicator (çizgi/nokta) */}
                                <span
                                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-brand-primary rounded-full transition-all duration-300 ${
                                        isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Sağ: Bize Katıl CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/katil"
                        className="inline-block bg-brand-primary text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-white hover:text-brand-bg transition-colors duration-300 shadow-lg shadow-brand-primary/20"
                    >
                        Bize Katıl
                    </Link>
                </div>
            </div>
        </nav>
    );
}