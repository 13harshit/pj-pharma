import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Leaf, Heart, Sun, Activity, Droplet, Sprout, CheckCircle2 } from "lucide-react";

// Data Structure for Products
interface ProductItem {
    sno: number;
    name: string;
    packing: string;
}

interface CategorySection {
    title: string;
    note?: string;
    items: ProductItem[];
}

const productData: Record<string, CategorySection> = {
    "Syrups": {
        title: "Syrups",
        note: "Note: All Syrups are also available without Sugar i.e Sugar free syrups.",
        items: [
            { sno: 1, name: "LIVER TONIC", packing: "60,100,200,220,500,1000 ml or as per your requirements" },
            { sno: 2, name: "LIVER TONIC ( DOUBLE STRENGTH )", packing: "" },
            { sno: 3, name: "LIVER + ENZYME", packing: "" },
            { sno: 4, name: "UTERINE TONIC", packing: "" },
            { sno: 5, name: "UTERINE TONIC – FORTE", packing: "" },
            { sno: 6, name: "ENZYME", packing: "" },
            { sno: 7, name: "MULTIVITAMIN", packing: "" },
            { sno: 8, name: "COUGH", packing: "" },
            { sno: 9, name: "COUGH( COLOURFUL)", packing: "" },
            { sno: 10, name: "STONE REMOVAL", packing: "" },
            { sno: 11, name: "BLOOD PURIFIER", packing: "" },
            { sno: 12, name: "MEMORY BOOSTER", packing: "" },
            { sno: 13, name: "ANTACID", packing: "" },
            { sno: 14, name: "IRON TONIC", packing: "" },
            { sno: 15, name: "BEDWETTING", packing: "" },
            { sno: 16, name: "FOR PROSTATE", packing: "" },
            { sno: 17, name: "ANTI-DIABETIC", packing: "" },
            { sno: 18, name: "CHOLESTEROL", packing: "" },
            { sno: 19, name: "LAXATIVE", packing: "" },
            { sno: 20, name: "LEUCORRHOEA", packing: "" },
            { sno: 21, name: "URINARY PROBLEMS", packing: "" },
            { sno: 22, name: "URIC ACID & ARTHRITIS", packing: "" }
        ]
    },
    "Drops": {
        title: "Drops",
        items: [
            { sno: 1, name: "LIVER", packing: "15,30,60 ml or as per your requirements" },
            { sno: 2, name: "LIVER (DOUBLE STRENGTH)", packing: "" },
            { sno: 3, name: "LIVER + ENZYME", packing: "" },
            { sno: 4, name: "MULTIVITAMIN", packing: "" },
            { sno: 5, name: "PANCH TULSI DROPS", packing: "" }
        ]
    },
    "Gel/Creams": {
        title: "Gel / Creams",
        items: [
            { sno: 1, name: "PAIN KILLER GEL", packing: "5,15,25,30,60,90 gm or as per your requirements" },
            { sno: 2, name: "PAIN KILLER OINTMENT", packing: "" },
            { sno: 3, name: "Anti allergic creams", packing: "" },
            { sno: 4, name: "Antiseptic creams", packing: "" },
            { sno: 5, name: "Face creams", packing: "" },
            { sno: 6, name: "Breast Massgae gel", packing: "" },
            { sno: 7, name: "Time increasing cream", packing: "" }
        ]
    },
    "Oils": {
        title: "Oils",
        items: [
            { sno: 1, name: "ARTHRITIS PAIN OIL", packing: "Fliptop bottle 20,30,50,100 ml,Spray pump bottle 50,100ml Plain bottle 30,60,100 ml,Roll on bottle 50ml or as per your requirements" },
            { sno: 2, name: "MAHANARAYAN AND NILGIRI PAIN OIL", packing: "" },
            { sno: 3, name: "HAIR OIL", packing: "" },
            { sno: 4, name: "MAHABHRINHGRAJ HAIR OIL", packing: "" },
            { sno: 5, name: "BABY MASSAGE OIL", packing: "" },
            { sno: 6, name: "MEN SEXUAL OIL", packing: "" },
            { sno: 7, name: "BREAST MASSAGE OIL", packing: "" }
        ]
    },
    "Powder": {
        title: "Powder",
        items: [
            { sno: 1, name: "PROTIEN POWDER ( For Regular use ) Flavors: Chocolate, Vanilla, Strawberry,Elaichi, Banana.", packing: "50,100,150,200,450&500gm or as per your requirements" },
            { sno: 2, name: "PROTIEN POWDER Sugar free: ( For Regular use ) Flavors: Chocolate, Vanilla, Strawberry,Elaichi, Banana.", packing: "" },
            { sno: 3, name: "PROTIEN POWDER ( For Gym use ) Flavors: Chocolate, Vanilla, Strawberry,Elaichi, Banana.", packing: "" },
            { sno: 4, name: "SPIRULINA PROTIEN POWER Flavors: Chocolate, Vanilla, Strawberrie ,Elaichi, Banana.", packing: "" },
            { sno: 5, name: "LACTATION GRANULES/POWDER(For breastfeeding mother’s ) Flavours: Vanilla,Strawberry, Elaichi, Banana.", packing: "" },
            { sno: 6, name: "WEIGHT LOSS GRANULES", packing: "" },
            { sno: 7, name: "LAXATIVE GRANULES", packing: "" },
            { sno: 8, name: "LAXATIVE Churan/ Powder", packing: "" },
            { sno: 9, name: "ARTHRITIS", packing: "" },
            { sno: 10, name: "STONE REMOVAL", packing: "" },
            { sno: 11, name: "SEXUAL POWER", packing: "" },
            { sno: 12, name: "COUGH", packing: "" },
            { sno: 13, name: "ASTHMA", packing: "" },
            { sno: 14, name: "ENZYME", packing: "" },
            { sno: 15, name: "LAXATIVE", packing: "" },
            { sno: 16, name: "TRIPHALA", packing: "" },
            { sno: 17, name: "LAVANBHASKAR", packing: "" },
            { sno: 18, name: "MEHANDI HERBAL POWDER", packing: "" },
            { sno: 19, name: "GILOY", packing: "" },
            { sno: 20, name: "MULETHI", packing: "" },
            { sno: 21, name: "AMLA", packing: "" },
            { sno: 22, name: "ARJUN CHHAL", packing: "" },
            { sno: 23, name: "ANTIBIOTIC", packing: "" },
            { sno: 24, name: "VIJAYSAR", packing: "" },
            { sno: 25, name: "LAXATIVE POWDER", packing: "" },
            { sno: 26, name: "ANTI-DIARRHOEAL POWDER", packing: "" },
            { sno: 27, name: "LIVER POWDER", packing: "" },
            { sno: 28, name: "DIGESTIVE ENZYMES POWDER", packing: "" },
            { sno: 29, name: "BATISA POWDER", packing: "" }
        ]
    },
    "Capsules": {
        title: "Capsules Section",
        note: "10 Capsule Blister or in bottles as per yours requirement",
        items: [
            { sno: 1, name: "ARTHRITIS", packing: "Blister, all size bottle pack or as per your requirements" },
            { sno: 2, name: "STONE REMOVAL", packing: "" },
            { sno: 3, name: "SEXUAL POWER", packing: "" },
            { sno: 4, name: "LIVER", packing: "" },
            { sno: 5, name: "UTERINE", packing: "" },
            { sno: 6, name: "ANTI-PILES", packing: "" },
            { sno: 7, name: "BLOOD PURIFIER", packing: "" },
            { sno: 8, name: "MEMORY BOOSTER", packing: "" },
            { sno: 9, name: "ANTACID", packing: "" },
            { sno: 10, name: "IRON", packing: "" },
            { sno: 11, name: "ANTI-DIABETIC", packing: "" },
            { sno: 12, name: "ANTI-STRESS", packing: "" },
            { sno: 13, name: "LAXATIVE", packing: "" },
            { sno: 14, name: "FOR ECZEMA", packing: "" },
            { sno: 15, name: "FOR LEUCORRHOEA", packing: "" },
            { sno: 16, name: "GENERAL FITNESS", packing: "" },
            { sno: 17, name: "SLIMMING", packing: "" },
            { sno: 18, name: "WEIGHT GAIN", packing: "" },
            { sno: 19, name: "ANTI-DENGUE", packing: "" },
            { sno: 20, name: "IMMUNE BOOSTER", packing: "" },
            { sno: 21, name: "SPERM INCREASING", packing: "" },
            { sno: 22, name: "HEALTHY HEART", packing: "" },
            { sno: 23, name: "LACTATION", packing: "" },
            { sno: 24, name: "AYURVEDIC", packing: "" },
            { sno: 25, name: "ANTIBIOTIC", packing: "" },
            { sno: 26, name: "HAIR GROW CAPSULE", packing: "" },
            { sno: 27, name: "ENZYME", packing: "" },
            { sno: 28, name: "FOR IRREGULAR MENSIS", packing: "" }
        ]
    },
    "Single Herb Capsules": {
        title: "Single Herb Capsule Section",
        items: [
            { sno: 1, name: "CHIRAYTA", packing: "Blister, all size bottle pack or as per your requirements" },
            { sno: 2, name: "METHIBEEJ", packing: "" },
            { sno: 3, name: "KUTKI", packing: "" },
            { sno: 4, name: "SHATAVARI", packing: "" },
            { sno: 5, name: "SAFED MUSLI", packing: "" },
            { sno: 6, name: "CURCUMINE", packing: "" },
            { sno: 7, name: "GILOY", packing: "" },
            { sno: 8, name: "PAPAYA", packing: "" },
            { sno: 9, name: "ASHWAGANDHA", packing: "" },
            { sno: 10, name: "KONCH BEEJ", packing: "" },
            { sno: 11, name: "GARLIC", packing: "" },
            { sno: 12, name: "SHALLAKI", packing: "" },
            { sno: 13, name: "GREEN TEA", packing: "" },
            { sno: 14, name: "MORINGA", packing: "" },
            { sno: 15, name: "SPIRULINA", packing: "" },
            { sno: 16, name: "SHILAJEET", packing: "" },
            { sno: 17, name: "BAKUCHI", packing: "" },
            { sno: 18, name: "ARJUN CHHAL", packing: "" }
        ]
    },
    "Juices": {
        title: "Oral Liquid Juice Section",
        items: [
            { sno: 1, name: "AMLA", packing: "500,1000,2000ml or as per your requirements" },
            { sno: 2, name: "TRIPHALA", packing: "" },
            { sno: 3, name: "ALOEVERA", packing: "" },
            { sno: 4, name: "GILOY", packing: "" }
        ]
    },
    "Cosmetics": {
        title: "Cosmetic Section",
        items: [
            { sno: 1, name: "HERBAL HAIR SHAMPOO", packing: "60,100,200,220,500,1000 ml with flip-top,pump or as per your requirements" },
            { sno: 2, name: "NEEM SOAP", packing: "75,100 gm" },
            { sno: 3, name: "ALOEVERA SOAP", packing: "" },
            { sno: 4, name: "COOLMINT SOAP", packing: "" },
            { sno: 5, name: "ROSE SOAP", packing: "" },
            { sno: 6, name: "LEMON SOAP", packing: "" },
            { sno: 7, name: "SAFFRON SOAP", packing: "" },
            { sno: 8, name: "TULSI SOAP", packing: "" },
            { sno: 9, name: "JASMINE SOAP", packing: "" },
            { sno: 10, name: "LAVENDER SOAP", packing: "" },
            { sno: 11, name: "CHARCOAL SOAP", packing: "" },
            { sno: 12, name: "NEEM FACE WASH", packing: "60,100,200,220,500,1000 ml with flip-top,pump or as per your requirements" },
            { sno: 13, name: "ALOEVERA FACE WASH", packing: "" },
            { sno: 14, name: "TULSI FACE WASH", packing: "" },
            { sno: 15, name: "LEMON FACE WASH", packing: "" },
            { sno: 16, name: "ROSE FACE WASH", packing: "" },
            { sno: 17, name: "PAPAYA FACE WASH", packing: "" },
            { sno: 18, name: "NEEM+TULSI FACE WASH", packing: "" },
            { sno: 19, name: "NEEM +HALDI FACE WASH", packing: "" }
        ]
    },
    "Makeover": {
        title: "Makeover Items in Herbal",
        items: [
            { sno: 1, name: "FACE TONER", packing: "60,100,200,220,500,1000 ml with flip-top,pump or as per your requirements" },
            { sno: 2, name: "BODY LOTION", packing: "" },
            { sno: 3, name: "HAND SANITISER", packing: "" },
            { sno: 4, name: "HAND WASH", packing: "" },
            { sno: 5, name: "GULAAB JAL", packing: "" }
        ]
    },
    "Tablets": {
        title: "Tablet Section",
        note: "10 Tablets Blister or in bottles as per yours requirement",
        items: [
            { sno: 1, name: "JOINT PAIN", packing: "Blister, all size bottle pack or as per your requirements" },
            { sno: 2, name: "HYPERACIDITY", packing: "" },
            { sno: 3, name: "SKIN PROBLEMS", packing: "" },
            { sno: 4, name: "GILOY", packing: "" },
            { sno: 5, name: "DIABETIC", packing: "" },
            { sno: 6, name: "CONSTIPATION", packing: "" },
            { sno: 7, name: "LIVER", packing: "" },
            { sno: 8, name: "ENZYME", packing: "" },
            { sno: 9, name: "ANTI-BIOTIC", packing: "" }
        ]
    }
};

