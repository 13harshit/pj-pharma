import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, FileCheck } from 'lucide-react';

const Certification = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Certification Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 max-w-lg w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-black/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-6">
                                    Certification
                                </h1>
                                <p className="text-white text-lg leading-relaxed font-medium">
                                    Certificate of Pharmaceutical Product (as per WHO), USFDA, EU Certificate, Free Sale Certificates, Certificate of Origin, Halal Certificates, Kosher Certificates, TSE-BSE Certificates.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certified Commitment Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
                            Our Certified Commitment
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <div className="min-w-6 mt-1">
                                    <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 inline">ISO Certifications: </h3>
                                    <span className="text-slate-600 leading-relaxed">
                                        We hold ISO certifications across various domains, demonstrating our commitment to quality management systems, environmental standards, and occupational health and safety.
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="min-w-6 mt-1">
                                    <FileCheck className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 inline">FDA Approval: </h3>
                                    <span className="text-slate-600 leading-relaxed">
                                        Our compliance with the rigorous standards of the U.S. Food and Drug Administration affirms the safety and efficacy of our pharmaceutical products for the U.S. market.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Certification;
