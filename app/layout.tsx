import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "YAGE | Yazılım Araştırma ve Geliştirme",
  description: "İnovasyon ve mühendisliğin buluşma noktası.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="tr">
      <body className="bg-brand-bg text-brand-text antialiased selection:bg-brand-primary selection:text-white">
      <Navbar />
      <div>
        {children}
      </div>
      </body>
      </html>
  );
}