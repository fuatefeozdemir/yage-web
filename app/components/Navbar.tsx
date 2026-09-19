"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [mobileMenuOpen]);

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
                scrolled || mobileMenuOpen
                    ? "bg-brand-bg/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
                    : "bg-brand-bg/60 backdrop-blur-sm border-b border-white/5 py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-12 md:gap-16">
                    <Link href="/">
                        <Image
                            src="/images/logo/yage-logo.png"
                            alt="YAGE"
                            width={160}
                            height={44}
                            className="h-9 md:h-11 w-auto object-contain relative z-50"
                            priority
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative transition-colors duration-300 ${
                                        isActive ? "text-brand-primary" : "text-brand-muted hover:text-white"
                                    }`}
                                >
                                    {link.name}
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

                <div className="hidden md:block">
                    <Link
                        href="/katil"
                        className="inline-block bg-brand-primary text-white px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest"
                    >
                        Bize Katıl
                    </Link>
                </div>

                <button
                    className="md:hidden text-white relative z-50 p-2 -mr-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-brand-bg flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`text-2xl font-bold tracking-tight transition-colors ${
                            pathname === link.path ? "text-brand-primary" : "text-white"
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    href="/katil"
                    className="mt-8 bg-brand-primary text-white px-10 py-4 rounded-sm text-lg font-bold uppercase tracking-widest"
                >
                    Bize Katıl
                </Link>
            </div>
        </nav>
    );
}