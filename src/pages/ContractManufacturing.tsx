import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Settings, Users, ShieldCheck, Handshake, BarChart, Lock, Headset } from 'lucide-react';

const ContractManufacturing = () => {
    const services = [
        {
            title: "Tailored Manufacturing Services",
            description: "Our contract manufacturing services are tailored to meet the specific needs of our partners. Whether it’s pharmaceuticals, nutraceuticals, cosmetics, food products, chemicals, or lubricants, we offer customizable manufacturing solutions to suit varied requirements.",
            icon: Settings,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Cutting-Edge Facilities & Expertise",
            description: "Backed by cutting-edge facilities and a team of skilled professionals, we ensure precision and efficiency in every stage of the manufacturing process. From formulation development to packaging and distribution, our expertise guarantees top-notch quality products.",
            icon: BarChart,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Quality Assurance & Compliance",
            description: "Quality is our priority. Our rigorous quality assurance protocols and adherence to global regulatory standards ensure that every product manufactured under contract meets the highest quality benchmarks, instilling confidence in our partners and their consumers.",
            icon: ShieldCheck,
            color: "bg-red-100 text-red-600"
        },
        {
            title: "Flexible Production Capacities",
            description: "We understand the dynamic nature of business demands. Our flexible production capacities enable us to scale operations efficiently, accommodating varying production volumes while maintaining quality and meeting timelines.",
            icon: Settings,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "Collaborative Partnerships",
            description: "Collaboration is at the heart of our contract manufacturing approach. We believe in forging strong, transparent partnerships with our clients, ensuring open communication, and working hand-in-hand to deliver exceptional results.",
            icon: Handshake,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Confidentiality & Integrity",
            description: "We value confidentiality and integrity in all our partnerships. Our robust confidentiality agreements safeguard proprietary information and intellectual property, fostering trust and mutual respect with our partners.",
            icon: Lock,
            color: "bg-indigo-100 text-indigo-600"
        },
        {
            title: "Comprehensive Support & Transparency",
            description: "Our commitment extends beyond manufacturing. We provide comprehensive support throughout the process, offering transparency, regular updates, and assistance at every step, ensuring a smooth and successful collaboration.",
            icon: Headset,
            color: "bg-cyan-100 text-cyan-600"
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
                                src="/Contract-Manufacturing-Solutions.webp"
                                alt="Contract Manufacturing"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay for readability */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Overlay Card - Right Aligned as per screenshot example */}
                        <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 max-w-xl w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-6">
                                    Contract Manufacturing
                                </h1>
                                <p className="text-slate-800 font-medium leading-relaxed">
                                    GJ Pharmaceuticals LLP offers comprehensive Contract Manufacturing solutions across a spectrum of industries. Leveraging our state-of-the-art facilities, expertise, and a commitment to quality, we partner with businesses seeking reliable and high-quality manufacturing services.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Your Partner in Production
                        </h2>
                        <p className="text-muted-foreground">
                            Whether you’re seeking a reliable partner for manufacturing your products or looking to outsource production processes, GJ Pharmaceuticals LLP offers the expertise, facilities, and dedication necessary to bring your vision to fruition.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-start"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
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

export default ContractManufacturing;
