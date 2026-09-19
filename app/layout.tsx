import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
    title: {
        default: "YAGE | Yazılım Araştırma ve Geliştirme Topluluğu",
        template: "%s | YAGE"
    },
    description: "Gazi Üniversitesi öğrencilerinin yazılım, donanım ve teknoloji alanında bir araya geldiği; AR-GE projeleri geliştirdiği profesyonel öğrenci topluluğu.",
    keywords: ["yazılım", "arge", "teknoloji", "gazi üniversitesi", "yage", "öğrenci topluluğu", "mühendislik", "bilgisayar mühendisliği"],
    authors: [{ name: "YAGE Ekibi" }],
    creator: "YAGE",
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: "https://yagegazi.com", // TODO: Domain alındığında burayı gerçek domain ile değiştir
        title: "YAGE | Yazılım Araştırma ve Geliştirme Topluluğu",
        description: "Sadece teoride kalmıyor, birlikte üretiyoruz. Gazi Üniversitesi Yazılım Araştırma ve Geliştirme Topluluğu.",
        siteName: "YAGE",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "YAGE - Sadece teoride kalmıyor, birlikte üretiyoruz.",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "YAGE | Yazılım Araştırma ve Geliştirme Topluluğu",
        description: "Gazi Üniversitesi Yazılım Araştırma ve Geliştirme Topluluğu etkinlikleri ve projeleri.",
        images: ["/images/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr">
        <body className="bg-brand-bg text-brand-text antialiased selection:bg-brand-primary selection:text-white flex flex-col min-h-screen">
        <Navbar />

        {/* Ana İçerik Alanı */}
        <main className="flex-grow flex flex-col">
            {children}
        </main>

        <BackToTop />
        <Footer />
        </body>
        </html>
    );
}