"use client";

import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  badge?: string;
}

const PageHeader = ({ title, titleAccent, subtitle, badge }: PageHeaderProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden cyber-grid pt-20">
      {/* Background Elements */}
      <ParticleBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10 text-center py-20">
        {badge && (
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
      {badge}
    </span>
  </motion.div>
)}

        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-foreground">{title}</span>
          {titleAccent && (
            <>
              <br />
              <span className="text-glow-strong section-title-accent">{titleAccent}</span>
            </>
          )}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHeader;
