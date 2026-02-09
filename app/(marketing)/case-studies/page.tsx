"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Building2, TrendingUp, DoorClosed, Clock, Users, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const caseStudies = [
  {
    title: 'Global Bank Security Transformation',
    client: 'Fortune 500 Financial Institution',
    industry: 'Banking & Finance',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    challenge: 'Legacy security infrastructure unable to detect modern threats, leading to increased risk exposure.',
    solution: 'Deployed AI-powered threat detection and 24/7 SOC monitoring with zero-trust architecture.',
    results: [
      { metric: '99.9%', label: 'Threat Detection Rate' },
      { metric: '85%', label: 'Faster Response Time' },
      { metric: '$2.5M', label: 'Annual Savings' },
    ],
    testimonial: {
      quote: "AristhaX transformed our security posture completely. We went from reactive firefighting to proactive threat prevention.",
      author: 'CISO, Global Banking Institution',
    },
  },
  {
    title: 'Healthcare Data Protection',
    client: 'Multi-State Hospital Network',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop',
    challenge: 'HIPAA compliance gaps and vulnerable patient data systems putting millions of records at risk.',
    solution: 'Comprehensive data protection strategy with encryption, DLP, and compliance automation.',
    results: [
      { metric: '100%', label: 'HIPAA Compliance' },
      { metric: '0', label: 'Data Breaches' },
      { metric: '60%', label: 'Audit Time Reduced' },
    ],
    testimonial: {
      quote: "Our patient data is now more secure than ever, and we passed our HIPAA audit with flying colors.",
      author: 'CTO, Healthcare Network',
    },
  },
  {
    title: 'E-Commerce Fraud Prevention',
    client: 'Leading Online Retailer',
    industry: 'Retail & E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    challenge: 'Sophisticated fraud attacks costing millions in chargebacks and damaged customer trust.',
    solution: 'Real-time fraud detection with machine learning and behavioral analytics integration.',
    results: [
      { metric: '95%', label: 'Fraud Reduction' },
      { metric: '$4M', label: 'Recovered Revenue' },
      { metric: '40%', label: 'False Positive Reduction' },
    ],
    testimonial: {
      quote: "The ROI was immediate. We stopped losing money to fraudsters and our customers feel safer shopping with us.",
      author: 'VP of Security, E-Commerce Company',
    },
  },
  {
    title: 'Manufacturing OT Security',
    client: 'Industrial Manufacturing Giant',
    industry: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop',
    challenge: 'Connected factory floor vulnerable to cyber attacks that could halt production lines.',
    solution: 'OT/IT security convergence with network segmentation and industrial threat monitoring.',
    results: [
      { metric: '0', label: 'Production Disruptions' },
      { metric: '100%', label: 'OT Visibility' },
      { metric: '70%', label: 'Risk Reduction' },
    ],
    testimonial: {
      quote: "We never realized how exposed our production systems were. AristhaX gave us complete visibility and protection.",
      author: 'Plant Security Manager',
    },
  },
];

const industries = [
  'All Industries',
  'Banking & Finance',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Technology',
  'Government',
];

const CaseStudies = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        badge="Success Stories"
        title="Real Results for"
        titleAccent="Real Businesses"
        subtitle="Discover how we've helped organizations across industries strengthen their security posture and protect what matters most."
      />
      
      {/* Stats Banner */}
      <section className="py-16 relative -mt-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-glow"
          >
            {[
              { icon: Building2, value: '500+', label: 'Clients Protected' },
              { icon: DoorClosed, value: '99.9%', label: 'Success Rate' },
              { icon: TrendingUp, value: '$50M+', label: 'Savings Generated' },
              { icon: Clock, value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Industry Filter */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className="glass-card overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-video lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-muted-foreground text-sm mb-2">{study.client}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{study.title}</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-xl lg:text-2xl font-bold text-primary mb-1">{result.metric}</div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <blockquote className="border-l-2 border-primary pl-4 mb-6">
                      <p className="text-muted-foreground text-sm italic mb-2">"{study.testimonial.quote}"</p>
                      <cite className="text-xs text-primary not-italic">— {study.testimonial.author}</cite>
                    </blockquote>
                    
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-primary font-medium w-fit"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-3xl mx-auto border-glow"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help transform your security posture and protect your business.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default CaseStudies;
