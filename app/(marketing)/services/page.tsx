"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Eye, Server, Bug, FileKey, Wifi, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Shield,
    title: 'Threat Detection & Prevention',
    description: 'Advanced AI-powered systems that identify and neutralize threats before they can impact your business. Our proactive approach ensures your infrastructure stays protected 24/7.',
    features: [
      'Real-time threat monitoring',
      'AI-powered threat analysis',
      'Automated incident response',
      'Behavioral analytics',
      'Zero-day threat protection',
    ],
    price: 'From $2,999/mo',
  },
  {
    icon: Lock,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments that uncover vulnerabilities in your systems and applications before attackers do. Our ethical hackers simulate real-world attacks.',
    features: [
      'Network penetration testing',
      'Web application security',
      'Mobile app testing',
      'Social engineering assessments',
      'Detailed remediation reports',
    ],
    price: 'From $5,000/project',
  },
  {
    icon: Eye,
    title: 'Security Operations Center',
    description: '24/7 monitoring and incident response by our team of certified security experts. We act as an extension of your team, providing round-the-clock protection.',
    features: [
      '24/7/365 monitoring',
      'Rapid incident response',
      'Threat hunting services',
      'Security analytics',
      'Monthly security reports',
    ],
    price: 'From $4,999/mo',
  },
  {
    icon: Server,
    title: 'Cloud Security',
    description: 'Protect your cloud infrastructure with comprehensive security solutions tailored for AWS, Azure, GCP, and hybrid environments.',
    features: [
      'Cloud security posture management',
      'Configuration compliance',
      'Container security',
      'Serverless protection',
      'Multi-cloud visibility',
    ],
    price: 'From $3,499/mo',
  },
  {
    icon: Bug,
    title: 'Malware Analysis',
    description: 'Deep analysis of suspicious files and behaviors to protect against evolving malware threats. Our lab reverse engineers threats to understand and prevent future attacks.',
    features: [
      'Dynamic malware analysis',
      'Reverse engineering',
      'Threat intelligence feeds',
      'Custom malware hunting',
      'Incident forensics',
    ],
    price: 'From $1,999/analysis',
  },
  {
    icon: FileKey,
    title: 'Data Protection',
    description: 'Encryption and data loss prevention solutions to keep your sensitive information secure. We help you protect your most valuable asset—your data.',
    features: [
      'End-to-end encryption',
      'DLP implementation',
      'Data classification',
      'Access control management',
      'Compliance automation',
    ],
    price: 'From $2,499/mo',
  },
  {
    icon: Wifi,
    title: 'Network Security',
    description: 'Comprehensive network protection including firewalls, IDS/IPS, and secure architecture design. Build a fortress around your digital infrastructure.',
    features: [
      'Next-gen firewall management',
      'IDS/IPS deployment',
      'Zero trust architecture',
      'Network segmentation',
      'VPN solutions',
    ],
    price: 'From $3,999/mo',
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Educate your team with comprehensive security awareness programs and phishing simulations. Your employees become your first line of defense.',
    features: [
      'Security awareness training',
      'Phishing simulations',
      'Role-based training',
      'Compliance training',
      'Executive briefings',
    ],
    price: 'From $999/mo',
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="
        group relative rounded-2xl p-8
        bg-gradient-to-br from-background via-background to-background
        border border-border/50
        transition-all duration-500
        hover:border-cyan-400/60
        hover:bg-gradient-to-br hover:from-cyan-500/10 hover:via-background hover:to-blue-500/10
        hover:shadow-[0_0_60px_rgba(0,255,255,0.2)]
      "
    >
      {/* ICON */}
      <div className="relative mb-7">
        <div
          className="
            w-16 h-16 rounded-xl
            bg-cyan-500/15
            border border-cyan-400/30
            flex items-center justify-center
            shadow-[0_0_25px_rgba(0,255,255,0.25)]
            transition-all duration-500
            group-hover:bg-cyan-400/25
            group-hover:shadow-[0_0_40px_rgba(0,255,255,0.45)]
          "
        >
          <service.icon className="w-8 h-8 text-cyan-300" />
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-cyan-300 transition-colors">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* FEATURES */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            {/* CYAN CHECK ICON */}
            <div
              className="
                mt-0.5 w-5 h-5 rounded-full
                bg-cyan-400/20
                flex items-center justify-center
                shadow-[0_0_12px_rgba(0,255,255,0.7)]
                flex-shrink-0
              "
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
            </div>
            <span className="text-muted-foreground text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-5" />

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <span className="text-cyan-300 font-semibold text-lg">
          {service.price}
        </span>

        <motion.a
          href="/contact"
          whileHover={{ x: 6 }}
          className="
            flex items-center gap-2
            text-sm font-medium
            text-muted-foreground
            hover:text-cyan-300
            transition-colors
          "
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};


const Services = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        badge="Our Services"
        title="Comprehensive"
        titleAccent="Security Solutions"
        subtitle="From threat detection to employee training, we provide end-to-end cybersecurity services to protect your digital assets."
      />
      
      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-3xl mx-auto border-glow"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              Every organization has unique security requirements. Contact us to discuss 
              a tailored security strategy for your business.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button inline-flex items-center gap-2"
            >
              Get a Custom Quote
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Services;
