import { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';


type Language = 'af' | 'ar' | 'be' | 'ca' | 'zh' | 'nl' | 'en' | 'fr' | 'de' | 'id' | 'it' | 'ja' | 'ko' | 'la' | 'pt' | 'ru' | 'es' | 'tr' | 'uk' | 'vi' | 'hi';

// ... (Translations interface handles strings, let's keep it generic with string keys for now or update it later if needed, but for now we focus on the list)

// Update translations type safely or allow it to be flexible. The current implementation uses `[key in Language]: string` which requires ALL keys to be present for ALL languages if strictly typed. 
// However, the `translations` object only has a few languages initially. To avoid type errors with strict TS, we might need to make partial or just update the type definition. 
// Given the existing file structure, I will update the Language type and the languages array export. 
// I will also make the Translations interface broader to avoid breaking existing translations that don't have the new keys yet.




interface Translations {
  [key: string]: {
    [key in Language]?: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home', hi: 'होम', es: 'Inicio', fr: 'Accueil', de: 'Startseite', ar: 'الرئيسية', zh: '首页',
    af: 'Tuis', be: 'Галоўная', ca: 'Inici', nl: 'Thuis', id: 'Beranda', it: 'Home', ja: 'ホーム', ko: '홈', la: 'Domus', pt: 'Início', ru: 'Главная', tr: 'Anasayfa', uk: 'Головна', vi: 'Trang chủ'
  },
  'nav.company': {
    en: 'Company', hi: 'कंपनी', es: 'Empresa', fr: 'Entreprise', de: 'Unternehmen', ar: 'الشركة', zh: '公司',
    af: 'Maatskappy', be: 'Кампанія', ca: 'Empresa', nl: 'Bedrijf', id: 'Perusahaan', it: 'Azienda', ja: '会社', ko: '회사', la: 'Societas', pt: 'Empresa', ru: 'Компания', tr: 'Şirket', uk: 'Компанія', vi: 'Công ty'
  },
  'nav.about': {
    en: 'About Us', hi: 'हमारे बारे में', es: 'Sobre Nosotros', fr: 'À Propos', de: 'Über Uns', ar: 'من نحن', zh: '关于我们',
    af: 'Oor Ons', be: 'Пра нас', ca: 'Sobre nosaltres', nl: 'Over ons', id: 'Tentang Kami', it: 'Chi siamo', ja: '私たちについて', ko: '회사 소개', la: 'De nobis', pt: 'Sobre nós', ru: 'О нас', tr: 'Hakkımızda', uk: 'Про нас', vi: 'Về chúng tôi'
  },
  'nav.certification': {
    en: 'Certification', hi: 'प्रमाणन', es: 'Certificación', fr: 'Certification', de: 'Zertifizierung', ar: 'الشهادة', zh: '认证',
    af: 'Sertifisering', be: 'Сертыфікацыя', ca: 'Certificació', nl: 'Certificering', id: 'Sertifikasi', it: 'Certificazione', ja: '認証', ko: '인증', la: 'Certificatio', pt: 'Certificação', ru: 'Сертификация', tr: 'Sertifikasyon', uk: 'Сертифікація', vi: 'Chứng nhận'
  },
  'nav.regulatory': {
    en: 'Regulatory', hi: 'नियामक', es: 'Regulatorio', fr: 'Réglementaire', de: 'Regulierung', ar: 'تنظيمي', zh: '法规',
    af: 'Regulerende', be: 'Нарматыўны', ca: 'Regulatori', nl: 'Regelgevend', id: 'Regulasi', it: 'Normativo', ja: '規制', ko: '규제', la: 'Regulatorius', pt: 'Regulatório', ru: 'Регуляторный', tr: 'Düzenleyici', uk: 'Регуляторний', vi: 'Quy định'
  },
  'nav.innovation': {
    en: 'Innovation', hi: 'नवाचार', es: 'Innovación', fr: 'Innovation', de: 'Innovation', ar: 'ابتكار', zh: '创新',
    af: 'Innovasie', be: 'Інавацыі', ca: 'Innovació', nl: 'Innovatie', id: 'Inovasi', it: 'Innovazione', ja: '革新', ko: '혁신', la: 'Innovatio', pt: 'Inovação', ru: 'Инновации', tr: 'İnovasyon', uk: 'Інновації', vi: 'Đổi mới'
  },
  'nav.quality': {
    en: 'Quality Control', hi: 'गुणवत्ता नियंत्रण', es: 'Control de Calidad', fr: 'Contrôle Qualité', de: 'Qualitätskontrolle', ar: 'مراقبة الجودة', zh: '质量控制',
    af: 'Gehaltebeheer', be: 'Кантроль якасці', ca: 'Control de qualitat', nl: 'Kwaliteitscontrole', id: 'Kontrol Kualitas', it: 'Controllo Qualità', ja: '品質管理', ko: '품질 관리', la: 'Imperium Qualitatis', pt: 'Controle de Qualidade', ru: 'Контроль качества', tr: 'Kalite Kontrol', uk: 'Контроль якості', vi: 'Kiểm soát chất lượng'
  },
  'nav.products': {
    en: 'Products', hi: 'उत्पाद', es: 'Productos', fr: 'Produits', de: 'Produkte', ar: 'المنتجات', zh: '产品',
    af: 'Produkte', be: 'Прадукты', ca: 'Productes', nl: 'Producten', id: 'Produk', it: 'Prodotti', ja: '製品', ko: '제품', la: 'Producta', pt: 'Produtos', ru: 'Продукты', tr: 'Ürünler', uk: 'Продукти', vi: 'Sản phẩm'
  },
  'nav.pharmaceutical': {
    en: 'Pharmaceutical Products', hi: 'फार्मास्युटिकल उत्पाद', es: 'Productos Farmacéuticos', fr: 'Produits Pharmaceutiques', de: 'Pharmazeutische Produkte', ar: 'المنتجات الصيدلانية', zh: '药品',
    af: 'Farmaseutiese produkte', be: 'Фармацэўтычныя прадукты', ca: 'Productes farmacèutics', nl: 'Farmaceutische producten', id: 'Produk Farmasi', it: 'Prodotti farmaceutici', ja: '医薬品', ko: '의약품', la: 'Medicamenta', pt: 'Produtos Farmacêuticos', ru: 'Фармацевтическая продукция', tr: 'Farmasötik Ürünler', uk: 'Фармацевтична продукція', vi: 'Sản phẩm dược phẩm'
  },
  'nav.nutraceutical': {
    en: 'Nutraceutical & Food Supplement', hi: 'न्यूट्रास्युटिकल्स और खाद्य पूरक', es: 'Nutracéuticos y Suplementos', fr: 'Nutraceutiques', de: 'Nahrungsergänzungsmittel', ar: 'المكملات الغذائية', zh: '营养品',
    af: 'Nutraseutiese', be: 'Нутрицевтики', ca: 'Nutracèutics', nl: 'Nutraceuticals', id: 'Nutraceutical', it: 'Nutraceutici', ja: '栄養補助食品', ko: '기능성 식품', la: 'Nutraceuticals', pt: 'Nutracêuticos', ru: 'Нутрицевтики', tr: 'Nutrasötikler', uk: 'Нутрицевтики', vi: 'Thực phẩm chức năng'
  },
  'nav.herbal': {
    en: 'Herbal and Cosmetics', hi: 'हर्बल और कॉस्मेटिक', es: 'Herbal y Cosmético', fr: 'Herbes et Cosmétiques', de: 'Kräuter und Kosmetik', ar: 'عشبي ومستحضرات التجميل', zh: '草药和化妆品',
    af: 'Kruie en Skoonheidsmiddels', be: 'Травы і касметыка', ca: 'Herbes i cosmètics', nl: 'Kruiden en Cosmetica', id: 'Herbal dan Kosmetik', it: 'Erbe e Cosmetici', ja: 'ハーブと化粧品', ko: '허브 및 화장품', la: 'Herbis et Cosmetics', pt: 'Ervas e Cosméticos', ru: 'Травы и косметика', tr: 'Bitkisel ve Kozmetik', uk: 'Трави та косметика', vi: 'Thảo dược và Mỹ phẩm'
  },
  'nav.foodgrains': {
    en: 'Food Grains, Oils & Spices', hi: 'अनाज, तेल और मसाले', es: 'Cereales, Aceite y Especias', fr: 'Céréales, Huile et Épices', de: 'Getreide, Öl und Gewürze', ar: 'الحبوب والزيوت والتوابل', zh: '粮油香料',
    af: 'Voedselkorrels', be: 'Харчовыя збожжа', ca: 'Grans aliments', nl: 'Voedselgranen', id: 'Bijian Makanan', it: 'Cereali alimentari', ja: '食用穀物', ko: '식량 곡물', la: 'Grana Cibi', pt: 'Grãos alimentícios', ru: 'Пищевые зерна', tr: 'Gıda Tahılları', uk: 'Харчові зерна', vi: 'Ngũ cốc thực phẩm'
  },
  'nav.chemicals': {
    en: 'Industrial and Fine Chemicals', hi: 'औद्योगिक और फाइन केमिकल्स', es: 'Químicos Industriales', fr: 'Produits Chimiques', de: 'Industriechemikalien', ar: 'المواد الكيميائية', zh: '化工产品',
    af: 'Industriële chemikalieë', be: 'Прамысловыя хімікаты', ca: 'Productes químics industrials', nl: 'Industriële chemicaliën', id: 'Bahan Kimia Industri', it: 'Prodotti chimici industriali', ja: '工業用化学薬品', ko: '산업용 화학 물질', la: 'Chemicalia Industrialia', pt: 'Produtos Químicos Industriais', ru: 'Промышленные химикаты', tr: 'Endüstriyel Kimyasallar', uk: 'Промислові хімікати', vi: 'Hóa chất công nghiệp'
  },
  'nav.oil': { // Changed key from nav.oil-lubricants to nav.oil for simpler access if needed, or keep descriptive. Using 'nav.oil'
    en: 'Oil and Lubricants', hi: 'तेल और स्नेहक', es: 'Aceites y Lubricantes', fr: 'Huiles et Lubrifiants', de: 'Öle und Schmierstoffe', ar: 'الزيوت ومواد التشحيم', zh: '油和润滑剂',
    af: 'Olie en Smeermiddels', be: 'Алей і змазкі', ca: 'Oli i lubricants', nl: 'Olie en Smeermiddelen', id: 'Minyak dan Pelumas', it: 'Olio e Lubrificanti', ja: 'オイルと潤滑油', ko: '오일 및 윤활유', la: 'Oleum et Lubricants', pt: 'Óleo e Lubrificantes', ru: 'Масло и смазки', tr: 'Yağ ve Yağlayıcılar', uk: 'Масло та мастила', vi: 'Dầu và Nhớt'
  },
  'nav.rd': {
    en: 'R & D', hi: 'अनुसंधान एवं विकास', es: 'I+D', fr: 'R&D', de: 'F&E', ar: 'البحث والتطوير', zh: '研发',
    af: 'N & O', be: 'Н і Р', ca: 'R + D', nl: 'O & O', id: 'litbang', it: 'R & S', ja: '研究開発', ko: '연구 개발', la: 'R & D', pt: 'P & D', ru: 'НиОКР', tr: 'Ar-Ge', uk: 'НДДКР', vi: 'R & D'
  },
  'nav.facilities': {
    en: 'Facilities', hi: 'सुविधाएं', es: 'Instalaciones', fr: 'Installations', de: 'Einrichtungen', ar: 'المرافق', zh: '设施',
    af: 'Fasiliteite', be: 'Аб\'екты', ca: 'Instal·lacions', nl: 'Faciliteiten', id: 'Fasilitas', it: 'Strutture', ja: '施設', ko: '시설', la: 'Facilities', pt: 'Instalações', ru: 'Сооружения', tr: 'Tesisler', uk: 'Споруди', vi: 'Cơ sở vật chất'
  },
  'nav.manufacturing': {
    en: 'Manufacturing', hi: 'विनिर्माण', es: 'Fabricación', fr: 'Fabrication', de: 'Fertigung', ar: 'التصنيع', zh: '制造',
    af: 'Vervaardiging', be: 'Вытворчасць', ca: 'Fabricació', nl: 'Productie', id: 'Manufaktur', it: 'Produzione', ja: '製造', ko: '제조', la: 'Fabricatio', pt: 'Fabricação', ru: 'Производство', tr: 'Üretim', uk: 'Виробництво', vi: 'Sản xuất'
  },
  'nav.export': {
    en: 'Export', hi: 'निर्यात', es: 'Exportación', fr: 'Exportation', de: 'Export', ar: 'تصدير', zh: '出口',
    af: 'Uitvoer', be: 'Экспарт', ca: 'Exportació', nl: 'Export', id: 'Ekspor', it: 'Esportazione', ja: '輸出', ko: '수출', la: 'Exportatio', pt: 'Exportação', ru: 'Экспорт', tr: 'İhracat', uk: 'Експорт', vi: 'Xuất khẩu'
  },
  'nav.sales': {
    en: 'Sales & Distribution', hi: 'बिक्री और वितरण', es: 'Ventas y Distribución', fr: 'Ventes et Distribution', de: 'Vertrieb', ar: 'المبيعات والتوزيع', zh: '销售与分销',
    af: 'Verkope en Verspreiding', be: 'Продажы і дыстрыбуцыя', ca: 'Vendes i distribució', nl: 'Verkoop en Distributie', id: 'Penjualan dan Distribusi', it: 'Vendite e Distribuzione', ja: '販売と流通', ko: '판매 및 유통', la: 'Venditio et Distributio', pt: 'Vendas e Distribuição', ru: 'Продажи и дистрибуция', tr: 'Satış ve Dağıtım', uk: 'Продажі та дистрибуція', vi: 'Bán hàng và Phân phối'
  },
  'nav.contract': {
    en: 'Contract Manufacturing', hi: 'अनुबंध विनिर्माण', es: 'Fabricación por Contrato', fr: 'Fabrication sous Contrat', de: 'Auftragsfertigung', ar: 'التصنيع التعاقدي', zh: '代工生产',
    af: 'Kontrakvervaardiging', be: 'Кантрактная вытворчасць', ca: 'Fabricació per contracte', nl: 'Contractproductie', id: 'Manufaktur Kontrak', it: 'Produzione conto terzi', ja: '受託製造', ko: '위탁 제조', la: 'Fabricatio Contractus', pt: 'Fabricação por Contrato', ru: 'Контрактное производство', tr: 'Sözleşmeli Üretim', uk: 'Контрактне виробництво', vi: 'Sản xuất hợp đồng'
  },
  'nav.contact': {
    en: 'Contact', hi: 'संपर्क', es: 'Contacto', fr: 'Contact', de: 'Kontakt', ar: 'اتصل بنا', zh: '联系',
    af: 'Kontak', be: 'Кантакт', ca: 'Contacte', nl: 'Contact', id: 'Kontak', it: 'Contatto', ja: '連絡先', ko: '연락처', la: 'Contactus', pt: 'Contato', ru: 'Контакт', tr: 'İletişim', uk: 'Контакт', vi: 'Liên hệ'
  },

  // Hero Section & Index
  'hero.welcome': {
    en: 'WELCOME TO', hi: 'स्वगत है', es: 'BIENVENIDO A', fr: 'BIENVENUE À', de: 'WILLKOMMEN BEI', ar: 'مرحبًا بكم في', zh: '欢迎来到',
    af: 'WELKOM BY', be: 'ВІТАЕМ У', ca: 'BENVINIGUT A', nl: 'WELKOM BIJ', id: 'SELAMAT DATANG DI', it: 'BENVENUTO A', ja: 'ようこそ', ko: '환영합니다', la: 'GRATUS AD', pt: 'BEM-VINDO AO', ru: 'ДОБРО ПОЖАЛОВАТЬ В', tr: 'HOŞGELDİNİZ', uk: 'ЛАСКАВО ПРОСИМО ДО', vi: 'CHÀO MỪNG ĐẾN VỚI'
  },
  'hero.description': {
    en: 'Manufacturer and Supplier of a wide range of medicinal products such as Cough Syrups, Dry Syrups, Injection, Vitamin Tablets etc.',
    hi: 'खांसी सिरप, ड्राई सिरप, इंजेक्शन, विटामिन टैबलेट आदि जैसे औषधीय उत्पादों की एक विस्तृत श्रृंखला के निर्माता और आपूर्तिकर्ता।',
    es: 'Fabricante y proveedor de una amplia gama de productos medicinales como jarabes para la tos, jarabes secos, inyecciones, tabletas de vitaminas, etc.',
    fr: 'Fabricant et fournisseur d\'une large gamme de médicaments tels que sirops contre la toux, sirops secs, injections, comprimés de vitamines, etc.',
    de: 'Hersteller und Lieferant einer breiten Palette von Arzneimitteln wie Hustensirupen, Trockensirupen, Injektionen, Vitamintabletten usw.',
    ar: 'الشركة المصنعة والموردة لمجموعة واسعة من المنتجات الطبية مثل شراب السعال ، والعصائر الجافة ، والحقن ، وأقراص الفيتامينات إلخ.',
    zh: '各种药品的制造商和供应商，如止咳糖浆、干糖浆、注射剂、维生素片等。',
    af: 'Vervaardiger en verskaffer van \'n wye verskeidenheid medisinale produkte soos hoesstroop, droë stroop, inspuiting, vitamientablette, ens.',
    be: 'Вытворца і пастаўшчык шырокага спектру лекавых сродкаў, такіх як сіропы ад кашлю, сухія сіропы, ін\'екцыі, вітамінныя таблеткі і г.д.',
    ca: 'Fabricant i proveïdor d\'una àmplia gamma de productes medicinals com xarops per a la tos, xarops secs, injeccions, pastilles de vitamines, etc.',
    nl: 'Fabrikant en leverancier van een breed scala aan geneesmiddelen zoals hoestsiropen, droge siropen, injecties, vitaminetabletten enz.',
    id: 'Produsen dan Pemasok berbagai macam produk obat-obatan seperti Sirup Batuk, Sirup Kering, Injeksi, Tablet Vitamin dll.',
    it: 'Produttore e fornitore di una vasta gamma di medicinali come sciroppi per la tosse, sciroppi secchi, iniezioni, compresse di vitamine ecc.',
    ja: '咳止めシロップ、ドライシロップ、注射剤、ビタミン錠などの幅広い医薬品の製造および供給業者。',
    ko: '기침 시럽, 건조 시럽, 주사제, 비타민 정제 등 다양한 의약품의 제조 및 공급 업체.',
    la: 'Fabricator et Supplier de lato range medicinalium productorum ut Cough Syrups, Dry Syrups, Injection, Vitamin Tablets etc.',
    pt: 'Fabricante e Fornecedor de uma vasta gama de medicamentos como Xaropes para Tosse, Xaropes Secos, Injeção, Comprimidos de Vitaminas etc.',
    ru: 'Производитель и поставщик широкого спектра лекарственных средств, таких как сиропы от кашля, сухие сиропы, инъекции, витаминные таблетки и т. д.',
    tr: 'Öksürük Şurupları, Kuru Şuruplar, Enjeksiyon, Vitamin Tabletleri vb. gibi çok çeşitli tıbbi ürünlerin Üreticisi ve Tedarikçisi.',
    uk: 'Виробник і постачальник широкого асортименту лікарських засобів, таких як сиропи від кашлю, сухі сиропи, ін\'єкції, вітамінні таблетки тощо.',
    vi: 'Nhà sản xuất và cung cấp nhiều loại sản phẩm thuốc như Xi-rô ho, Xi-rô khô, Thuốc tiêm, Viên nén vitamin, v.v.'
  },
  'common.readMore': {
    en: 'Read More', hi: 'और पढ़ें', es: 'Leer Más', fr: 'Lire Plus', de: 'Mehr Lesen', ar: 'قراءة المزيد', zh: '阅读更多',
    af: 'Lees Meer', be: 'Чытаць далей', ca: 'Llegeix més', nl: 'Lees meer', id: 'Baca Selengkapnya', it: 'Leggi di più', ja: '続きを読む', ko: '더 읽기', la: 'Lege Plura', pt: 'Leia Mais', ru: 'Читать далее', tr: 'Daha Fazla Oku', uk: 'Читати далі', vi: 'Đọc thêm'
  },

  // About Section
  'about.title': {
    en: 'About US', hi: 'हमारे बारे में', es: 'Sobre Nosotros', fr: 'À Propos', de: 'Über Uns', ar: 'من نحن', zh: '关于我们',
    af: 'Oor Ons', be: 'Пра нас', ca: 'Sobre nosaltres', nl: 'Over ons', id: 'Tentang Kami', it: 'Chi siamo', ja: '私たちについて', ko: '회사 소개', la: 'De nobis', pt: 'Sobre nós', ru: 'О нас', tr: 'Hakkımızda', uk: 'Про нас', vi: 'Về chúng tôi'
  },
  'about.description': {
    en: 'Established in 2017, TG PHARMZ has emerged as a pioneering entity in the pharmaceutical industry. As a prominent exporter, manufacturer, and importer, we specialize in a diverse range of high-quality pharmaceutical products.',
    hi: '2017 में स्थापित, जी जे फार्मास्यूटिकल्स एलएलपी दवा उद्योग में एक अग्रणी संस्था के रूप में उभरा है। एक प्रमुख निर्यातक, निर्माता और आयातक के रूप में, हम उच्च गुणवत्ता वाले फार्मास्युटिकल उत्पादों की एक विविध श्रृंखला में विशेषज्ञ हैं।',
    es: 'Establecida en 2017, TG PHARMZ ha surgido como una entidad pionera en la industria farmacéutica. Como destacado exportador, fabricante e importador, nos especializamos en una amplia gama de productos farmacéuticos de alta calidad.',
    fr: "Fondée en 2017, TG PHARMZ s'est imposée comme une entité pionnière de l'industrie pharmaceutique. En tant qu'exportateur, fabricant et importateur de premier plan, nous sommes spécialisés dans une gamme variée de produits pharmaceutiques de haute qualité.",
    de: 'TG PHARMZ wurde 2017 gegründet und hat sich zu einem Pionierunternehmen in der Pharmaindustrie entwickelt. Als führender Exporteur, Hersteller und Importeur sind wir auf eine vielfältige Palette hochwertiger pharmazeutischer Produkte spezialisiert.',
    ar: 'تأسست شركة TG PHARMZ في عام 2017 ، وبرزت ككيان رائد في صناعة الأدوية. بصفتنا مصدرًا ومصنعًا ومستوردًا بارزًا ، نحن متخصصون في مجموعة متنوعة من المنتجات الصيدلانية عالية الجودة.',
    zh: 'TG PHARMZ成立于2017年，已成为制药行业的先锋实体。作为著名的出口商、制造商和进口商，我们专注于各种高质量的药品。',
    af: 'TG PHARMZ, wat in 2017 gestig is, het as \'n baanbrekersentiteit in die farmaseutiese industrie na vore gekom. As \'n prominente uitvoerder, vervaardiger en invoerder spesialiseer ons in \'n uiteenlopende reeks farmaseutiese produkte van hoë gehalte.',
    be: 'Кампанія TG PHARMZ, заснаваная ў 2017 годзе, стала піянерам у фармацэўтычнай прамысловасці. Як вядучы экспарцёр, вытворца і імпарцёр, мы спецыялізуемся на разнастайным асартыменце высакаякаснай фармацэўтычнай прадукцыі.',
    ca: 'Fundada el 2017, TG PHARMZ ha sorgit com una entitat pionera en la indústria farmacèutica. Com a destacat exportador, fabricant i importador, ens especialitzem en una àmplia gamma de productes farmacèutics d\'alta qualitat.',
    nl: 'TG PHARMZ, opgericht in 2017, heeft zich ontpopt als een baanbrekende entiteit in de farmaceutische industrie. Als prominente exporteur, fabrikant en importeur zijn wij gespecialiseerd in een breed scala aan hoogwaardige farmaceutische producten.',
    id: 'Didirikan pada tahun 2017, TG PHARMZ telah muncul sebagai entitas perintis dalam industri farmasi. Sebagai eksportir, produsen, dan importir terkemuka, kami mengkhususkan diri dalam berbagai macam produk farmasi berkualitas tinggi.',
    it: 'Fondata nel 2017, TG PHARMZ è emersa come un\'entità pionieristica nell\'industria farmaceutica. In qualità di importante esportatore, produttore e importatore, siamo specializzati in una vasta gamma di prodotti farmaceutici di alta qualità.',
    ja: '2017年に設立されたTG PHARMZは、製薬業界の先駆的な事業体として浮上しました。著名な輸出業者、製造業者、輸入業者として、私たちは高品質の医薬品の多様な範囲を専門としています。',
    ko: '2017년에 설립된 TG PHARMZ는 제약 산업의 선구적인 기업으로 부상했습니다. 저명한 수출업체, 제조업체 및 수입업체로서 당사는 다양한 고품질 의약품을 전문으로 합니다.',
    la: 'Constituta anno 2017, TG PHARMZ emersit ut entitas praevaricatrix in industria pharmaceutica. Ut prominent exportator, fabricator, et importator, specializamus in diversis range summus qualitas pharmaceutica products.',
    pt: 'Fundada em 2017, a TG PHARMZ emergiu como uma entidade pioneira na indústria farmacêutica. Como um proeminente exportador, fabricante e importador, especializamo-nos numa gama diversificada de produtos farmacêuticos de alta qualidade.',
    ru: 'Компания TG PHARMZ, основанная в 2017 году, стала пионером в фармацевтической промышленности. Являясь известным экспортером, производителем и импортером, мы специализируемся на широком спектре высококачественной фармацевтической продукции.',
    tr: '2017 yılında kurulan TG PHARMZ, ilaç endüstrisinde öncü bir kuruluş olarak ortaya çıkmıştır. Önde gelen bir ihracatçı, üretici ve ithalatçı olarak, çok çeşitli yüksek kaliteli farmasötik ürünlerde uzmanlaşmış bulunmaktayız.',
    uk: 'Заснована в 2017 році, TG PHARMZ стала піонером у фармацевтичній промисловості. Як відомий експортер, виробник та імпортер, ми спеціалізуємося на різноманітному асортименті високоякісної фармацевтичної продукції.',
    vi: 'Được thành lập vào năm 2017, TG PHARMZ đã nổi lên như một thực thể tiên phong trong ngành dược phẩm. Là nhà xuất khẩu, sản xuất và nhập khẩu nổi tiếng, chúng tôi chuyên cung cấp nhiều loại sản phẩm dược phẩm chất lượng cao.'
  },
  'about.certified': {
    en: 'Certified Quality', hi: 'प्रमाणित गुणवत्ता', es: 'Calidad Certificada', fr: 'Qualité Certifiée', de: 'Zertifizierte Qualität', ar: 'جودة معتمدة', zh: '认证质量',
    af: 'Gesertifiseerde Kwaliteit', be: 'Сертыфікаваная якасць', ca: 'Qualitat Certificada', nl: 'Gecertificeerde Kwaliteit', id: 'Kualitas Bersertifikat', it: 'Qualità Certificata', ja: '認定品質', ko: '인증 품질', la: 'Qualitas Certificata', pt: 'Qualidade Certificada', ru: 'Сертифицированное качество', tr: 'Sertifikalı Kalite', uk: 'Сертифікована якість', vi: 'Chất lượng được chứng nhận'
  },
  'about.global': {
    en: 'Global Reach', hi: 'वैश्विक पहुंच', es: 'Alcance Global', fr: 'Portée Mondiale', de: 'Globale Reichweite', ar: 'الوصول العالمي', zh: '全球覆盖',
    af: 'Globale Bereik', be: 'Глабальны ахоп', ca: 'Abast Global', nl: 'Wereldwijd Bereik', id: 'Jangkauan Global', it: 'Portata Globale', ja: 'グローバルリーチ', ko: '글로벌 도달 범위', la: 'Globalis Extensio', pt: 'Alcance Global', ru: 'Глобальный охват', tr: 'Küresel Erişim', uk: 'Глобальний охоплення', vi: 'Phạm vi toàn cầu'
  },
  'about.rd': {
    en: 'R&D Focused', hi: 'आर एंड डी केंद्रित', es: 'Enfoque en I+D', fr: 'Axé sur la R&D', de: 'F&E Fokussiert', ar: 'التركيز على البحث', zh: '专注研发',
    af: 'N&O Gefokus', be: 'НДВК Скіраваны', ca: 'Enfocat en R+D', nl: 'R&D Gericht', id: 'Fokus R&D', it: 'Focalizzato su R&S', ja: '研究開発重視', ko: 'R&D 중심', la: 'R&D Focussed', pt: 'Focado em P&D', ru: 'Ориентированный на НИОКР', tr: 'Ar-Ge Odaklı', uk: 'Орієнтований на НДДКР', vi: 'Tập trung R&D'
  },
  'about.support': {
    en: '24/7 Support', hi: '24/7 सहायता', es: 'Soporte 24/7', fr: 'Support 24/7', de: '24/7 Support', ar: 'دعم 24/7', zh: '24/7 支持',
    af: '24/7 Ondersteuning', be: 'Падтрымка 24/7', ca: 'Suport 24/7', nl: '24/7 Ondersteuning', id: 'Dukungan 24/7', it: 'Supporto 24/7', ja: '24時間年中無休サポート', ko: '24/7 지원', la: '24/7 Auxilium', pt: 'Suporte 24/7', ru: 'Поддержка 24/7', tr: '7/24 Destek', uk: 'Підтримка 24/7', vi: 'Hỗ trợ 24/7'
  },

  // Stats Section
  'stats.years': {
    en: 'Years of Experience', hi: 'वर्षों का अनुभव', es: 'Años de Experiencia', fr: 'Années d\'Expérience', de: 'Jahre Erfahrung', ar: 'سنوات الخبرة', zh: '经验年限',
    af: 'Jare Ervaring', be: 'Гадоў досведу', ca: 'Anys d\'Experiència', nl: 'Jaren Ervaring', id: 'Tahun Pengalaman', it: 'Anni di Esperienza', ja: '長年の経験', ko: '경험 연수', la: 'Anni Experientiae', pt: 'Anos de Experiência', ru: 'Лет опыта', tr: 'Yıllık Deneyim', uk: 'Років досвіду', vi: 'Năm kinh nghiệm'
  },
  'stats.products': {
    en: 'Products', hi: 'उत्पाद', es: 'Productos', fr: 'Produits', de: 'Produkte', ar: 'المنتجات', zh: '产品',
    af: 'Produkte', be: 'Прадукты', ca: 'Productes', nl: 'Producten', id: 'Produk', it: 'Prodotti', ja: '製品', ko: '제품', la: 'Producta', pt: 'Produtos', ru: 'Продукты', tr: 'Ürünler', uk: 'Продукти', vi: 'Sản phẩm'
  },
  'stats.clients': {
    en: 'Happy Clients', hi: 'खुश ग्राहक', es: 'Clientes Satisfechos', fr: 'Clients Satisfaits', de: 'Zufriedene Kunden', ar: 'عملاء سعداء', zh: '满意客户',
    af: 'Tevrede Kliënte', be: 'Задаволеныя кліенты', ca: 'Clients Satisfets', nl: 'Tevreden Klanten', id: 'Klien Bahagia', it: 'Clienti Soddisfatti', ja: '満足しているお客様', ko: '만족한 고객', la: 'Clientes Laeti', pt: 'Clientes Satisfeitos', ru: 'Довольные клиенты', tr: 'Mutlu Müşteriler', uk: 'Задоволені клієнти', vi: 'Khách hàng hài lòng'
  },
  'stats.countries': {
    en: 'Countries Served', hi: 'सेवा दिए गए देश', es: 'Países Atendidos', fr: 'Pays Desservis', de: 'Bediente Länder', ar: 'الدول التي تم خدمتها', zh: '服务国家',
    af: 'Lande Bedien', be: 'Абслугоўваемыя краіны', ca: 'Països Atesos', nl: 'Bedienende Landen', id: 'Negara yang Dilayani', it: 'Paesi Serviti', ja: 'サービス提供国', ko: '서비스 제공 국가', la: 'Nationes Servitae', pt: 'Países Atendidos', ru: 'Обслуживаемые страны', tr: 'Hizmet Verilen Ülkeler', uk: 'Обслуговувані країни', vi: 'Các quốc gia được phục vụ'
  },

  // Services Section
  'services.title': {
    en: 'Our Services', hi: 'हमारी सेवाएं', es: 'Nuestros Servicios', fr: 'Nos Services', de: 'Unsere Dienstleistungen', ar: 'خدماتنا', zh: '我们的服务',
    af: 'Ons Dienste', be: 'Нашы паслугі', ca: 'Els nostres serveis', nl: 'Onze Diensten', id: 'Layanan Kami', it: 'I Nostri Servizi', ja: '私たちのサービス', ko: '우리의 서비스', la: 'Nostra Servitia', pt: 'Nossos Serviços', ru: 'Наши услуги', tr: 'Hizmetlerimiz', uk: 'Наші послуги', vi: 'Dịch vụ của chúng tôi'
  },
  'services.contractManufacturing': {
    en: 'Contract Manufacturing', hi: 'अनुबंध विनिर्माण', es: 'Fabricación por Contrato', fr: 'Fabrication sous Contrat', de: 'Auftragsfertigung', ar: 'التصنيع التعاقدي', zh: '代工生产',
    af: 'Kontrakvervaardiging', be: 'Кантрактная вытворчасць', ca: 'Fabricació per contracte', nl: 'Contractproductie', id: 'Manufaktur Kontrak', it: 'Produzione conto terzi', ja: '受託製造', ko: '위탁 제조', la: 'Fabricatio Contractus', pt: 'Fabricação por Contrato', ru: 'Контрактное производство', tr: 'Sözleşmeli Üretim', uk: 'Контрактне виробництво', vi: 'Sản xuất hợp đồng'
  },
  'services.exportImport': {
    en: 'Export & Import', hi: 'निर्यात और आयात', es: 'Exportación e Importación', fr: 'Exportation et Importation', de: 'Export & Import', ar: 'التصدير والاستيراد', zh: '进出口',
    af: 'Uitvoer en Invoer', be: 'Экспарт і імпарт', ca: 'Exportació i Importació', nl: 'Export & Import', id: 'Ekspor & Impor', it: 'Esportazione e Importazione', ja: '輸出入', ko: '수출입', la: 'Exportatio et Importatio', pt: 'Exportação e Importação', ru: 'Экспорт и импорт', tr: 'İhracat ve İthalat', uk: 'Експорт та імпорт', vi: 'Xuất nhập khẩu'
  },
  'services.rd': {
    en: 'Research & Development', hi: 'अनुसंधान एवं विकास', es: 'Investigación y Desarrollo', fr: 'Recherche et Développement', de: 'Forschung & Entwicklung', ar: 'البحث والتطوير', zh: '研发',
    af: 'Navorsing en Ontwikkeling', be: 'Даследаванні і распрацоўкі', ca: 'Recerca i Desenvolupament', nl: 'Onderzoek & Ontwikkeling', id: 'Penelitian & Pengembangan', it: 'Ricerca e Sviluppo', ja: '研究開発', ko: '연구 개발', la: 'Investigatio et Progressio', pt: 'Pesquisa e Desenvolvimento', ru: 'Исследования и разработки', tr: 'Araştırma ve Geliştirme', uk: 'Дослідження та розробки', vi: 'Nghiên cứu & Phát triển'
  },
  'services.qualityControl': {
    en: 'Quality Control', hi: 'गुणवत्ता नियंत्रण', es: 'Control de Calidad', fr: 'Contrôle Qualité', de: 'Qualitätskontrolle', ar: 'مراقبة الجودة', zh: '质量控制',
    af: 'Gehaltebeheer', be: 'Кантроль якасці', ca: 'Control de Qualitat', nl: 'Kwaliteitscontrole', id: 'Kontrol Kualitas', it: 'Controllo Qualità', ja: '品質管理', ko: '품질 관리', la: 'Imperium Qualitatis', pt: 'Controle de Qualidade', ru: 'Контроль качества', tr: 'Kalite Kontrol', uk: 'Контроль якості', vi: 'Kiểm soát chất lượng'
  },
  'services.regulatoryAffairs': {
    en: 'Regulatory Affairs', hi: 'नियामक मामले', es: 'Asuntos Regulatorios', fr: 'Affaires Réglementaires', de: 'Regulierungsangelegenheiten', ar: 'الشؤون التنظيمية', zh: '法规事务',
    af: 'Regulerende Sake', be: 'Рэгулятарныя пытанні', ca: 'Afers Regulatoris', nl: 'Regelgevende Zaken', id: 'Urusan Regulasi', it: 'Affari Regolatori', ja: '規制関連業務', ko: '규제 업무', la: 'Res Regulatoriae', pt: 'Assuntos Regulatórios', ru: 'Регуляторные вопросы', tr: 'Düzenleyici İşler', uk: 'Регуляторні питання', vi: 'Các vấn đề pháp lý'
  },
  'services.distribution': {
    en: 'Sales & Distribution', hi: 'बिक्री और वितरण', es: 'Ventas y Distribución', fr: 'Ventes et Distribution', de: 'Vertrieb', ar: 'المبيعات والتوزيع', zh: '销售与分销',
    af: 'Verkope en Verspreiding', be: 'Продажы і дыстрыбуцыя', ca: 'Vendes i Distribució', nl: 'Verkoop & Distributie', id: 'Penjualan & Distribusi', it: 'Vendite e Distribuzione', ja: '販売と流通', ko: '판매 및 유통', la: 'Venditio et Distributio', pt: 'Vendas e Distribuição', ru: 'Продажи и дистрибуция', tr: 'Satış ve Dağıtım', uk: 'Продажі та дистрибуція', vi: 'Bán hàng & Phân phối'
  },

  // Excellence Section
  'excellence.title': {
    en: 'Excellence in Every Aspect', hi: 'हर पहलू में उत्कृष्टता', es: 'Excelencia en Cada Aspecto', fr: 'L\'Excellence sous Tous ses Aspects', de: 'Exzellenz in jeder Hinsicht', ar: 'التميز في كل جانب', zh: '全方位的卓越',
    af: 'Uitnemendheid in Elke Aspek', be: 'Дасканаласць ва ўсіх аспектах', ca: 'Excel·lència en Cada Aspecte', nl: 'Uitmuntendheid in Elk Aspect', id: 'Keunggulan dalam Setiap Aspek', it: 'Eccellenza in Ogni Aspetto', ja: 'あらゆる面での卓越性', ko: '모든 면에서의 탁월함', la: 'Excellentia in Omni Aspectu', pt: 'Excelência em Cada Aspecto', ru: 'Превосходство во всех аспектах', tr: 'Her Yönüyle Mükemmellik', uk: 'Досконалість у кожному аспекті', vi: 'Xuất sắc trong mọi khía cạnh'
  },
  'excellence.desc': {
    en: 'Delivering healthcare solutions backed by decades of expertise and innovation.', hi: 'दशकों की विशेषज्ञता और नवाचार द्वारा समर्थित स्वास्थ्य देखभाल समाधान प्रदान करना।', es: 'Ofreciendo soluciones de salud respaldadas por décadas de experiencia e innovación.', fr: "Fournir des solutions de santé soutenues par des décennies d'expertise et d'innovation.", de: 'Bereitstellung von Gesundheitslösungen, die auf jahrzehntelanger Erfahrung und Innovation basieren.', ar: 'تقديم حلول الرعاية الصحية المدعومة بعقود من الخبرة والابتكار.', zh: '提供数十年的专业知识和创新支持的医疗保健解决方案。',
    af: 'Lewering van gesondheidsorgoplossings gerugsteun deur dekades se kundigheid en innovasie.', be: 'Прадастаўленне медыцынскіх рашэнняў, падмацаваных дзесяцігоддзямі вопыту і інавацый.', ca: 'Oferint solucions sanitàries recolzades per dècades d\'experiència i innovació.', nl: 'Het leveren van gezondheidszorgoplossingen ondersteund door decennia aan expertise en innovatie.', id: 'Menyediakan solusi perawatan kesehatan yang didukung oleh puluhan tahun keahlian dan inovasi.', it: 'Fornire soluzioni sanitarie supportate da decenni di esperienza e innovazione.', ja: '数十年にわたる専門知識と革新に裏打ちされたヘルスケアソリューションを提供します。', ko: '수십 년의 전문 지식과 혁신으로 뒷받침되는 의료 솔루션을 제공합니다.', la: 'Solutiones sanitatis tradens decenniis peritiae et innovationis sustentatae.', pt: 'Oferecendo soluções de saúde apoiadas por décadas de experiência e inovação.', ru: 'Предоставление решений в области здравоохранения, подкрепленных десятилетиями опыта и инноваций.', tr: 'Onlarca yıllık uzmanlık ve inovasyonla desteklenen sağlık çözümleri sunmak.', uk: 'Надання рішень у сфері охорони здоров\'я, підкріплених десятиліттями досвіду та інновацій.', vi: 'Cung cấp các giải pháp chăm sóc sức khỏe được hỗ trợ bởi hàng thập kỷ kinh nghiệm và đổi mới.'
  },
  'excellence.who': {
    en: 'WHO-GMP Certified', hi: 'डब्ल्यूएचओ-जीएमपी प्रमाणित', es: 'Certificado WHO-GMP', fr: 'Certifié OMS-BPF', de: 'WHO-GMP Zertifiziert', ar: 'معتمد من WHO-GMP', zh: 'WHO-GMP认证',
    af: 'WGO-GMP Gesertifiseer', be: 'СЕРТЫФІКАТ WHO-GMP', ca: 'Certificat WHO-GMP', nl: 'WHO-GMP Gecertificeerd', id: 'Bersertifikat WHO-GMP', it: 'Certificato WHO-GMP', ja: 'WHO-GMP認定', ko: 'WHO-GMP 인증', la: 'WHO-GMP Certificatum', pt: 'Certificado WHO-GMP', ru: 'Сертифицировано ВОЗ-GMP', tr: 'WHO-GMP Sertifikalı', uk: 'Сертифіковано ВООЗ-GMP', vi: 'Được chứng nhận WHO-GMP'
  },
  'excellence.qa': {
    en: 'Quality Assurance', hi: 'गुणवत्ता आश्वासन', es: 'Garantía de Calidad', fr: 'Assurance Qualité', de: 'Qualitätssicherung', ar: 'ضمان الجودة', zh: '质量保证',
    af: 'Gehalteversekering', be: 'Забеспячэнне якасці', ca: 'Garantia de Qualitat', nl: 'Kwaliteitsborging', id: 'Jaminan Kualitas', it: 'Garanzia di Qualità', ja: '品質保証', ko: '품질 보증', la: 'Qualitas Assurantia', pt: 'Garantia de Qualidade', ru: 'Гарантия качества', tr: 'Kalite Güvencesi', uk: 'Гарантія якості', vi: 'Đảm bảo chất lượng'
  },
  'excellence.advrd': {
    en: 'Advanced R&D', hi: 'उन्नत आर एंड डी', es: 'I+D Avanzado', fr: 'R&D Avancée', de: 'Fortschrittliche F&E', ar: 'بحث وتطوير متقدم', zh: '先进研发',
    af: 'Gevorderde N&O', be: 'Пашыраныя НДВК', ca: 'R+D Avançat', nl: 'Geavanceerde R&D', id: 'R&D Lanjutan', it: 'R&S Avanzata', ja: '高度な研究開発', ko: '고급 R&D', la: 'R&D Progressus', pt: 'P&D Avançado', ru: 'Передовые НИОКР', tr: 'Gelişmiş Ar-Ge', uk: 'Передові НДДКР', vi: 'R&D tiên tiến'
  },
  'excellence.sustain': {
    en: 'Sustainable Growth', hi: 'सतत विकास', es: 'Crecimiento Sostenible', fr: 'Croissance Durable', de: 'Nachhaltiges Wachstum', ar: 'نمو مستدام', zh: '可持续增长',
    af: 'Volhoubare Groei', be: 'Устойлівы рост', ca: 'Creixement Sostenible', nl: 'Duurzame Groei', id: 'Pertumbuhan Berkelanjutan', it: 'Crescita Sostenibile', ja: '持続可能な成長', ko: '지속 가능한 성장', la: 'Crescita Sustentabilis', pt: 'Crescimento Sustentável', ru: 'Устойчивый рост', tr: 'Sürdürülebilir Büyüme', uk: 'Сталий розвиток', vi: 'Tăng trưởng bền vững'
  },
  'excellence.team': {
    en: 'Expert Team', hi: 'विशेषज्ञ टीम', es: 'Equipo Experto', fr: 'Équipe d\'Experts', de: 'Expertenteam', ar: 'فريق الخبراء', zh: '专家团队',
    af: 'Deskundige Span', be: 'Каманда экспертаў', ca: 'Equip Expert', nl: 'Expertteam', id: 'Tim Ahli', it: 'Team di Esperti', ja: '専門家チーム', ko: '전문가 팀', la: 'Turma Perita', pt: 'Equipe de Especialistas', ru: 'Команда экспертов', tr: 'Uzman Ekip', uk: 'Команда експертів', vi: 'Đội ngũ chuyên gia'
  },

  // Specialty Section
  'specialty.title': {
    en: 'Our Specialty', hi: 'हमारी विशेषता', es: 'Nuestra Especialidad', fr: 'Notre Spécialité', de: 'Unsere Spezialität', ar: 'تخصصنا', zh: '我们的专长',
    af: 'Ons Spesialiteit', be: 'Наша спецыяльнасць', ca: 'La nostra especialitat', nl: 'Onze Specialiteit', id: 'Spesialisasi Kami', it: 'La nostra specialità', ja: '私たちの専門', ko: '우리의 전문 분야', la: 'Nostra Specialitas', pt: 'Nossa Especialidade', ru: 'Наша специализация', tr: 'Uzmanlığımız', uk: 'Наша спеціалізація', vi: 'Chuyên môn của chúng tôi'
  },
  'specialty.accreditations': {
    en: 'Accreditations & Certifications', hi: 'प्रत्यायन और प्रमाणपत्र', es: 'Acreditaciones y Certificaciones', fr: 'Accréditations et Certifications', de: 'Akkreditierungen & Zertifizierungen', ar: 'الاعتمادات والشهادات', zh: '认证与证书',
    af: 'Akkreditasies en Sertifisering', be: 'Акрэдытацыі і сертыфікаты', ca: 'Acreditacions i Certificacions', nl: 'Accreditaties & Certificeringen', id: 'Akreditasi & Sertifikasi', it: 'Accreditamenti e Certificazioni', ja: '認定と認証', ko: '인증 및 증명서', la: 'Accreditationes et Certificationes', pt: 'Acreditações e Certificações', ru: 'Аккредитации и сертификаты', tr: 'Akreditasyonlar ve Sertifikalar', uk: 'Акредитації та сертифікати', vi: 'Chứng nhận & Công nhận'
  },
  'aboutPage.badge': {
    en: 'Company Profile', hi: 'कंपनी प्रोफाइल', es: 'Perfil de la Empresa', fr: "Profil de l'Entreprise", de: 'Unternehmensprofil', ar: 'ملف الشركة', zh: '公司简介',
    af: 'Maatskappy Profiel', be: 'Профіль кампаніі', ca: 'Perfil de l\'empresa', nl: 'Bedrijfsprofiel', id: 'Profil Perusahaan', it: 'Profilo aziendale', ja: '会社概要', ko: '회사 프로필', la: 'Profile Societatis', pt: 'Perfil da Empresa', ru: 'Профиль компании', tr: 'Şirket Profili', uk: 'Профіль компанії', vi: 'Hồ sơ công ty'
  },
  'aboutPage.welcome': {
    en: 'Welcome to', hi: 'आपका स्वागत है', es: 'Bienvenido a', fr: 'Bienvenue à', de: 'Willkommen bei', ar: 'مرحبًا بكم في', zh: '欢迎来到',
    af: 'Welkom by', be: 'Сардэчна запрашаем у', ca: 'Benvingut a', nl: 'Welkom bij', id: 'Selamat datang di', it: 'Benvenuto a', ja: 'ようこそ', ko: '에 오신 것을 환영합니다', la: 'Gratus ad', pt: 'Bem-vindo ao', ru: 'Добро пожаловать в', tr: 'Hoşgeldiniz', uk: 'Ласкаво просимо до', vi: 'Chào mừng đến với'
  },
  'aboutPage.intro': {
    en: 'A leading name in the pharmaceutical industry, committed to delivering high-quality healthcare solutions worldwide. With state-of-the-art manufacturing facilities and a dedicated research team, we strive to enhance patient well-being through innovation and excellence.',
    hi: 'फार्मास्युटिकल उद्योग में एक अग्रणी नाम, जो दुनिया भर में उच्च गुणवत्ता वाले स्वास्थ्य देखभाल समाधान प्रदान करने के लिए प्रतिबद्ध है। अत्याधुनिक विनिर्माण सुविधाओं और एक समर्पित अनुसंधान टीम के साथ, हम नवाचार और उत्कृष्टता के माध्यम से रोगी के कल्याण को बढ़ाने का प्रयास करते हैं।',
    es: 'Un nombre líder en la industria farmacéutica, comprometido con la entrega de soluciones de atención médica de alta calidad en todo el mundo. Con instalaciones de fabricación de última generación y un equipo de investigación dedicado, nos esforzamos por mejorar el bienestar del paciente a través de la innovación y la excelencia.',
    fr: "Un nom de premier plan dans l'industrie pharmaceutique, engagé à fournir des solutions de soins de santé de haute qualité dans le monde entier. Avec des installations de fabrication de pointe et une équipe de recherche dédiée, nous nous efforçons d'améliorer le bien-être des patients grâce à l'innovation et à l'excellence.",
    de: 'Ein führender Name in der Pharmaindustrie, der sich der Bereitstellung hochwertiger Gesundheitslösungen weltweit verschrieben hat. Mit modernsten Produktionsanlagen und einem engagierten Forschungsteam streben wir danach, das Wohlbefinden der Patienten durch Innovation und Exzellenz zu verbessern.',
    ar: 'اسم رائد في صناعة الأدوية ، ملتزم بتقديم حلول رعاية صحية عالية الجودة في جميع أنحاء العالم. من خلال مرافق التصنيع الحديثة وفريق البحث المتخصص ، نسعى جاهدين لتعزيز رفاهية المرضى من خلال الابتكار والتميز.',
    zh: '制药行业的领先品牌，致力于在全球范围内提供高质量的医疗保健解决方案。凭借最先进的生产设施和敬业的研究团队，我们致力于通过创新和卓越来提高患者的福祉。',
    af: "'n Toonaangewende naam in die farmaseutiese bedryf, verbind tot die lewering van gesondheidsorgoplossings van hoë gehalte wêreldwyd. Met die nuutste vervaardigingsfasiliteite en 'n toegewyde navorsingspan, streef ons daarna om pasiëntwelstand deur innovasie en uitnemendheid te verbeter.",
    be: 'Вядучае імя ў фармацэўтычнай прамысловасці, якое імкнецца прадастаўляць высакаякасныя медыцынскія рашэнні па ўсім свеце. Дзякуючы сучасным вытворчым магутнасцям і адданай камандзе даследчыкаў, мы імкнемся палепшыць дабрабыт пацыентаў праз інавацыі і дасканаласць.',
    ca: 'Un nom líder en la indústria farmacèutica, compromès a oferir solucions sanitàries d\'alta qualitat a tot el món. Amb instal·lacions de fabricació d\'última generació i un equip de recerca dedicat, ens esforcem per millorar el benestar del pacient mitjançant la innovació i l\'excel·lència.',
    nl: 'Een toonaangevende naam in de farmaceutische industrie, toegewijd aan het leveren van hoogwaardige gezondheidszorgoplossingen wereldwijd. Met ultramoderne productiefaciliteiten en een toegewijd onderzoeksteam streven we ernaar het welzijn van patiënten te verbeteren door middel van innovatie en uitmuntendheid.',
    id: 'Nama terkemuka dalam industri farmasi, berkomitmen untuk memberikan solusi perawatan kesehatan berkualitas tinggi di seluruh dunia. Dengan fasilitas manufaktur mutakhir dan tim peneliti yang berdedikasi, kami berusaha untuk meningkatkan kesejahteraan pasien melalui inovasi dan keunggulan.',
    it: 'Un nome leader nell\'industria farmaceutica, impegnato a fornire soluzioni sanitarie di alta qualità in tutto il mondo. Con impianti di produzione all\'avanguardia e un team di ricerca dedicato, ci sforziamo di migliorare il benessere dei pazienti attraverso l\'innovazione e l\'eccellenza.',
    ja: '製薬業界のリーダー的存在であり、世界中に高品質のヘルスケアソリューションを提供することに尽力しています。最先端の製造施設と専任の研究チームにより、革新と卓越性を通じて患者の幸福を向上させるよう努めています。',
    ko: '전 세계에 고품질 의료 솔루션을 제공하는 데 전념하는 제약 업계의 선두 주자입니다. 최첨단 제조 시설과 헌신적인 연구팀을 통해 혁신과 탁월함을 통해 환자의 복지를 향상시키기 위해 노력합니다.',
    la: 'Nomen princeps in industria pharmaceutica, commissum tradendis solutionibus sanitatis summus qualitas per orbem terrarum. Cum facilitatibus fabricandis statu-arte et turma investigativa dedicata, studemus augere bene esse patientis per innovationem et excellentiam.',
    pt: 'Um nome líder na indústria farmacêutica, comprometido em fornecer soluções de saúde de alta qualidade em todo o mundo. Com instalações de fabricação de última geração e uma equipe de pesquisa dedicada, nos esforçamos para melhorar o bem-estar do paciente por meio inovação e excelência.',
    ru: 'Ведущее имя в фармацевтической промышленности, приверженное предоставлению высококачественных решений в области здравоохранения по всему миру. Имея самые современные производственные мощности и преданную исследовательскую команду, мы стремимся улучшить благополучие пациентов с помощью инноваций и совершенства.',
    tr: 'Dünya çapında yüksek kaliteli sağlık çözümleri sunmaya kendini adamış, ilaç endüstrisinde lider bir isim. Son teknoloji üretim tesisleri ve özel bir araştırma ekibiyle, inovasyon ve mükemmellik yoluyla hasta refahını artırmaya çalışıyoruz.',
    uk: 'Провідне ім\'я у фармацевтичній промисловості, яке прагне надавати високоякісні рішення в галузі охорони здоров\'я по всьому світу. Завдяки найсучаснішим виробничим потужностям та відданій дослідницькій групі ми прагнемо покращити добробут пацієнтів завдяки інноваціям та досконалості.',
    vi: 'Một cái tên hàng đầu trong ngành dược phẩm, cam kết cung cấp các giải pháp chăm sóc sức khỏe chất lượng cao trên toàn thế giới. Với các cơ sở sản xuất hiện đại và đội ngũ nghiên cứu tận tâm, chúng tôi cố gắng nâng cao phúc lợi của bệnh nhân thông qua đổi mới và xuất sắc.'
  },
  'aboutPage.founder': {
    en: 'By working under the able guidance of a trusted leader, Mr. Dhiraj Rathod, TG PHARMZ has attained a competitive market position. The company is based in Mumbai, Maharashtra and was inception in the year 2017.',
    hi: 'एक भरोसेमंद नेता, श्री धीरज राठौड़ के कुशल मार्गदर्शन में काम करके, जी जे फार्मास्यूटिकल्स एलएलपी ने एक प्रतिस्पर्धी बाजार स्थिति हासिल की है। कंपनी मुम्बई, महाराष्ट्र में स्थित है और वर्ष 2017 में इसकी शुरुआत हुई थी।',
    es: 'Trabajando bajo la guía capaz de un líder confiable, el Sr. Dhiraj Rathod, TG PHARMZ ha alcanzado una posición competitiva en el mercado.',
    fr: 'En travaillant sous la direction compétente d\'un leader de confiance, M. Dhiraj Rathod, TG PHARMZ a atteint une position concurrentielle sur le marché.',
    de: 'Unter der fähigen Leitung eines vertrauenswürdigen Führers, Herrn Dhiraj Rathod, hat TG PHARMZ eine wettbewerbsfähige Marktposition erreicht.',
    ar: 'من خلال العمل تحت التوجيه القدير لزعيم موثوق به ، السيد ديراج راثود ، حققت TG PHARMZ مكانة سوقية تنافسية.',
    zh: '在值得信赖的领导者Dhiraj Rathod先生的干练指导下工作，TG PHARMZ获得了具有竞争力的市场地位。',
    af: 'Deur onder die bekwame leiding van \'n betroubare leier, mnr. Dhiraj Rathod, te werk, het TG PHARMZ \'n mededingende markposisie behaal. Die maatskappy is gebaseer in Mumbai, Maharashtra en is in 2017 gestig.',
    be: 'Працуючы пад умелым кіраўніцтвам даверанага лідэра, спадара Дхіраджа Ратхода, TG PHARMZ дасягнула канкурэнтнай пазіцыі на рынку. Кампанія знаходзіцца ў Мумбаі, Махараштра, і была заснавана ў 2017 годзе.',
    ca: 'Treballant sota la guia capaç d\'un líder de confiança, el Sr. Dhiraj Rathod, TG PHARMZ ha assolit una posició competitiva al mercat. L\'empresa té la seu a Mumbai, Maharashtra i va ser fundada l\'any 2017.',
    nl: 'Door te werken onder de bekwame leiding van een vertrouwde leider, de heer Dhiraj Rathod, heeft TG PHARMZ een concurrerende marktpositie verworven. Het bedrijf is gevestigd in Mumbai, Maharashtra en werd opgericht in 2017.',
    id: 'Dengan bekerja di bawah bimbingan yang cakap dari pemimpin terpercaya, Bapak Dhiraj Rathod, TG PHARMZ telah mencapai posisi pasar yang kompetitif. Perusahaan ini berbasis di Mumbai, Maharashtra dan didirikan pada tahun 2017.',
    it: 'Lavorando sotto la guida capace di un leader fidato, il signor Dhiraj Rathod, TG PHARMZ ha raggiunto una posizione di mercato competitiva. L\'azienda ha sede a Mumbai, Maharashtra ed è stata fondata nel 2017.',
    ja: '信頼できるリーダーであるディラージ・ラソッド氏の有能な指導の下で働くことにより、TG PHARMZは競争力のある市場地位を獲得しました。同社はマハラシュトラ州ムンバイに拠点を置き、2017年に設立されました。',
    ko: '신뢰할 수 있는 리더인 Dhiraj Rathod 씨의 유능한 지도 아래 TG PHARMZ는 경쟁력 있는 시장 지위를 확보했습니다. 이 회사는 마하라슈트라 주 뭄바이에 본사를 두고 있으며 2017년에 설립되었습니다.',
    la: 'Laborans sub ductu periti ducis, Domini Dhiraj Rathod, TG PHARMZ positionem mercatus competitivam consecuta est. Societas in Mumbai, Maharashtra, fundata est et anno 2017 incepta est.',
    pt: 'Trabalhando sob a orientação capaz de um líder de confiança, o Sr. Dhiraj Rathod, a TG PHARMZ alcançou uma posição de mercado competitiva. A empresa está sediada em Mumbai, Maharashtra e foi fundada no ano de 2017.',
    ru: 'Работая под умелым руководством доверенного лидера, г-на Дхираджа Ратхода, TG PHARMZ заняла конкурентную позицию на рынке. Компания базируется в Мумбаи, Махараштра, и была основана в 2017 году.',
    tr: 'Güvenilir bir lider olan Sayın Dhiraj Rathod\'un yetenekli rehberliğinde çalışarak, TG PHARMZ rekabetçi bir pazar konumu elde etmiştir. Şirket Mumbai, Maharashtra\'da bulunmaktadır ve 2017 yılında kurulmuştur.',
    uk: 'Працюючи під вмілим керівництвом довіреного лідера, пана Дхіраджа Ратхода, TG PHARMZ досягла конкурентної ринкової позиції. Компанія базується в Мумбаї, Махараштра, і була заснована в 2017 році.',
    vi: 'Bằng cách làm việc dưới sự hướng dẫn tài tình của một nhà lãnh đạo đáng tin cậy, ông Dhiraj Rathod, TG PHARMZ đã đạt được vị thế cạnh tranh trên thị trường. Công ty có trụ sở tại Mumbai, Maharashtra và được thành lập vào năm 2017.'
  },
  'aboutPage.missionTitle': {
    en: 'Our Mission', hi: 'हमारा मिशन', es: 'Nuestra Misión', fr: 'Notre Mission', de: 'Unsere Mission', ar: 'مهمتنا', zh: '我们的使命',
    af: 'Ons Missie', be: 'Наша місія', ca: 'La nostra missió', nl: 'Onze Missie', id: 'Misi Kami', it: 'La nostra missione', ja: '私たちの使命', ko: '우리의 사명', la: 'Nostra Missio', pt: 'Nossa Missão', ru: 'Наша миссия', tr: 'Misyonumuz', uk: 'Наша місія', vi: 'Sứ mệnh của chúng tôi'
  },
  'aboutPage.missionDesc': {
    en: 'To make life saving Therapeutic Solutions accessible to Humanity by becoming the most preferred global partner by joining hands with the medical fraternity.',
    hi: 'चिकित्सा बिरादरी के साथ हाथ मिलाकर सबसे पसंदीदा वैश्विक भागीदार बनकर मानवता के लिए जीवन रक्षक चिकित्सीय समाधान सुलभ बनाना।',
    es: 'Hacer accesibles las soluciones terapéuticas que salvan vidas a la humanidad convirtiéndonos en el socio global más preferido.',
    fr: 'Rendre les solutions thérapeutiques vitales accessibles à l\'humanité en devenant le partenaire mondial le plus préféré.',
    de: 'Lebensrettende therapeutische Lösungen für die Menschheit zugänglich zu machen, indem wir der bevorzugte globale Partner werden.',
    ar: 'لجعل الحلول العلاجية المنقذة للحياة في متناول البشرية من خلال أن نصبح الشريك العالمي الأكثر تفضيلاً.',
    zh: '通过与医学界携手成为最受青睐的全球合作伙伴，让人类能够获得挽救生命的治疗方案。',
    af: 'Om lewensreddende Terapeutiese Oplossings vir die Mensdom toeganklik te maak deur die mees voorkeur globale vennoot te word deur hande te vat met die mediese broederskap.',
    be: 'Зрабіць жыццёва важныя тэрапеўтычныя рашэнні даступнымі для чалавецтва, стаўшы найбольш пераважным глабальным партнёрам, аб\'яднаўшыся з медыцынскай супольнасцю.',
    ca: 'Fer accessibles les solucions terapèutiques que salven vides a la humanitat convertint-nos en el soci global més preferit unint forces amb la fraternitat mèdica.',
    nl: 'Levensreddende therapeutische oplossingen toegankelijk maken voor de mensheid door de meest geprefereerde wereldwijde partner te worden door samen te werken met de medische broederschap.',
    id: 'Untuk membuat Solusi Terapeutik penyelamat jiwa dapat diakses oleh Kemanusiaan dengan menjadi mitra global yang paling disukai dengan bergandengan tangan dengan komunitas medis.',
    it: 'Rendere le Soluzioni Terapeutiche salvavita accessibili all\'Umanità diventando il partner globale più preferito unendo le forze con la comunità medica.',
    ja: '医療界と協力して最も好ましいグローバルパートナーとなることで、人道のために命を救う治療ソリューションを利用可能にする。',
    ko: '의료계와 협력하여 가장 선호하는 글로벌 파트너가 됨으로써 인류에게 생명을 구하는 치료 솔루션을 제공합니다.',
    la: 'Ad solutiones therapeuticas vitae salvificas humanitati accessibiles facere, socius globalis praeferentissimus factus, cum fraternitate medica coniungens.',
    pt: 'Tornar as Soluções Terapêuticas que salvam vidas acessíveis à Humanidade, tornando-nos o parceiro global mais preferido, unindo forças com a fraternidade médica.',
    ru: 'Сделать жизненно важные терапевтические решения доступными для человечества, став наиболее предпочтительным глобальным партнером, объединившись с медицинским сообществом.',
    tr: 'Tıbbi camia ile el ele vererek en çok tercih edilen küresel ortak haline gelerek hayat kurtaran Terapötik Çözümleri İnsanlığa ulaştırmak.',
    uk: 'Зробити життєво важливі терапевтичні рішення доступними для людства, ставши найбільш бажаним глобальним партнером, об\'єднавшись з медичною спільнотою.',
    vi: 'Để làm cho các Giải pháp Trị liệu cứu sinh có thể tiếp cận được với Nhân loại bằng cách trở thành đối tác toàn cầu được ưa thích nhất bằng cách hợp tác với cộng đồng y tế.'
  },
  'aboutPage.visionTitle': {
    en: 'Our Vision', hi: 'हमारी दृष्टि', es: 'Nuestra Visión', fr: 'Notre Vision', de: 'Unsere Vision', ar: 'رؤيتنا', zh: '我们的愿景',
    af: 'Ons Visie', be: 'Нашае бачанне', ca: 'La nostra visió', nl: 'Onze Visie', id: 'Visi Kami', it: 'La nostra visione', ja: '私たちのビジョン', ko: '우리의 비전', la: 'Nostra Visio', pt: 'Nossa Visão', ru: 'Наше видение', tr: 'Vizyonumuz', uk: 'Наше бачення', vi: 'Tầm nhìn của chúng tôi'
  },
  'aboutPage.visionDesc': {
    en: 'At TG PHARMZ, our vision is to become a global leader in providing top-notch pharmaceutical products that contribute significantly to the well-being of individuals worldwide.',
    hi: 'जी जे फार्मास्यूटिकल्स एलएलपी में, हमारा दृष्टिकोण दुनिया भर के व्यक्तियों की भलाई में महत्वपूर्ण योगदान देने वाले शीर्ष श्रेणी के फार्मास्युटिकल उत्पाद प्रदान करने में वैश्विक नेता बनना है।',
    es: 'Nuestra visión es convertirnos en un líder mundial en la provisión de productos farmacéuticos de primera categoría.',
    fr: 'Notre vision est de devenir un leader mondial dans la fourniture de produits pharmaceutiques de premier ordre.',
    de: 'Unsere Vision ist es, ein weltweit führender Anbieter von erstklassigen pharmazeutischen Produkten zu werden.',
    ar: 'رؤيتنا هي أن نصبح شركة عالمية رائدة في تقديم منتجات صيدلانية من الدرجة الأولى تساهم بشكل كبير في رفاهية الأفراد في جميع أنحاء العالم.',
    zh: '我们的愿景是成为提供一流药品的全球领导者，为全世界个人的福祉做出重大贡献。',
    af: 'By TG PHARMZ is ons visie om \'n wêreldleier te word in die verskaffing van topgehalte farmaseutiese produkte wat beduidend bydra tot die welstand van individue wêreldwyd.',
    be: 'У TG PHARMZ наша мэта - стаць сусветным лідэрам у прадастаўленні першакласных фармацэўтычных прадуктаў, якія значна спрыяюць дабрабыту людзей ва ўсім свеце.',
    ca: 'A TG PHARMZ, la nostra visió és convertir-nos en un líder mundial en la provisió de productes farmacèutics de primera qualitat que contribueixin significativament al benestar de les persones a tot el món.',
    nl: 'Bij TG PHARMZ is onze visie om een wereldleider te worden in het leveren van eersteklas farmaceutische producten die aanzienlijk bijdragen aan het welzijn van individuen wereldwijd.',
    id: 'Di TG PHARMZ, visi kami adalah menjadi pemimpin global dalam menyediakan produk farmasi terbaik yang berkontribusi signifikan terhadap kesejahteraan individu di seluruh dunia.',
    it: 'In TG PHARMZ, la nostra visione è quella di diventare un leader globale nella fornitura di prodotti farmaceutici di prim\'ordine che contribuiscono in modo significativo al benessere degli individui in tutto il mondo.',
    ja: 'TG PHARMZのビジョンは、世界中の人々の幸福に大きく貢献する最高級の医薬品を提供するグローバルリーダーになることです。',
    ko: 'TG PHARMZ의 비전은 전 세계 개인의 복지에 크게 기여하는 최고 수준의 의약품을 제공하는 글로벌 리더가 되는 것입니다.',
    la: 'Apud TG PHARMZ, visio nostra est fieri princeps globalis in praebendis optimis productis pharmaceuticis quae ad bene esse hominum per orbem terrarum significanter conferunt.',
    pt: 'Na TG PHARMZ, a nossa visão é tornarmo-nos um líder global no fornecimento de produtos farmacêuticos de primeira linha que contribuam significativamente para o bem-estar de indivíduos em todo o mundo.',
    ru: 'В TG PHARMZ наше видение состоит в том, чтобы стать мировым лидером в предоставлении высококачественных фармацевтических продуктов, которые значительно способствуют благополучию людей во всем мире.',
    tr: 'TG PHARMZ olarak vizyonumuz, dünya genelindeki bireylerin refahına önemli ölçüde katkıda bulunan birinci sınıf farmasötik ürünler sunmada küresel bir lider olmaktır.',
    uk: 'У TG PHARMZ наше бачення полягає в тому, щоб стати світовим лідером у наданні першокласних фармацевтичних продуктів, які значно сприяють добробуту людей у всьому світі.',
    vi: 'Tại TG PHARMZ, tầm nhìn của chúng tôi là trở thành nhà lãnh đạo toàn cầu trong việc cung cấp các sản phẩm dược phẩm hàng đầu, đóng góp đáng kể vào phúc lợi của các cá nhân trên toàn thế giới.'
  },
  'aboutPage.clientSatTitle': {
    en: 'Client Satisfaction', hi: 'ग्राहक संतुष्टि', es: 'Satisfacción del Cliente', fr: 'Satisfaction Client', de: 'Kundenzufriedenheit', ar: 'رضا العملاء', zh: '客户满意度',
    af: 'Kliëntetevredenheid', be: 'Задаволенасць кліентаў', ca: 'Satisfacció del client', nl: 'Klanttevredenheid', id: 'Kepuasan Pelanggan', it: 'Soddisfazione del cliente', ja: '顧客満足度', ko: '고객 만족', la: 'Clientis Satisfactio', pt: 'Satisfação do Cliente', ru: 'Удовлетворенность клиентов', tr: 'Müşteri Memnuniyeti', uk: 'Задоволеність клієнтів', vi: 'Sự hài lòng của khách hàng'
  },
  'aboutPage.clientSatDesc': {
    en: 'Due to our moral business dealings and right business policy, we have successfully won the faith of customers.',
    hi: 'हमारे नैतिक व्यावसायिक व्यवहार और सही व्यावसायिक नीति के कारण, हमने ग्राहकों का विश्वास सफलतापूर्वक जीता है।',
    es: 'Debido a nuestros tratos comerciales morales, hemos ganado con éxito la fe de los clientes.',
    fr: 'Grâce à nos relations commerciales morales, nous avons gagné avec succès la confiance des clients.',
    de: 'Aufgrund unserer moralischen Geschäftspraktiken haben wir erfolgreich das Vertrauen der Kunden gewonnen.',
    ar: 'بفضل تعاملاتنا التجارية الأخلاقية ، نجحنا في كسب ثقة العملاء.',
    zh: '由于我们的道德商业交易和正确的商业政策，我们成功赢得了客户的信任。',
    af: 'As gevolg van ons morele sakebedrywighede en korrekte besigheidsbeleid, het ons die vertroue van kliënte suksesvol gewen.',
    be: 'Дзякуючы нашым маральным дзелавым адносінам і правільнай дзелавой палітыцы, мы паспяхова заваявалі давер кліентаў.',
    ca: 'A causa dels nostres tractes comercials morals i la política comercial correcta, hem guanyat amb èxit la confiança dels clients.',
    nl: 'Door onze morele zakelijke transacties en juiste bedrijfsbeleid hebben we met succes het vertrouwen van klanten gewonnen.',
    id: 'Karena transaksi bisnis moral kami dan kebijakan bisnis yang benar, kami telah berhasil memenangkan kepercayaan pelanggan.',
    it: 'Grazie alle nostre trattative commerciali morali e alla giusta politica aziendale, abbiamo conquistato con successo la fiducia dei clienti.',
    ja: '私たちの道徳的な商取引と正しい事業方針により、お客様の信頼を勝ち取ることができました。',
    ko: '우리의 도덕적인 사업 거래와 올바른 사업 정책 덕분에 우리는 고객의 신뢰를 성공적으로 얻었습니다.',
    la: 'Propter negotia nostra moralia et rectam negotii rationem, fidem clientium feliciter vicimus.',
    pt: 'Devido às nossas negociações comerciais morais e política comercial correta, conquistamos com sucesso a confiança dos clientes.',
    ru: 'Благодаря нашим моральным деловым отношениям и правильной деловой политике мы успешно завоевали доверие клиентов.',
    tr: 'Ahlaki iş ilişkilerimiz ve doğru iş politikamız sayesinde müşterilerin güvenini başarıyla kazandık.',
    uk: 'Завдяки нашим моральним діловим відносинам та правильній діловій політиці ми успішно завоювали довіру клієнтів.',
    vi: 'Nhờ các giao dịch kinh doanh có đạo đức và chính sách kinh doanh đúng đắn, chúng tôi đã thành công trong việc giành được niềm tin của khách hàng.'
  },
  'aboutPage.teamTitle': {
    en: 'Our Team', hi: 'हमारी टीम', es: 'Nuestro Equipo', fr: 'Notre Équipe', de: 'Unser Team', ar: 'فريقنا', zh: '我们的团队',
    af: 'Ons Span', be: 'Наша каманда', ca: 'El nostre equip', nl: 'Ons Team', id: 'Tim Kami', it: 'Il nostro team', ja: '私たちのチーム', ko: '우리 팀', la: 'Nostra Turma', pt: 'Nossa Equipe', ru: 'Наша команда', tr: 'Ekibimiz', uk: 'Наша команда', vi: 'Đội ngũ của chúng tôi'
  },
  'aboutPage.teamDesc': {
    en: 'We work with the assistance of a dedicated team that is known for its eagerness to learn and continuously improve.',
    hi: 'हम एक समर्पित टीम की सहायता से काम करते हैं जो सीखने और लगातार सुधार करने की अपनी उत्सुकता के लिए जानी जाती है।',
    es: 'Trabajamos con la asistencia de un equipo dedicado conocido por su afán de aprender y mejorar continuamente.',
    fr: 'Nous travaillons avec l\'assistance d\'une équipe dévouée connue pour son désir d\'apprendre et de s\'améliorer continuellement.',
    de: 'Wir arbeiten mit Unterstützung eines engagierten Teams, das für seine Lernbereitschaft bekannt ist.',
    ar: 'نحن نعمل بمساعدة فريق متخصص معروف بحرصه على التعلم والتحسين المستمر.',
    zh: '我们在一个以渴望学习和持续改进而闻名的敬业团队的协助下工作。',
    af: 'Ons werk met die hulp van \'n toegewyde span wat bekend is vir hul ywer om te leer en voortdurend te verbeter.',
    be: 'Мы працуем з дапамогай адданай каманды, якая вядомая сваім імкненнем вучыцца і пастаянна ўдасканальвацца.',
    ca: 'Treballem amb l\'assistència d\'un equip dedicat que és conegut per la seva voluntat d\'aprendre i millorar contínuament.',
    nl: 'Wij werken met de hulp van een toegewijd team dat bekend staat om zijn leergierigheid en voortdurende verbetering.',
    id: 'Kami bekerja dengan bantuan tim yang berdedikasi yang dikenal karena semangatnya untuk belajar dan terus meningkatkan diri.',
    it: 'Lavoriamo con l\'assistenza di un team dedicato noto per la sua voglia di imparare e migliorare continuamente.',
    ja: '私たちは、学習意欲と継続的な改善への意欲で知られる専任チームの支援を受けて働いています。',
    ko: '우리는 배우고 지속적으로 개선하려는 열정으로 유명한 헌신적인 팀의 도움을 받아 일합니다.',
    la: 'Operamus cum auxilio turmae dedicatae quae notatur pro studio discendi et continenter emendandi.',
    pt: 'Trabalhamos com a assistência de uma equipe dedicada que é conhecida por sua ânsia de aprender e melhorar continuamente.',
    ru: 'Мы работаем с помощью преданной команды, которая известна своим стремлением учиться и постоянно совершенствоваться.',
    tr: 'Öğrenmeye ve sürekli gelişmeye olan istekliliğiyle tanınan özel bir ekibin yardımıyla çalışıyoruz.',
    uk: 'Ми працюємо за допомогою відданої команди, яка відома своїм прагненням до навчання та постійного вдосконалення.',
    vi: 'Chúng tôi làm việc với sự hỗ trợ của một đội ngũ tận tâm, nổi tiếng về sự ham học hỏi và không ngừng cải thiện.'
  },
  'aboutPage.strengthsTitle': {
    en: 'Our Strengths', hi: 'हमारी ताकत', es: 'Nuestras Fortalezas', fr: 'Nos Forces', de: 'Unsere Stärken', ar: 'نقاط قوتنا', zh: '我们的优势',
    af: 'Ons Sterkpunte', be: 'Нашы моцныя бакі', ca: 'Les nostres fortaleses', nl: 'Onze Sterke Punten', id: 'Kekuatan Kami', it: 'I nostri punti di forza', ja: '私たちの強み', ko: '우리의 강점', la: 'Nostra Robora', pt: 'Nossos Pontos Fortes', ru: 'Наши сильные стороны', tr: 'Güçlü Yönlerimiz', uk: 'Наші сильні сторони', vi: 'Điểm mạnh của chúng tôi'
  },
  'aboutPage.strengthsDesc': {
    en: 'A good business philosophy successfully outlines a company\'s values, beliefs and guiding principles.',
    hi: 'एक अच्छा व्यावसायिक दर्शन सफलतापूर्वक कंपनी के मूल्यों, विश्वासों और मार्गदर्शक सिद्धांतों को रेखांकित करता है।',
    es: 'Una buena filosofía empresarial describe con éxito los valores, creencias y principios rectores de una empresa.',
    fr: 'Une bonne philosophie d\'entreprise décrit avec succès les valeurs, les croyances y los principios directores d\'une empresa.',
    de: 'Eine gute Unternehmensphilosophie beschreibt erfolgreich die Werte, Überzeugungen und Leitprinzipien eines Unternehmens.',
    ar: 'تحدد فلسفة العمل الجيدة بنجاح قيم الشركة ومعتقداتها ومبادئها التوجيهية.',
    zh: '良好的经营理念成功地概述了公司的价值观、信念和指导原则。',
    af: '\'n Goeie besigheidsfilosofie omlyn suksesvol \'n maatskappy se waardes, oortuigings en leidende beginsels.',
    be: 'Добрая бізнес-філасофія паспяхова акрэслівае каштоўнасці, перакананні і кіруючыя прынцыпы кампаніі.',
    ca: 'Una bona filosofia empresarial descriu amb èxit els valors, les creences i els principis rectors d\'una empresa.',
    nl: 'Een goede bedrijfsfilosofie schetst succesvol de waarden, overtuigingen en leidende principes van een bedrijf.',
    id: 'Filosofi bisnis yang baik berhasil menguraikan nilai-nilai, keyakinan, dan prinsip-prinsip panduan perusahaan.',
    it: 'Una buona filosofia aziendale delinea con successo i valori, le credenze e i principi guida di un\'azienda.',
    ja: '優れた経営理念は、企業の価値観、信念、指導原則をうまく概説しています。',
    ko: '좋은 사업 철학은 회사의 가치, 신념 및 지침 원칙을 성공적으로 설명합니다.',
    la: 'Bona philosophia negotii feliciter delineat valores, opiniones et principia regens societatis.',
    pt: 'Uma boa filosofia empresarial descreve com sucesso os valores, crenças e princípios orientadores de uma empresa.',
    ru: 'Хорошая деловая философия успешно описывает ценности, убеждения и руководящие принципы компании.',
    tr: 'İyi bir iş felsefesi, bir şirketin değerlerini, inançlarını ve yol gösterici ilkelerini başarıyla özetler.',
    uk: 'Добра бізнес-філософія успішно окреслює цінності, переконання та керівні принципи компанії.',
    vi: 'Một triết lý kinh doanh tốt sẽ phác thảo thành công các giá trị, niềm tin và nguyên tắc chỉ đạo của một công ty.'
  },

  // About Page Fact Sheet
  'fact.sheetTitle': {
    en: 'Company Fact Sheet', hi: 'कंपनी फैक्ट शीट', es: 'Hoja Informativa', fr: 'Fiche Technique', de: 'Unternehmensdatenblatt', ar: 'صحيفة بيانات الشركة', zh: '公司概况',
    af: 'Maatskappy Feiteblad', be: 'Інфармацыйны ліст кампаніі', ca: 'Fitxa de l\'empresa', nl: 'Bedrijfsfeitenblad', id: 'Lembar Fakta Perusahaan', it: 'Scheda informativa aziendale', ja: '会社概要', ko: '회사 사실 자료', la: 'Societatis Facta', pt: 'Ficha Técnica da Empresa', ru: 'Информационный лист компании', tr: 'Şirket Bilgi Formu', uk: 'Інформаційний лист компанії', vi: 'Bảng thông tin công ty'
  },
  'fact.ceo': {
    en: 'Name of CEO', hi: 'सीईओ का नाम', es: 'Nombre del CEO', fr: 'Nom du PDG', de: 'Name des CEO', ar: 'اسم الرئيس التنفيذي', zh: '首席执行官姓名',
    af: 'Naam van HUB', be: 'Імя генеральнага дырэктара', ca: 'Nom del CEO', nl: 'Naam van CEO', id: 'Nama CEO', it: 'Nome del CEO', ja: 'CEOの名前', ko: 'CEO 이름', la: 'Nomen CEO', pt: 'Nome do CEO', ru: 'Имя генерального директора', tr: 'CEO Adı', uk: 'Ім\'я генерального директора', vi: 'Tên CEO'
  },
  'fact.est': {
    en: 'Year of Establishment', hi: 'स्थापना का वर्ष', es: 'Año de Creación', fr: 'Année de Création', de: 'Gründungsjahr', ar: 'سنة التأسيس', zh: '成立年份',
    af: 'Jaar van Stigting', be: 'Год заснавання', ca: 'Any de creació', nl: 'Oprichtingsjaar', id: 'Tahun Pendirian', it: 'Anno di fondazione', ja: '設立年', ko: '설립 연도', la: 'Annus Institutionis', pt: 'Ano de Fundação', ru: 'Год основания', tr: 'Kuruluş Yılı', uk: 'Рік заснування', vi: 'Năm thành lập'
  },
  'fact.nature': {
    en: 'Nature of Business', hi: 'व्यापार की प्रकृति', es: 'Naturaleza del Negocio', fr: 'Nature de l\'Entreprise', de: 'Art des Geschäfts', ar: 'طبيعة العمل', zh: '业务性质',
    af: 'Aard van Besigheid', be: 'Характар бізнесу', ca: 'Naturalesa del negoci', nl: 'Aard van de Onderneming', id: 'Sifat Bisnis', it: 'Natura dell\'attività', ja: '事業の性質', ko: '사업의 성격', la: 'Natura Negotii', pt: 'Natureza do Negócio', ru: 'Характер бизнеса', tr: 'İşin Niteliği', uk: 'Характер бізнесу', vi: 'Bản chất kinh doanh'
  },
  'fact.employees': {
    en: 'Number of Employees', hi: 'कर्मचारियों की संख्या', es: 'Número de Empleados', fr: 'Nombre d\'Employés', de: 'Anzahl der Mitarbeiter', ar: 'عدد الموظفين', zh: '员工人数',
    af: 'Aantal Werknemers', be: 'Колькасць супрацоўнікаў', ca: 'Nombre d\'empleats', nl: 'Aantal Werknemers', id: 'Jumlah Karyawan', it: 'Numero di dipendenti', ja: '従業員数', ko: '직원 수', la: 'Numerus Operariorum', pt: 'Número de Funcionários', ru: 'Количество сотрудников', tr: 'Çalışan Sayısı', uk: 'Кількість працівників', vi: 'Số lượng nhân viên'
  },
  'fact.turnover': {
    en: 'Annual Turnover', hi: 'वार्षिक कारोबार', es: 'Facturación Anual', fr: 'Chiffre d\'Affaires Annuel', de: 'Jahresumsatz', ar: 'الدوران السنوي', zh: '年营业额',
    af: 'Jaarlikse Omset', be: 'Гадавы абарот', ca: 'Facturació anual', nl: 'Jaaromzet', id: 'Omset Tahunan', it: 'Fatturato annuo', ja: '年間売上高', ko: '연간 매출액', la: 'Annua Vectigalia', pt: 'Faturamento Anual', ru: 'Годовой оборот', tr: 'Yıllık Ciro', uk: 'Річний оборот', vi: 'Doanh thu hàng năm'
  },
  'fact.natureVal': {
    en: 'Exporter & Supplier', hi: 'निर्यातक और आपूर्तिकर्ता', es: 'Exportador y Proveedor', fr: 'Exportateur et Fournisseur', de: 'Exporteur & Lieferant', ar: 'المصدر والمورد', zh: '出口商和供应商',
    af: 'Uitvoerder & Verskaffer', be: 'Экспарцёр і пастаўшчык', ca: 'Exportador i Proveïdor', nl: 'Exporteur & Leverancier', id: 'Eksportir & Pemasok', it: 'Esportatore e Fornitore', ja: '輸出業者およびサプライヤー', ko: '수출업체 및 공급업체', la: 'Exportator et Suppletor', pt: 'Exportador e Fornecedor', ru: 'Экспортер и поставщик', tr: 'İhracatçı ve Tedarikçi', uk: 'Експортер та постачальник', vi: 'Nhà xuất khẩu & Nhà cung cấp'
  },

  // Contact Page
  'contact.title': {
    en: 'Contact Us', hi: 'संपर्क करें', es: 'Contáctenos', fr: 'Contactez-Nous', de: 'Kontaktiere Uns', ar: 'اتصل بنا', zh: '联系我们',
    af: 'Kontak Ons', be: 'Звяжыцеся з намі', ca: 'Contacta\'ns', nl: 'Neem Contact Op', id: 'Hubungi Kami', it: 'Contattaci', ja: 'お問い合わせ', ko: '문의하기', la: 'Contacta Nos', pt: 'Contacte-nos', ru: 'Свяжитесь с нами', tr: 'Bize Ulaşın', uk: 'Зв\'яжіться з нами', vi: 'Liên hệ với chúng tôi'
  },
  'contact.subtitle': {
    en: "We'd love to hear from you. Here's how you can reach us.",
    hi: 'हम आपसे सुनना पसंद करेंगे। यहाँ आप हम तक कैसे पहुँच सकते हैं।',
    es: 'Nos encantaría saber de usted. Así es como puede contactarnos.',
    fr: 'Nous aimerions avoir de vos nouvelles. Voici comment nous joindre.',
    de: 'Wir würden uns freuen, von Ihnen zu hören. So erreichen Sie uns.',
    ar: 'نحب أن نسمع منك. إليك كيف يمكنك الوصول إلينا.',
    zh: '我们很乐意听取您的意见。这是您联系我们的方式。',
    af: 'Ons hoor graag van u. Hier is hoe u ons kan bereik.',
    be: 'Мы хацелі б пачуць ад вас. Вось як вы можаце звязацца з намі.',
    ca: 'Ens encantaria saber de vosaltres. Aquí teniu com podeu contactar-nos.',
    nl: 'We horen graag van u. Zo kunt u ons bereiken.',
    id: 'Kami ingin mendengar dari Anda. Berikut cara Anda dapat menghubungi kami.',
    it: 'Ci piacerebbe sentirti. Ecco come puoi raggiungerci.',
    ja: 'ご連絡をお待ちしております。こちらからお問い合わせいただけます。',
    ko: '귀하의 의견을 듣고 싶습니다. 저희에게 연락하는 방법은 다음과 같습니다.',
    la: 'Libenter audiremus a te. Ecce quomodo nos attingere potes.',
    pt: 'Gostaríamos muito de ouvir de você. Veja como você pode nos contatar.',
    ru: 'Мы будем рады услышать от вас. Вот как вы можете связаться с нами.',
    tr: 'Sizden haber almaktan mutluluk duyarız. Bize nasıl ulaşabileceğiniz aşağıdadır.',
    uk: 'Ми будемо раді почути від вас. Ось як ви можете зв\'язатися з нами.',
    vi: 'Chúng tôi rất muốn nghe từ bạn. Đây là cách bạn có thể liên hệ với chúng tôi.'
  },
  'contact.founderQuote': {
    en: '"Our Always Committed to Good Health is a statement that is applicable for our customers, our communities and all of our stakeholders."',
    hi: '"अच्छे स्वास्थ्य के लिए हमारी हमेशा प्रतिबद्धता एक ऐसा कथन है जो हमारे ग्राहकों, हमारे समुदायों और हमारे सभी हितधारकों के लिए लागू होता है।"',
    es: '"Nuestro compromiso siempre con la buena salud es una declaración que se aplica a nuestros clientes, nuestras comunidades y todos nuestros grupos de interés."',
    fr: '"Notre engagement constant envers une bonne santé est une déclaration qui s\'applique à nos clients, nos communautés et toutes nos parties prenantes."',
    de: '"Unser ständiges Engagement für gute Gesundheit ist eine Aussage, die für unsere Kunden, unsere Gemeinschaften und alle unsere Stakeholder gilt."',
    ar: '"التزامنا الدائم بصحة جيدة هو بيان ينطبق على عملائنا ومجتمعاتنا وجميع أصحاب المصلحة لدينا."',
    zh: '"我们始终致力于健康，这一声明适用于我们的客户、社区和所有利益相关者。"',
    af: '"Ons Altyd Toegewyd aan Goeie Gesondheid is \'n stelling wat van toepassing is op ons kliënte, ons gemeenskappe en al ons belanghebbendes."',
    be: '"Наша заўсёды прыхільнасць добраму здароўю - гэта заява, якая датычыцца нашых кліентаў, нашых супольнасцей і ўсіх нашых зацікаўленых бакоў."',
    ca: '"El nostre compromís sempre amb la bona salut és una declaració aplicable als nostres clients, les nostres comunitats i tots els nostres grups d\'interès."',
    nl: '"Onze Altijd Toegewijd aan Goede Gezondheid is een verklaring die van toepassing is op onze klanten, onze gemeenschappen en al onze belanghebbenden."',
    id: '"Komitmen Kami Selalu untuk Kesehatan yang Baik adalah pernyataan yang berlaku untuk pelanggan kami, komunitas kami, dan semua pemangku kepentingan kami."',
    it: '"Il nostro impegno costante per la buona salute è una dichiarazione applicabile ai nostri clienti, alle nostre comunità e a tutti i nostri stakeholder."',
    ja: '"私たちの常に良い健康へのコミットメントは、お客様、コミュニティ、そしてすべてのステークホルダーに適用される声明です。"',
    ko: '"우리의 항상 좋은 건강에 대한 헌신은 고객, 지역 사회 및 모든 이해 관계자에게 적용되는 진술입니다."',
    la: '"Nostra semper ad bonam valetudinem obligatio est enuntiatio quae ad clientes nostros, communitates nostras et omnes partes interessatas pertinet."',
    pt: '"Nosso Compromisso Sempre com a Boa Saúde é uma declaração aplicável aos nossos clientes, nossas comunidades e todos os nossos stakeholders."',
    ru: '"Наше постоянное стремление к хорошему здоровью - это заявление, применимое к нашим клиентам, нашим сообществам и всем нашим заинтересованным сторонам."',
    tr: '"İyi Sağlığa Her Zaman Bağlılığımız, müşterilerimiz, topluluklarımız ve tüm paydaşlarımız için geçerli bir ifadedir."',
    uk: '"Наше постійне прагнення до доброго здоров\'я - це заява, яка стосується наших клієнтів, наших громад та всіх наших зацікавлених сторін."',
    vi: '"Cam kết Luôn vì Sức khỏe Tốt của chúng tôi là một tuyên bố áp dụng cho khách hàng, cộng đồng và tất cả các bên liên quan của chúng tôi."'
  },
  'contact.visit': {
    en: 'Visit Us', hi: 'हमें मिलें', es: 'Visítenos', fr: 'Rendez-nous Visite', de: 'Besuchen Sie Uns', ar: 'زورونا', zh: '拜访我们',
    af: 'Besoek Ons', be: 'Наведайце нас', ca: 'Visita\'ns', nl: 'Bezoek Ons', id: 'Kunjungi Kami', it: 'Vieni a trovarci', ja: '私たちを訪問', ko: '방문하기', la: 'Visita Nos', pt: 'Visite-nos', ru: 'Посетите нас', tr: 'Bizi Ziyaret Edin', uk: 'Відвідайте нас', vi: 'Ghé thăm chúng tôi'
  },
  'contact.call': {
    en: 'Call Us', hi: 'हमें कॉल करें', es: 'Llámenos', fr: 'Appelez-Nous', de: 'Rufen Sie Uns An', ar: 'اتصل بنا', zh: '致电我们',
    af: 'Bel Ons', be: 'Патэлефануйце нам', ca: 'Truca\'ns', nl: 'Bel Ons', id: 'Telepon Kami', it: 'Chiamaci', ja: 'お電話ください', ko: '전화하기', la: 'Voca Nos', pt: 'Ligue-nos', ru: 'Позвоните нам', tr: 'Bizi Arayın', uk: 'Зателефонуйте нам', vi: 'Gọi cho chúng tôi'
  },
  'contact.email': {
    en: 'Email Us', hi: 'हमें ईमेल करें', es: 'Envíenos un Email', fr: 'Envoyez-nous un Email', de: 'Mailen Sie Uns', ar: 'راسلنا عبر البريد الإلكتروني', zh: '发邮件给我们',
    af: 'E-pos Ons', be: 'Напішыце нам', ca: 'Envia\'ns un correu electrònic', nl: 'E-mail Ons', id: 'Email Kami', it: 'Inviaci un\'e-mail', ja: 'メールでお問い合わせ', ko: '이메일 보내기', la: 'Mitte Nos', pt: 'Envie-nos um e-mail', ru: 'Напишите нам', tr: 'Bize E-posta Gönderin', uk: 'Напишіть нам', vi: 'Gửi email cho chúng tôi'
  },
  'contact.business': {
    en: 'Business Details', hi: 'व्यापार विवरण', es: 'Detalles del Negocio', fr: 'Détails de l\'Entreprise', de: 'Geschäftsdetails', ar: 'تفاصيل العمل', zh: '业务详情',
    af: 'Besigheidsbesonderhede', be: 'Дэталі бізнесу', ca: 'Detalls del negoci', nl: 'Bedrijfsgegevens', id: 'Detail Bisnis', it: 'Dettagli aziendali', ja: '事業詳細', ko: '사업 세부 정보', la: 'Negotii Deta', pt: 'Detalhes do Negócio', ru: 'Детали бизнеса', tr: 'İş Detayları', uk: 'Деталі бізнесу', vi: 'Chi tiết kinh doanh'
  },
  'contact.formTitle': {
    en: 'Get a call back', hi: 'वापस कॉल प्राप्त करें', es: 'Recibir una llamada', fr: 'Être rappelé', de: 'Rückruf anfordern', ar: 'احصل على مكالمة', zh: '回电',
    af: 'Kry \'n terugbel', be: 'Атрымаць зваротны званок', ca: 'Rebre una trucada', nl: 'Teruggebeld worden', id: 'Dapatkan panggilan balik', it: 'Richiedi una richiamata', ja: '折り返し電話をかける', ko: '전화 회신 받기', la: 'Accipe vocationem', pt: 'Receber uma chamada', ru: 'Заказать обратный звонок', tr: 'Geri Arama Alın', uk: 'Отримати зворотний дзвінок', vi: 'Yêu cầu gọi lại'
  },
  'contact.formName': {
    en: 'Name', hi: 'नाम', es: 'Nombre', fr: 'Nom', de: 'Name', ar: 'الاسم', zh: '姓名',
    af: 'Naam', be: 'Імя', ca: 'Nom', nl: 'Naam', id: 'Nama', it: 'Nome', ja: '名前', ko: '이름', la: 'Nomen', pt: 'Nome', ru: 'Имя', tr: 'Ad', uk: 'Ім\'я', vi: 'Tên'
  },
  'contact.formEmail': {
    en: 'Email', hi: 'ईमेल', es: 'Email', fr: 'Email', de: 'E-Mail', ar: 'البريد الإلكتروني', zh: '电子邮件',
    af: 'E-pos', be: 'Электронная пошта', ca: 'Correu electrònic', nl: 'E-mail', id: 'Email', it: 'Email', ja: 'メール', ko: '이메일', la: 'Epistula', pt: 'E-mail', ru: 'Электронная почта', tr: 'E-posta', uk: 'Електронна пошта', vi: 'Email'
  },
  'contact.formSubject': {
    en: 'Subject', hi: 'विषय', es: 'Asunto', fr: 'Sujet', de: 'Betreff', ar: 'الموضوع', zh: '主题',
    af: 'Onderwerp', be: 'Тэма', ca: 'Assumpte', nl: 'Onderwerp', id: 'Subjek', it: 'Oggetto', ja: '件名', ko: '제목', la: 'Subiectum', pt: 'Assunto', ru: 'Тема', tr: 'Konu', uk: 'Тема', vi: 'Chủ đề'
  },
  'contact.formMessage': {
    en: 'Message', hi: 'संदेश', es: 'Mensaje', fr: 'Message', de: 'Nachricht', ar: 'الرسالة', zh: '留言',
    af: 'Boodskap', be: 'Паведамленне', ca: 'Missatge', nl: 'Bericht', id: 'Pesan', it: 'Messaggio', ja: 'メッセージ', ko: '메시지', la: 'Nuntius', pt: 'Mensagem', ru: 'Сообщение', tr: 'Mesaj', uk: 'Повідомлення', vi: 'Tin nhắn'
  },
  'contact.send': {
    en: 'Send Message', hi: 'संदेश भेजें', es: 'Enviar Mensaje', fr: 'Envoyer', de: 'Nachricht Senden', ar: 'إرسال الرسالة', zh: '发送信息',
    af: 'Stuur Boodskap', be: 'Адправіць паведамленне', ca: 'Enviar missatge', nl: 'Bericht Verzenden', id: 'Kirim Pesan', it: 'Invia messaggio', ja: 'メッセージを送信', ko: '메시지 보내기', la: 'Mitte Nuntium', pt: 'Enviar Mensagem', ru: 'Отправить сообщение', tr: 'Mesaj Gönder', uk: 'Надіслати повідомлення', vi: 'Gửi tin nhắn'
  },

  // Navigation Extra
  'nav.careers': {
    en: 'Careers', hi: 'करियर', es: 'Carreras', fr: 'Carrières', de: 'Karriere', ar: 'وظائف', zh: '职业',
    af: 'Loopbane', be: 'Кар\'ера', ca: 'Carreres', nl: 'Carrières', id: 'Karir', it: 'Carriere', ja: 'キャリア', ko: '채용', la: 'Curricula', pt: 'Carreiras', ru: 'Карьера', tr: 'Kariyer', uk: 'Кар\'єра', vi: 'Nghề nghiệp'
  },
  'nav.privacy': {
    en: 'Privacy Policy', hi: 'गोपनीयता नीति', es: 'Política de Privacidad', fr: 'Confidentialité', de: 'Datenschutz', ar: 'سياسة الخصوصية', zh: '隐私政策',
    af: 'Privaatheidsbeleid', be: 'Палітыка прыватнасці', ca: 'Política de privadesa', nl: 'Privacybeleid', id: 'Kebijakan Privasi', it: 'Informativa sulla privacy', ja: 'プライバシーポリシー', ko: '개인 정보 처리 방침', la: 'Politica Secreti', pt: 'Política de Privacidade', ru: 'Политика конфиденциальности', tr: 'Gizlilik Politikası', uk: 'Політика конфіденційності', vi: 'Chính sách bảo mật'
  },
  'nav.terms': {
    en: 'Terms of Service', hi: 'सेवा की शर्तें', es: 'Términos de Servicio', fr: 'Conditions', de: 'Nutzungsbedingungen', ar: 'شروط الخدمة', zh: '服务条款',
    af: 'Diensbepalings', be: 'Умовы абслугоўвання', ca: 'Termes del servei', nl: 'Servicevoorwaarden', id: 'Ketentuan Layanan', it: 'Termini di servizio', ja: '利用規約', ko: '서비스 약관', la: 'Termini Servitii', pt: 'Termos de Serviço', ru: 'Условия обслуживания', tr: 'Hizmet Şartları', uk: 'Умови надання послуг', vi: 'Điều khoản dịch vụ'
  },
  'nav.sitemap': {
    en: 'Sitemap', hi: 'साइटमैप', es: 'Mapa del Sitio', fr: 'Plan du Site', de: 'Sitemap', ar: 'خريطة الموقع', zh: '网站地图',
    af: 'Werfkaart', be: 'Карта сайта', ca: 'Mapa del lloc', nl: 'Sitemap', id: 'Peta Situs', it: 'Mappa del sito', ja: 'サイトマップ', ko: '사이트맵', la: 'Situs Tabula', pt: 'Mapa do Site', ru: 'Карта сайта', tr: 'Site Haritası', uk: 'Карта сайту', vi: 'Sơ đồ trang web'
  },


  // Footer
  'footer.tagline': {
    en: 'Committed to advancing healthcare through innovation, quality, and global partnerships.', hi: 'नवाचार, गुणवत्ता और वैश्विक साझेदारी के माध्यम से स्वास्थ्य सेवा को आगे बढ़ाने के लिए प्रतिबद्ध।', es: 'Comprometidos con el avance de la salud mediante innovación, calidad y alianzas globales.', fr: "Engagés à faire progresser les soins de santé grâce à l'innovation, la qualité et les partenariats mondiaux.", de: 'Engagiert für die Weiterentwicklung des Gesundheitswesens durch Innovation, Qualität und globale Partnerschaften.', ar: 'ملتزمون بتطوير الرعاية الصحية من خلال الابتكار والجودة والشراكات العالمية.', zh: '致力于通过创新、质量和全球合作推动医疗保健发展。',
    af: 'Verbind tot die bevordering van gesondheidsorg deur innovasie, kwaliteit en wêreldwye vennootskappe.', be: 'Мы імкнемся да развіцця аховы здароўя праз інавацыі, якасць і глабальнае партнёрства.', ca: 'Compromesos amb l\'avanç de l\'atenció sanitària mitjançant la innovació, la qualitat i les associacions globals.', nl: 'Toegewijd aan het bevorderen van de gezondheidszorg door middel van innovatie, kwaliteit en wereldwijde partnerschappen.', id: 'Berkomitmen untuk memajukan perawatan kesehatan melalui inovasi, kualitas, dan kemitraan global.', it: 'Impegnati a far progredire l\'assistenza sanitaria attraverso l\'innovazione, la qualità e le partnership globali.', ja: '革新、品質、そしてグローバルなパートナーシップを通じて医療を前進させることに尽力しています。', ko: '혁신, 품질 및 글로벌 파트너십을 통해 의료 서비스를 발전시키는 데 전념하고 있습니다.', la: 'Commissum ad promovendam curam sanitatis per innovationem, qualitatem et societates globales.', pt: 'Comprometidos com o avanço da saúde através da inovação, qualidade e parcerias globais.', ru: 'Мы стремимся развивать здравоохранение посредством инноваций, качества и глобального партнерства.', tr: 'İnovasyon, kalite ve küresel ortaklıklar yoluyla sağlık hizmetlerini ilerletmeye kararlıdır.', uk: 'Ми прагнемо розвивати охорону здоров\'я за допомогою інновацій, якості та глобального партнерства.', vi: 'Cam kết thúc đẩy chăm sóc sức khỏe thông qua đổi mới, chất lượng và hợp tác toàn cầu.'
  },
  'footer.quickLinks': {
    en: 'Quick Links', hi: 'त्वरित लिंक', es: 'Enlaces Rápidos', fr: 'Liens Rapides', de: 'Schnelllinks', ar: 'روابط سريعة', zh: '快速链接',
    af: 'Vinnige skakels', be: 'Хуткія спасылкі', ca: 'Enllaços ràpids', nl: 'Snelle links', id: 'Tautan Cepat', it: 'Link veloci', ja: 'クイックリンク', ko: '빠른 링크', la: 'Nexus celeres', pt: 'Links Rápidos', ru: 'Быстрые ссылки', tr: 'Hızlı Linkler', uk: 'Швидкі посилання', vi: 'Liên kết nhanh'
  },
  'footer.contact': {
    en: 'Contact Info', hi: 'संपर्क जानकारी', es: 'Información de Contacto', fr: 'Coordonnées', de: 'Kontaktinfo', ar: 'معلومات الاتصال', zh: '联系信息',
    af: 'Kontakinligting', be: 'Кантактная інфармацыя', ca: 'Informació de contacte', nl: 'Contactgegevens', id: 'Info Kontak', it: 'Informazioni di contatto', ja: '連絡先情報', ko: '연락처 정보', la: 'Contactus Info', pt: 'Informações de contato', ru: 'Контактная информация', tr: 'İletişim Bilgileri', uk: 'Контактна інформація', vi: 'Thông tin liên hệ'
  },
  'footer.newsletter': {
    en: 'Newsletter', hi: 'न्यूज़लेटर', es: 'Boletín', fr: 'Newsletter', de: 'Newsletter', ar: 'النشرة الإخبارية', zh: '通讯',
    af: 'Nuusbrief', be: 'Бюлетэнь', ca: 'Butlletí', nl: 'Nieuwsbrief', id: 'Buletin', it: 'Newsletter', ja: 'ニュースレター', ko: '뉴스레터', la: 'Nuntius', pt: 'Boletim informativo', ru: 'Новостная рассылка', tr: 'Bülten', uk: 'Інформаційний бюлетень', vi: 'Bản tin'
  },
  'footer.subscribe': {
    en: 'Subscribe', hi: 'सब्सक्राइब करें', es: 'Suscribirse', fr: "S'abonner", de: 'Abonnieren', ar: 'اشترك', zh: '订阅',
    af: 'Teken in', be: 'Падпісацца', ca: 'Subscriu-te', nl: 'Abonneren', id: 'Langganan', it: 'Iscriviti', ja: '購読', ko: '구독', la: 'Subscribere', pt: 'Inscrever-se', ru: 'Подписаться', tr: 'Abone Ol', uk: 'Підписатися', vi: 'Đăng ký'
  },
  'footer.rights': {
    en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।', es: 'Todos los derechos reservados.', fr: 'Tous droits réservés.', de: 'Alle Rechte vorbehalten.', ar: 'جميع الحقوق محفوظة.', zh: '版权所有。',
    af: 'Alle regte voorbehou.', be: 'Усе правы абаронены.', ca: 'Tots els drets reservats.', nl: 'Alle rechten voorbehouden.', id: 'Semua hak dilindungi.', it: 'Tutti i diritti riservati.', ja: '無断複写・転載を禁じます。', ko: '모든 권리 보유.', la: 'Omnia iura reservata.', pt: 'Todos os direitos reservados.', ru: 'Все права защищены.', tr: 'Tüm hakları saklıdır.', uk: 'Всі права захищені.', vi: 'Đã đăng ký Bản quyền.'
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'be', name: 'Беларуская мова', flag: '🇧🇾' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ca', name: 'Català', flag: '🇦🇩' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'la', name: 'Latin', flag: '🏛️' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];
