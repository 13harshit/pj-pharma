import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Lightbulb, Leaf, Utensils, Beaker, Zap, Microscope, Users, TrendingUp } from 'lucide-react';

const Innovation = () => {
    const sections = [
        {
            title: "Pioneering Pharmaceutical Solutions",
            content: "Our commitment to innovation resonates in our pharmaceutical products. We continually explore novel formulations, advanced drug delivery systems, and therapeutic solutions that revolutionize healthcare and enhance patient care globally.",
            icon: Beaker
        },
        {
            title: "Redefining Nutraceuticals & Food Supplements",
            content: "Innovation shapes our range of nutraceuticals and food supplements. We’re dedicated to crafting products that combine scientific research with natural ingredients, ensuring optimal nutrition and wellness for individuals seeking a healthier lifestyle.",
            icon: Leaf
        },
        {
            title: "Harmonizing Nature and Beauty",
            content: "In the realm of herbal and cosmetics, innovation takes on a form that blends nature’s bounty with scientific expertise. Our innovative formulations harness the power of botanicals, ensuring effective and sustainable beauty solutions.",
            icon: Lightbulb
        },
        {
            title: "Revolutionizing Culinary Experiences",
            content: "From sourcing premium food grains to offering aromatic spices and nourishing oils, innovation drives our commitment to delivering exceptional quality and taste. We constantly explore ways to elevate culinary experiences and meet evolving consumer demands.",
            icon: Utensils
        },
        {
            title: "Advancing Industrial Solutions",
            content: "In the realm of industrial and fine chemicals, innovation is integral to our pursuit of excellence. We focus on developing cutting-edge solutions that optimize industrial processes, ensuring efficiency and sustainability in various sectors.",
            icon: Zap
        },
        {
            title: "Engineering Performance in Lubrication",
            content: "Innovation is the cornerstone of our oil and lubricants division. We engineer high-performance lubricants that not only meet but exceed industry standards, ensuring machinery operates at its peak efficiency.",
            icon: TrendingUp
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl">
                        {/* Background Image - Science/Innovation Theme */}
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Scientific Innovation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                        </div>

                        {/* Overlay Card - Left Aligned */}
                        <div className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2 max-w-xl w-full">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-6">
                                    Innovation at GJ Pharmaceuticals LLP
                                </h1>
                                <div className="space-y-4 text-slate-700 font-medium leading-relaxed">
                                    <p>
                                        At GJ Pharmaceuticals LLP, innovation isn't just a goal—it's the driving force that propels us forward in delivering cutting-edge solutions across diverse product categories. We believe in pushing boundaries, fostering creativity, and redefining industry standards through innovation.
                                    </p>
                                    <p>
                                        Product innovation has been the key driver to our global success and understanding the science eventually helps us develop better compounds to combat disease, which has immensely shaped our competitive edge on the global platform.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-3"
                            >
                                <div className="inline-block">
                                    <span className="bg-teal-400 text-slate-900 px-3 py-1 text-xl font-bold box-decoration-clone">
                                        {section.title}
                                    </span>
                                </div>
                                <div>
                                    <span className="bg-teal-400/30 px-2 py-0.5 text-slate-800 text-lg leading-relaxed box-decoration-clone">
                                        {section.content}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-[#FF6B00]">Our Innovation Philosophy</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#FF6B00]"
                            >
                                <Microscope className="w-10 h-10 text-[#FF6B00] mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Research & Development Excellence</h3>
                                <p className="text-slate-600 text-sm">
                                    Our dedicated R&D teams continually explore new frontiers, leveraging the latest technologies and scientific advancements to drive innovation across our product spectrum.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500"
                            >
                                <Users className="w-10 h-10 text-teal-500 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Customer-Centric Approach</h3>
                                <p className="text-slate-600 text-sm">
                                    Innovation is fueled by understanding and meeting customer needs. We actively engage with our customers, listening to their feedback and preferences to innovate products that truly resonate.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500"
                            >
                                <TrendingUp className="w-10 h-10 text-indigo-500 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-slate-800">Continuous Improvement</h3>
                                <p className="text-slate-600 text-sm">
                                    Innovation isn’t a one-time event; it’s a continuous journey. We embrace a culture of continuous improvement, fostering an environment where new ideas thrive and evolve.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Innovation;
