import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Globe, Users, Handshake, Truck, Laptop, Award, TrendingUp } from 'lucide-react';

const SalesDistribution = () => {
    const features = [
        {
            title: "Global Reach, Local Presence",
            content: "Our sales network spans across continents, enabling us to cater to diverse markets and regions worldwide. With a focus on understanding local nuances and preferences, we ensure our products are readily available and accessible wherever they’re needed.",
            icon: Globe,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Customer-Centric Approach",
            content: "We prioritize our customers’ needs and preferences. Our sales team is dedicated to providing personalized support and solutions, forging strong relationships with clients and partners globally. We listen, understand, and tailor our services to meet specific requirements.",
            icon: Users,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Strategic Partnerships",
            content: "Collaboration is key to our success. We engage in strategic partnerships with distributors, retailers, and stakeholders who share our commitment to quality and reliability. These partnerships strengthen our distribution channels, ensuring seamless product availability.",
            icon: Handshake,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Timely Deliveries & Logistics Expertise",
            content: "Efficient logistics and timely deliveries are non-negotiable. Our well-structured logistics operations ensure that products reach their destinations promptly, maintaining product integrity and meeting delivery timelines consistently.",
            icon: Truck,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "Technology-Driven Approach",
            content: "In an era of digital transformation, we leverage cutting-edge technology in our sales and distribution processes. This includes robust inventory management systems, efficient order processing, and real-time tracking, ensuring accuracy and transparency throughout the supply chain.",
            icon: Laptop,
            color: "bg-cyan-100 text-cyan-600"
        },
        {
            title: "Commitment to Quality & Compliance",
            content: "Quality and compliance remain at the core of our sales and distribution operations. We ensure that every step of the distribution process complies with regulatory standards, maintaining the quality and authenticity of our products at every touchpoint.",
            icon: Award,
            color: "bg-red-100 text-red-600"
        },
        {
            title: "Continuous Improvement",
            content: "We believe in continuous improvement. Feedback from our distribution partners and customers is invaluable, driving our efforts to refine and enhance our sales and distribution strategies, making our processes even more efficient and customer-focused.",
            icon: TrendingUp,
            color: "bg-teal-100 text-teal-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center relative z-10">
                        {/* Image Side - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-3/5 relative h-[400px] lg:h-[500px] rounded-l-3xl rounded-r-none overflow-hidden shadow-xl"
                        >
                            <img
                                src="/Sales-Distribution-Network.webp"
                                alt="Sales and Distribution Network"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                        </motion.div>

                        {/* Content Card Side - Right (Overlapping) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-2/5 lg:-ml-20 mt-[-3rem] lg:mt-0 relative z-20"
                        >
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100">
                                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-6">
                                    Sales & Distribution Network
                                </h1>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    At GJ Pharmaceuticals LLP, our extensive sales and distribution network forms the backbone of our global reach. We take pride in our robust network that ensures efficient, timely, and widespread availability of our diverse range of products across the globe.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Text / Mission */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Building Lasting Partnerships
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            At GJ Pharmaceuticals LLP, our sales and distribution network isn’t just about moving products—it’s about building lasting partnerships, ensuring accessibility, and delivering excellence across borders.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${feature.color}`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.content}
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

export default SalesDistribution;
