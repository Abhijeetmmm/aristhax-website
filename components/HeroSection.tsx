"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background Elements */}
      <ParticleBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
         
          <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      inline-flex items-center gap-3
      px-5 py-2 rounded-full
      border border-cyan-400/30
      bg-gradient-to-r from-cyan-500/10 via-background to-blue-500/10
      shadow-[0_0_25px_rgba(0,255,255,0.25)]
      backdrop-blur-sm
      mb-8
    "
  >
    {/* Glowing dot */}
    <span className="
      w-2.5 h-2.5 rounded-full
      bg-cyan-400
      shadow-[0_0_12px_rgba(0,255,255,0.9)]
      animate-pulse
    " />

    {/* Text */}
    <span className="
      text-sm font-medium tracking-wide
      bg-gradient-to-r from-cyan-300 to-blue-400
      bg-clip-text text-transparent
    ">
      Enterprise-Grade Security Solutions
    </span>
  </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Defend Your</span>
            <br />
            <span className="text-glow-strong section-title-accent">Digital Fortress</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced cybersecurity solutions that protect your business from evolving threats. 
            24/7 monitoring, rapid response, and cutting-edge defense systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              className="cyber-button flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Protection
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#services"
              className="cyber-button-secondary flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Shield, value: '99.9%', label: 'Threat Detection' },
              { icon: Lock, value: '500+', label: 'Clients Protected' },
              { icon: Eye, value: '24/7', label: 'Monitoring' },
              { icon: Shield, value: '0', label: 'Data Breaches' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="
  glass-card p-6 text-center
  border border-primary/20
  shadow-[0_0_40px_rgba(0,255,255,0.08)]
  hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]
  transition-all duration-300
"

                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
