// ==========================================
// TİP TANIMLAMALARI (TYPESCRIPT INTERFACES)
// ==========================================

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

// ==========================================
// ETKİNLİKLER ARŞİVİ (GERÇEK VERİLER)
// ==========================================

export const etkinlikler: Etkinlik[] = [
    // --- 2025-2026 AKADEMİK YILI ---
    {
        id: 21,
        slug: "gazi-dataforge-26",
        tarih: "9 Mayıs 2026",
        yil: "2025-2026",
        kategori: "Yarışma",
        konum: "Teknopark Ankara",
        baslik: "Gazi DataForge'26",
        ozet: "YAGE'nin düzenlediği büyük Datathon etkinliği.",
        aciklama: "Veri bilimi ve yapay zeka tutkunlarını bir araya getiren, katılımcıların gerçek dünya verileriyle yarışıp modeller ürettiği Gazi DataForge'26 maratonu.",
        gorsel: "/images/etkinlikler/dataforge.png",
        galeri: []
    },
    {
        id: 20,
        slug: "taleworlds-gezisi",
        tarih: "21 Nisan 2026",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "TaleWorlds Entertainment, ODTÜ Teknokent",
        baslik: "TaleWorlds Teknik Gezisi",
        ozet: "Türkiye'nin en büyük oyun stüdyolarından TaleWorlds'ü ziyaret ettik.",
        aciklama: "Oyun motoru mimarileri ve profesyonel oyun geliştirme süreçlerini yerinde görmek için TaleWorlds Entertainment ofisine gerçekleştirdiğimiz teknik gezi.",
        gorsel: "/images/etkinlikler/taleworlds.jpeg",
        galeri: []
    },
    {
        id: 19,
        slug: "unity-egitimi-2026",
        tarih: "25-26-28 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "Unity Eğitimi",
        ozet: "3 günlük yoğun Unity ve oyun geliştirme kampı.",
        aciklama: "Oyun geliştirme ekibimiz ve katılımcılarımızla birlikte Unity motoru üzerinde C# kullanarak temel ve orta düzey oyun mekaniklerinin kurgulanması.",
        gorsel: "/images/etkinlikler/unity-egitimi.jpg",
        galeri: []
    },
    {
        id: 18,
        slug: "alp-uneri-tea-talk",
        tarih: "25 Mart 2026",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Gazi Üniversitesi",
        baslik: "Alp Üneri - Tea Talk",
        ozet: "Alp Üneri ile teknoloji ve mühendislik kariyeri üzerine söyleşi.",
        aciklama: "Sektörel tecrübelerin, mühendislikte karşılaşılan zorlukların ve kariyer planlamasının konuşulduğu samimi Tea Talk etkinliğimiz.",
        gorsel: "/images/etkinlikler/alp-uneri.jpg",
        galeri: []
    },
    {
        id: 17,
        slug: "csharp-egitimi-2026",
        tarih: "7-8-14-15 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "C# Eğitimi",
        ozet: "Dört günlük kapsamlı C# ve nesne yönelimli programlama eğitimi.",
        aciklama: ".NET ekosistemine giriş, C# temelleri ve ileri düzey OOP kavramlarının uygulamalı olarak işlendiği eğitim serisi.",
        gorsel: "/images/etkinlikler/csharp-egitimi.jpeg",
        galeri: []
    },
    {
        id: 16,
        slug: "solidworks-egitimi-2026",
        tarih: "7-8 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "Solidworks Eğitimi",
        ozet: "Donanım ve mekanik ekipleri için bilgisayar destekli tasarım eğitimi.",
        aciklama: "Proje ekiplerimizin parça tasarımları, montaj ve teknik resim süreçlerini Solidworks üzerinden pratik ettiği 2 günlük eğitim.",
        gorsel: "/images/etkinlikler/solidworks-egitimi.jpg",
        galeri: []
    },
    {
        id: 15,
        slug: "arduino-egitimi-2026",
        tarih: "1 Mart 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "Arduino Eğitimi",
        ozet: "Gömülü sistemlere ve elektroniğe giriş atölyesi.",
        aciklama: "Sensör okuma, motor kontrolü ve temel donanım-yazılım haberleşme uygulamalarının yapıldığı Arduino atölyemiz.",
        gorsel: "/images/etkinlikler/arduino-egitimi.jpeg",
        galeri: []
    },
    {
        id: 14,
        slug: "c-programlama-egitimi",
        tarih: "27 Şubat 2026",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "C Programlama Eğitimi",
        ozet: "Sistem programlama ve donanım dilleri için temel C eğitimi.",
        aciklama: "Mühendislik temellerini atmak ve bellek yönetimini anlamak isteyen üyelerimiz için C programlama atölyesi.",
        gorsel: "/images/etkinlikler/c-egitimi.jpg",
        galeri: []
    },
    {
        id: 13,
        slug: "aselsan-aday-muhendis-tea-talk",
        tarih: "23 Şubat 2026",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Gazi Üniversitesi",
        baslik: "ASELSAN Aday Mühendis - Tea Talk",
        ozet: "ASELSAN Aday Mühendislik süreçleri hakkında tecrübe paylaşımı.",
        aciklama: "ASELSAN bünyesinde yer alan aday mühendislerin katılımıyla gerçekleştirilen, başvuru ve çalışma süreçlerinin konuşulduğu söyleşi.",
        gorsel: "/images/etkinlikler/aselsan-teatalk.jpeg",
        galeri: []
    },
    {
        id: 12,
        slug: "havacilik-ve-uzay-zirvesi",
        tarih: "17 Şubat 2026",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "Etkinlik Merkezi",
        baslik: "Havacılık ve Uzay Zirvesi",
        ozet: "Havacılık ve Uzay Zirvesi'ne toplu katılım.",
        aciklama: "Sektörün öncü firmalarının yer aldığı zirvede, savunma sanayii ve uzay teknolojilerindeki son gelişmeleri inceleme fırsatı bulduk.",
        gorsel: "/images/etkinlikler/havacilik-zirvesi.jpeg",
        galeri: []
    },
    {
        id: 11,
        slug: "oyun-gecesi-2025",
        tarih: "20 Aralık 2025",
        yil: "2025-2026",
        kategori: "Sosyal",
        konum: "Discord",
        baslik: "YAGE Oyun Gecesi",
        ozet: "Topluluk üyeleriyle dönemin stresini attığımız oyun gecesi.",
        aciklama: "Geliştirmeye ve kodlamaya kısa bir ara! Tüm ekiplerin birbiriyle kaynaşmasını sağlamak amacıyla düzenlediğimiz eğlenceli oyun gecemiz.",
        gorsel: "/images/etkinlikler/oyun-gecesi.jpeg",
        galeri: []
    },
    {
        id: 10,
        slug: "alparslan-akyildiz-tea-talk",
        tarih: "19 Aralık 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Gazi Üniversitesi",
        baslik: "Alparslan Akyıldız - Tea Talk",
        ozet: "Alparslan Akyıldız ile yazılım kariyeri üzerine sohbet.",
        aciklama: "Mühendislik hayatı ve güncel teknolojiler üzerine keyifli bir çay sohbeti gerçekleştirdik.",
        gorsel: "/images/etkinlikler/alparslan-akyildiz.jpeg",
        galeri: []
    },
    {
        id: 9,
        slug: "pinet-ali-erdem-sunar-tea-talk",
        tarih: "19 Aralık 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Gazi Üniversitesi",
        baslik: "Pinet Ali Erdem Sunar - Tea Talk",
        ozet: "Pinet'ten Ali Erdem Sunar ile siber güvenlik ve ağ altyapıları.",
        aciklama: "Ağ mimarileri, sistem güvenliği ve bilişim sektörünün geleceği üzerine Ali Erdem Sunar ile Tea Talk etkinliğimiz.",
        gorsel: "/images/etkinlikler/ali-erdem-sunar.jpeg",
        galeri: []
    },
    {
        id: 8,
        slug: "gdg-devfest-hacettepe-2025",
        tarih: "30 Kasım 2025",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "Hacettepe Üniversitesi",
        baslik: "GDG Devfest Hacettepe",
        ozet: "Google Developer Groups Devfest etkinliğine katılım sağladık.",
        aciklama: "Yazılım dünyasının güncel teknolojilerinin konuşulduğu, ilham verici sunumların yer aldığı GDG Devfest Hacettepe'ye YAGE olarak katıldık.",
        gorsel: "/images/etkinlikler/devfest-hacettepe.jpeg",
        galeri: []
    },
    {
        id: 7,
        slug: "linux-egitimi-2025",
        tarih: "29 Kasım, 1-2-4 Aralık 2025",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "Linux Eğitimi",
        ozet: "4 günlük detaylı Linux işletim sistemi ve terminal kullanımı eğitimi.",
        aciklama: "Mühendisliğin ve yazılımın kalbi olan Linux dünyasına giriş yaptık. Dosya sistemi, terminal komutları ve temel sistem yönetimi uygulamalı olarak işlendi.",
        gorsel: "/images/etkinlikler/linux-egitimi.jpg",
        galeri: []
    },
    {
        id: 6,
        slug: "teknopark-ankara-gezisi",
        tarih: "21 Kasım 2025",
        yil: "2025-2026",
        kategori: "Gezi",
        konum: "Teknopark Ankara",
        baslik: "Teknopark Ankara Gezisi",
        ozet: "Girişimcilik ve teknoloji şirketlerini yerinde inceleme fırsatı.",
        aciklama: "Teknopark Ankara'da faaliyet gösteren teknoloji firmalarının çalışma ortamlarını ve geliştirme süreçlerini gözlemlediğimiz saha gezisi.",
        gorsel: "/images/etkinlikler/teknopark-ankara.jpeg",
        galeri: []
    },
    {
        id: 5,
        slug: "havelsan-tea-talk",
        tarih: "21 Ekim 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Gazi Üniversitesi",
        baslik: "HAVELSAN - Tea Talk",
        ozet: "HAVELSAN mühendisleriyle savunma sanayii yazılımları.",
        aciklama: "HAVELSAN'dan gelen mühendis konuklarımızla büyük çaplı savunma yazılımları ve simülasyon sistemleri üzerine bir söyleşi.",
        gorsel: "/images/etkinlikler/havelsan-teatalk.jpg",
        galeri: []
    },
    {
        id: 4,
        slug: "tei-tusas-gokhan-donmez-tea-talk",
        tarih: "18 Ekim 2025",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Gazi Üniversitesi",
        baslik: "TEI/TUSAŞ Gökhan Dönmez - Tea Talk",
        ozet: "Havacılık motorları ve gömülü sistemler üzerine söyleşi.",
        aciklama: "TEI - TUSAŞ Motor Sanayii A.Ş.'den Gökhan Dönmez ile havacılık sektöründeki mühendislik süreçleri hakkında samimi bir sohbet.",
        gorsel: "/images/etkinlikler/tei-tusas.jpg",
        galeri: []
    },
    {
        id: 3,
        slug: "python-egitimi-2025",
        tarih: "14 Ekim 2025",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "Python Eğitimi",
        ozet: "Veri bilimi ve genel amaçlı programlamaya giriş için Python 101.",
        aciklama: "Programlamaya yeni başlayanlar ve yeteneklerini tazelemek isteyen üyelerimiz için düzenlediğimiz temel Python eğitimi.",
        gorsel: "/images/etkinlikler/python-egitimi.jpeg",
        galeri: []
    },

    // --- 2024-2025 AKADEMİK YILI ---
    {
        id: 2,
        slug: "gazi-teknopark-gezisi",
        tarih: "19 Aralık 2024",
        yil: "2024-2025",
        kategori: "Gezi",
        konum: "Gazi Teknopark",
        baslik: "Gazi Teknopark Gezisi",
        ozet: "Kendi ekosistemimizdeki girişimlerle tanışma ve networking.",
        aciklama: "Üniversitemizin kendi Teknopark'ında yer alan firmaları ziyaret ederek AR-GE ekosistemini yakından inceledik.",
        gorsel: "/images/etkinlikler/gazi-teknopark.jpg",
        galeri: []
    },
    {
        id: 1,
        slug: "git-ve-github-egitimi",
        tarih: "1 Kasım 2024",
        yil: "2024-2025",
        kategori: "Eğitim",
        konum: "YAGE Laboratuvarı",
        baslik: "Git ve GitHub Eğitimi",
        ozet: "Takım çalışması ve versiyon kontrol sistemleri yönetimi.",
        aciklama: "Geliştireceğimiz projelerde kod çakışmalarını önlemek ve ekip içi senkronizasyonu sağlamak için temel Git akışları işlendi.",
        gorsel: "/images/etkinlikler/git-github.jpg",
        galeri: []
    }
];

