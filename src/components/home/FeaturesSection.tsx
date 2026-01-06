import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Shield, Microscope, Globe, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'WHO-GMP Certified',
    description: 'Manufacturing facilities certified by WHO for Good Manufacturing Practices.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control at every stage from raw materials to finished products.',
  },
  {
    icon: Microscope,
    title: 'Advanced R&D',
    description: 'State-of-the-art research facilities driving innovation in pharmaceutical sciences.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Exporting to 50+ countries with a robust international distribution network.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly skilled scientists, pharmacists, and healthcare professionals.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Committed to sustainable practices and responsible business growth.',
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Excellence in Every Aspect
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering healthcare solutions backed by decades of expertise and innovation
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
