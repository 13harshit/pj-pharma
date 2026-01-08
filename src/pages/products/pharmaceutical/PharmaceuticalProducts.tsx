import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Pill, Syringe, Droplet, HeartPulse, CircleDot, BriefcaseMedical, FlaskConical, ArrowRight, CheckCircle2, Globe } from 'lucide-react';

const PharmaceuticalProducts = () => {
    const productCategories = [
        {
            icon: <div className="relative"><Pill className="w-10 h-10 text-slate-600" /><Pill className="w-10 h-10 text-slate-600 absolute -top-1 -right-2 rotate-45 opacity-70" /></div>,
            label: "TABLETS, CAPSULES, SYRUP",
            description: "Comprehensive range of oral solid and liquid dosage forms for various therapeutic applications.",
            link: "/products/pharmaceutical/general"
        },
        {
            icon: <HeartPulse className="w-12 h-12 text-slate-600" />,
            label: "CARDIO CARE",
            description: "Specialized cardiovascular medications for heart health and circulatory system support.",
            link: "/products/pharmaceutical/cardio"
        },
        {
            icon: <Syringe className="w-12 h-12 text-slate-600" />,
            label: "INJECTIONS",
            description: "Sterile injectable formulations for rapid therapeutic action and critical care.",
            link: "/products/pharmaceutical/injections"
        },
        {
            icon: <div className="flex gap-2"><div className="w-6 h-10 rounded-full border-2 border-slate-600 transform -rotate-12"></div><div className="w-6 h-10 rounded-full border-2 border-slate-600 transform rotate-12 bg-slate-200"></div></div>,
            label: "SOFT GEL CAPSULES",
            description: "Advanced soft gelatin capsules for enhanced bioavailability and patient compliance.",
            link: "/products/pharmaceutical/softgel"
        },
        {
            icon: <div className="w-12 h-8 rounded-[50%] border-2 border-slate-600 mt-2 flex items-center justify-center text-xs font-bold text-slate-500">SUPPLE</div>,
            label: "SUPPOSITORY",
            description: "Rectal and vaginal dosage forms for localized and systemic therapeutic effects.",
            link: "/products/pharmaceutical/suppository"
        },
        {
            icon: <div className="flex gap-1"><div className="w-1 h-8 bg-slate-400 rounded-full"></div><div className="w-1 h-6 bg-slate-400 rounded-full mt-2"></div></div>,
            label: "IV FLUIDS",
            description: "Intravenous solutions for fluid replacement, electrolyte balance, and medication delivery.",
            link: "/products/pharmaceutical/iv-fluids"
        },
        {
            icon: <div className="relative"><FlaskConical className="w-10 h-10 text-slate-600" /><Pill className="w-5 h-5 text-slate-600 absolute bottom-0 -right-1" /></div>,
            label: "ANTICANCER DRUGS",
            description: "Oncology medications for cancer treatment and supportive care therapies.",
            link: "/products/pharmaceutical/anticancer"
        },
        {
            icon: <BriefcaseMedical className="w-12 h-12 text-slate-600" />,
            label: "DIAGNOSTICS KITS",
            description: "Medical diagnostic tools and testing kits for accurate disease detection and monitoring.",
            link: "/products/pharmaceutical/diagnostics"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/Pharmaceutical-Products.jpg"
                            alt="Pharmaceutical Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full mb-6">
                                <Pill className="w-4 h-4 text-[#FF6B00]" />
                                <span className="text-sm font-semibold tracking-wide">Pharmaceutical Excellence</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Pharmaceutical Products <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">
                                    at TG PHARMZ
                                </span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Discover our comprehensive range of high-quality pharmaceutical products at <span className="font-semibold text-white">TG Pharmz</span>, manufactured under stringent quality standards in our WHO-GMP certified facilities.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
                                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <span className="text-sm font-medium text-white">WHO-GMP Certified</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <span className="text-sm font-medium text-white">USFDA Approved</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
                                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
                                    <span className="text-sm font-medium text-white">ISO Certified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Product Categories Grid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Product Categories</h2>
                            <div className="w-20 h-1 bg-[#FF6B00] mx-auto rounded-full mb-6"></div>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Explore our diverse pharmaceutical portfolio designed to meet global healthcare needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {productCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                    className="group"
                                >
                                    <Link to={category.link}>
                                        <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg border border-slate-100 h-full cursor-pointer transition-all duration-300 hover:border-blue-200">
                                            <div className="w-24 h-24 rounded-full border-2 border-slate-200 flex items-center justify-center mb-6 text-slate-600 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all duration-300">
                                                {category.icon}
                                            </div>

                                            <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-4">
                                                {category.label}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                                                {category.description}
                                            </p>

                                            <div className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                                View Products <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Pharmaceutical Commitment Section */}
                <section className="py-24 relative overflow-hidden">
                    {/* Organic Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-white to-blue-50/40 opacity-60"></div>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-block"
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">Our Pharmaceutical Commitment</h2>
                                    <div className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full shadow-sm"></div>
                                </motion.div>
                            </div>

                            <div className="space-y-12">
                                {/* Core Values Grid */}
                                <div className="grid md:grid-cols-3 gap-8 mb-16">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50"
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                            <FlaskConical className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Precision Formulations</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Our pharmaceutical products are meticulously formulated to address diverse healthcare needs. From essential medications to specialized formulations, each product is crafted with precision and adheres to the highest quality standards.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50"
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                            <HeartPulse className="w-7 h-7 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Efficacy & Safety</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Patient safety is paramount. Our pharmaceuticals undergo rigorous testing to ensure efficacy, safety, and reliability. We take pride in delivering products that healthcare professionals trust and patients rely on for their well-being.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50"
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                            <BriefcaseMedical className="w-7 h-7 text-purple-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            We believe in the power of innovation to transform healthcare. Our commitment to Research and Development ensures that we stay at the forefront of medical advancements, continually introducing innovative pharmaceutical solutions.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Additional Content Blocks */}
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    <div className="h-full">
                                        <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 h-full">
                                            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                                <div className="p-2 bg-orange-100 rounded-full">
                                                    <CircleDot className="w-5 h-5 text-[#FF6B00]" />
                                                </div>
                                                Diverse Healthcare Solutions
                                            </h3>
                                            <div className="space-y-6">
                                                <div className="pl-4 border-l-2 border-orange-200">
                                                    <h4 className="font-bold text-slate-700 mb-2">Therapeutic Diversity</h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed">
                                                        Our pharmaceutical range encompasses a broad spectrum of therapeutic areas. From cardiovascular health to pain management, infectious diseases to mental health, we cater to diverse medical needs with a comprehensive portfolio of medications.
                                                    </p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-orange-200">
                                                    <h4 className="font-bold text-slate-700 mb-2">Patient-Centric Approach</h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed">
                                                        Understanding the unique needs of patients is fundamental to our approach. We actively engage with healthcare professionals and patients to develop pharmaceutical solutions that prioritize ease of use, compliance, and positive health outcomes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-full">
                                        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl h-full relative overflow-hidden group">
                                            {/* Decorative glow */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-slate-700/50 transition-colors"></div>

                                            <h3 className="text-2xl font-bold mb-8 text-[#FF6B00] relative z-10">Why Choose TG Pharmz?</h3>
                                            <ul className="space-y-6 relative z-10">
                                                <li className="flex gap-4 group/item">
                                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#FF6B00] transition-colors">
                                                        <FlaskConical className="w-4 h-4 text-[#FF6B00] group-hover/item:text-white transition-colors" />
                                                    </div>
                                                    <div>
                                                        <strong className="block text-white mb-1 text-lg">Research-Driven Innovation</strong>
                                                        <p className="text-slate-400 text-sm leading-relaxed">Our dedication to R&D ensures cutting-edge solutions for evolving healthcare challenges.</p>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4 group/item">
                                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#FF6B00] transition-colors">
                                                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] group-hover/item:text-white transition-colors" />
                                                    </div>
                                                    <div>
                                                        <strong className="block text-white mb-1 text-lg">Quality Assurance</strong>
                                                        <p className="text-slate-400 text-sm leading-relaxed">Stringent processes guarantee consistency and reliability, instilling confidence in professionals and patients.</p>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4 group/item">
                                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#FF6B00] transition-colors">
                                                        <Globe className="w-4 h-4 text-[#FF6B00] group-hover/item:text-white transition-colors" />
                                                    </div>
                                                    <div>
                                                        <strong className="block text-white mb-1 text-lg">Global Impact</strong>
                                                        <p className="text-slate-400 text-sm leading-relaxed">Our pharmaceuticals reach patients worldwide, making a positive impact on global health.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="inline-block bg-orange-50/80 backdrop-blur-sm p-10 rounded-3xl border border-orange-100/50 shadow-sm max-w-4xl mx-auto">
                                        <p className="text-xl text-slate-700 italic font-medium mb-6 leading-relaxed">
                                            "Experience the difference that commitment to quality, innovation, and patient well-being can make in healthcare."
                                        </p>
                                        <p className="text-[#FF6B00] font-bold text-lg bg-orange-100/50 inline-block px-6 py-2 rounded-full">
                                            Choose TG Pharmz for pharmaceutical products that prioritize health and elevate the standard of care.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quality Assurance Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-12 text-white"
                            >
                                <h2 className="text-3xl font-bold mb-6">Quality Assurance & Compliance</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold mb-3 text-lg">Manufacturing Standards</h3>
                                        <ul className="space-y-2 text-blue-50">
                                            <li>• WHO-GMP Certified Facilities</li>
                                            <li>• USFDA Approved Manufacturing</li>
                                            <li>• ISO 9001:2015 Certified</li>
                                            <li>• EU-GMP Compliant</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3 text-lg">Quality Control</h3>
                                        <ul className="space-y-2 text-blue-50">
                                            <li>• Rigorous Testing Protocols</li>
                                            <li>• Advanced Laboratory Equipment</li>
                                            <li>• Batch-to-Batch Consistency</li>
                                            <li>• International Quality Standards</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PharmaceuticalProducts;
