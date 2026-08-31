export const etkinlikler = [
    {
        id: 1,
        slug: "tanisma-ve-teknik-oryantasyon-2026",
        tarih: "20 Ekim 2026",
        yil: "2026-2027", // Eylül sonrası olduğu için 26-27 akademik yılı
        kategori: "Teknik",
        konum: "Gazi Üniversitesi Mühendislik Fak.",
        baslik: "Tanışma ve Teknik Oryantasyon",
        ozet: "Yeni dönem hedeflerimizi ve AR-GE planlarımızı konuşuyoruz.",
        aciklama: "Yeni dönemin ilk toplantısında, YAGE olarak bu yıl gerçekleştirmeyi planladığımız eğitimleri, teknik gezileri ve odaklanacağımız projeleri detaylandırıyoruz.",
        gorsel: "[Görsel 1]",
        galeri: ["[Kare 1]", "[Kare 2]"]
    },
    {
        id: 2,
        slug: "web-mimari-tasarimi-101",
        tarih: "25 Kasım 2025",
        yil: "2025-2026",
        kategori: "Eğitim",
        konum: "Gazi Teknopark Konferans Salonu",
        baslik: "Web Mimari Tasarımı",
        ozet: "Sıfırdan modern web mimarilerine giriş semineri.",
        aciklama: "Monolitik yapılardan mikroservislere, modern web mimarilerinin evrimini inceliyoruz. Next.js, React ve modern backend teknolojileri anlatılacak.",
        gorsel: "[Görsel 2]",
        galeri: ["[Kare 1]", "[Kare 2]"]
    },
    {
        id: 3,
        slug: "oyun-sektoru-paneli",
        tarih: "10 Mart 2026",
        yil: "2025-2026",
        kategori: "Panel",
        konum: "Çevrimiçi (Discord)",
        baslik: "Oyun Sektörü Paneli",
        ozet: "Sektörden profesyonellerle oyun motorları mimarisi üzerine.",
        aciklama: "Oyun sektöründe deneyimli mühendislerin katılımıyla, C++ ve özel oyun motoru mimarilerinin nasıl tasarlandığını konuşuyoruz.",
        gorsel: "[Görsel 3]",
        galeri: ["[Kare 1]"]
    },
    {
        id: 4,
        slug: "teknofest-hazirlik-kampi",
        tarih: "15 Nisan 2025",
        yil: "2024-2025",
        kategori: "Yarışma",
        konum: "YAGE Laboratuvarı",
        baslik: "Teknofest Hazırlık Kampı",
        ozet: "Otonom sistemler takımı için 2 günlük yoğun AR-GE kampı.",
        aciklama: "İnsansız kara aracı projemizin otonom navigasyon algoritmalarını test etmek ve ROS entegrasyonlarını tamamlamak üzere düzenlediğimiz kapalı takım çalıştayı.",
        gorsel: "[Görsel 4]",
        galeri: ["[Kare 1]"]
    },
    {
        id: 5,
        slug: "tusas-fabrika-gezisi",
        tarih: "05 Mayıs 2025",
        yil: "2024-2025",
        kategori: "Gezi",
        konum: "TUSAŞ Kahramankazan",
        baslik: "TUSAŞ Teknik Gezisi",
        ozet: "Havacılık ve uzay sanayi üretim hatlarını yerinde inceliyoruz.",
        aciklama: "Gömülü sistemler ve otonomi takımlarımızın, TUSAŞ tesislerindeki üretim, montaj ve yazılım entegrasyon süreçlerini yerinde görmesi amacıyla düzenlenen gezi.",
        gorsel: "[Görsel 5]",
        galeri: ["[Kare 1]", "[Kare 2]", "[Kare 3]"]
    }
];

export const faaliyetler = ["YAZILIM", "EĞİTİMLER", "TEKNİK GEZİLER", "YARIŞMALAR", "PROJELER", "AR-GE"];

export const yonetimKurulu = [
    // YÖNETİM
    { isim: "Fuat Efe Özdemir", gorev: "Yönetim Kurulu Başkanı", birim: "Yönetim", featured: true, github: "#", linkedin: "#" },
    { isim: "Zeynep Kaya", gorev: "Başkan Yardımcısı", birim: "Yönetim", featured: true, github: "#", linkedin: "#" },
    { isim: "Can Öztürk", gorev: "Başkan Yardımcısı", birim: "Yönetim", featured: true, github: "#", linkedin: "#" },

    // ETKİNLİK VE ORGANİZASYON
    { isim: "Elif Demir", gorev: "Birim Başkanı", birim: "Etkinlik ve Organizasyon", featured: true, github: "#", linkedin: "#" },
    { isim: "Burak Yılmaz", gorev: "Birim Üyesi", birim: "Etkinlik ve Organizasyon", featured: false, github: "#", linkedin: "#" },

    // SPONSORLUK
    { isim: "Cemre Yıldız", gorev: "Birim Başkanı", birim: "Sponsorluk", featured: false, github: "#", linkedin: "#" },
    { isim: "Kaan Arslan", gorev: "Birim Üyesi", birim: "Sponsorluk", featured: false, github: "#", linkedin: "#" },

    // SOSYAL MEDYA
    { isim: "Melis Aydın", gorev: "Birim Başkanı", birim: "Sosyal Medya", featured: false, github: "#", linkedin: "#" },
    { isim: "Emre Can", gorev: "Birim Üyesi", birim: "Sosyal Medya", featured: false, github: "#", linkedin: "#" },

    // İLETİŞİM
    { isim: "Ece Korkmaz", gorev: "Birim Başkanı", birim: "İletişim", featured: false, github: "#", linkedin: "#" },
    { isim: "Ali Kaya", gorev: "Birim Üyesi", birim: "İletişim", featured: false, github: "#", linkedin: "#" },

    // EĞİTİM VE PROJE GELİŞTİRME
    { isim: "Deniz Şahin", gorev: "Birim Başkanı", birim: "Eğitim ve Proje Geliştirme", featured: false, github: "#", linkedin: "#" },
    { isim: "Mert Yılmaz", gorev: "Birim Üyesi", birim: "Eğitim ve Proje Geliştirme", featured: false, github: "#", linkedin: "#" }
];