"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Hakkımızda", path: "/hakkimizda" },
        { name: "Etkinlikler", path: "/etkinlikler" },
        { name: "Galeri", path: "/galeri" },
        { name: "Ekibimiz", path: "/ekip" },
        { name: "İletişim", path: "/iletisim" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
                    : "bg-[#09090b]/60 backdrop-blur-sm border-b border-white/5 py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

                {/* Sol Grup: Logo ve Menü */}
                <div className="flex items-center gap-12 md:gap-36">

                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo/yage-logo.png"
                            alt="YAGE"
                            width={160}
                            height={44}
                            className="h-9 md:h-11 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Menü (Öğeler arası boşluk hafifçe rahatlatıldı) */}
                    <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative transition-colors duration-300 ${
                                        isActive
                                            ? "text-brand-primary"
                                            : "text-brand-muted hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                    {/* Aktif sekmenin altındaki zarif mor çizgi */}
                                    <span
                                        className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-brand-primary rounded-full transition-all duration-300 ${
                                            isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Sağ Grup: Bize Katıl CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/katil"
                        className="inline-block bg-brand-primary text-white px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Bize Katıl
                    </Link>
                </div>

            </div>
        </nav>
    );
}