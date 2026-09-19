export const siteConfig = {
    iletisim: {
        email: "yagegazi@gmail.com",
        adresDetay: "Gazi Üniversitesi Teknoloji Fakültesi, Ankara",
        kisaAdres: "Teknoloji Fakültesi, Ankara"
    },
    sosyal: {
        instagram: "https://www.instagram.com/gaziyage",
        linkedin: "https://www.linkedin.com/company/gaziyage",
        github: "https://github.com/orgs/teamtulpar/",
        whatsapp: "https://chat.whatsapp.com/I0uLyeqGZ12LMNTKAYaCIn"
    }
};

export type AkademikYil = "2024-2025" | "2025-2026" | "2026-2027";
export type Kategori = "Eğitim" | "Teknik" | "Panel" | "Gezi" | "Yarışma" | "Sosyal";

export interface Etkinlik {
    id: number;
    slug: string;
    tarih: string;
    yil: AkademikYil;
    kategori: Kategori;
    konum: string;
    baslik: string;
    ozet: string;
    aciklama: string;
    gorsel: string;
    galeri?: string[];
}

export interface EkipUyesi {
    isim: string;
    gorev: string;
    birim: string;
    featured: boolean;
    github?: string;
    linkedin?: string;
    foto?: string;
}

export const etkinlikKategorileri = ["TÜMÜ", "EĞİTİM", "TEKNİK", "PANEL", "GEZİ", "YARIŞMA", "SOSYAL"];
export const akademikYillar = ["TÜM DÖNEMLER", "2026-2027", "2025-2026", "2024-2025"];

export const vitrinKareler = [
    "/images/galeri/foto-1.png",
    "/images/galeri/foto-2.jpg",
    "/images/galeri/foto-3.jpeg",
    "/images/galeri/foto-4.jpeg",
    "/images/galeri/foto-5.jpeg"
];

export const destekciler = [
    { isim: "Gazi Üniversitesi", logo: "/images/sponsorlar/gazi-logo.png" },
    { isim: "TÜBİTAK", logo: "/images/sponsorlar/tubitak-logo.png" },
];

export const faaliyetler = ["YAZILIM", "EĞİTİMLER", "TEKNİK GEZİLER", "YARIŞMALAR", "PROJELER", "AR-GE"];

