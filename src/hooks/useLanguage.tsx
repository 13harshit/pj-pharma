import { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'ar' | 'zh';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', hi: 'होम', es: 'Inicio', fr: 'Accueil', de: 'Startseite', ar: 'الرئيسية', zh: '首页' },
  'nav.company': { en: 'Company', hi: 'कंपनी', es: 'Empresa', fr: 'Entreprise', de: 'Unternehmen', ar: 'الشركة', zh: '公司' },
  'nav.about': { en: 'About Us', hi: 'हमारे बारे में', es: 'Sobre Nosotros', fr: 'À Propos', de: 'Über Uns', ar: 'من نحن', zh: '关于我们' },
  'nav.certification': { en: 'Certification', hi: 'प्रमाणन', es: 'Certificación', fr: 'Certification', de: 'Zertifizierung', ar: 'الشهادة', zh: '认证' },
  'nav.regulatory': { en: 'Regulatory', hi: 'नियामक', es: 'Regulatorio', fr: 'Réglementaire', de: 'Regulierung', ar: 'تنظيمي', zh: '法规' },
  'nav.innovation': { en: 'Innovation', hi: 'नवाचार', es: 'Innovación', fr: 'Innovation', de: 'Innovation', ar: 'ابتكار', zh: '创新' },
  'nav.quality': { en: 'Quality Control', hi: 'गुणवत्ता नियंत्रण', es: 'Control de Calidad', fr: 'Contrôle Qualité', de: 'Qualitätskontrolle', ar: 'مراقبة الجودة', zh: '质量控制' },
  'nav.products': { en: 'Products', hi: 'उत्पाद', es: 'Productos', fr: 'Produits', de: 'Produkte', ar: 'المنتجات', zh: '产品' },
  'nav.pharmaceutical': { en: 'Pharmaceutical Products', hi: 'फार्मास्युटिकल उत्पाद', es: 'Productos Farmacéuticos', fr: 'Produits Pharmaceutiques', de: 'Pharmazeutische Produkte', ar: 'المنتجات الصيدلانية', zh: '药品' },
  'nav.nutraceutical': { en: 'Nutraceuticals & Food Supplements', hi: 'न्यूट्रास्युटिकल्स और खाद्य पूरक', es: 'Nutracéuticos y Suplementos', fr: 'Nutraceutiques', de: 'Nahrungsergänzungsmittel', ar: 'المكملات الغذائية', zh: '营养品' },
  'nav.herbal': { en: 'Herbal & Cosmetic', hi: 'हर्बल और कॉस्मेटिक', es: 'Herbal y Cosmético', fr: 'Herbes et Cosmétiques', de: 'Kräuter und Kosmetik', ar: 'عشبي ومستحضرات التجميل', zh: '草药和化妆品' },
  'nav.foodgrains': { en: 'Food Grains, Oil & Spices', hi: 'अनाज, तेल और मसाले', es: 'Cereales, Aceite y Especias', fr: 'Céréales, Huile et Épices', de: 'Getreide, Öl und Gewürze', ar: 'الحبوب والزيوت والتوابل', zh: '粮油香料' },
  'nav.chemicals': { en: 'Industrial & Fine Chemicals', hi: 'औद्योगिक और फाइन केमिकल्स', es: 'Químicos Industriales', fr: 'Produits Chimiques', de: 'Industriechemikalien', ar: 'المواد الكيميائية', zh: '化工产品' },
  'nav.rd': { en: 'Research & Development', hi: 'अनुसंधान एवं विकास', es: 'I+D', fr: 'R&D', de: 'F&E', ar: 'البحث والتطوير', zh: '研发' },
  'nav.facilities': { en: 'Facilities', hi: 'सुविधाएं', es: 'Instalaciones', fr: 'Installations', de: 'Einrichtungen', ar: 'المرافق', zh: '设施' },
  'nav.manufacturing': { en: 'Manufacturing', hi: 'विनिर्माण', es: 'Fabricación', fr: 'Fabrication', de: 'Fertigung', ar: 'التصنيع', zh: '制造' },
  'nav.export': { en: 'Export', hi: 'निर्यात', es: 'Exportación', fr: 'Exportation', de: 'Export', ar: 'تصدير', zh: '出口' },
  'nav.sales': { en: 'Sales & Distribution', hi: 'बिक्री और वितरण', es: 'Ventas y Distribución', fr: 'Ventes et Distribution', de: 'Vertrieb', ar: 'المبيعات والتوزيع', zh: '销售与分销' },
  'nav.contract': { en: 'Contract Manufacturing', hi: 'अनुबंध विनिर्माण', es: 'Fabricación por Contrato', fr: 'Fabrication sous Contrat', de: 'Auftragsfertigung', ar: 'التصنيع التعاقدي', zh: '代工生产' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क', es: 'Contacto', fr: 'Contact', de: 'Kontakt', ar: 'اتصل بنا', zh: '联系' },
  
  // Hero Section
  'hero.title': { en: 'Pioneering Healthcare Solutions', hi: 'स्वास्थ्य समाधान में अग्रणी', es: 'Soluciones de Salud Pioneras', fr: 'Solutions de Santé Pionnières', de: 'Bahnbrechende Gesundheitslösungen', ar: 'حلول رعاية صحية رائدة', zh: '开创医疗保健解决方案' },
  'hero.subtitle': { en: 'Leading pharmaceutical manufacturer delivering innovative medicines and healthcare products to improve lives globally.', hi: 'अग्रणी फार्मास्युटिकल निर्माता जो वैश्विक स्तर पर जीवन को बेहतर बनाने के लिए नवीन दवाएं और स्वास्थ्य उत्पाद प्रदान करता है।', es: 'Fabricante farmacéutico líder que ofrece medicinas innovadoras para mejorar vidas a nivel mundial.', fr: 'Fabricant pharmaceutique leader fournissant des médicaments innovants pour améliorer la vie dans le monde.', de: 'Führender Pharmahersteller, der innovative Medikamente liefert, um Leben weltweit zu verbessern.', ar: 'شركة أدوية رائدة تقدم أدوية مبتكرة لتحسين الحياة عالمياً', zh: '领先的制药商，提供创新药物和医疗产品，改善全球生活。' },
  'hero.cta.contact': { en: 'Get in Touch', hi: 'संपर्क करें', es: 'Contáctenos', fr: 'Contactez-nous', de: 'Kontaktieren', ar: 'تواصل معنا', zh: '联系我们' },
  'hero.cta.products': { en: 'Explore Products', hi: 'उत्पाद देखें', es: 'Ver Productos', fr: 'Voir Produits', de: 'Produkte erkunden', ar: 'استكشف المنتجات', zh: '探索产品' },
  
  // Stats
  'stats.years': { en: 'Years of Excellence', hi: 'उत्कृष्टता के वर्ष', es: 'Años de Excelencia', fr: "Années d'Excellence", de: 'Jahre Exzellenz', ar: 'سنوات التميز', zh: '卓越年数' },
  'stats.products': { en: 'Products Portfolio', hi: 'उत्पाद पोर्टफोलियो', es: 'Portafolio de Productos', fr: 'Portefeuille de Produits', de: 'Produktportfolio', ar: 'محفظة المنتجات', zh: '产品组合' },
  'stats.countries': { en: 'Countries Served', hi: 'देशों में सेवा', es: 'Países Atendidos', fr: 'Pays Desservis', de: 'Bediente Länder', ar: 'الدول المخدومة', zh: '服务国家' },
  'stats.clients': { en: 'Global Partners', hi: 'वैश्विक भागीदार', es: 'Socios Globales', fr: 'Partenaires Mondiaux', de: 'Globale Partner', ar: 'شركاء عالميون', zh: '全球合作伙伴' },
  
  // Services
  'services.title': { en: 'Our Expertise', hi: 'हमारी विशेषज्ञता', es: 'Nuestra Experiencia', fr: 'Notre Expertise', de: 'Unsere Expertise', ar: 'خبرتنا', zh: '我们的专业知识' },
  'services.subtitle': { en: 'Comprehensive pharmaceutical solutions across multiple therapeutic areas', hi: 'कई चिकित्सीय क्षेत्रों में व्यापक फार्मास्युटिकल समाधान', es: 'Soluciones farmacéuticas integrales en múltiples áreas terapéuticas', fr: 'Solutions pharmaceutiques complètes dans plusieurs domaines thérapeutiques', de: 'Umfassende pharmazeutische Lösungen in verschiedenen therapeutischen Bereichen', ar: 'حلول صيدلانية شاملة في مجالات علاجية متعددة', zh: '跨多个治疗领域的综合制药解决方案' },
  
  // Common
  'common.learnMore': { en: 'Learn More', hi: 'और जानें', es: 'Saber Más', fr: 'En Savoir Plus', de: 'Mehr Erfahren', ar: 'اعرف المزيد', zh: '了解更多' },
  'common.readMore': { en: 'Read More', hi: 'और पढ़ें', es: 'Leer Más', fr: 'Lire Plus', de: 'Mehr Lesen', ar: 'قراءة المزيد', zh: '阅读更多' },
  'common.viewAll': { en: 'View All', hi: 'सभी देखें', es: 'Ver Todo', fr: 'Voir Tout', de: 'Alle Anzeigen', ar: 'عرض الكل', zh: '查看全部' },
  
  // Footer
  'footer.tagline': { en: 'Committed to advancing healthcare through innovation, quality, and global partnerships.', hi: 'नवाचार, गुणवत्ता और वैश्विक साझेदारी के माध्यम से स्वास्थ्य सेवा को आगे बढ़ाने के लिए प्रतिबद्ध।', es: 'Comprometidos con el avance de la salud mediante innovación, calidad y alianzas globales.', fr: "Engagés à faire progresser les soins de santé grâce à l'innovation, la qualité et les partenariats mondiaux.", de: 'Engagiert für die Weiterentwicklung des Gesundheitswesens durch Innovation, Qualität und globale Partnerschaften.', ar: 'ملتزمون بتطوير الرعاية الصحية من خلال الابتكار والجودة والشراكات العالمية.', zh: '致力于通过创新、质量和全球合作推动医疗保健发展。' },
  'footer.quickLinks': { en: 'Quick Links', hi: 'त्वरित लिंक', es: 'Enlaces Rápidos', fr: 'Liens Rapides', de: 'Schnelllinks', ar: 'روابط سريعة', zh: '快速链接' },
  'footer.contact': { en: 'Contact Info', hi: 'संपर्क जानकारी', es: 'Información de Contacto', fr: 'Coordonnées', de: 'Kontaktinfo', ar: 'معلومات الاتصال', zh: '联系信息' },
  'footer.newsletter': { en: 'Newsletter', hi: 'न्यूज़लेटर', es: 'Boletín', fr: 'Newsletter', de: 'Newsletter', ar: 'النشرة الإخبارية', zh: '通讯' },
  'footer.subscribe': { en: 'Subscribe', hi: 'सब्सक्राइब करें', es: 'Suscribirse', fr: "S'abonner", de: 'Abonnieren', ar: 'اشترك', zh: '订阅' },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।', es: 'Todos los derechos reservados.', fr: 'Tous droits réservés.', de: 'Alle Rechte vorbehalten.', ar: 'جميع الحقوق محفوظة.', zh: '版权所有。' },
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
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];