const HerbalAndCosmetics = () => {
    const [activeTab, setActiveTab] = useState("Syrups");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-emerald-50 font-sans text-slate-900">
            <Navbar />

            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-32 pb-10">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-64 lg:h-auto relative">
                        <img
                            src="/Herbal-and-Cosmetics.jpg"
                            alt="Herbal and Cosmetics"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 bg-emerald-900 text-white flex flex-col justify-center">
                        <span className="inline-block px-3 py-1 bg-emerald-700 rounded-full text-xs font-bold tracking-wider mb-4 w-fit">
                            Herbal and Cosmetics
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                            Where Beauty Meets Nature
                        </h1>
                        <p className="text-emerald-100 mb-6 leading-relaxed">
                            At TG PHARMZ LLP, we welcome you to a world where beauty meets nature. Our Herbal and Cosmetics line is a harmonious blend of botanical richness and scientific innovation, designed to elevate your skincare and beauty routine. As a premier Manufacturer and Supplier, we immerse you in pure, natural goodness, ensuring our formulations enhance your beauty in the most gentle, effective, and sustainable way.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                            <Leaf className="w-6 h-6" />
                            The Fusion of Nature & Science
                        </h2>
                        <ul className="space-y-4">
                            {[
                                { title: "Botanical Richness", desc: "We source premium herbs like Aloe Vera, Neem, Turmeric, and Saffron known for their healing and rejuvenating properties." },
                                { title: "Scientific Innovation", desc: "Our R&D team ensures optimal bioavailability, meaning our herbal ingredients penetrate the skin effectively for visible results." },
                                { title: "Safety First", desc: "All formulations are dermatologically tested, paraben-free, and free from harsh chemicals, ensuring they are safe for sensitive skin." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                            <Sprout className="w-6 h-6" />
                            Our Product Categories
                        </h2>
                        <ul className="space-y-4">
                            {[
                                { title: "Herbal Skincare", desc: "Revitalizing face washes, hydrating moisturizing lotions, anti-aging creams, and herbal sunscreens that protect without clogging pores." },
                                { title: "Natural Hair Care", desc: "Sulfate-free shampoos, herbal hair oils (infused with Amla and Bhringraj), and conditioners that restore shine and strength." },
                                { title: "Personal Hygiene", desc: "Herbal soaps, body washes, and intimate hygiene washes formulated to maintain the skin's natural pH balance." },
                                { title: "Specialty Treatments", desc: "Targeted formulations for acne, pigmentation, and dry skin conditions using the power of nature." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Product Tabs & Table */}
            <div className="container mx-auto px-4 pb-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-2 p-4 bg-emerald-50 border-b border-emerald-100">
                        {Object.keys(productData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 border ${activeTab === tab
                                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md transform scale-105"
                                    : "bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Table Content */}
                    <div className="p-6 overflow-x-auto">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-emerald-900 border-l-4 border-emerald-500 pl-3">
                                {productData[activeTab].title}
                            </h3>
                            {productData[activeTab].note && (
                                <p className="text-sm text-emerald-600 mt-1 italic">
                                    {productData[activeTab].note}
                                </p>
                            )}
                        </div>

                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-emerald-900 text-white">
                                    <th className="p-4 rounded-tl-lg w-16">Sr.No.</th>
                                    <th className="p-4">Product Name</th>
                                    <th className="p-4 rounded-tr-lg">Packing Size</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-100">
                                {productData[activeTab].items.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-emerald-50 transition-colors"
                                    >
                                        <td className="p-4 font-medium text-emerald-900">{item.sno}</td>
                                        <td className="p-4 font-bold text-slate-800">{item.name}</td>
                                        <td className="p-4 text-slate-600 text-sm">
                                            {item.packing || <span className="text-slate-400 italic">--</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HerbalAndCosmetics;
