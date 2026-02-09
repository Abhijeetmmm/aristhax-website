"use client";

import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Shield, Zap, Crown, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const plans = [
  {
    name: 'Starter',
    icon: Shield,
    description: 'Essential protection for small businesses',
    price: '$999',
    period: '/month',
    popular: false,
    features: [
      { name: 'Threat Detection', included: true },
      { name: 'Email Protection', included: true },
      { name: 'Basic Monitoring', included: true },
      { name: '8/5 Support', included: true },
      { name: 'Monthly Reports', included: true },
      { name: 'Penetration Testing', included: false },
      { name: '24/7 SOC', included: false },
      { name: 'Dedicated Team', included: false },
      { name: 'Custom Integrations', included: false },
    ],
  },
  {
    name: 'Professional',
    icon: Zap,
    description: 'Advanced security for growing companies',
    price: '$2,999',
    period: '/month',
    popular: true,
    features: [
      { name: 'Threat Detection', included: true },
      { name: 'Email Protection', included: true },
      { name: 'Advanced Monitoring', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Weekly Reports', included: true },
      { name: 'Penetration Testing', included: true },
      { name: '24/7 SOC', included: true },
      { name: 'Dedicated Team', included: false },
      { name: 'Custom Integrations', included: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: Crown,
    description: 'Complete protection for large organizations',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      { name: 'Threat Detection', included: true },
      { name: 'Email Protection', included: true },
      { name: 'Enterprise Monitoring', included: true },
      { name: '24/7 Priority Support', included: true },
      { name: 'Real-time Reports', included: true },
      { name: 'Unlimited Pen Tests', included: true },
      { name: '24/7 SOC', included: true },
      { name: 'Dedicated Team', included: true },
      { name: 'Custom Integrations', included: true },
    ],
  },
];

const addOns = [
  { name: 'Penetration Testing', description: 'Quarterly comprehensive security assessment', price: '$5,000/quarter' },
  { name: 'Security Training', description: 'Employee awareness programs', price: '$500/month' },
  { name: 'Compliance Audit', description: 'SOC 2, HIPAA, PCI compliance support', price: '$10,000/audit' },
  { name: 'Incident Response Retainer', description: 'Priority emergency response team', price: '$3,000/month' },
];

const faqs = [
  {
    question: 'How quickly can you onboard our organization?',
    answer: 'Typical onboarding takes 2-4 weeks depending on the complexity of your infrastructure. Our team handles the entire process with minimal disruption to your operations.',
  },
  {
    question: 'What happens if we experience a breach?',
    answer: 'Our incident response team is available 24/7. For Professional and Enterprise plans, response times are guaranteed within 15 minutes. We handle containment, investigation, and remediation.',
  },
  {
    question: 'Can we customize our security package?',
    answer: 'Absolutely! Our plans are starting points. We work with each client to create a tailored security strategy that addresses their specific needs and compliance requirements.',
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes, we offer a 30-day satisfaction guarantee for all new clients. If you\'re not satisfied with our services, we\'ll refund your first month\'s payment.',
  },
  {
    question: 'What certifications do your security analysts hold?',
    answer: 'Our team holds industry-leading certifications including CISSP, CISM, CEH, OSCP, and GIAC. We invest heavily in continuous training and certification.',
  },
  {
    question: 'How do you integrate with our existing tools?',
    answer: 'We integrate with all major SIEM platforms, ticketing systems, and cloud providers. Our API-first approach ensures seamless connectivity with your existing security stack.',
  },
];

const Pricing = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        badge="Pricing Plans"
        title="Simple, Transparent"
        titleAccent="Pricing"
        subtitle="Choose the protection level that fits your organization. All plans include our core security features."
      />
      
      {/* Pricing Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 relative ${
                  plan.popular ? 'border-primary/50 border-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'cyber-button'
                      : 'cyber-button-secondary'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Add-ons */}
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
              Enhance Your Protection
            </span>
            <h2 className="section-title">
              Available <span className="section-title-accent">Add-Ons</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{addon.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                <span className="text-primary font-semibold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="section-title">
              Frequently Asked <span className="section-title-accent">Questions</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-6">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-3xl mx-auto border-glow"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free consultation with our security experts to find the perfect plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button inline-flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button-secondary inline-flex items-center gap-2"
              >
                Call: (123) 456-7890
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Pricing;
