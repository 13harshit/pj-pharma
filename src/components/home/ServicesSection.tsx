import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Pill, Leaf, FlaskConical, Package, Beaker } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const services = [
  {
    icon: Pill,
    titleKey: 'nav.pharmaceutical',
    description: 'Tablets, capsules, syrups, injections, IV fluids, and specialized formulations for various therapeutic areas.',
    href: '/products/pharmaceutical',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Leaf,
    titleKey: 'nav.nutraceutical',
    description: 'Premium quality dietary supplements, vitamins, minerals, and functional foods for optimal health.',
    href: '/products/nutraceutical',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FlaskConical,
    titleKey: 'nav.herbal',
    description: 'Natural and herbal formulations, cosmetic products with botanical extracts and traditional remedies.',
    href: '/products/herbal',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Package,
    titleKey: 'nav.foodgrains',
    description: 'Premium quality food grains, edible oils, and authentic spices sourced from trusted suppliers.',
    href: '/products/foodgrains',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Beaker,
    titleKey: 'nav.chemicals',
    description: 'Industrial and fine chemicals meeting stringent quality standards for various applications.',
    href: '/products/chemicals',
    color: 'from-red-500 to-rose-500',
  },
];

export const ServicesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
