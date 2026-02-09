"use client";

import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Clock, Globe } from 'lucide-react';

const offices = [
  {
    city: 'San Francisco',
    address: '123 Security Lane, Suite 400',
    state: 'CA 94105, USA',
    phone: '(123) 456-7890',
    hours: 'Mon-Fri: 8am-6pm PST',
  },
  {
    city: 'New York',
    address: '456 Cyber Street, Floor 12',
    state: 'NY 10001, USA',
    phone: '(123) 456-7891',
    hours: 'Mon-Fri: 8am-6pm EST',
  },
  {
    city: 'London',
    address: '789 Gate Road',
    state: 'EC2A 4NE, UK',
    phone: '+44 20 1234 5678',
    hours: 'Mon-Fri: 9am-5pm GMT',
  },
];

const Contact = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        badge="Contact Us"
        title="Get In Touch"
        titleAccent="With Our Team"
        subtitle="Ready to strengthen your cybersecurity posture? Our experts are here to help you protect what matters most."
      />
      
      <ContactForm />
      
      {/* Office Locations */}
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
              Our Offices
            </span>
            <h2 className="section-title">
              Global <span className="section-title-accent">Presence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
              With offices around the world, we're always close to our clients and ready to respond to any security incident.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{office.city}</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>{office.address}</p>
                  <p>{office.state}</p>
                  <p className="text-primary font-medium">{office.phone}</p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Clock className="w-4 h-4" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map placeholder */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-2 md:p-3 max-w-5xl mx-auto"
          >
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Embed your preferred map service here to show office locations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
