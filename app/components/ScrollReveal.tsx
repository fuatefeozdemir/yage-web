"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
        >
            {children}
        </div>
    );
}