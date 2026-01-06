import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2 } from 'lucide-react';

const regulatoryServices = [
    "CTD Dossiers",
    "ACTD Dossiers",
    "Dossiers as per specific Guideline of all countries",
    "Bio-Equivalence Studies with GLP certified clinical centers (BE Study)",
    "Pharmacokinetic Studies",
    "Drug master Files (DMF)",
    "Site Master File",
    "Electronic Submission of Dossiers with all supporting documents"
];

const Regulatory = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl min-h-[500px] flex flex-col md:flex-row shadow-2xl">

                        {/* Left Image Side */}
                        <div className="md:w-1/2 h-64 md:h-auto relative">
                            <img
                                // Using a placeholder that looks like an office/document setting since specific image isn't available
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Regulatory Affairs"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>

                        {/* Right Content Overlay/Card Side - Styled to look like the dark card in screenshot */}
                        <div className="md:w-1/2 bg-[#4A4A4A] p-10 md:p-14 flex flex-col justify-center text-white relative">
                            {/* Decorative curve/shape could go here if using pure CSS, but simple solid bg matches well enough */}

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-8">
                                    Regulatory
                                </h1>

                                <h2 className="text-xl font-semibold mb-6 leading-relaxed">
                                    Regulatory Affairs Department is the main strength of Pharmaceutical Business :
                                </h2>

                                <p className="text-gray-200 leading-relaxed text-lg">
                                    Our Regulatory team consists of highly qualified personnel engaged in providing data required as per the Regulatory Guidelines of the different countries. Our Regulatory Team can provide a complete support to register the Products.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto pl-4 md:pl-0"
                    >
                        <div className="space-y-4">
                            {regulatoryServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-slate-600 text-lg hover:text-[#FF6B00] transition-colors group cursor-default"
                                >
                                    {/* Small bullet point or icon can be added, kept simple text as per screenshot */}
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#FF6B00] transition-colors mt-1.5"></span>
                                    <span>{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Regulatory;
