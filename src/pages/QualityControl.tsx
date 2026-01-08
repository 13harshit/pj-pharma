import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const qualityPoints = [
    {
        title: "Quality Assurance",
        description: "We uphold uncompromising standards of quality across all our product categories."
    },
    {
        title: "Reliability",
        description: "Count on us for timely deliveries and consistent product excellence."
    },
    {
        title: "Global Reach",
        description: "Our products reach clients worldwide, fulfilling diverse industry requirements."
    },
    {
        title: "Customer Satisfaction",
        description: "Your satisfaction is our priority, and we strive for excellence in every interaction."
    }
];

const QualityControl = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden min-h-[600px] shadow-2xl flex flex-col md:flex-row">

                        {/* Image Section */}
                        <div className="md:w-3/5 relative min-h-[400px]">
                            <img
                                src="/quality-control.jpg"
                                alt="Quality Control Specialist"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:to-transparent" />
                        </div>

                        {/* Content Section - Styled as the dark green card overlapping or adjacent */}
                        <div className="md:w-2/5 bg-[#1B3C1B] p-8 md:p-12 flex flex-col justify-center relative">
                            {/* Overlap effect for desktop if desired, but side-by-side works well too. 
                   To match the screenshot's 'floating card' look more closely, we can adjust.
                   Let's keep it side-by-side for responsiveness but style the container seamlessly. 
               */}

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                                    Quality Control
                                </h1>

                                <ul className="space-y-6">
                                    {qualityPoints.map((point, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col gap-1"
                                        >
                                            <span className="text-[#FF6B00] font-bold text-lg">
                                                • {point.title}:
                                            </span>
                                            <span className="text-[#FF6B00] font-normal text-base leading-relaxed pl-4">
                                                {/* The user's screenshot shows the text following the title is also orange/colored, 
                             or strictly speaking, the title is bold orange and the rest is orange-ish text. 
                             Looking closely at the image: 
                             - Bullet and Title are Orange
                             - Description text appears to be a slightly lighter/gold color, definitely not white.
                             I will use a matching orange-gold shade.
                         */}
                                                <span className="text-orange-300/90"> {point.description}</span>
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default QualityControl;
