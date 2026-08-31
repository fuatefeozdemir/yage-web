"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#18181b] border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-lg"
            aria-label="Yukarı Çık"
        >
            <ArrowUp size={20} />
        </button>
    );
}