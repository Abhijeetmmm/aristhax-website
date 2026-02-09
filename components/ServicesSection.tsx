"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Eye, Server, Bug, FileKey, Wifi, Users } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Threat Detection & Prevention',
    description: 'Advanced AI-powered systems that identify and neutralize threats before they can impact your business.',
    features: ['Real-time monitoring', 'AI threat analysis', 'Automated response'],
  },
  {
    icon: Lock,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments that uncover vulnerabilities in your systems and applications.',
    features: ['Network testing', 'Application security', 'Social engineering'],
  },
  {
    icon: Eye,
    title: 'Security Operations Center',
    description: '24/7 monitoring and incident response by our team of certified security experts.',
    features: ['24/7 monitoring', 'Incident response', 'Threat hunting'],
  },
  {
    icon: Server,
    title: 'Cloud Security',
    description: 'Protect your cloud infrastructure with comprehensive security solutions tailored for AWS, Azure, and GCP.',
    features: ['Cloud assessment', 'Configuration review', 'Compliance'],
  },
  {
    icon: Bug,
    title: 'Malware Analysis',
    description: 'Deep analysis of suspicious files and behaviors to protect against evolving malware threats.',
    features: ['Dynamic analysis', 'Reverse engineering', 'Threat intelligence'],
  },
  {
    icon: FileKey,
    title: 'Data Protection',
    description: 'Encryption and data loss prevention solutions to keep your sensitive information secure.',
    features: ['Encryption', 'DLP solutions', 'Access control'],
  },
  {
    icon: Wifi,
    title: 'Network Security',
    description: 'Comprehensive network protection including firewalls, IDS/IPS, and secure architecture design.',
    features: ['Firewall management', 'IDS/IPS', 'Zero trust'],
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Educate your team with comprehensive security awareness programs and phishing simulations.',
    features: ['Awareness training', 'Phishing tests', 'Policy development'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive <span className="section-title-accent">Security Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            From threat detection to employee training, we provide end-to-end cybersecurity 
            services to protect your digital assets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 group cursor-pointer border-glow-hover transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
