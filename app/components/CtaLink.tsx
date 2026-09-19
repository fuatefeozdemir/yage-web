import Link from "next/link";
import { ReactNode } from "react";

interface CtaLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function CtaLink({ href, children, className = "" }: CtaLinkProps) {
    return (
        <Link
            href={href}
            className={`group relative inline-flex items-center justify-center gap-2 bg-white text-black rounded-sm text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-gray-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${className}`}
        >
            {children}
        </Link>
    );
}