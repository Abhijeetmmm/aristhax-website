"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AlternatingSection from "@/components/AlternatingSection";

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VideoSection />

    <AlternatingSection
  title="Advanced Threat"
  titleAccent="Detection"
  description="Our AI-powered threat detection platform continuously analyzes behavior across your entire infrastructure to identify, isolate, and neutralize threats before they impact your business."
  features={[
    "Real-time monitoring across all endpoints and networks",
    "AI-driven behavioral threat analysis",
    "Automated incident containment and response",
    "Zero-day attack and ransomware protection",
  ]}
  imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
  imageAlt="Advanced threat detection and security monitoring"
  iconName="shield"
  ctaText="Learn More"
  ctaHref="/services"
/>


     <AlternatingSection
  title="Enterprise-Grade"
  titleAccent="Encryption"
  description="Protect your sensitive data with military-grade encryption solutions. Our data protection suite ensures your information stays secure whether at rest, in transit, or in use. Compliance with GDPR, HIPAA, and PCI-DSS standards."
  features={[
    "End-to-end encryption for all communications",
    "Hardware security module (HSM) integration",
    "Key management and rotation",
    "Compliance automation tools",
  ]}
  imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  imageAlt="Enterprise encryption and secure data"
  imageOnLeft
  iconName="lock"
  ctaText="Explore Solutions"
  ctaHref="/services"
/>


     <AlternatingSection
  title="24/7 Security"
  titleAccent="Operations Center"
  description="Our world-class SOC operates around the clock, staffed by certified security professionals who monitor, analyze, and respond to security events in real time. When threats emerge, our team is ready to act immediately."
  features={[
    "24/7/365 continuous monitoring",
    "Certified security analysts (CISSP, CISM)",
    "15-minute incident response guarantee",
    "Monthly security reports and briefings",
  ]}
  imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  imageAlt="Security operations center monitoring"
  iconName="eye"
  ctaText="See How It Works"
  ctaHref="/case-studies"
/>


      <FeaturesSection />
      <ContactForm />
      <CTASection />
      <Footer />
    </main>
  );
}