export const faaliyetler = ["YAZILIM", "EĞİTİMLER", "TEKNİK GEZİLER", "YARIŞMALAR", "PROJELER", "AR-GE"];

export const yonetimKurulu: EkipUyesi[] = [
    // YÖNETİM
    { isim: "Fuat Efe Özdemir", gorev: "Başkan", birim: "Yönetim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/fuat-efe-ozdemir.jpg" },
    { isim: "Sude Özbay", gorev: "Başkan Yardımcısı", birim: "Yönetim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/sude-ozbay.jpg" },
    { isim: "Zeynep Baykan", gorev: "Başkan Yardımcısı", birim: "Yönetim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/zeynep-baykan.jpg" },

    // ETKİNLİK VE ORGANİZASYON
    { isim: "Mustafa Emir Taşkıran", gorev: "Birim Başkanı", birim: "Etkinlik ve Organizasyon", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/mustafa-emir-taskiran.jpg" },
    { isim: "Kerem Aykut", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/kerem-aykut.jpg" },
    { isim: "Hayat Yücel", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/hayat-yucel.jpg" },
    { isim: "Ecrin Nisa Gezer", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/ecrin-nisa-gezer.jpg" },

    // SPONSORLUK
    { isim: "Beyza Ahmet", gorev: "Birim Başkanı", birim: "Sponsorluk", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/beyza-ahmet.jpg" },
    { isim: "-", gorev: "Birim Üyesi", birim: "Sponsorluk", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/-.jpg" },

    // SOSYAL MEDYA
    { isim: "Kübra Topcu", gorev: "Birim Başkanı", birim: "Sosyal Medya", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/kübra-topcu.jpg" },
    { isim: "Fatma Bedia Erdem", gorev: "Birim Üyesi", birim: "Sosyal Medya", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/fatma-bedia-erdem.jpg" },
    { isim: "Ömer Faruk Tüysüzoğlu", gorev: "Birim Üyesi", birim: "Sosyal Medya", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/omer-faruk-tuysuzoglu.jpg" },

    // İLETİŞİM
    { isim: "Duru Yüksel Sarıkaya", gorev: "Birim Başkanı", birim: "İletişim", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/duru-yuksel-sarikaya.jpg" },
    { isim: "Beste Kaya", gorev: "Birim Üyesi", birim: "İletişim", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/beste-kaya.jpg" },
    { isim: "Hatice Sıla Gündeşli", gorev: "Birim Üyesi", birim: "İletişim", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/hatice-sila-gundesli.jpg" },

    // EĞİTİM VE PROJE GELİŞTİRME
    { isim: "Rıza Yurtseven", gorev: "Birim Başkanı", birim: "Eğitim ve Proje Geliştirme", featured: true, github: "#", linkedin: "#", foto: "/images/ekip/riza-yurtseven.jpg" },
    { isim: "Adem Halit Karagöz", gorev: "Birim Üyesi", birim: "Eğitim ve Proje Geliştirme", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/adem-halit-karagöz.jpg" },
    { isim: "Mertcan Hırlak", gorev: "Birim Üyesi", birim: "Eğitim ve Proje Geliştirme", featured: false, github: "#", linkedin: "#", foto: "/images/ekip/mertcan-hirlak.jpg" }
];