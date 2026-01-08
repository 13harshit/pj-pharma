import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Chief Medical Officer',
    company: 'Apollo Hospitals',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
    content: 'TG PHARMZ has been our trusted partner for over a decade. Their commitment to quality and timely delivery is unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Procurement Director',
    company: 'Global Health Solutions',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face',
    content: 'The quality of their pharmaceutical products consistently exceeds international standards. A reliable partner for our global distribution network.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'CEO',
    company: 'MedCare International',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Their R&D capabilities and innovative approach to healthcare solutions have helped us serve patients better across the Middle East.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by healthcare leaders and organizations worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
