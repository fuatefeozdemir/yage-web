"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <div className="font-bold text-2xl tracking-tighter text-white transition-transform hover:scale-105 cursor-pointer">
                    YAGE<span className="text-brand-primary">.</span>
                </div>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-muted">
                    <a href="#" className="hover:text-white transition-colors">Projeler</a>
                    <a href="#" className="hover:text-white transition-colors">Etkinlikler</a>
                    <a href="#" className="hover:text-white transition-colors">Ekibimiz</a>
                </div>

                {/* Yeni Solid "Bize Katıl" Butonu */}
                <button className="bg-brand-primary text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-white hover:text-brand-bg transition-colors duration-300 shadow-lg shadow-brand-primary/20">
                    Bize Katıl
                </button>
            </div>
        </nav>
    );
}