"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

const milestones = [
  { year: '2010', title: 'Founded', description: 'Started with a vision to make cybersecurity accessible' },
  { year: '2015', title: 'Global Expansion', description: 'Extended operations to 15+ countries' },
  { year: '2020', title: 'AI Integration', description: 'Launched AI-powered threat detection' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as top cybersecurity provider' },
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'PCI DSS Certified',
  'NIST Framework Aligned',
  'FedRAMP Authorized',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h2 className="section-title">
            Protecting Digital Assets <span className="section-title-accent">Since 2010</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            We are a team of passionate security professionals dedicated to safeguarding 
            businesses from the ever-evolving landscape of cyber threats.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="text-primary font-mono text-sm mb-1">{milestone.year}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <div className="glass-card p-8 border-glow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations worldwide with cutting-edge cybersecurity solutions that 
                protect their digital assets, ensure business continuity, and build lasting trust 
                with their customers. We believe security should be proactive, not reactive.
              </p>
            </div>

            {/* Certifications */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Certifications & Compliance</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
