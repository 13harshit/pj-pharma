import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Globe, Truck, Map, FileCheck, Anchor, Plane, Ship } from 'lucide-react';

const Export = () => {
    const features = [
        {
            title: "Global Reach",
            description: "Exporting to 50+ countries worldwide with a robust international distribution network.",
            icon: Globe,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Logistics Excellence",
            description: "Efficient cold chain logistics and real-time shipment tracking ensure product integrity.",
            icon: Truck,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Regulatory Compliance",
            description: "Full compliance with international regulatory standards and documentation requirements.",
            icon: FileCheck,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Multi-Mode Transport",
            description: "Flexible shipping options via air, sea, and land to meet diverse timeline needs.",
            icon: Plane,
            color: "bg-orange-100 text-orange-600"
        }
    ];

    const stats = [
        { value: '50+', label: 'Countries Served' },
        { value: '1000+', label: 'Annual Shipments' },
        { value: '48hrs', label: 'Dispatch Time' },
        { value: '100%', label: 'Compliance' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/export.jpg"
                                alt="Global Export Operations"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 max-w-xl w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-black/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl text-white"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-6">
                                    Export
                                </h1>
                                <p className="text-gray-100 font-medium leading-relaxed">
                                    Welcome to GJ Pharmaceuticals LLP, your trusted partner in the export of high-quality products across diverse categories. We pride ourselves on delivering excellence in every shipment, catering to various industries globally.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-slate-50 border-y border-slate-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-[#FF6B00] mb-2">{stat.value}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Global Supply Chain Excellence
                        </h2>
                        <p className="text-muted-foreground">
                            Seamlessly connecting high-quality pharmaceutical products with healthcare providers worldwide using our advanced export infrastructure.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="flex items-start gap-6 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white"
                            >
                                <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color}`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Export;
