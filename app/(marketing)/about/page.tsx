"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DoorClosed , Users, Award, Globe, Target, Heart, CheckCircle2, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import AlternatingSection from '@/components/AlternatingSection';
import Footer from '@/components/Footer';

const stats = [
  { value: '500+', label: 'Clients Protected' },
  { value: '99.9%', label: 'Threat Detection Rate' },
  { value: '15+', label: 'Countries Served' },
  { value: '50+', label: 'Security Experts' },
];

const values = [
  {
    icon: DoorClosed,
    title: 'Security First',
    description: 'We believe security should be proactive, not reactive. We stay ahead of threats so you can focus on growing your business.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do, from our technology to our customer service.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Trust is the foundation of security. We operate with complete transparency and ethical standards.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, building lasting partnerships based on mutual success.',
  },
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former NSA cybersecurity analyst with 20+ years of experience in threat intelligence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Led security architecture at Fortune 500 companies. Expert in AI-driven threat detection.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emily Watson',
    role: 'VP of Security Operations',
    bio: 'Built and scaled SOC teams for global enterprises. Certified CISSP and CISM.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'James Park',
    role: 'Head of Penetration Testing',
    bio: 'Ethical hacker with 15+ years experience. Found vulnerabilities in major tech platforms.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'PCI DSS Certified',
  'NIST Framework Aligned',
  'FedRAMP Authorized',
  'HIPAA Compliant',
  'CCPA Compliant',
];

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        badge="About AristhaX"
        title="Protecting Digital Assets"
        titleAccent="Since 2010"
        subtitle="We are a team of passionate security professionals dedicated to safeguarding businesses from the ever-evolving landscape of cyber threats."
      />
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-16 relative -mt-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center border-glow-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <AlternatingSection
        title="Our Mission"
        description="To empower organizations worldwide with cutting-edge cybersecurity solutions that protect their digital assets, ensure business continuity, and build lasting trust with their customers. We believe security should be accessible to every business, not just the Fortune 500."
        features={[
          'Proactive threat detection and prevention',
          'Continuous innovation in security technology',
          'Building lasting partnerships with our clients',
          'Making enterprise security accessible to all',
        ]}
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
        imageAlt="Security Operations Center"
        icon={Target}
      />
      
      {/* Story Section */}
      <AlternatingSection
        title="Our Story"
        description="Founded in 2010 by a team of former government cybersecurity specialists, AristhaX was born from a vision to make enterprise-grade security accessible to organizations of all sizes. What started as a small consulting firm has grown into a global security powerhouse, protecting over 500 clients across 15 countries."
        features={[
          '2010: Founded in San Francisco',
          '2015: Expanded to 15+ countries globally',
          '2020: Launched AI-powered threat detection',
          '2024: Recognized as industry leader',
        ]}
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
        imageAlt="AristhaX Team"
        imageOnLeft
        icon={Globe}
      />
      
      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="section-title">
              What <span className="section-title-accent">Drives Us</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Leadership Team
            </span>
            <h2 className="section-title">
              Meet Our <span className="section-title-accent">Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
              Our leadership team brings decades of combined experience from top security organizations worldwide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-4xl mx-auto"
          >
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Compliance</h2>
            <p className="text-muted-foreground mb-8">
              We maintain the highest industry standards and certifications to ensure your data is protected.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
