import { ArrowRight, Microscope, Globe2, FlaskConical, Headset, Pill, Syringe, Droplet, HeartPulse, CircleDot, BriefcaseMedical, ShieldCheck, Users, Leaf, Sprout, Factory, Trophy, Lightbulb, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { t } = useLanguage();

  const products = [
    t('nav.pharmaceutical'),
    t('nav.nutraceutical'),
    t('nav.herbal'),
    t('nav.foodgrains'),
    t('nav.chemicals'),
    t('nav.oil')
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const carouselImages = [
    "/GJ-Pharmaceuticals-LLP-Manufacturing-Factory.jpg",
    "/GJ-Pharmaceuticals-LLP-Manufacturing-Unit.jpg",
    "/GJ-Pharmaceuticals-LLP-Manufacturing-Company.jpg"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-screen min-h-[800px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/l1.png')`,
            }}
          >
            {/* Optional Overlay to ensure text readability if needed, though image seems dark enough */}
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
          </div>

          <div className="relative z-10 w-full h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            {/* Left Content Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card max-w-xl p-8 rounded-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-[#FF6B00]"></div>
                <span className="text-slate-800 font-bold tracking-wider text-sm">{t('hero.welcome')}</span>
              </div>

              <h1 className="text-6xl font-extrabold text-[#FF6B00] leading-tight mb-2">
                GJ
              </h1>
              <h1 className="text-5xl font-extrabold text-[#FF6B00] leading-tight mb-4">
                PHARMACEUTICALS
              </h1>
              <h2 className="text-2xl font-semibold text-slate-700 mb-6">
                LLP
              </h2>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {t('hero.description')}
              </p>

              <Button className="bg-[#1f2937] hover:bg-slate-700 text-white rounded-full px-8 py-6 text-lg font-medium group transition-all duration-300">
                {t('common.readMore')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Right Side Menu */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-dark-card rounded-2xl p-2 hidden lg:block w-[350px]"
            >
              <div className="flex flex-col">
                {products.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 hover:bg-white/10 rounded-xl cursor-pointer transition-colors border-b border-white/5 last:border-0 group">
                    <div className="w-10 h-10 rounded-lg border border-[#FF6B00] flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                      {/* Using a generic icon or could map specific ones */}
                      <div className="w-4 h-4 border-2 border-current rounded-sm"></div>
                    </div>
                    <span className="text-white font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>


        {/* About Us Section */}
        <section className="relative -mt-20 z-20 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl p-12 relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 opacity-50"></div>

              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">{t('about.title')}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-8"></div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 font-bold">✓</div>, bg: "bg-orange-100", title: t('about.certified') },
                  { icon: <Globe2 className="w-8 h-8 text-teal-600" />, bg: "bg-teal-100", title: t('about.global') },
                  { icon: <FlaskConical className="w-8 h-8 text-blue-600" />, bg: "bg-blue-100", title: t('about.rd') },
                  { icon: <Headset className="w-8 h-8 text-purple-600" />, bg: "bg-purple-100", title: t('about.support') },
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className={`w-20 h-20 rounded-full ${feature.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-slate-800 font-semibold text-lg">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <div className="bg-white py-10 border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "25+", text: t('stats.years') },
                { number: "500+", text: t('stats.products') },
                { number: "50+", text: t('stats.countries') },
                { number: "1000+", text: t('stats.clients') }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">{stat.number}</span>
                  <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-2">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full">{t('offer.title')}</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('services.title')}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{t('services.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mb-8">
              {[
                { icon: <Pill className="w-8 h-8 text-blue-500" />, title: t('nav.pharmaceutical'), desc: t('hero.description'), link: "#" },
                { icon: <Leaf className="w-8 h-8 text-green-500" />, title: t('nav.nutraceutical'), desc: "Premium quality dietary supplements, vitamins, minerals, and functional foods for optimal health.", link: "#" },
                { icon: <Sprout className="w-8 h-8 text-emerald-600" />, title: t('nav.herbal'), desc: "Natural and herbal formulations, cosmetic products with botanical extracts and traditional remedies.", link: "#" },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{card.desc}</p>
                  <a href={card.link} className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: <Globe2 className="w-8 h-8 text-amber-500" />, title: t('nav.foodgrains'), desc: "Premium quality food grains, edible oils, and authentic spices sourced from trusted suppliers.", link: "#" },
                { icon: <FlaskConical className="w-8 h-8 text-purple-500" />, title: t('nav.chemicals'), desc: "Industrial and fine chemicals meeting stringent quality standards for various applications.", link: "#" },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{card.desc}</p>
                  <a href={card.link} className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('excellence.title')}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{t('excellence.desc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Trophy className="w-6 h-6 text-blue-600" />, title: t('excellence.who'), desc: "Manufacturing facilities certified by WHO for Good Manufacturing Practices." },
                { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, title: t('excellence.qa'), desc: "Rigorous quality control at every stage from raw materials to finished products." },
                { icon: <Microscope className="w-6 h-6 text-blue-600" />, title: t('excellence.advrd'), desc: "State-of-the-art research facilities driving innovation in pharmaceutical sciences." },
                { icon: <Globe2 className="w-6 h-6 text-blue-600" />, title: t('about.global'), desc: "Exporting to 50+ countries with a robust international distribution network." },
                { icon: <Users className="w-6 h-6 text-blue-600" />, title: t('excellence.team'), desc: "Highly skilled scientists, pharmacists, and healthcare professionals." },
                { icon: <Leaf className="w-6 h-6 text-blue-600" />, title: t('excellence.sustain'), desc: "Committed to sustainable practices and responsible business growth." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors group">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <div className="group-hover:text-white transition-colors">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pharmaceutical Products Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('nav.pharmaceutical')}</h2>
              <div className="w-20 h-1 bg-[#FF6B00] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <div className="relative"><Pill className="w-10 h-10 text-slate-600" /><Pill className="w-10 h-10 text-slate-600 absolute -top-1 -right-2 rotate-45 opacity-70" /></div>, label: "TABLETS, CAPSULES, SYRUP" },
                { icon: <Syringe className="w-12 h-12 text-slate-600" />, label: "INJECTIONS" },
                { icon: <div className="flex gap-1"><div className="w-1 h-8 bg-slate-400 rounded-full"></div><div className="w-1 h-6 bg-slate-400 rounded-full mt-2"></div></div>, label: "IV FLUIDS" },
                { icon: <div className="relative"><FlaskConical className="w-10 h-10 text-slate-600" /><Pill className="w-5 h-5 text-slate-600 absolute bottom-0 -right-1" /></div>, label: "ANTICANCER DRUGS" },
                { icon: <HeartPulse className="w-12 h-12 text-slate-600" />, label: "CARDIO CARE" },
                { icon: <div className="flex gap-2"><div className="w-6 h-10 rounded-full border-2 border-slate-600 transform -rotate-12"></div><div className="w-6 h-10 rounded-full border-2 border-slate-600 transform rotate-12 bg-slate-200"></div></div>, label: "SOFT GEL CAPSULES" },
                { icon: <div className="w-12 h-8 rounded-[50%] border-2 border-slate-600 mt-2 flex items-center justify-center text-xs font-bold text-slate-500">SUPPLE</div>, label: "SUPPOSITORY" },
                { icon: <BriefcaseMedical className="w-12 h-12 text-slate-600" />, label: "DIGNOSTICS KITS" },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-lg border border-slate-100 h-64 cursor-pointer transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-full border-2 border-slate-200 flex items-center justify-center mb-6 text-slate-600">
                    {product.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase">{product.label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Specialty Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch shadow-2xl rounded-3xl overflow-hidden">
              {/* Left: Image Carousel */}
              <div className="lg:w-1/2 relative bg-gray-100 min-h-[400px]">
                <div className="absolute inset-0" ref={emblaRef}>
                  <div className="flex h-full">
                    {carouselImages.map((src, idx) => (
                      <div className="flex-[0_0_100%] min-w-0 relative" key={idx}>
                        <img src={src} alt="Manufacturing Facility" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 bg-[#0F766E] p-12 flex flex-col justify-center text-white">
                <h2 className="text-4xl font-bold mb-8">{t('specialty.title')}</h2>

                <div className="space-y-6">
                  {[
                    t('specialty.accreditations'),
                    t('nav.rd'),
                    t('nav.contract'),
                    t('excellence.qa'),
                    t('specialty.health')
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-lg font-medium border-b border-white/20 pb-2 hover:pl-2 transition-all cursor-default"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



      </main>
      <Footer />
    </div>
  );
};

export default Index;
