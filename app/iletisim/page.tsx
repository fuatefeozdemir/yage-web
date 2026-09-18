"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="flex flex-col min-h-screen bg-[#09090b]">

            <section className="w-full pt-40 pb-16 px-6 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                            İletişim
                        </h1>
                        <p className="text-lg md:text-xl text-brand-muted/80 max-w-2xl leading-relaxed">
                            YAGE hakkında merak ettiklerin, etkinlikler, iş birlikleri veya diğer konular için bizimle iletişime geçebilirsin.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full pb-24 px-6 pt-16">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

                            <div className="md:col-span-4 flex flex-col gap-10">
                                <h2 className="text-2xl font-bold text-white mb-2">Bize Ulaşın</h2>

                                <div className="flex flex-col gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-brand-muted mb-2">E-posta</h3>
                                        <a href="mailto:yagegazi@gmail.com" className="text-base text-white hover:text-brand-primary transition-colors">
                                            yagegazi@gmail.com
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-brand-muted mb-2">Sosyal Medya</h3>
                                        <ul className="flex flex-col gap-2">
                                            <li>
                                                <a href="https://www.instagram.com/gaziyage" target="_blank" rel="noreferrer" className="text-base text-white hover:text-[#E1306C] transition-colors">Instagram</a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/gaziyage" target="_blank" rel="noreferrer" className="text-base text-white hover:text-[#0077b5] transition-colors">LinkedIn</a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/orgs/teamtulpar/" target="_blank" rel="noreferrer" className="text-base text-white hover:text-brand-muted transition-colors">GitHub</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-brand-muted mb-2">Konum</h3>
                                        <p className="text-base text-white leading-relaxed">
                                            Gazi Üniversitesi <br/>
                                            Teknoloji Fakültesi <br/>
                                            <span className="text-brand-muted">Ankara, Türkiye</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-8 md:pl-16">
                                <h2 className="text-2xl font-bold text-white mb-8">Mesaj Gönder</h2>

                                {status === "success" ? (
                                    <div className="bg-[#111113] border border-brand-primary/30 p-8 rounded-sm flex flex-col items-center justify-center text-center animate-fade-in">
                                        <CheckCircle2 size={40} className="text-brand-primary mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-2">Mesajınız gönderildi.</h3>
                                        <p className="text-brand-muted text-sm max-w-sm mb-6">
                                            Bize ulaştığınız için teşekkürler. En kısa sürede size dönüş yapacağız.
                                        </p>
                                        <button
                                            onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                                            className="text-sm font-medium text-brand-muted hover:text-white transition-colors border-b border-brand-muted/30 pb-1"
                                        >
                                            Yeni mesaj gönder
                                        </button>
                                    </div>
                                ) : (
                                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="name" className="text-xs font-medium text-brand-muted">Ad Soyad</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                disabled={status === "loading"}
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-[#111113] border border-white/10 rounded-sm p-3.5 text-sm text-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
                                                placeholder="Adınız Soyadınız"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="email" className="text-xs font-medium text-brand-muted">E-posta</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                disabled={status === "loading"}
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-[#111113] border border-white/10 rounded-sm p-3.5 text-sm text-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
                                                placeholder="ornek@mail.com"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5 relative">
                                            <label htmlFor="subject" className="text-xs font-medium text-brand-muted">Konu</label>
                                            <select
                                                id="subject"
                                                required
                                                disabled={status === "loading"}
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-[#111113] border border-white/10 rounded-sm p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer disabled:opacity-50"
                                            >
                                                <option value="" disabled>Konu Seçiniz</option>
                                                <option value="genel">Genel Bilgi</option>
                                                <option value="etkinlik">Etkinlik</option>
                                                <option value="is_birligi">İş Birliği</option>
                                                <option value="sponsorluk">Sponsorluk</option>
                                                <option value="proje">Proje</option>
                                                <option value="diger">Diğer</option>
                                            </select>
                                            <div className="absolute right-4 top-[34px] pointer-events-none text-brand-muted/50 text-xs">▼</div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="message" className="text-xs font-medium text-brand-muted">Mesaj</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                disabled={status === "loading"}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-[#111113] border border-white/10 rounded-sm p-3.5 text-sm text-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-primary transition-colors resize-none disabled:opacity-50"
                                                placeholder="Mesajınızı buraya yazın..."
                                            ></textarea>
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-sm border border-red-400/20">
                                                <XCircle size={16} />
                                                <span>Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan e-posta adresimizden bize ulaşın.</span>
                                            </div>
                                        )}

                                        <div className="mt-2">
                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full md:w-auto flex justify-center items-center gap-2 bg-brand-primary text-white px-10 py-3.5 text-sm font-bold hover:bg-white hover:text-black transition-colors duration-300 rounded-sm disabled:opacity-70 disabled:hover:bg-brand-primary disabled:hover:text-white"
                                            >
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 size={16} className="animate-spin" /> Gönderiliyor...
                                                    </>
                                                ) : (
                                                    <>
                                                        Mesajı Gönder <ArrowRight size={16} />
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                    </form>
                                )}
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full border-t border-white/5 py-24 px-6 bg-[#0c0c0f]">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10 text-center">
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Bizi Bul</h2>
                            <p className="text-brand-muted text-base">
                                Gazi Üniversitesi Teknoloji Fakültesi, Ankara
                            </p>
                        </div>

                        <div className="w-full h-[320px] bg-[#111113] border border-white/5 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.847525287413!2d32.8188168!3d39.9431804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34ece75a18115%3A0x6732313d8d64117!2sGazi%20%C3%9Cniversitesi%20Teknoloji%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="relative z-10 grayscale opacity-70"
                            ></iframe>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}