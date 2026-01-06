import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Factory, Globe, Truck, Handshake, CheckCircle } from 'lucide-react';

const facilitiesData: Record<string, {
  title: string;
  description: string;
  icon: any;
  features: string[];
  stats: { value: string; label: string }[];
}> = {
  manufacturing: {
    title: 'Manufacturing Excellence',
    description: 'Our WHO-GMP certified manufacturing facilities are equipped with state-of-the-art technology and stringent quality control measures.',
    icon: Factory,
    features: [
      'WHO-GMP certified production lines',
      'Fully automated manufacturing processes',
      'Clean room facilities for sterile products',
      'Temperature-controlled storage',
      'In-house quality testing laboratories',
      'Environmental monitoring systems',
      'Trained and certified personnel',
      'Continuous process improvement',
    ],
    stats: [
      { value: '100,000 sq.ft', label: 'Production Area' },
      { value: '500+', label: 'Daily Batches' },
      { value: '99.9%', label: 'Quality Rate' },
    ],
  },
  export: {
    title: 'Global Export Operations',
    description: 'Reaching healthcare providers across 50+ countries with our efficient export and logistics infrastructure.',
    icon: Globe,
    features: [
      'Export to 50+ countries worldwide',
      'Regulatory compliance for all markets',
      'Cold chain logistics capability',
      'International quality certifications',
      'Dedicated export documentation team',
      'Partner warehouses globally',
      'Real-time shipment tracking',
      'Customs clearance expertise',
    ],
    stats: [
      { value: '50+', label: 'Countries' },
      { value: '1000+', label: 'Annual Shipments' },
      { value: '48hrs', label: 'Dispatch Time' },
    ],
  },
  sales: {
    title: 'Sales & Distribution Network',
    description: 'Comprehensive distribution network ensuring timely delivery of healthcare products to customers across regions.',
    icon: Truck,
    features: [
      'Pan-India distribution network',
      'Regional distribution centers',
      'Direct-to-pharmacy delivery',
      'Hospital supply partnerships',
      'Retail pharmacy coverage',
      'Government tender supplies',
      'E-commerce integration',
      'Customer support centers',
    ],
    stats: [
      { value: '1000+', label: 'Distribution Points' },
      { value: '24hrs', label: 'Delivery Time' },
      { value: '98%', label: 'Fill Rate' },
    ],
  },
  contract: {
    title: 'Contract Manufacturing',
    description: 'Offering comprehensive contract manufacturing services with flexibility, quality, and competitive pricing.',
    icon: Handshake,
    features: [
      'Flexible production capacity',
      'Custom formulation development',
      'Private label manufacturing',
      'Technology transfer support',
      'Regulatory assistance',
      'Quality assurance guarantee',
      'Competitive pricing',
      'Confidentiality agreements',
    ],
    stats: [
      { value: '100+', label: 'Partner Brands' },
      { value: '1M+', label: 'Units/Month' },
      { value: '15+', label: 'Years Experience' },
    ],
  },
};

const Facilities = () => {
  const { type = 'manufacturing' } = useParams<{ type: string }>();
  const currentFacility = facilitiesData[type] || facilitiesData.manufacturing;
  const Icon = currentFacility.icon;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Our Facilities
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {currentFacility.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentFacility.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-8">
            {currentFacility.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Key Features & Capabilities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFacility.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{feature}</span>
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

export default Facilities;
