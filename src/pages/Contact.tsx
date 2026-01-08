import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Seo from '@/components/Seo';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Building, Phone, Mail, FileText, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: Building,
      title: t('contact.visit'),
      details: [
        'Registered Office:',
        '506/507, Ajmera Sikova, 23, Nityanand Nagar, Opp. Damodar Park, Ghatkopar West, Mumbai - 400086.',
        '',
        'Head Office:',
        'Goregoan, Mumbai - 400104.',
        '',
        'Corporate Office:',
        'A-308 Privilon b/h Iscon Temple, Iscon Cross Road Ahmedabad - 380015, Gujrat, INDIA'
      ],
    },
    {
      icon: Phone,
      title: t('contact.call'),
      details: ['+91 9167369755', '+91 7977299867', '(Call & WhatsApp)'],
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['info@tgpharmz.com'],
    },
    {
      icon: FileText,
      title: t('contact.business'),
      details: ['GST No:', '27AAQFG6730K1ZW'],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageWrapper className="bg-[#E0F7FA]/30"> {/* Light mix background */}
      <Navbar />

      {/* Hero Section - Reduced height for better focus on content */}
      <section className="relative pt-32 pb-12 bg-white overflow-hidden">
        <div className="container-custom relative text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 max-w-5xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-tr-full opacity-50" />
            <blockquote className="text-xl font-serif italic text-slate-700 leading-relaxed mb-6 relative z-10">
              {t('contact.founderQuote')}
            </blockquote>
            <div className="flex flex-col items-center relative z-10">
              <div className="font-bold text-lg text-[#FF6B00]">Dhiraj Rathod</div>
              <div className="text-slate-500 font-medium">Founder, CEO of TG PHARMZ LLP</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* LEFT COLUMN: Contact Details */}
            <div className="space-y-6">

              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-medium text-slate-600 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

            </div>


            {/* RIGHT COLUMN: Form */}
            <div className="bg-[#4FD1C5] p-8 md:p-10 rounded-[2.5rem] text-white shadow-lg sticky top-24">
              <div className="mb-8">
                <p className="text-teal-900 font-medium opacity-80 mb-1">We will contact</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t('contact.formTitle')}
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-800">{t('contact.formName')} *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border-0 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50"
                      placeholder={t('contact.formName')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-800">&nbsp;</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border-0 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50"
                      placeholder={t('contact.formName')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-teal-800">{t('contact.formEmail')} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-teal-800">{t('contact.formSubject')} *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50"
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-teal-800">{t('contact.formMessage')} *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder=""
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-teal-800 hover:bg-teal-900 text-white border-0"
                >
                  {isSubmitting ? 'Sending...' : t('contact.send')}
                </Button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default Contact;
