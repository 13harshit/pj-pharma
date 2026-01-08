import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplet, Shield, Settings, Activity, CheckCircle2, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Data Structure (Same content, just organized for the new component if needed)
interface ProductContent {
    title: string;
    description: string;
    sections: {
        title: string;
        subtitle?: string;
        description?: string;
        items?: {
            name: string;
            description: string;
        }[];
    }[];
}

const contentData: Record<string, ProductContent> = {
    "Lubricants": {
        title: "Industrial & Automotive Lubricants",
        description: "At TG PHARMZ, we extend our manufacturing precision to the world of advanced lubrication. We are a premier Manufacturer and Supplier of a vast portfolio of oils and lubricants designed to reduce friction, dissipate heat, and prolong the lifespan of critical machinery. From heavy-duty Industrial Lubricants to precision Textile and Automotive solutions, our products are engineered to meet the rigorous demands of modern engineering.",
        sections: [
            {
                title: "Industrial & Heavy Machinery",
                subtitle: "High-load formulations for continuous plant operations",
                description: "We provide robust lubrication solutions that ensure stability under extreme pressure and operating conditions.",
                items: [
                    { name: "Gear Lubricants", description: "Heavy-duty oils to prevent pitting and wear in industrial gearboxes." },
                    { name: "Hydraulic Lubricant", description: "Premium fluids for stable power transmission and seal protection." },
                    { name: "Compressor Lubricant", description: "Oxidation-resistant oils for rotary and reciprocating compressors." },
                    { name: "Bearing Lubricant", description: "Greases and oils designed to extend the life of rolling and plain bearings." },
                    { name: "Machine Tool Lubricants", description: "Slideway oils to prevent stick-slip in precision machine tools." },
                    { name: "Chain Lubricants", description: "Penetrative fluids for conveyor and drive chains." },
                    { name: "Wire Rope Lubricant", description: "Protection against corrosion and internal friction for heavy-duty cables." }
                ]
            },
            {
                title: "Automotive & Marine",
                subtitle: "Engineered for combustion engines and transport efficiency",
                description: "Our automotive range ensures peak performance, fuel efficiency, and engine cleanliness.",
                items: [
                    { name: "Automotive Lubricants", description: "Complete range for passenger and commercial vehicles." },
                    { name: "Engine Lubricants", description: "High-viscosity index oils for petrol and diesel engines." },
                    { name: "Marine Lubricants", description: "Corrosion-resistant fluids for marine vessels and offshore equipment." },
                    { name: "Synthetic Lubricants", description: "Advanced chemically engineered oils for superior temperature stability." }
                ]
            },
            {
                title: "Metalworking & Processing",
                subtitle: "Specialized fluids for forming, cutting, and shaping metals",
                description: "Critical fluids for manufacturing plants, forging shops, and wire industries.",
                items: [
                    { name: "Metalworking Lubricant", description: "Coolants and cutting fluids for machining operations." },
                    { name: "Wire Drawing Lubricant", description: "High-lubricity formulas for reducing friction." },
                    { name: "Die Lubricants", description: "Release agents for casting and molding processes." },
                    { name: "Hot Forging Lubricant", description: "Graphite-free and graphite-based solutions for high-heat forging." },
                    { name: "Plunger Lubricants", description: "Essential for high-pressure die-casting machines." },
                    { name: "Cutting Lubricant", description: "Soluble and neat oils for drilling, milling, and turning." }
                ]
            },
            {
                title: "Textile & Specialty Applications",
                subtitle: "Niche formulations for specific material compatibility",
                description: "We offer a specialized range for the textile, rubber, and plastic industries.",
                items: [
                    { name: "Textile Lubricant", description: "Non-staining oils for knitting and weaving machinery." },
                    { name: "Sewing Thread Lubricants", description: "Silicon-based fluids to reduce thread breakage and heat." },
                    { name: "Yarn Lubricant", description: "Antistatic agents for high-speed yarn processing." },
                    { name: "PVC Lubricants", description: "External and internal lubricants for PVC processing." },
                    { name: "Rubber Lubricants", description: "Mold release and assembly fluids for rubber components." },
                    { name: "Cable Lubricants", description: "Low-friction gels for pulling electrical and fiber-optic cables." }
                ]
            },
            {
                title: "Advanced & Protection Fluids",
                subtitle: "Performance additives for extreme environments",
                description: "",
                items: [
                    { name: "High Temperature Lubricants", description: "Stable performance in furnaces and ovens." },
                    { name: "Anti Rust Lubricant", description: "Corrosion inhibitors for storage and transit protection." },
                    { name: "Anti Seize Lubricant", description: "Prevents seizing of threaded connections at high temperatures." },
                    { name: "Silicone Lubricants", description: "Water-repellent and chemically inert lubricants." },
                    { name: "Graphite Lubricant", description: "Dry lubrication for high-heat/high-load environments." },
                    { name: "Dry Film Lubricants", description: "Solid coatings for areas where liquid lubricants cannot be used." },
                    { name: "Biodegradable Lubricants", description: "Eco-friendly options for sensitive environments." },
                    { name: "Water Based Lubricant", description: "Easy-clean fluids for light-duty applications." },
                    { name: "Aerosol & Spray Lubricant", description: "Convenient dispensing for maintenance and repair." }
                ]
            }
        ]
    },
    "Grease": {
        title: "High Performance Grease",
        description: "At TG PHARMZ, we manufacture a comprehensive range of Lubricating Greases designed to stay in place and provide long-lasting protection. From standard Lithium Base Grease to specialized High Vacuum and Food Grade formulations, our greases are engineered to seal out contaminants, resist water washout, and perform under extreme pressure.",
        sections: [
            {
                title: "General Purpose & Lithium Greases",
                subtitle: "The standard for versatile, multi-purpose lubrication",
                description: "We offer a wide selection of lithium-based greases known for their excellent stability and high dropping points.",
                items: [
                    { name: "Lithium Grease", description: "Multi-purpose grease for a wide variety of industrial applications." },
                    { name: "Lithium Base Grease", description: "Provides excellent mechanical stability and water resistance." },
                    { name: "Ap3 Grease", description: "Premium quality, lithium-based all-purpose grease (NLGI 3)." },
                    { name: "White Grease", description: "Clean, non-staining lithium grease often used for door hinges and latches." },
                    { name: "Yellow Grease", description: "General-purpose calcium or lithium-based grease." }
                ]
            },
            {
                title: "Industrial & Heavy Duty Solutions",
                subtitle: "Engineered for high loads and continuous operation",
                description: "Our industrial range is built to withstand shock loads and harsh environments.",
                items: [
                    { name: "Industrial Greases", description: "Heavy-duty formulations for factory equipment." },
                    { name: "Bearing Grease", description: "Formulated to reduce friction and wear at high speeds." },
                    { name: "Gear Grease", description: "High-tack grease designed to cling to open gears." },
                    { name: "Chain Grease", description: "Penetrating grease that resists fling-off." },
                    { name: "Heavy Duty Grease Gun", description: "Compatible greases for standard and heavy-duty grease gun cartridges." }
                ]
            },
            {
                title: "High Temperature & Specialty Performance",
                subtitle: "For extreme environments and specific technical needs",
                description: "",
                items: [
                    { name: "High Temperature Grease", description: "Non-melting grease designed for ovens and kilns." },
                    { name: "Heat Resistant Grease", description: "Maintains consistency even under thermal stress." },
                    { name: "Thermal Grease", description: "Used primarily for heat transfer." },
                    { name: "Synthetic Grease", description: "Superior longevity and temperature range compared to mineral greases." },
                    { name: "Low Temperature Grease", description: "Remains pumpable and effective in freezing conditions." },
                    { name: "High Vacuum Grease", description: "Stiff, non-melting silicone grease for sealing vacuum systems." }
                ]
            },
            {
                title: "Resistance & Safety Formulations",
                subtitle: "Waterproof and Industry-Compliant Greases",
                description: "",
                items: [
                    { name: "Water Repellent Grease", description: "Resists washing out, even when submerged." },
                    { name: "Food Grade Grease", description: "Non-toxic, NSF-compliant grease for food processing." },
                    { name: "Silicone Grease", description: "Dielectric and water-resistant, safe for rubber/plastic." },
                    { name: "Calcium Grease", description: "Excellent water resistance for wet environments." }
                ]
            },
            {
                title: "Automotive & Conductive Specialized",
                subtitle: "Niche applications for vehicle and electrical systems",
                description: "",
                items: [
                    { name: "Automotive Grease", description: "Complete range for chassis points and suspension." },
                    { name: "Chassis Grease", description: "Tacky, water-resistant grease for suspension joints." },
                    { name: "Copper Grease", description: "Anti-seize compound for brake calipers and exhaust bolts." },
                    { name: "Graphite Grease", description: "Contains solid graphite particles for heavy loads." },
                    { name: "Conductive Grease", description: "Electrically conductive grease for switches and contacts." }
                ]
            }
        ]
    },
    "Engine Oil": {
        title: "Engine Oil Solutions",
        description: "At TG PHARMZ, we engineer our engine oils to deliver maximum power and protection. As a trusted Manufacturer and Supplier, we provide high-quality formulations that clean your engine, reduce friction, and prevent sludge buildup.",
        sections: [
            {
                title: "Heavy Duty & Commercial Engines",
                subtitle: "Robust protection for high-torque diesel machinery",
                description: "Our heavy-duty oils are designed to fight soot, neutralize acids, and protect against wear.",
                items: [
                    { name: "Diesel Engine Oil", description: "High-performance lubricants for commercial trucks and heavy equipment." },
                    { name: "Tractor Engine Oil", description: "Specialized multi-grade oil (UTTO) for tractors." },
                    { name: "Gas Engine Oil", description: "Low-ash oil specifically designed for stationary gas engines and CNG/LPG vehicles." }
                ]
            },
            {
                title: "Motorcycles & Small Engines",
                subtitle: "High-revving protection for two-wheelers",
                description: "Specialized oils that provide superior clutch performance and engine cleanliness.",
                items: [
                    { name: "Bike Engine Oil", description: "Premium oils ensuring smooth gear shifting." },
                    { name: "Four Stroke Engine Oil (4T)", description: "Advanced formula offering thermal stability." },
                    { name: "Two Stroke Engine Oil (2T)", description: "Low-smoke oil designed to mix instantly with fuel." }
                ]
            },
            {
                title: "Passenger Car & Gasoline Engines",
                subtitle: "Efficiency and cleanliness for modern vehicles",
                description: "",
                items: [
                    { name: "Gasoline Engine Oil", description: "High-detergency oil designed for petrol cars to prevent sludge." },
                    { name: "Gasoline", description: "Formulated to work perfectly with modern unleaded and ethanol-blended fuels." }
                ]
            }
        ]
    },
    "Silicone Oil": {
        title: "Silicone Oil",
        description: "We supply a specialized range of Silicone Oils renowned for their thermal stability, dielectric properties, and chemical inertness.",
        sections: [
            {
                title: "General Purpose & Industrial Fluids",
                subtitle: "Versatile stability for lubrication and insulation",
                description: "",
                items: [
                    { name: "Dimethyl Silicone Oil (PDMS)", description: "Industry standard for lubrication and dielectric insulation." },
                    { name: "Emulsion Silicone Oil", description: "Water-based silicone emulsion, widely used as a mold release agent." }
                ]
            },
            {
                title: "Textile & Water Repellent Solutions",
                subtitle: "Fabric softeners and waterproofing agents",
                description: "",
                items: [
                    { name: "Amino Silicone Oil", description: "Provides an exceptionally soft, smooth 'hand feel' to fabrics." },
                    { name: "Methyl Hydrogen Silicone Oil", description: "Highly effective waterproofing agent for textiles and masonry." }
                ]
            },
            {
                title: "Reactive & Specialty Silicones",
                subtitle: "Intermediates for chemical processing",
                description: "",
                items: [
                    { name: "Hydroxy Silicone Oil", description: "Reactive fluid used as a raw material for RTV silicone rubbers." }
                ]
            }
        ]
    },
    "Cutting Oil": {
        title: "Precision Cutting Oils",
        description: "Manufactured for turning, milling, drilling, and threading operations. Whether you need the superior cooling of Water Soluble fluids or the heavy-duty lubrication of Neat Oils, our formulations ensure precision.",
        sections: [
            {
                title: "Soluble & Synthetic Coolants",
                subtitle: "Designed to be mixed with water for maximum cooling",
                description: "These fluids form stable emulsions that rapidly dissipate heat.",
                items: [
                    { name: "Soluble Cutting Oil", description: "Standard milky-white emulsion for general-purpose machining." },
                    { name: "Water Soluble Cutting Oil", description: "High-stability formulations that resist bacterial growth." },
                    { name: "Synthetic Cutting Oil", description: "Translucent, oil-free coolant for highest level of cooling and visibility." }
                ]
            },
            {
                title: "Neat & Straight Cutting Oils",
                subtitle: "Used undiluted for maximum lubrication",
                description: "Essential for slow-speed, high-pressure operations.",
                items: [
                    { name: "Neat Cutting Oils", description: "Fortified with extreme pressure additives to prevent micro-welding." },
                    { name: "Thread Cutting Oil", description: "Specialized heavy-duty oil designed for threading and tapping." }
                ]
            }
        ]
    },
    "Oil Additive": {
        title: "Oil Additives",
        description: "Essential chemistry that drives performance. Our range of Additives is designed to enhance the properties of base oils, ensuring they meet modern specifications.",
        sections: [
            {
                title: "Automotive & Engine Protection",
                subtitle: "Booster packages for combustion engines",
                description: "",
                items: [
                    { name: "Engine Oil Additive", description: "Packages designed to prevent sludge and neutralize acids." },
                    { name: "Lubricating Oil Additives", description: "General-purpose friction modifiers and anti-wear agents." }
                ]
            },
            {
                title: "Industrial & Heavy Duty Additives",
                subtitle: "Enhancing load-carrying capacity and stability",
                description: "",
                items: [
                    { name: "Gear Oil Additives", description: "High-performance Extreme Pressure (EP) additives." },
                    { name: "Cutting Oil Additive", description: "Specialized emulsifiers and lubricity agents." }
                ]
            }
        ]
    },
    "Compressor Oil": {
        title: "Compressor Lubricants",
        description: "High-performance oils designed for rotary and reciprocating compressors.",
        sections: [
            {
                title: "Performance Compressor Fluids",
                subtitle: "Reliable operation for air and gas compressors",
                description: "Oxidation-resistant oils that ensure long service life and reduce deposits.",
                items: [
                    { name: "Compressor Lubricant", description: "Oxidation-resistant oils ensuring stability and efficiency." }
                ]
            }
        ]
    },
    "Lubricant Oil": {
        title: "Lubricant Base Oils",
        description: "We provide the fundamental building blocks for high-performance lubrication, from premium Virgin Base Oils to eco-friendly Recycled options.",
        sections: [
            {
                title: "Virgin Base Oils",
                subtitle: "The foundation of premium lubricants",
                description: "",
                items: [
                    { name: "Lubricant Base Oil", description: "Group I, II, and III base oils for formulating engine and gear oils." }
                ]
            },
            {
                title: "Recycled & Sustainable Options",
                subtitle: "Eco-friendly solutions for circular economy",
                description: "",
                items: [
                    { name: "Recycled Lubricating Oil", description: "Economical alternative for non-critical applications." },
                    { name: "Used Lubricating Oil", description: "Responsibly collected used oils for re-refining." }
                ]
            }
        ]
    },
    "Hydraulic Fluids": {
        title: "Hydraulic Fluids",
        description: "Our Hydraulic Oils are formulated to transmit power efficiently while protecting intricate system components from wear and corrosion.",
        sections: [
            {
                title: "Hydraulic Power Transmission",
                subtitle: "Essential fluids for system efficiency and protection",
                description: "",
                items: [
                    { name: "Hydraulic Oil", description: "Premium anti-wear fluid designed for high-pressure systems." },
                    { name: "Hydraulic Lubricant", description: "Broad range of viscosity grades tailored to specific temperatures." }
                ]
            },
            {
                title: "Specialized Chemical Fluids",
                subtitle: "Reactive fluids for industrial processing",
                description: "",
                items: [
                    { name: "Hydroxy Silicone Oil", description: "Specialized reactive silicone fluid used as raw material." }
                ]
            }
        ]
    }
};

