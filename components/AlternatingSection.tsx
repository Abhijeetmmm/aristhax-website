"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Eye, LucideIcon } from "lucide-react";

/* ---------------- Icon Types ---------------- */
type IconName = "shield" | "lock" | "eye";

const ICON_MAP: Record<IconName, LucideIcon> = {
  shield: Shield,
  lock: Lock,
  eye: Eye,
};

/* ---------------- Props ---------------- */
interface AlternatingSectionProps {
  title: string;
  titleAccent?: string;
  description?: string;
  features?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageOnLeft?: boolean;
  iconName?: IconName;
  ctaText?: string;
  ctaHref?: string;
  icon?:LucideIcon;
}

/* ---------------- Component ---------------- */
const AlternatingSection = ({
  title,
  titleAccent,
  description,
  features = [],
  imageSrc,
  imageAlt = "",
  imageOnLeft = false,
  iconName,
  ctaText,
  ctaHref,
  icon
}: AlternatingSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hasImage = Boolean(imageSrc);
  const Icon = iconName ? ICON_MAP[iconName] : null;

  /* ---------------- Content Section ---------------- */
  const contentSection = (
    <motion.div
      initial={{ opacity: 0, x: imageOnLeft ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        {title}
        {titleAccent && (
          <span className="section-title-accent"> {titleAccent}</span>
        )}
      </h2>

      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {description}
        </p>
      )}

      {features.length > 0 && (
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
<div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)] mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {ctaText && ctaHref && (
        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cyber-button inline-flex items-center gap-2 w-fit"
        >
          {ctaText}
        </motion.a>
      )}
    </motion.div>
  );

  /* ---------------- Image Section ---------------- */
  const imageSection =
    hasImage && (
      <motion.div
        initial={{ opacity: 0, x: imageOnLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
<div className="glass-card p-3 border border-primary/20 shadow-[0_0_60px_rgba(0,255,255,0.15)] transition-all duration-500">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-[60px]" />
      </motion.div>
    );

  /* ---------------- Layout ---------------- */
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`grid gap-12 lg:gap-20 items-center ${
            hasImage ? "lg:grid-cols-2" : ""
          }`}
        >
          {imageOnLeft && imageSection}
          {contentSection}
          {!imageOnLeft && imageSection}
        </div>
      </div>
    </section>
  );
};

export default AlternatingSection;
