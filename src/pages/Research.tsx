import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Microscope, FlaskConical, Atom, Target, Lightbulb, Users } from 'lucide-react';

const researchAreas = [
  {
    icon: FlaskConical,
    title: 'Drug Discovery',
    description: 'Identifying and developing new therapeutic compounds through advanced screening and synthesis methodologies.',
  },
  {
    icon: Atom,
    title: 'Formulation Development',
    description: 'Creating innovative drug delivery systems and optimizing formulations for enhanced efficacy and patient compliance.',
  },
  {
    icon: Microscope,
    title: 'Analytical Research',
    description: 'State-of-the-art analytical methods for quality control and product characterization.',
  },
  {
    icon: Target,
    title: 'Clinical Trials',
    description: 'Rigorous clinical trial management ensuring safety and efficacy of new pharmaceutical products.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'Exploring emerging technologies and novel approaches to healthcare challenges.',
  },
  {
    icon: Users,
    title: 'Collaborative Research',
    description: 'Partnerships with academic institutions and research organizations worldwide.',
  },
];

const capabilities = [
  'Advanced HPLC and Mass Spectrometry',
  'Stability Testing Chambers',
  'Dissolution Testing Equipment',
  'Microbiological Testing Facilities',
  'Particle Size Analysis',
  'Bioanalytical Services',
  'Method Development & Validation',
  'Regulatory Documentation',
];

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              R&D Excellence
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Research &
              <span className="block gradient-text">Development</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our state-of-the-art R&D facilities drive innovation in pharmaceutical sciences,
              developing novel formulations and therapeutic solutions that address unmet medical needs globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Focus
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Research Areas
            </h2>
            <p className="text-muted-foreground">
              Advancing healthcare through focused research in key therapeutic and technological areas
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development Text Section */}
      <section className="py-20 bg-muted/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Research & Development
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In the dynamic landscape of pharmaceuticals, Research and Development (R&D) stands as the cornerstone of innovation and progress.
              At TG PHARMZ, we recognize the pivotal role of R&D in shaping the future of healthcare and pharmaceutical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Capabilities
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Advanced Facilities & Equipment
              </h2>
              <p className="text-muted-foreground mb-8">
                Our R&D center is equipped with cutting-edge instruments and facilities
                to support comprehensive pharmaceutical research and development activities.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800"
                  alt="Research Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-card border border-border shadow-soft-lg">
                <div className="text-4xl font-heading font-bold gradient-text">50+</div>
                <div className="text-muted-foreground text-sm">Research Scientists</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Research;
