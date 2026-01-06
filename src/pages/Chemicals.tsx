import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Chemicals = () => {
    const chemicals = [
        {
            title: "Basic Chemicals",
            description: "Basic chemicals are essential raw materials used across multiple industries, including pharmaceuticals, manufacturing, and research. These include acids, alkalis, solvents, and industrial gases, widely used in chemical synthesis, formulation, and processing. Our high-quality basic chemicals meet international safety and purity standards.",
            keywords: "basic chemicals supplier, industrial chemicals, chemical raw materials"
        },
        {
            title: "Specialty Chemicals",
            description: "Specialty chemicals are high-performance products designed for specific industrial and pharmaceutical applications. These include coatings, adhesives, sealants, and performance additives that deliver precise functionality and enhanced efficiency in manufacturing and healthcare sectors.",
            keywords: "specialty chemicals manufacturer, pharmaceutical specialty chemicals"
        },
        {
            title: "Pharmaceutical Chemicals",
            description: "Pharmaceutical chemicals are critical components used in the manufacturing of medicines, APIs, intermediates, and healthcare products. We supply pharmaceutical-grade chemicals that comply with GMP, USP, BP, and EP standards, ensuring safety, consistency, and regulatory compliance.",
            keywords: "pharmaceutical chemicals supplier, API manufacturer, pharma raw materials"
        },
        {
            title: "Agrochemicals",
            description: "Agrochemicals support modern agriculture by improving crop yield, plant health, and pest control. Our range includes fertilizers, pesticides, herbicides, and growth regulators, developed to enhance productivity while meeting environmental and safety regulations.",
            keywords: "agrochemicals supplier, agricultural chemicals manufacturer"
        },
        {
            title: "Polymers",
            description: "Polymers are advanced materials made of repeating molecular units, widely used in pharmaceutical packaging, medical devices, plastics, rubber, and fibers. We provide high-performance polymers engineered for durability, flexibility, and chemical resistance.",
            keywords: "polymer manufacturer, pharmaceutical polymers"
        },
        {
            title: "Petrochemicals",
            description: "Petrochemicals are derived from petroleum and serve as essential raw materials for pharmaceuticals, plastics, textiles, automotive, and packaging industries. Our petrochemical products ensure consistent quality and reliable supply for large-scale industrial use.",
            keywords: "petrochemical supplier, industrial petrochemicals"
        },
        {
            title: "Cleaning Chemicals",
            description: "Cleaning chemicals are vital for hygiene, sanitation, and contamination control, especially in pharmaceutical and healthcare environments. Our portfolio includes detergents, disinfectants, sanitizers, and degreasers designed for industrial and medical use.",
            keywords: "industrial cleaning chemicals, pharmaceutical disinfectants"
        },
        {
            title: "Laboratory Chemicals",
            description: "Laboratory chemicals are used in research, testing, quality control, and analysis. We supply high-purity reagents, standards, solvents, and indicators suitable for pharmaceutical labs, research institutes, and academic facilities.",
            keywords: "laboratory chemicals supplier, research chemical"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full min-h-[600px] flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <img
                    src="/chemicals-hero.png"
                    alt="Industrial and Fine Chemicals"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Block */}
                <div className="relative z-10 container-custom px-4 md:px-6 py-20">
                    <div className="max-w-2xl bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>

                        <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6">
                            <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">
                                Industrial & Fine Chemicals
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Industrial and Fine Chemicals
                        </h1>

                        <div className="space-y-4 text-gray-200 mb-8 leading-relaxed text-lg">
                            <p>
                                Looking for top-quality chemical products for your business? Our range of high-grade chemicals is sure to meet all your needs.
                            </p>
                            <p>
                                From industrial chemicals to laboratory-grade reagents, we offer a wide variety of products to suit your requirements. With our commitment to quality and customer satisfaction, you can trust us to provide you with reliable, effective chemical solutions.
                            </p>
                            <p className="font-medium text-white">
                                Browse our selection today and find the perfect chemical products for your needs.
                            </p>
                        </div>

                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all shadow-lg hover:shadow-blue-500/25">
                            Get Quote
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="container-custom py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Chemical Portfolio</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {chemicals.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {index + 1}. {item.title}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <span className="text-blue-600 font-bold group-hover:text-white transition-colors">{index + 1}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <div className="pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-500">
                                        <span className="font-semibold text-blue-600">Keywords:</span> {item.keywords}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Chemicals;
