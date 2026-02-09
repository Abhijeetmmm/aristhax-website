"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Building2,
  MessageSquare,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section ref={ref} id="contact-form" className="py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-25" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-5 block">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Let's Discuss Your{" "}
              <span className="section-title-accent">Security Needs</span>
            </h2>

            <p className="text-muted-foreground text-lg mt-6 mb-12 max-w-xl leading-relaxed">
              Ready to strengthen your cybersecurity posture? Our experts are
              here to help. Fill out the form and we’ll get back to you within
              24 hours.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "(123) 456-7890",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "contact@AristhaX.com",
                },
                {
                  icon: Building2,
                  title: "Visit Us",
                  value: "123 Security Lane, San Francisco, CA 94105",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="
                    glass-card p-6 flex items-center gap-5
                    border border-primary/20
                    shadow-[0_0_30px_rgba(0,255,255,0.12)]
                  "
                >
                  <div className="
                    w-12 h-12 rounded-xl
                    bg-gradient-to-br from-cyan-400 to-blue-600
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(0,255,255,0.6)]
                  ">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="
              glass-card p-8 md:p-10
              border border-primary/20
              shadow-[0_0_60px_rgba(0,255,255,0.18)]
            ">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="
                    w-20 h-20 mx-auto mb-6 rounded-full
                    bg-gradient-to-br from-cyan-400 to-blue-600
                    flex items-center justify-center
                    shadow-[0_0_40px_rgba(0,255,255,0.6)]
                  ">
                    <CheckCircle2 className="w-9 h-9 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We've received your message and will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { id: "name", label: "Full Name", icon: User, placeholder: "John Doe" },
                      { id: "email", label: "Email Address", icon: Mail, placeholder: "john@company.com", type: "email" },
                      { id: "phone", label: "Phone Number", icon: Phone, placeholder: "(123) 456-7890" },
                      { id: "company", label: "Company Name", icon: Building2, placeholder: "Acme Inc." },
                    ].map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label className="flex items-center gap-2 text-foreground">
                          <field.icon className="w-4 h-4 text-primary" />
                          {field.label}
                        </Label>
                        <Input
                          name={field.id}
                          value={(formData as any)[field.id]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          type={field.type || "text"}
                          className="
                            bg-secondary/40 border-border
                            focus:border-primary focus:ring-primary/30
                          "
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-foreground">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Your Message
                    </Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your security needs..."
                      className="
                        bg-secondary/40 border-border
                        focus:border-primary focus:ring-primary/30
                        resize-none
                      "
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full h-12 text-base font-medium
                      bg-gradient-to-r from-cyan-400 to-blue-600
                      text-black
                      shadow-[0_0_30px_rgba(0,255,255,0.6)]
                      hover:shadow-[0_0_45px_rgba(0,255,255,0.8)]
                      transition-all
                    "
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