export const unitDetails: Record<string, { short: string, desc: string, question: string }> = {
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

export const allUnits = Object.keys(unitDetails);

export const etkinlikler: Etkinlik[] = [
    {
        id: 24,
        slug: "gazi-dataforge-26",
        tarih: "9 Mayıs 2026",
        yil: "2025-2026",
        kategori: "Yarışma",
        konum: "Teknopark Ankara",
        baslik: "Gazi DataForge'26",
        ozet: "Üç öğrenci topluluğunun iş birliğiyle düzenlediğimiz Gazi DataForge 2026 veri bilimi yarışmasında takımlar, gerçek bir veri seti üzerinde çalışarak veri odaklı çözümler geliştirdi.",
        aciklama: "Gazi Üniversitesi Finansal Teknolojiler, Yazılım Araştırma ve Geliştirme ve Veri Bilimi topluluklarının iş birliğiyle düzenlediğimiz Gazi DataForge 2026, Teknopark Ankara - Nar Kuluçka Merkezi'nde gerçekleştirildi. Gün boyu süren veri bilimi yarışmasında farklı disiplinlerden katılımcılar takımlar oluşturarak kendilerine sunulan veri seti üzerinde çalıştı.\n" +
            "\n" +
            "Etkinlik boyunca takımlar, veri setini analiz ederek problem üzerinde çalıştı ve elde ettikleri veriler doğrultusunda çözüm geliştirdi. Açılış konuşmasının ardından veri setinin paylaşılmasıyla başlayan maraton, gün boyunca devam eden çalışma ve değerlendirme sürecinin ardından gerçekleştirilen kapanış programıyla tamamlandı. Katılımcılar bu süreçte veri analizi, problem çözme ve takım çalışması becerilerini uygulamalı olarak kullanma fırsatı buldu.\n" +
            "\n" +
            "Yarışma sonucunda birinciliği Muhammet Emin Korkut, ikinciliği Rıza Yurtseven ve Mertcan Hırlak'tan oluşan Tulpar takımı, üçüncülüğü ise Selman Sezgin ve Emirhan Çoruh'tan oluşan Overfitters takımı elde etti. Dereceye giren tüm takımları tebrik eder, etkinliğe katılan yarışmacılara ve organizasyonun gerçekleştirilmesine katkı sağlayan Finansal Teknolojiler ve Veri Bilimi topluluklarına teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/dataforge.png",
        galeri: []
    },
    {
        id: 23,
        slug: "taleworlds-gezisi",
        tarih: "21 Nisan 2026",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "TaleWorlds Entertainment, Hacettepe Teknokent",
        baslik: "TaleWorlds Teknik Gezisi",
        ozet: "Mount & Blade serisinin geliştiricisi TaleWorlds Entertainment'ı ziyaret ederek profesyonel oyun geliştirme süreçlerini yakından inceledik.",
        aciklama: "Mount & Blade serisinin geliştiricisi TaleWorlds Entertainment'ın Hacettepe Teknokent'teki ofisine teknik bir gezi gerçekleştirdik. Gezi kapsamında profesyonel bir oyun stüdyosunun çalışma ortamını ve oyun geliştirme süreçlerini yakından görme fırsatı bulduk.\n" +
            "\n" +
            "Ziyaret sırasında TaleWorlds ekibinden profesyonel oyun geliştirme süreçleri ve kullanılan teknolojiler hakkında bilgi aldık. Sektördeki çalışma deneyimlerini ve oyun geliştirme süreçlerine ilişkin tecrübelerini paylaşan ekip üyeleriyle bir araya gelerek merak ettiğimiz konular hakkında sohbet etme fırsatı bulduk.\n" +
            "\n" +
            "Ayrıca oyun sektöründe kariyer planlayan katılımcılar için sektördeki çalışma ortamını ve profesyonel oyun geliştirme süreçlerini yerinde görmek açısından faydalı bir deneyim oldu.\n" +
            "\n" +
            "Bizleri ağırlayan ve deneyimlerini paylaşan TaleWorlds Entertainment ekibine teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/taleworlds.jpeg",
        galeri: []
    },
    {
        id: 22,
        slug: "unity-egitimi-2026",
        tarih: "25-26-28 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Laboratuvar 6",
        baslik: "Unity Eğitimi",
        ozet: "DOTT ve YAGE iş birliğiyle Unity oyun motorunun temelleri ve oyun geliştirme üzerine gerçekleştirdiğimiz üç oturumluk eğitim.",
        aciklama: "DOTT ve YAGE iş birliğiyle, C# eğitiminin devamı olarak düzenlediğimiz Unity Eğitimini tamamladık. Üç oturum boyunca Unity oyun motorunun temel özelliklerini öğrenerek basit bir oyun geliştirme sürecini uygulamalı olarak gerçekleştirdik.\n" +
            "\n" +
            "Eğitimin ilk oturumunda Unity'nin temel yapısı ve GameObject kullanımı ele alınarak bir Tilemap zemin ve karakter oluşturuldu. İkinci oturumda animasyonlara giriş yapılarak karaktere animasyon ekleme ve animasyonların kullanımı üzerine çalışmalar gerçekleştirildi.\n" +
            "\n" +
            "Son oturumda ise Unity Input System kullanılarak karakter kontrolü sağlandı ve karakter hareketleri C# kodlarıyla geliştirildi. Böylece eğitim boyunca oluşturulan temel yapıların bir araya getirilmesiyle basit bir oyun ortaya çıkarıldı.\n" +
            "\n" +
            "Eğitime katılan tüm katılımcılarımıza teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/unity-egitimi.jpg",
        galeri: []
    },
    {
        id: 21,
        slug: "alp-uneri-tea-talk",
        tarih: "25 Mart 2026",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Laboratuvar 6",
        baslik: "Otomotive Siber Güvenlik: Alp Üneri ile Tea Talk",
        ozet: "Otomotiv sektöründe siber güvenlik, dijitalleşmeyle ortaya çıkan tehditler ve kariyer üzerine gerçekleştirdiğimiz Tea Talk.",
        aciklama: "Otomotiv sektöründe araçların giderek daha fazla dijitalleşmesiyle birlikte önem kazanan siber güvenlik konularını ele aldığımız Tea Talk etkinliğimizi gerçekleştirdik.\n" +
            "\n" +
            "Etkinlikte otomotiv sektöründeki siber güvenlik riskleri, dijital araçlarla birlikte ortaya çıkabilecek güvenlik açıkları ve bu tehditlere karşı geliştirilen çözümler üzerine konuşuldu. Bununla birlikte, otomotiv siber güvenliği alanında kariyer yapmak isteyen katılımcılar için sektördeki çalışma alanları ve kariyer süreci üzerine de değerlendirmeler yapıldı.\n" +
            "\n" +
            "Katılımcılar, sektörden bir isimle doğrudan iletişim kurarak merak ettikleri konular hakkında sorularını yöneltme ve otomotiv siber güvenliği alanına ilişkin bilgi edinme fırsatı buldu.\n",
        gorsel: "/images/etkinlikler/alp-uneri.jpg",
        galeri: []
    },
    {
        id: 20,
        slug: "csharp-egitimi-2026",
        tarih: "7-8-14-15 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Laboratuvar 6",
        baslik: "C# Eğitimi",
        ozet: "YAGE ve DOTT iş birliğiyle temel C# programlama ve nesne yönelimli programlama üzerine gerçekleştirdiğimiz dört oturumluk eğitim.",
        aciklama: "YAGE ve DOTT iş birliğiyle düzenlediğimiz dört oturumluk C# Eğitimini tamamladık. Oyun geliştirme ve yazılım alanına ilgi duyan katılımcılar için temel seviyeden başlayan eğitimde, C# dilinin çalışma mantığı ve temel programlama kavramları ele alındı.\n" +
            "\n" +
            "Eğitimin ilk oturumlarında geliştirme ortamının kurulumu, değişkenler, veri tipleri ve temel kontrol yapıları işlenirken, katılımcılar algoritmalar oluşturarak öğrendikleri konuları uygulama fırsatı buldu. Sonraki oturumlarda yapılan pratiklerle algoritmik düşünme ve problem çözme becerileri üzerine çalışmalar gerçekleştirildi.\n" +
            "\n" +
            "Eğitimin üçüncü oturumunda Nesne Yönelimli Programlama (OOP) konusuna geçilerek katılımcıların C# bilgileri bir üst seviyeye taşındı. Dört oturumun sonunda temel C# bilgisine sahip olan katılımcıların, eğitim serisinin devamındaki Unity eğitimine geçiş yapabilecek bir altyapı oluşturması hedeflendi.\n" +
            "\n" +
            "Eğitim boyunca bilgi ve tecrübelerini paylaşan eğitmenimiz Fuat Efe Özdemir'e ve dört oturum boyunca aktif katılım gösteren tüm katılımcılarımıza teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/csharp-egitimi.jpeg",
        galeri: []
    },
    {
        id: 19,
        slug: "solidworks-egitimi-2026",
        tarih: "7-8 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Teknoloji Fakültesi B Blok",
        baslik: "Solidworks Eğitimi",
        ozet: "YAGE ve TMT iş birliğiyle düzenlediğimiz, temel SolidWorks tasarım ve modelleme eğitimi.",
        aciklama: "YAGE ve TMT iş birliğiyle gerçekleştirdiğimiz SolidWorks Eğitiminde, bilgisayar destekli tasarım süreçlerine yönelik temel çalışmalar gerçekleştirdik.\n" +
            "\n" +
            "Eğitim kapsamında SolidWorks kullanılarak parça tasarımı, montaj ve teknik resim süreçleri üzerine uygulamalar yapıldı. Katılımcılar, üç boyutlu modelleme ve tasarım süreçlerini uygulamalı olarak deneyimleme fırsatı buldu.\n",
        gorsel: "/images/etkinlikler/solidworks-egitimi.jpg",
        galeri: []
    },
    {
        id: 18,
        slug: "arduino-egitimi-2026",
        tarih: "1 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Laboratuvar 2",
        baslik: "Arduino Eğitimi",
        ozet: "Arduino, algoritma geliştirme ve devre tasarımı üzerine gerçekleştirdiğimiz temel seviye eğitim.",
        aciklama: "YAGE ve TMT iş birliğiyle gerçekleştirdiğimiz Arduino Eğitimini tamamladık. Eğitim kapsamında yazılım ve donanım entegrasyonunun temelini ele alarak katılımcıların Arduino ile çalışma mantığını tanımasını hedefledik.\n" +
            "\n" +
            "Eğitim sürecinde simülasyon ortamı üzerinden uygulamalar gerçekleştiren katılımcılar, algoritma geliştirme ve temel devre tasarımı konularını pratik ederek yazılım ile donanım arasındaki etkileşimi deneyimleme fırsatı buldu.\n" +
            "\n" +
            "Bilgi ve tecrübelerini katılımcılarla paylaşan eğitmenimiz Mertcan Hırlak'a ve eğitimimize katılan tüm üyelerimize teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/arduino-egitimi.jpeg",
        galeri: []
    },
    {
        id: 17,
        slug: "c-programlama-egitimi",
        tarih: "27 Şubat 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Laboratuvar 6",
        baslik: "C Programlama Eğitimi",
        ozet: "Algoritma kurma, C dilinin temel yapıları ve problem çözme üzerine gerçekleştirdiğimiz C programlama eğitimi.",
        aciklama: "YAGE ve TMT ortaklığında düzenlediğimiz C Programlama Eğitimini tamamladık. Eğitim kapsamında algoritma kurma mantığından başlayarak C dilinin temel yapı taşları, döngüler, fonksiyonlar ve problem çözme teknikleri üzerinde durduk.\n" +
            "\n" +
            "Eğitim sürecinde katılımcılar, C programlama dilinin temel yapılarını öğrenmenin yanı sıra algoritmik düşünme ve problem çözme becerilerini geliştirmeye yönelik çalışmalar gerçekleştirdi. Böylece yazılım geliştirme süreçlerinde ihtiyaç duyulan temel programlama becerileri üzerine bir altyapı oluşturuldu.\n" +
            "\n" +
            "Eğitime gösterdikleri ilgi için tüm katılımcılarımıza ve değerli katkılarından dolayı eğitmenimiz Kerem Aykut'a teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/c-egitimi.jpg",
        galeri: []
    },
    {
        id: 16,
        slug: "aselsan-aday-muhendis-tea-talk",
        tarih: "23 Şubat 2026",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Laboratuvar 6",
        baslik: "ASELSAN Aday Mühendis: Alperen Demirci ile Tea Talk",
        ozet: "ASELSAN Aday Mühendisi Alperen Demirci ile kariyer yolculuğu ve yapay zekâ teknolojileri üzerine gerçekleştirdiğimiz Tea Talk.",
        aciklama: "ASELSAN Aday Mühendisi Alperen Demirci'yi ağırladığımız Tea Talk etkinliğinde, aday mühendislik deneyimi ve mühendislik kariyerinin ilk adımları üzerine konuştuk.\n" +
            "\n" +
            "Etkinlikte Alperen Demirci, ASELSAN'daki aday mühendislik sürecini ve kendi kariyer yolculuğunu katılımcılarla paylaşırken, yapay zekâ teknolojilerinin sektördeki güncel yansımalarına da değindi. Katılımcılar, savunma sanayisinde mühendislik kariyerine ilişkin deneyimleri doğrudan dinleme ve merak ettikleri konular hakkında sorularını yöneltme fırsatı buldu.\n" +
            "\n" +
            "Değerli paylaşımları için Alperen Demirci'ye ve katılım sağlayan tüm üyelerimize teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/aselsan-teatalk.jpeg",
        galeri: []
    },
    {
        id: 15,
        slug: "havacilik-ve-uzay-zirvesi",
        tarih: "17 Şubat 2026",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "Gençlik ve Spor Bakanlığı",
        baslik: "Havacılık ve Uzay Zirvesi Teknik Gezisi",
        ozet: "Geleneksel Havacılık ve Uzay Zirvesi'nde havacılık ve uzay sektörünün önde gelen firmalarıyla bir araya geldik.",
        aciklama: "5. Geleneksel Havacılık ve Uzay Zirvesi'ne katılarak havacılık ve uzay sektöründeki güncel çalışmalar ve teknolojiler hakkında bilgi edinme fırsatı bulduk.\n" +
            "\n" +
            "Etkinlik kapsamında ROKETSAN, TUSAŞ ve AIRBUS gibi havacılık ve uzay sektöründe faaliyet gösteren firmaların yer aldığı organizasyonu ziyaret ederek farklı projeleri ve sektördeki çalışmaları yakından inceleme fırsatı bulduk. Zirve, sektörün farklı alanlarını ve bu alanlarda yürütülen çalışmaları daha yakından tanımamız açısından önemli bir etkinlik oldu.\n" +
            "\n" +
            "Katılım sağlayan tüm üyelerimize teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/havacilik-zirvesi.jpeg",
        galeri: []
    },
    {
        id: 14,
        slug: "oyun-gecesi-2025",
        tarih: "20 Aralık 2025",
        yil: "2025-2026",
        kategori: "Sosyal",
        konum: "GSB Saraçoğlu Gençlik Merkezi",
        baslik: "Oyun Gecesi",
        ozet: "YAGE ve DOTT iş birliğiyle gerçekleştirdiğimiz, oyunlar ve eğlence etrafında bir araya geldiğimiz etkinlik.",
        aciklama: "Yazılım Araştırma ve Geliştirme Topluluğu ve Dijital Oyun Tasarımı Topluluğu iş birliğiyle gerçekleştirdiğimiz Oyun Gecesi'nde, katılımcılarla birlikte oyunlar oynayarak keyifli bir akşam geçirdik.\n" +
            "\n" +
            "Rekabetin, eğlencenin ve etkileşimin ön planda olduğu etkinlikte, farklı topluluklardan katılımcılar oyunlar etrafında bir araya gelerek birlikte vakit geçirme fırsatı buldu.\n" +
            "\n" +
            "Etkinliğimize katılan herkese ve mekan desteği sağlayan GSB Saraçoğlu Gençlik Merkezi'ne teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/oyun-gecesi.jpeg",
        galeri: []
    },
    {
        id: 13,
        slug: "alparslan-akyildiz-tea-talk",
        tarih: "19 Aralık 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Laboratuvar 6",
        baslik: "Alparslan Akyıldız ile Tea Talk",
        ozet: "Siber Güvenlik Yöneticisi Alparslan Akyıldız ile siber güvenlik, strateji ve risk yönetimi üzerine Tea Talk.",
        aciklama: "Siber Güvenlik Yöneticisi M. Alparslan Akyıldız'ı ağırladığımız Tea Talk etkinliğinde, siber güvenliğin teknik boyutunun yanı sıra yönetim ve karar alma süreçlerindeki rolü üzerine konuştuk.\n" +
            "\n" +
            "“Siber güvenliği anlatmak değil, yönetmek” perspektifiyle gerçekleştirilen etkinlikte; siber güvenliğin strateji, risk yönetimi ve karar alma süreçleriyle nasıl bütünleştiği ele alındı. Alparslan Akyıldız, sektördeki deneyimlerinden yola çıkarak siber güvenlik yönetimine ilişkin görüşlerini ve tecrübelerini katılımcılarla paylaştı.\n" +
            "\n" +
            "Katılım sağlayan tüm öğrencilerimize ve değerli paylaşımları için Alparslan Akyıldız'a teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/alparslan-akyildiz.jpeg",
        galeri: []
    },
    {
        id: 12,
        slug: "pinet-ali-erdem-sunar-tea-talk",
        tarih: "19 Aralık 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Laboratuvar 6",
        baslik: "Pinet Bilişim Ali Erdem Sunar ile Tea Talk",
        ozet: "Pinet Bilişim Genel Müdürü Ali Erdem Sunar ile yazılımın operasyonel süreçleri ve sürdürülebilirliği üzerine Tea Talk.",
        aciklama: "Pinet Bilişim Genel Müdürü Ali Erdem Sunar ile gerçekleştirdiğimiz Tea Talk etkinliğinde, yazılım geliştirme süreçlerinin kodlama aşamasının ötesinde nasıl yönetildiği ve sürdürüldüğü üzerine konuştuk.\n" +
            "\n" +
            "Etkinlikte gerçek projeler üzerinden yazılımların nasıl ayakta tutulduğu, ölçeklendiği ve operasyonel olarak yönetildiği ele alındı. Ali Erdem Sunar, sektördeki deneyimlerinden yola çıkarak yazılım geliştirmenin yanı sıra operasyonel bakış açısının ve sürdürülebilir yazılım süreçlerinin önemine değindi. Katılımcılar da sektör deneyimlerini doğrudan dinleme ve merak ettikleri konular hakkında sorularını yöneltme fırsatı buldu.\n" +
            "\n" +
            "Etkinlik kapsamında katılımcılarımızdan birine staj imkânı da sunuldu. Değerli paylaşımları için Ali Erdem Sunar'a ve etkinliğimize sağladığı ikram desteği için Oskar Pastaneleri'ne teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/ali-erdem-sunar.jpeg",
        galeri: []
    },
    {
        id: 11,
        slug: "gdg-devfest-hacettepe-2025",
        tarih: "30 Kasım 2025",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "Hacettepe Üniversitesi",
        baslik: "GDG Devfest Hacettepe",
        ozet: "Güncel teknolojilerin ele alındığı DevFest Ankara 2025'e katılarak farklı konu başlıklarında gerçekleştirilen oturumları takip ettik.",
        aciklama: "30 Kasım 2025'te Hacettepe Üniversitesi Beytepe Kampüsü Kültür ve Kongre Merkezi'nde düzenlenen DevFest Ankara 2025'e katılım sağladık. GDG Ankara tarafından düzenlenen etkinlikte yapay zekâ, web teknolojileri, mobil uygulama geliştirme ve bulut teknolojileri gibi farklı alanlarda gerçekleştirilen konuşmaları ve oturumları takip etme fırsatı bulduk.\n" +
            "\n" +
            "Etkinlik boyunca farklı alanlardan konuşmacıların bilgi ve deneyimlerini paylaştığı oturumlara katılarak güncel teknolojiler ve yazılım dünyasındaki gelişmeler hakkında yeni bilgiler edindik. Gün boyunca gerçekleştirilen oturumların yanı sıra etkinliğin sunduğu topluluk ve networking ortamından da faydalanma fırsatı bulduk.\n" +
            "\n" +
            "Katılım sağlayan tüm üyelerimize teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/devfest-hacettepe.jpeg",
        galeri: []
    },
    {
        id: 10,
        slug: "linux-egitimi-2025",
        tarih: "29 Kasım, 1-2-4 Aralık 2025",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Mühendislik Fakültesi",
        baslik: "Linux Eğitimi",
        ozet: "YAGE ve GaziCyber CTF iş birliğiyle düzenlediğimiz dört günlük Linux eğitimi.",
        aciklama: "YAGE ve GaziCyber CTF iş birliğiyle düzenlediğimiz Linux 101 eğitimi, dört oturum boyunca yüz yüze gerçekleştirildi. Eğitimde Linux işletim sisteminin temelleri üzerine çalışmalar yaparak katılımcıların Linux ve siber güvenlik alanlarına yönelik temel bir altyapı edinmeleri hedeflendi.\n" +
            "\n" +
            "Eğitimin ilk oturumunda katılımcıların sanal makine kurulumları gerçekleştirildi. Sonraki oturumlarda ise Linux ortamında çalışmaya yönelik eğitim ve uygulamalarla devam edildi.\n" +
            "\n" +
            "Dört günlük eğitim süreci boyunca katılım sağlayan tüm üyelerimize ve iş birliği için GaziCyber CTF ekibine teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/linux-egitimi.jpg",
        galeri: []
    },
    {
        id: 9,
        slug: "teknopark-ankara-gezisi",
        tarih: "21 Kasım 2025",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "Teknopark Ankara",
        baslik: "Teknopark Ankara Gezisi",
        ozet: "Teknopark Ankara'da girişimcilik ekosistemini ve farklı teknoloji girişimlerinin çalışmalarını yakından inceledik.",
        aciklama: "Girişimcilik ve teknoloji ekosistemini yakından tanımak amacıyla Teknopark Ankara'yı ziyaret ettik. Gezi kapsamında iki farklı start-up'ın sunumlarına katılarak geliştirdikleri projeler hakkında bilgi edinme ve çalışmalarını yakından inceleme fırsatı bulduk.\n" +
            "\n" +
            "Ziyaret sırasında Kaptın Kaptın şirketinin kurucusu Ayşe Secde Gençler ile de bir araya geldik. Kendisi girişimcilik yolculuğunu ve üzerinde çalıştıkları projeleri bizlerle paylaşarak girişimcilik sürecine dair deneyimlerini aktardı.\n" +
            "\n" +
            "Program kapsamında gerçekleştirdiğimiz kampüs turunda ise Teknopark Ankara'daki çalışma ortamlarını, Ar-Ge süreçlerini ve teknopark kültürünü yakından gözlemledik. Böylece teknoloji girişimlerinin çalışma ortamını ve girişimcilik ekosistemini yerinde görme fırsatı bulduk.\n" +
            "\n" +
            "Etkinliğimize katkı sağlayan ve deneyimlerini bizlerle paylaşan tüm katılımcılara teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/teknopark-ankara.jpeg",
        galeri: []
    },
    {
        id: 8,
        slug: "havelsan-tea-talk",
        tarih: "21 Ekim 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Laboratuvar 6",
        baslik: "HAVELSAN - Tea Talk",
        ozet: "HAVELSAN mühendisleriyle kariyer yolculukları ve savunma sanayii üzerine gerçekleştirdiğimiz Tea Talk.",
        aciklama: "HAVELSAN mühendisleri Emre Acar, Ali İmre ve Umut Kılıç'ı topluluğumuzda ağırladığımız Tea Talk etkinliğinde, kariyer yolculuklarını ve sektördeki deneyimlerini dinleme fırsatı bulduk.\n" +
            "\n" +
            "Etkinlikte Senior Cyber Security Engineer olarak görev yapan Emre Acar, IT Project Manager Ali İmre ve Lead Software Engineer Umut Kılıç; kendi çalışma alanları, kariyer süreçleri ve mühendislik deneyimleri üzerine paylaşımlarda bulundu. Katılımcılar, farklı alanlarda çalışan mühendislerin deneyimlerini doğrudan dinleme ve kariyerleriyle ilgili merak ettikleri soruları yöneltme fırsatı buldu.\n" +
            "\n" +
            "Değerli paylaşımları için Emre Acar, Ali İmre ve Umut Kılıç'a, etkinliğimize sağladığı destek için Hisarönü Sütlü'ye teşekkür ederiz.\n",
        gorsel: "/images/etkinlikler/havelsan-teatalk.jpg",
        galeri: []
    },
    {
        id: 7,
        slug: "tei-tusas-gokhan-donmez-tea-talk",
        tarih: "18 Ekim 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Coffe UP - Bahçelievler",
        baslik: "TEI-TUSAŞ Gökhan Dönmez ile Tea Talk",
        ozet: "TEI-TUSAŞ Performans Mühendisi Gökhan Dönmez ile sektörel deneyimler ve kariyer üzerine gerçekleştirdiğimiz Tea Talk.",
        aciklama: "TEI-TUSAŞ Motor Sanayii A.Ş.'de Performans Mühendisi olarak görev yapan Gökhan Dönmez ile gerçekleştirdiğimiz Tea Talk etkinliğinde, havacılık sektöründeki deneyimlerini ve kariyer yolculuğunu dinleme fırsatı bulduk.\n" +
            "\n" +
            "Etkinlik boyunca Gökhan Dönmez, sektördeki çalışma deneyimlerini ve kariyer sürecinden edindiği tecrübeleri katılımcılarla paylaştı. Katılımcıların sorularının da ele alındığı etkinlik, sektör hakkında doğrudan deneyimlerden faydalanabilecekleri samimi bir sohbet ortamı sundu.\n" +
            "\n" +
            "Katılımı ve değerli paylaşımları için Gökhan Dönmez'e teşekkür ederiz.",
        gorsel: "/images/etkinlikler/tei-tusas.jpg",
        galeri: []
    },
    {
        id: 6,
        slug: "python-egitimi-2025",
        tarih: "14-16-21-23 Ekim 2025",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Samsung Laboratuvarı",
        baslik: "Python Eğitimi",
        ozet: "YAGE ve GaziCyber iş birliğiyle düzenlediğimiz dört oturumluk temel seviye Python eğitimi.",
        aciklama: "YAGE ve GaziCyber iş birliğiyle düzenlediğimiz Temel Seviye Python 101 Eğitimi, programlamaya giriş yapmak isteyen katılımcılarla birlikte dört oturum boyunca gerçekleştirildi.\n" +
            "\n" +
            "Eğitim kapsamında Python'a giriş, değişkenler ve temel kavramlar, koşullar ve döngüler, koleksiyon veri tipleri ve fonksiyonlar ele alındı. Yüz yüze gerçekleştirilen eğitimlerde katılımcılar, Python'un temel yapılarını öğrenerek programlama konusunda başlangıç seviyesinde bir temel oluşturma fırsatı buldu.",
        gorsel: "/images/etkinlikler/python-egitimi.jpeg",
        galeri: []
    },
    {
        id: 5,
        slug: "tanisma-etkinligi-2025",
        tarih: "1 Ekim 2025",
        yil: "2025-2026",
        kategori: "Sosyal",
        konum: "Teknoloji Fakültesi B Blok",
        baslik: "Tanışma Etkinliği",
        ozet: ".",
        aciklama: ".",
        gorsel: "/images/etkinlikler/tanisma-etkinligi-2025.jpg",
        galeri: []
    },
    {
        id: 4,
        slug: "yonetim-kurulu-toplantisi-2025",
        tarih: "29 Eylül 2025",
        yil: "2025-2026",
        kategori: "Sosyal",
        konum: "Teknoloji Fakültesi B Blok",
        baslik: "Yönetim Kurulu Toplantısı",
        ozet: ".",
        aciklama: ".",
        gorsel: "/images/etkinlikler/yonetim-kurulu-toplantisi-2025.jpg",
        galeri: []
    },
    {
        id: 3,
        slug: "gazi-teknopark-gezisi",
        tarih: "19 Aralık 2024",
        yil: "2024-2025",
        kategori: "Gezi",
        konum: "Gazi Teknopark",
        baslik: "Gazi Teknopark Gezisi",
        ozet: "Gazi Teknopark'ı ziyaret ederek girişimcilik üzerine bir sunuma ve MIA yöneticileriyle gerçekleştirilen söyleşiye katıldık.",
        aciklama: "Topluluk olarak üniversitemizin girişimcilik ve teknoloji ekosistemini yakından tanımak amacıyla Gazi Teknopark'ı ziyaret ettik. Ziyaret kapsamında akademisyen Sayın Furkan Özcan'ın girişimcilik üzerine gerçekleştirdiği sunumu dinleme fırsatı bulduk.\n" +
            "\n" +
            "Sunumun ardından Gazi Teknopark'ta faaliyet gösteren MIA şirketinin yöneticileriyle bir araya gelerek şirketin çalışmaları ve girişimcilik süreçleri üzerine bilgilendirici bir sohbet gerçekleştirdik. Etkinlik, üyelerimizin hem girişimcilik konusunda farklı bakış açıları edinmesine hem de üniversitemizin teknopark ekosistemini yakından tanımasına imkan sağladı.\n" +
            "\n" +
            "Etkinliğin gerçekleştirilmesine katkılarından dolayı Sayın Ayhan Erdem ve Sayın Furkan Özcan'a, MIA şirketinin yöneticilerine ve katılım sağlayan tüm üyelerimize teşekkür ederiz.",
        gorsel: "/images/etkinlikler/gazi-teknopark.jpg",
        galeri: []
    },
    {
        id: 2,
        slug: "git-ve-github-egitimi",
        tarih: "1 Kasım 2024",
        yil: "2024-2025",
        kategori: "Eğitim",
        konum: "Taşkent Konferans Salonu",
        baslik: "Git ve GitHub Eğitimi",
        ozet: "Git ve GitHub'ın yazılım geliştirme süreçlerindeki kullanımını uygulamalı olarak ele aldığımız ilk eğitim etkinliğimiz.",
        aciklama: "Yazılım Araştırma ve Geliştirme Topluluğu olarak ilk eğitim etkinliğimizi, yazılım geliştirme süreçlerinin önemli araçlarından Git ve GitHub üzerine gerçekleştirdik. ONO Yazılım Takım Lideri Seyfi Kırmızıay'ın eğitmen olarak yer aldığı etkinlik, Teknoloji Fakültesi Taşkent Binası Konferans Salonu'nda düzenlendi.\n" +
            "\n" +
            "Etkinlik, Bölüm Başkanımız Ayhan Erdem'in açılış konuşmasıyla başladı. Ardından Seyfi Kırmızıay tarafından Git ve GitHub üzerine uygulamalı bir eğitim gerçekleştirildi. Eğitim boyunca katılımcılar, yazılım geliştirme süreçlerinde kullanılan bu araçlar hakkında pratik çalışmalar yapma fırsatı buldu.\n" +
            "\n" +
            "Programın sonunda gerçekleştirilen soru-cevap bölümünde katılımcılar, Git ve GitHub'ın yanı sıra yazılım geliştirme süreçleriyle ilgili merak ettikleri soruları Seyfi Kırmızıay'a yöneltme fırsatı buldu. Böylece topluluğumuzun ilk eğitim etkinliğini tamamlamış olduk.",
        gorsel: "/images/etkinlikler/git-github.jpg",
        galeri: []
    },
    {
        id: 1,
        slug: "tanisma-etkinligi-2024",
        tarih: "20 Ekim 2024",
        yil: "2024-2025",
        kategori: "Sosyal",
        konum: "Teknoloji Fakültesi B Blok",
        baslik: "Tanışma Etkinliği",
        ozet: ".",
        aciklama: ".",
        gorsel: "/images/etkinlikler/tanisma-etkinligi-2024.jpg",
        galeri: []
    }
];

export const yonetimKurulu: EkipUyesi[] = [
    { isim: "Fuat Efe Özdemir", gorev: "Başkan", birim: "Yönetim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/fuat-efe-ozdemir.jpg" },
    { isim: "Sude Özbay", gorev: "Başkan Yardımcısı", birim: "Yönetim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/sude-ozbay.jpg" },
    { isim: "Zeynep Baykan", gorev: "Başkan Yardımcısı", birim: "Yönetim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/zeynep-baykan.jpg" },
    { isim: "Mustafa Emir Taşkıran", gorev: "Birim Başkanı", birim: "Etkinlik ve Organizasyon", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/mustafa-emir-taskiran.jpg" },
    { isim: "Kerem Aykut", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/kerem-aykut.jpg" },
    { isim: "Hayat Yücel", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/hayat-yucel.jpg" },
    { isim: "Ecrin Nisa Gezer", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/ecrin-nisa-gezer.jpg" },
    { isim: "Beyza Ahmet", gorev: "Birim Başkanı", birim: "Sponsorluk", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/beyza-ahmet.jpg" },
    { isim: "-", gorev: "Birim Üyesi", birim: "Sponsorluk", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/-.jpg" },
    { isim: "Kübra Topcu", gorev: "Birim Başkanı", birim: "Sosyal Medya", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/kübra-topcu.jpg" },
    { isim: "Fatma Bedia Erdem", gorev: "Birim Üyesi", birim: "Sosyal Medya", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/fatma-bedia-erdem.jpg" },
    { isim: "Ömer Faruk Tüysüzoğlu", gorev: "Birim Üyesi", birim: "Sosyal Medya", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/omer-faruk-tuysuzoglu.jpg" },
    { isim: "Duru Yüksel Sarıkaya", gorev: "Birim Başkanı", birim: "İletişim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/duru-yuksel-sarikaya.jpg" },
    { isim: "Beste Kaya", gorev: "Birim Üyesi", birim: "İletişim", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/beste-kaya.jpg" },
    { isim: "Hatice Sıla Gündeşli", gorev: "Birim Üyesi", birim: "İletişim", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/hatice-sila-gundesli.jpg" },
    { isim: "Rıza Yurtseven", gorev: "Birim Başkanı", birim: "Eğitim ve Proje Geliştirme", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/riza-yurtseven.jpg" },
    { isim: "Adem Halit Karagöz", gorev: "Birim Üyesi", birim: "Eğitim ve Proje Geliştirme", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/adem-halit-karagöz.jpg" },
    { isim: "Mertcan Hırlak", gorev: "Birim Üyesi", birim: "Eğitim ve Proje Geliştirme", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/mertcan-hirlak.jpg" }
];