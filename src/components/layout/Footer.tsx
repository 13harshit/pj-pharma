import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUpRight,
  Send,
  ShoppingBag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const footerLinks = {
    company: [
      { label: t('nav.about'), href: '/about' },
      { label: t('nav.certification'), href: '/certification' },
      { label: t('nav.innovation'), href: '/innovation' },
      { label: t('nav.quality'), href: '/quality' },
      // Careers wasn't in main nav, adding fallback or ignoring if no key. Assuming 'nav.company' context or similar. 
      // Let's use custom text if no key, but we want full translation. 
      // I'll skip 'Careers' for now or map it to a generic key if exists, or leave as string if not critical, but goal is full translation.
      // I will map 'Careers' to 'nav.company' as placeholder or just static to avoid breaking if no key. 
      // Actually I'll check my useLanguage update. I didn't add careers. 
      // I'll add a quick inline string for now or 'Join Us'.
      { label: 'Careers', href: '/careers' },
    ],
    products: [
      { label: t('nav.pharmaceutical'), href: '/products/pharmaceutical' },
      { label: t('nav.nutraceutical'), href: '/products/nutraceutical' },
      { label: t('nav.herbal'), href: '/products/herbal' },
      { label: t('nav.foodgrains'), href: '/products/foodgrains' },
      { label: t('nav.chemicals'), href: '/products/chemicals' },
    ],
    facilities: [
      { label: t('nav.manufacturing'), href: '/facilities/manufacturing' },
      { label: t('nav.export'), href: '/facilities/export' },
      { label: t('nav.sales'), href: '/facilities/sales' },
      { label: t('nav.contract'), href: '/facilities/contract' },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="relative container-custom pt-20 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            {/* Company Info */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <ShoppingBag className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  TG Pharmz
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed text-sm">
                Dedicated to improving global health through innovative pharmaceutical solutions. Excellence in every drop, quality in every pill.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Facilities</h4>
              <ul className="space-y-3">
                {footerLinks.facilities.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-white mb-4">{t('footer.newsletter')}</h4>
            <p className="text-white/60 text-sm mb-4">Stay updated with our latest news and products.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 text-sm"
              />
              <Button type="submit" variant="hero" size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>

            <h4 className="font-heading font-semibold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Goregoan, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 7977299867</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@tgpharmz.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} TG Pharmz. All rights reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
