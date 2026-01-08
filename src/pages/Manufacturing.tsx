import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Settings, Users, TrendingUp, CheckCircle, Leaf, Droplet, FlaskConical } from 'lucide-react';

const Manufacturing = () => {
    const sections = [
        {
            title: "Pharmaceutical Precision",
            content: "Our pharmaceutical manufacturing facilities are equipped with cutting-edge technology and adhere to the most stringent quality standards. From formulation to packaging, our processes ensure the production of pharmaceutical products known for their efficacy, safety, and reliability.",
            icon: CheckCircle,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Nutraceutical & Food Supplement Expertise",
            content: "In the realm of nutraceuticals and food supplements, precision meets innovation. Our manufacturing processes focus on combining scientific research with natural ingredients to create products that enhance wellness and cater to evolving consumer preferences.",
            icon: Leaf,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Natural Elegance in Cosmetics",
            content: "Our cosmetic manufacturing division embodies a blend of nature and technology. We utilize advanced processes to craft cosmetics enriched with natural ingredients, ensuring efficacy and promoting beauty in a sustainable manner.",
            icon: Droplet,
            color: "bg-pink-100 text-pink-600"
        },
        {
            title: "Quality in Every Granule and Drop",
            content: "From sourcing premium food grains to refining oils and spices, our manufacturing ensures the highest quality standards. Meticulous processes guarantee the purity, freshness, and flavor in every grain, oil, and spice we offer.",
            icon: CheckCircle, // Reusing check circle or maybe something else
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Precision in Chemicals & Lubricants",
            content: "In the realm of industrial and fine chemicals, and oil and lubricants, precision is paramount. Our manufacturing processes focus on meeting exacting specifications, delivering products that optimize performance and reliability across industries.",
            icon: FlaskConical,
            color: "bg-purple-100 text-purple-600"
        }
    ];

    const commitments = [
        {
            title: "Advanced Technology",
            description: "Our facilities are equipped with cutting-edge machinery and technology, ensuring precision and efficiency in every stage of the manufacturing process.",
            icon: Settings
        },
        {
            title: "Skilled Workforce",
            description: "Our team comprises skilled professionals dedicated to upholding the highest standards of manufacturing excellence, ensuring consistency and quality in every product.",
            icon: Users
        },
        {
            title: "Continuous Improvement",
            description: "We embrace a culture of continuous improvement, regularly updating our processes to align with industry advancements and evolving customer needs.",
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
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/manuf.jpg"
                                alt="Manufacturing Facility"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay for better text readability if needed, though card handles it */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Overlay Card - Right Aligned as per screenshot */}
                        <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 max-w-xl w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-black/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl text-white"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-6">
                                    Manufacturing
                                </h1>
                                <p className="text-gray-100 font-medium leading-relaxed">
                                    At TG PHARMZ LLP, our manufacturing prowess stands as a testament to our commitment to excellence and innovation across diverse product categories. Our state-of-the-art facilities and stringent processes ensure the production of high-quality products that meet global standards.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="space-y-12 max-w-5xl mx-auto">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors"
                            >
                                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${section.color}`}>
                                    <section.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 bg-teal-400/20 inline-block px-2">
                                        {section.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed bg-teal-400/10 p-2 rounded-lg">
                                        {section.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Commitment to Excellence & Innovation
                        </h2>
                        <p className="text-muted-foreground">
                            At TG PHARMZ LLP, our manufacturing isn’t just about producing goods; it’s about delivering excellence, innovation, and reliability in every product we create.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {commitments.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
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

export default Manufacturing;
