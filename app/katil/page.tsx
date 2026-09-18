"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const unitDetails: Record<string, { short: string, desc: string, question: string }> = {
    "Etkinlik ve Organizasyon": {
        short: "Etkinliklerin planlanması ve yürütülmesi",
        desc: "Etkinliklerin planlanması ve etkinlik süreçlerinin yürütülmesinden sorumlu birimimiz.",
        question: "Etkinlik ve organizasyon alanında çalışmak ilgini çekiyor mu? YAGE'de düzenlemek istediğin bir etkinlik fikrin varsa bahsedebilirsin. Daha önce bu alanda yaptığın bir çalışma veya görev olduysa onu da anlatabilirsin."
    },
    "Sponsorluk": {
        short: "Kurumsal iletişim ve kaynak sağlama",
        desc: "Etkinlik ve projelerimiz için firmalarla iletişim kuran ve sponsorluk süreçlerini yürüten birimimiz.",
        question: "Sponsorluk ve firmalarla iletişim alanında çalışmak ilgini çekiyor mu? İnsanlarla iletişim kurma, bir topluluğu veya projeyi tanıtma konusunda daha önce yaptığın bir çalışma veya görev olduysa bahsedebilirsin."
    },
    "Sosyal Medya": {
        short: "İçerik, tasarım ve dijital iletişim",
        desc: "Topluluğumuz için sosyal medya içerikleri ve afiş tasarımları hazırlayan, görsel çalışmalarımızı yürüten birimimiz.",
        question: "Sosyal medya içerikleri ve afiş tasarımları hazırlarken hangi araçları kullanıyorsun? Özellikle Canva olmak üzere Photoshop, Illustrator, Premiere Pro gibi kullandığın araçlar varsa ve bu araçlarla daha önce hazırladığın çalışmalar olduysa bahsedebilirsin."
    },
    "İletişim": {
        short: "Üye koordinasyonu ve topluluk kültürü",
        desc: "Üyelerle iletişimi sağlayan, etkinlik başvurularıyla ilgilenen ve diğer topluluklarla iletişim kuran birimimiz.",
        question: "Üyelerle ve farklı topluluklarla iletişim kurmak, etkinlik süreçlerinde başvurularla ilgilenmek gibi görevlerde yer almak ilgini çekiyor mu? Daha önce bu alanlarda yaptığın bir çalışma veya görev olduysa bahsedebilirsin."
    },
    "Eğitim ve Proje Geliştirme": {
        short: "Teknik atölyeler ve AR-GE projeleri",
        desc: "Eğitim ve yarışmaların içeriklerini hazırlayan, TEKNOFEST, TÜBİTAK ve benzeri projelerde topluluk takımlarıyla ilgilenen birimimiz.",
        question: "Eğitim, proje ve yarışmalarla ilgileniyor musun? Özellikle TEKNOFEST, TÜBİTAK, hackathon ve benzeri yarışmalarda proje geliştirmek veya bir takımda yer almak istiyorsan bundan bahsedebilirsin. Bildiğin programlama dilleri ve teknolojiler, daha önce geliştirdiğin projeler veya katıldığın yarışmalar varsa onları da anlatabilirsin."
    }
};

const allUnits = Object.keys(unitDetails);

