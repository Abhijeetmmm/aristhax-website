"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const featuredPost = {
  title: 'The Rising Threat of AI-Powered Cyber Attacks',
  excerpt: 'As artificial intelligence becomes more sophisticated, cybercriminals are leveraging these technologies to create more advanced and harder-to-detect attacks. Learn how to protect your organization.',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  author: 'Dr. Sarah Chen',
  date: 'January 15, 2024',
  readTime: '8 min read',
  category: 'Threat Intelligence',
};

const posts = [
  {
    title: 'Zero Trust Architecture: Implementation Guide',
    excerpt: 'A comprehensive guide to implementing zero trust security in your organization.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    author: 'Marcus Rodriguez',
    date: 'January 10, 2024',
    readTime: '12 min read',
    category: 'Best Practices',
  },
  {
    title: '2026 Cybersecurity Predictions',
    excerpt: 'Our security experts share their predictions for the most critical threats in 2024.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    author: 'Emily Watson',
    date: 'January 5, 2024',
    readTime: '6 min read',
    category: 'Industry Trends',
  },
  {
    title: 'Ransomware Prevention Strategies',
    excerpt: 'Essential strategies to protect your business from increasingly sophisticated ransomware attacks.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    author: 'James Park',
    date: 'December 28, 2023',
    readTime: '10 min read',
    category: 'Security',
  },
  {
    title: 'Cloud Security Best Practices for 2024',
    excerpt: 'Secure your cloud infrastructure with these proven strategies and tools.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    author: 'Dr. Sarah Chen',
    date: 'December 20, 2023',
    readTime: '9 min read',
    category: 'Cloud Security',
  },
  {
    title: 'The Human Factor: Security Awareness Training',
    excerpt: 'Why employee training is your first line of defense against cyber attacks.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    author: 'Emily Watson',
    date: 'December 15, 2023',
    readTime: '7 min read',
    category: 'Training',
  },
  {
    title: 'Incident Response Planning Guide',
    excerpt: 'Step-by-step guide to creating an effective incident response plan.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
    author: 'Marcus Rodriguez',
    date: 'December 10, 2023',
    readTime: '11 min read',
    category: 'Best Practices',
  },
];

const categories = [
  'All Posts',
  'Threat Intelligence',
  'Best Practices',
  'Industry Trends',
  'Cloud Security',
  'Training',
];

const Blog = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <PageHeader
        badge="Blog & Resources"
        title="Security Insights"
        titleAccent="& News"
        subtitle="Stay informed with the latest cybersecurity trends, threat intelligence, and best practices from our security experts."
      />
      
      {/* Featured Post */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-medium"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
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
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date.split(',')[0]}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button-secondary"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-2xl mx-auto border-glow"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for weekly security insights and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Blog;
