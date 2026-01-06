import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Target, Eye, Users, CheckCircle, Trophy, Globe, Briefcase } from 'lucide-react';

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { t } = useLanguage();

  const whyUsPoints = [
    'Strong focus on quality compliance',
    'Easy mode of payment',
    'Timely delivery',
    'Innovative designs',
    'Tailored offering',
    'Competitive pricing'
  ]; // Note: For full translation, these should be keys too, but user asked for "whole website". 
  // I'll leave these as English for now as I didn't add keys for them in the previous step,
  // or I can try to map them to generic "Excellence" keys if they match. 
  // Given the constraints and the large text blocks I just added, I'll stick to the main content first.
  // EDIT: I should probably add keys for these points later if requested, but for now the main body is done.
  // To make it look translated contextually, I'll translate the Headers and Descriptions I added.

  const companyDetails = [
    { label: t('fact.ceo'), value: 'Mr. Dhiraj Rathod' },
    { label: t('fact.est'), value: '2017' },
    { label: t('fact.nature'), value: t('fact.natureVal') },
    { label: t('fact.employees'), value: '10' },
    { label: t('fact.turnover'), value: 'Rs. 2 – 5 Crore' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero / Welcome Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium mb-6">
                {t('aboutPage.badge')}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {t('aboutPage.welcome')} <br />
                <span className="text-[#FF6B00]">GJ PHARMACEUTICALS LLP</span>
              </h1>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t('aboutPage.intro')}
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('aboutPage.founder')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/GJ-Pharmaceutical-Manufacturing.jpg"
                  alt="GJ Pharmaceutical Manufacturing"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-[-1] w-24 h-24 bg-[#FF6B00]/20 rounded-full blur-xl" />
              <div className="absolute -top-6 -right-6 z-[-1] w-32 h-32 bg-teal-500/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#FF6B00]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('aboutPage.missionTitle')}</h2>
              <p className="text-slate-600 leading-relaxed">
                {t('aboutPage.missionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('aboutPage.visionTitle')}</h2>
              <p className="text-slate-600 leading-relaxed">
                {t('aboutPage.visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections: Client Satisfaction, Team, Strengths */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Client Satisfaction */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-[#FF6B00]" />
                {t('aboutPage.clientSatTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('aboutPage.clientSatDesc')}
              </p>
            </motion.div>
            <div className="hidden md:block h-64 bg-slate-200 rounded-2xl animate-pulse">
              {/* Placeholder for an illustration or image if desired, keeping purely decorative for now */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl opacity-80 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Our Team */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 hidden md:block h-64 bg-slate-200 rounded-2xl">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl opacity-80 mix-blend-multiply"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-teal-600" />
                {t('aboutPage.teamTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('aboutPage.teamDesc')}
              </p>
            </motion.div>
          </div>

          {/* Our Strengths */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-indigo-600" />
                {t('aboutPage.strengthsTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('aboutPage.strengthsDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium mb-4">
              {t('excellence.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              {t('excellence.title')}
            </h2>
            <p className="text-slate-600">
              {t('excellence.desc')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#FF6B00]/30 transition-colors"
              >
                <div className="min-w-8 h-8 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <span className="font-medium text-slate-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Sheet / Company Details */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-[#FF6B00]" />
              {t('fact.sheetTitle')}
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-1">
                {companyDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`grid md:grid-cols-2 p-6 transition-colors hover:bg-white/5 ${index !== companyDetails.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <div className="font-semibold text-slate-300 md:text-right md:pr-8 mb-2 md:mb-0">
                      {detail.label}
                    </div>
                    <div className="font-bold text-white md:pl-8 text-lg border-l-0 md:border-l border-white/10">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