export default function JoinPage() {
    const router = useRouter();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        facultyDept: "",
        grade: "",
        email: "",
        phone: "",
        primaryUnit: "",
        unitAnswer: "",
        secondaryUnits: [] as string[],
        experiences: "",
        github: "",
        linkedin: "",
        additionalInfo: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePrimaryUnitSelect = (unit: string) => {
        setFormData(prev => ({
            ...prev,
            primaryUnit: unit,
            unitAnswer: "",
            secondaryUnits: prev.secondaryUnits.filter(u => u !== unit)
        }));
    };

    const toggleSecondaryUnit = (unit: string) => {
        setFormData(prev => {
            const current = prev.secondaryUnits;
            if (current.includes(unit)) {
                return { ...prev, secondaryUnits: current.filter(u => u !== unit) };
            }
            if (current.length >= 2) return prev;
            return { ...prev, secondaryUnits: [...current, unit] };
        });
    };

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.facultyDept.trim() !== "" &&
        formData.grade !== "" &&
        formData.email.trim() !== "" &&
        formData.primaryUnit !== "" &&
        formData.unitAnswer.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setStatus("loading");

        // TODO: Google Sheets API Entegrasyonu
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <main className="flex flex-col min-h-screen bg-[#070709]">

            <section className="w-full pt-40 pb-16 px-6 border-b border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <ScrollReveal>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-brand-primary rounded-sm"></div>
                            <span className="font-mono text-xs tracking-widest uppercase text-brand-muted">Yönetim Kurulu ve Birim Başvurusu</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Aramıza Katıl
                        </h1>
                        <p className="text-base md:text-lg text-brand-muted/90 leading-relaxed mb-4">
                            YAGE'nin mutfağında yer almak, etkinlikleri organize eden ve projeleri yürüten çekirdek ekibimize katılmak için başvurunu gönderebilirsin. Sadece duyurulardan haberdar olmak için WhatsApp grubumuza katılman yeterlidir.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="w-full pb-32 px-6 pt-12">
                <div className="max-w-3xl mx-auto">

                    <div className="bg-[#0f0f13] border border-white/5 rounded-sm p-6 md:p-12 shadow-lg shadow-black/20">
                        {status === "success" ? (
                            <ScrollReveal>
                                <div className="flex flex-col items-center text-center animate-fade-in py-10">
                                    <CheckCircle2 size={56} className="text-brand-primary mb-6" />
                                    <h2 className="text-2xl font-bold text-white mb-3">Başvurun alındı.</h2>
                                    <p className="text-brand-muted text-base max-w-md mb-8 leading-relaxed">
                                        YAGE'ye katılmak istediğin için teşekkürler. Başvurunu inceleyip belirttiğin iletişim adresinden sana ulaşacağız.
                                    </p>
                                    <button
                                        onClick={() => router.push('/')}
                                        className="text-sm font-bold text-white bg-white/5 px-6 py-3 rounded-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                                    >
                                        Ana Sayfaya Dön <ArrowRight size={16} />
                                    </button>
                                </div>
                            </ScrollReveal>
                        ) : (
                            <ScrollReveal delay={50}>
                                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>

                                    {/* FORM GİRİŞ MESAJI */}
                                    <div className="text-center md:text-left mb-2">
                                        <p className="text-sm text-brand-muted/80 leading-relaxed">
                                            YAGE'de yer almak istediğin alanı seçerek başvurunu tamamlayabilirsin.
                                        </p>
                                    </div>

                                    {/* 1: KİŞİSEL BİLGİLER */}
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-lg font-bold text-white">Kişisel Bilgiler</h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5 md:col-span-2">
                                                <label htmlFor="name" className="text-xs font-semibold text-brand-muted/80">Ad Soyad <span className="text-red-500">*</span></label>
                                                <input type="text" id="name" required value={formData.name} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm placeholder:text-brand-muted/30" placeholder="Adınız Soyadınız" />
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="facultyDept" className="text-xs font-semibold text-brand-muted/80">Fakülte / Bölüm <span className="text-red-500">*</span></label>
                                                <input type="text" id="facultyDept" required value={formData.facultyDept} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm placeholder:text-brand-muted/30" placeholder="Örn: Teknoloji Fakültesi / Bilgisayar Müh." />
                                            </div>

                                            <div className="flex flex-col gap-1.5 relative">
                                                <label htmlFor="grade" className="text-xs font-semibold text-brand-muted/80">Sınıf <span className="text-red-500">*</span></label>
                                                <select id="grade" required value={formData.grade} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none cursor-pointer rounded-sm">
                                                    <option value="" disabled>Seçiniz</option>
                                                    <option value="Hazırlık">Hazırlık</option>
                                                    <option value="1. Sınıf">1. Sınıf</option>
                                                    <option value="2. Sınıf">2. Sınıf</option>
                                                    <option value="3. Sınıf">3. Sınıf</option>
                                                    <option value="4. Sınıf">4. Sınıf</option>
                                                </select>
                                                <div className="absolute right-4 top-[38px] pointer-events-none text-brand-muted/50 text-xs">▼</div>
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="email" className="text-xs font-semibold text-brand-muted/80">E-posta <span className="text-red-500">*</span></label>
                                                <input type="email" id="email" required value={formData.email} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm placeholder:text-brand-muted/30" placeholder="ornek@mail.com" />
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="phone" className="text-xs font-semibold text-brand-muted/80">Telefon <span className="text-brand-muted/50 font-normal">(Opsiyonel)</span></label>
                                                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm placeholder:text-brand-muted/30" placeholder="0555 555 55 55" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2: BİRİM TERCİHİ */}
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-lg font-bold text-white">Birim Tercihi</h2>

                                        <div className="flex flex-col gap-3">
                                            <label className="text-sm font-medium text-white/90">Öncelikli olarak hangi birimde görev almak istersin? <span className="text-red-500">*</span></label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {allUnits.map((unit) => (
                                                    <button
                                                        key={unit}
                                                        type="button"
                                                        onClick={() => handlePrimaryUnitSelect(unit)}
                                                        className={`p-4 text-left border rounded-sm transition-all duration-200 ${
                                                            formData.primaryUnit === unit
                                                                ? "border-brand-primary bg-brand-primary/10 text-white shadow-[0_0_15px_rgba(118,53,235,0.05)]"
                                                                : "border-white/5 bg-[#16161b] text-brand-muted hover:border-white/20 hover:bg-[#1a1a20]"
                                                        }`}
                                                    >
                                                        <span className="text-sm font-bold block mb-1">{unit}</span>
                                                        <span className={`text-xs block ${formData.primaryUnit === unit ? "text-brand-muted/90" : "text-brand-muted/50"}`}>{unitDetails[unit].short}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* SEÇİLEN BİRİM (Doğal Devam Alanı) */}
                                        {formData.primaryUnit && (
                                            <div className="mt-2 pt-6 border-t border-white/5 animate-fade-in-up flex flex-col gap-6">

                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-2">{formData.primaryUnit}</h3>
                                                    <p className="text-sm text-brand-muted/80 leading-relaxed">
                                                        {unitDetails[formData.primaryUnit].desc}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-3">
                                                    <h4 className="text-sm font-bold text-white">Bu birimle ilgili</h4>
                                                    <p className="text-sm text-brand-muted/90 leading-relaxed">
                                                        {unitDetails[formData.primaryUnit].question} <span className="text-red-500">*</span>
                                                    </p>
                                                    <textarea id="unitAnswer" required rows={3} value={formData.unitAnswer} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-4 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm mt-1 resize-none placeholder:text-brand-muted/30" placeholder="Kısaca anlatabilirsin..."></textarea>
                                                </div>

                                            </div>
                                        )}

                                        {/* İkincil Birimler */}
                                        {formData.primaryUnit && (
                                            <div className="mt-3 flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                                <label className="text-sm font-medium text-white/90">Başka hangi birimlerde değerlendirilmek istersin? <span className="text-brand-muted/50 font-normal">(En fazla 2 seçim)</span></label>
                                                <div className="flex flex-wrap gap-2">
                                                    {allUnits.filter(u => u !== formData.primaryUnit).map(unit => (
                                                        <button
                                                            key={unit}
                                                            type="button"
                                                            onClick={() => toggleSecondaryUnit(unit)}
                                                            className={`px-3 py-2 text-[11px] font-medium border rounded-sm transition-colors ${
                                                                formData.secondaryUnits.includes(unit)
                                                                    ? "border-brand-primary text-white bg-brand-primary/10"
                                                                    : "border-white/5 text-brand-muted bg-[#16161b] hover:bg-[#1a1a20]"
                                                            }`}
                                                        >
                                                            {unit}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 3: SENİ TANIYALIM */}
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-lg font-bold text-white">Seni Tanıyalım</h2>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="experiences" className="text-xs font-semibold text-brand-muted/80">Daha Önce Yaptığın Çalışmalar <span className="text-brand-muted/50 font-normal">(Opsiyonel)</span></label>
                                            <textarea id="experiences" rows={3} value={formData.experiences} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-4 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm resize-none placeholder:text-brand-muted/30" placeholder="Daha önce yer aldığın topluluklar, geliştirdiğin projeler veya yaptığın çalışmalar varsa bahsedebilirsin."></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="github" className="text-xs font-semibold text-brand-muted/80">GitHub <span className="text-brand-muted/50 font-normal">(Opsiyonel)</span></label>
                                                <input type="text" id="github" value={formData.github} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm placeholder:text-brand-muted/30" placeholder="GitHub profil bağlantın" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="linkedin" className="text-xs font-semibold text-brand-muted/80">LinkedIn <span className="text-brand-muted/50 font-normal">(Opsiyonel)</span></label>
                                                <input type="text" id="linkedin" value={formData.linkedin} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-3.5 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm placeholder:text-brand-muted/30" placeholder="LinkedIn profil bağlantın" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5 mt-1">
                                            <label htmlFor="additionalInfo" className="text-xs font-semibold text-brand-muted/80">Eklemek İstediğin Bir Şey Var mı? <span className="text-brand-muted/50 font-normal">(Opsiyonel)</span></label>
                                            <textarea id="additionalInfo" rows={2} value={formData.additionalInfo} onChange={handleChange} disabled={status === "loading"} className="w-full bg-[#16161b] border border-white/5 p-4 text-sm text-white focus:outline-none focus:border-brand-primary/50 transition-colors rounded-sm resize-none placeholder:text-brand-muted/30" placeholder="Eklemek istediğin başka bir bilgi varsa paylaşabilirsin."></textarea>
                                        </div>
                                    </div>

                                    {/* GÖNDER */}
                                    <div className="pt-4 flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={status === "loading" || !isFormValid}
                                            className="w-full md:w-auto flex justify-center items-center gap-2 bg-brand-primary text-white px-10 py-3.5 text-sm font-bold hover:bg-brand-primary/80 transition-colors duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === "loading" ? (
                                                <><Loader2 size={16} className="animate-spin" /> Gönderiliyor...</>
                                            ) : (
                                                <>Başvuruyu Gönder <ArrowRight size={16} /></>
                                            )}
                                        </button>
                                    </div>

                                </form>
                            </ScrollReveal>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}