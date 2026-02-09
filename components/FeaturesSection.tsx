"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Target,
  Clock,
  Award,
  BarChart3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Response",
    description:
      "Our automated systems detect and respond to threats in milliseconds, minimizing potential damage.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "AI-driven analysis identifies real threats while eliminating false positives that waste resources.",
  },
  {
    icon: Clock,
    title: "24/7 Active Monitoring",
    description:
      "Round-the-clock surveillance by our security operations center ensures continuous protection.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description:
      "Our team holds certifications including CISSP, CEH, OSCP, and more from leading security bodies.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Comprehensive dashboards and reports give you complete visibility into your security posture.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Expert support team available around the clock to assist with any security concerns.",
  },
];

const iconGradients = [
  "from-cyan-400 to-blue-600",
  "from-emerald-400 to-cyan-500",
  "from-blue-500 to-violet-600",
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-36 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,255,0.08),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-5 block">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Security That{" "}
              <span className="section-title-accent">Evolves</span> With Threats
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl">
              In today’s rapidly evolving threat landscape, static security
              solutions are not enough. Our adaptive platform continuously
              learns, improves, and stays ahead of cybercriminals.
            </p>

            {/* Left feature list */}
            <div className="space-y-8">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <div
                    className={`
                      w-12 h-12 rounded-xl
                      bg-gradient-to-br ${iconGradients[index]}
                      flex items-center justify-center
                      shadow-[0_0_25px_rgba(0,255,255,0.6)]
                    `}
                  >
                    <feature.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="
                  glass-card p-7 flex gap-5 items-start
                  border border-primary/20
                  shadow-[0_0_40px_rgba(0,255,255,0.12)]
                  hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]
                  transition-all
                "
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.35)]">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Animated gradient stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%",
                      ],
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                y: { duration: 0.6, delay: 0.8 },
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="
                rounded-xl p-8 text-white
                bg-[length:300%_300%]
                bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600
                shadow-[0_0_80px_rgba(99,102,241,0.5)]
              "
            >
              <div className="grid grid-cols-3 text-center">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-85">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-85">Security Experts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-85">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
