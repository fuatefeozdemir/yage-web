import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
    title: "YAGE | Yazılım Araştırma ve Geliştirme",
    description: "İnovasyon ve mühendisliğin buluşma noktası.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr">
        <body className="bg-brand-bg text-brand-text antialiased selection:bg-brand-primary selection:text-white flex flex-col min-h-screen">
        <Navbar />

        {/* Ana İçerik Alanı (Footer'ı en alta itmek için flex-grow eklendi) */}
        <main className="flex-grow flex flex-col">
            {children}
        </main>

        {/* Tüm Sayfalarda Ortak Görünecek Bileşenler */}
        <BackToTop />
        <Footer />
        </body>
        </html>
    );
}