const Card = ({ category }: { category: string }) => {
    const data = contentData[category];
    return (
        <div className="relative h-[85vh] w-[90vw] md:w-[70vw] lg:w-[60vw] shrink-0 overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100 p-8 flex flex-col">
            <div className="mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-4xl font-bold text-slate-800 mb-2">{category}</h3>
                <h4 className="text-lg font-medium text-orange-500">{data.title}</h4>
                <div className="mt-4 prosc-sm text-slate-600 max-h-[100px] overflow-y-auto pr-2 custom-scrollbar">
                    {data.description}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6">
                {data.sections.map((section, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow">
                        <h5 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                            <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
                            {section.title}
                        </h5>
                        {section.subtitle && <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-2 ml-4">{section.subtitle}</p>}
                        {section.description && <p className="text-sm text-slate-600 mb-4 ml-4 leading-relaxed">{section.description}</p>}

                        {section.items && (
                            <div className="grid md:grid-cols-2 gap-3 ml-4">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex gap-2 items-start">
                                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h6 className="text-sm font-bold text-slate-800">{item.name}</h6>
                                            <p className="text-xs text-slate-500 leading-tight">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [showCategories, setShowCategories] = useState(false);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-85%"]);

    const scrollToCategory = (index: number) => {
        if (!targetRef.current) return;

        // Approximate scroll position to show the card
        const sectionHeight = targetRef.current.offsetHeight;
        const scrollAmount = sectionHeight - window.innerHeight;
        // The mapping is [0, 1] range of scrollYProgress
        // We want to scroll to a value where the target card is visible
        // Since x transform is linear, we can approximate the scroll ratio
        // Total items = 1 (intro) + N (categories)
        // To center item i+1 (category i), we need roughly:
        const progress = (index + 1) / (Object.keys(contentData).length + 2);
        const targetScroll = targetRef.current.offsetTop + (scrollAmount * progress);

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-slate-50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 pl-8 pr-20 items-center">
                    {/* Introductory Card */}
                    <div className="shrink-0 w-[90vw] md:w-[400px] h-[60vh] bg-slate-900 rounded-3xl p-10 flex flex-col justify-center text-white shadow-2xl relative overflow-hidden transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <h2 className="text-4xl font-bold mb-6 relative z-10 text-wrap">Explore Our Products</h2>

                        <div className="relative z-10 w-full">
                            {!showCategories ? (
                                <>
                                    <p className="text-lg text-slate-300 mb-8">
                                        Scroll to navigate through our comprehensive range of industrial lubricants.
                                    </p>
                                    <button
                                        onClick={() => setShowCategories(true)}
                                        className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors group cursor-pointer"
                                    >
                                        <span>VIEW ALL CATEGORIES</span>
                                        <div className="w-4 h-4 border-b-2 border-r-2 border-current transform rotate-45 group-hover:translate-y-1 transition-transform"></div>
                                    </button>
                                </>
                            ) : (
                                <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar w-full">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Select Category</p>
                                        <button
                                            onClick={() => setShowCategories(false)}
                                            className="text-xs text-orange-400 hover:text-orange-300"
                                        >
                                            Close
                                        </button>
                                    </div>
                                    {Object.keys(contentData).map((cat, idx) => (
                                        <button
                                            key={cat}
                                            onClick={() => scrollToCategory(idx)}
                                            className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-300 transition-all border border-white/10 flex items-center justify-between group"
                                        >
                                            <span className="font-medium text-sm truncate">{cat}</span>
                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {Object.keys(contentData).map((category, index) => (
                        <Card key={index} category={category} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const OilAndLubricants = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-70"
                        style={{ backgroundImage: "url('/oil and lubricant.jpg')" }}
                    ></div>
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold tracking-wider mb-6 border border-orange-500/30 backdrop-blur-sm">
                            PREMIUM INDUSTRIAL SOLUTIONS
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-xl">
                            Oil & <span className="text-orange-500">Lubricants</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-light drop-shadow-md text-justify md:text-center">
                            As a diversified Manufacturer and Supplier, TG PHARMZ extends its expertise beyond medicinal products to deliver high-grade Oils and Lubricants designed for industrial and automotive excellence. Our products are precision-formulated to meet the highest industry standards, ensuring your machinery operates at peak efficiency. From heavy-duty industrial lubricants to high-performance automotive engine oils, we provide solutions that reduce friction, dissipate heat, and protect against wear in the most demanding environments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Horizontal Scroll Section */}
            <HorizontalScrollCarousel />

            {/* Features Grid */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">We carefully craft our fluids to deliver exceptional reliability across a variety of applications.</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Superior Protection", desc: "Advanced additive technology creates a robust protective film that prevents metal-to-metal contact.", icon: <Shield className="w-8 h-8 text-blue-600" /> },
                            { title: "Extended Equipment Life", desc: "Reduces wear and tear on critical components, significantly prolonging the lifespan of your machinery.", icon: <Activity className="w-8 h-8 text-green-600" /> },
                            { title: "Cost Efficiency", desc: "Formulated to resist thermal breakdown, leading to longer drain intervals and reduced maintenance costs.", icon: <Droplet className="w-8 h-8 text-orange-600" /> },
                            { title: "Versatile Performance", desc: "Engineered to perform consistently under extreme pressures and variable temperatures.", icon: <Settings className="w-8 h-8 text-purple-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OilAndLubricants;
