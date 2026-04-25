import { useState, useEffect } from 'react';
import { ChevronRight, Phone, MapPin, Clock, Sparkles, Shield, Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const productGalleries = {
  'PVC Doors': Array.from({ length: 3 }, (_, i) => `/images/pvcdoor/${i+1}.jpeg`),

  'Aluminium Doors': Array.from({ length: 9 }, (_, i) => `/images/aluminium_door/${i+1}.jpeg`),

  'Net Door': Array.from({ length: 5 }, (_, i) => `/images/net_door/${i+1}.jpeg`),

  'Aluminium Partition': Array.from({ length: 4 }, (_, i) => `/images/partition/${i+1}.jpeg`),

  'Profile Section (Cupboard)': Array.from({ length: 10 }, (_, i) => `/images/cupboard/${i+1}.jpeg`),

  'Toughened Glass and Glazing': Array.from({ length: 11 }, (_, i) => `/images/glass/${i+1}.jpeg`),

  'Railing': Array.from({ length: 10 }, (_, i) => `/images/railing/${i+1}.jpeg`),

  'Window': Array.from({ length: 8 }, (_, i) => `/images/window/${i+1}.jpeg`),
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProduct) {
      const images = productGalleries[selectedProduct as keyof typeof productGalleries];
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProduct) {
      const images = productGalleries[selectedProduct as keyof typeof productGalleries];
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
  
            <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />

            <span>
              NUTAN
              <span className="text-accent-gold"> GLASS</span>
            </span>

          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-charcoal hover:text-accent-gold transition-colors">Services</a>
            <a href="#products" className="text-charcoal hover:text-accent-gold transition-colors">Products</a>
            <a href="#portfolio" className="text-charcoal hover:text-accent-gold transition-colors">Portfolio</a>
            <a href="#contact" className="text-charcoal hover:text-accent-gold transition-colors">Contact</a>
            <button className="btn-luxury-gold">Get Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663598222033/ERYtsxourYoBVjezKYMTM3/hero-glass-reflection-biMtsc5pAhM5uAWHCKhFDX.webp"
            alt="Luxury Glass Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Premium Glass & Mirror Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
              Crafting Luxury Spaces with Precision and Elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury-gold">Explore Our Work</button>
              <button className="btn-luxury">Learn More</button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll to Explore</p>
            <ChevronRight className="w-6 h-6 rotate-90 mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Excellence in Every Detail
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                NUTAN GLASS HOUSE has been serving Bhopal with premium glass and mirror solutions for years. With a 4.7-star rating on Google, we're committed to delivering exceptional quality and service.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From residential interiors to commercial installations, our expert craftsmen ensure every project reflects luxury and precision.
              </p>
              <button className="btn-luxury">Discover Our Story</button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663598222033/ERYtsxourYoBVjezKYMTM3/mirror-showcase-XUVXK4iqTrbjxo7ekLx3do.webp"
                alt="Glass Showcase"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Sparkles,
                title: 'Mirror Installation',
                description: 'Custom mirrors for homes and businesses, with precision installation and premium finishes.',
              },
              {
                icon: Shield,
                title: 'Glass Solutions',
                description: 'Tempered glass, frosted glass, and decorative glass for any architectural need.',
              },
              {
                icon: Zap,
                title: 'Fast Service',
                description: 'Quick turnaround without compromising on quality. Expert craftsmanship on every project.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-luxury text-center group"
              >
                <service.icon className="w-12 h-12 text-accent-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Services List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Complete Service Portfolio
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Doman Section',
                'Toughened Glass Full Work',
                'Aluminum Section Full Work',
                'Glazing Work',
                'ACP Work Glazing',
                'Glass Railing',
                'SS Railing',
                'MS Railing',
                'Aluminium Railing',
                'Many More services'
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white hover:bg-white/80 transition-colors"
                >
                  <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Products
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.keys(productGalleries).map((product, idx) => (
              <motion.button
                key={idx}
                variants={itemVariants}
                onClick={() => handleProductClick(product)}
                className="card-luxury text-center group cursor-pointer"
              >
                <div className="text-accent-gold text-4xl mb-4 group-hover:scale-110 transition-transform">◆</div>
                <h3 className="text-lg font-bold text-charcoal mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {product}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-accent-gold transition-colors">Click to view gallery</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {selectedProduct}
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-charcoal transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Display */}
              <div className="relative bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={productGalleries[selectedProduct as keyof typeof productGalleries][currentImageIndex]}
                  alt={`${selectedProduct} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center p-6 bg-gray-50">
                <button
                  onClick={handlePrevImage}
                  className="btn-luxury px-4 py-2"
                >
                  ← Previous
                </button>
                <span className="text-gray-600 font-medium">
                  {currentImageIndex + 1} / {productGalleries[selectedProduct as keyof typeof productGalleries].length}
                </span>
                <button
                  onClick={handleNextImage}
                  className="btn-luxury px-4 py-2"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                image: '/images/portfolio/celing.jpg',
                title: 'Modern Celing',
                category: 'Commercial & Residential',
              },
              {
                image: '/images/portfolio/glazing.jpg',
                title: 'Mirror Glazing',
                category: 'Commercial',
              },
              {
                image: '/images/portfolio/partition.jpg',
                title: 'Aluminium Partition',
                category: 'Commercial',
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663598222033/ERYtsxourYoBVjezKYMTM3/mirror-showcase-XUVXK4iqTrbjxo7ekLx3do.webp',
                title: 'Luxury Mirror Collection',
                category: 'Residential',
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm text-accent-gold mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-white" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Client Reviews
            </h2>
            <p className="text-accent-gold text-lg">Rated 4.7/5 on Google</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Vansh Rai',
                rating: 5,
                text: 'Best glass shop on 80 feet road and so fast and quick work',
              },
              {
                name: 'Rai Pradeep',
                rating: 5,
                text: 'Exceptional quality and professional service. Highly recommended!',
              },
              {
                name: 'Poonam Gupta',
                rating: 5,
                text: 'Outstanding craftsmanship and attention to detail. Very satisfied.',
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-accent-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-100 mb-4 italic">"{review.text}"</p>
                <p className="text-accent-gold font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '88788 60979, 7987509852',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Shop No: 1, Infront of Canara Bank, 80 Feet Road, Ashoka Garden, Bhopal',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  content: 'Opens 10 AM - Closes 8:30 PM',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center"
                >
                  <item.icon className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button className="btn-luxury-gold text-lg px-10 py-4">
                Request a Quote Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            NUTAN GLASS HOUSE
          </p>
          <p className="text-gray-400 mb-4">Premium Glass & Mirror Solutions</p>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">
            © 2026 NUTAN GLASS HOUSE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
