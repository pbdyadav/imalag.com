
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Palette, Heart, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-terracotta" />,
      title: "Traditional Lippan Art",
      description: "Authentic mud and mirror work from Gujarat's rich cultural heritage"
    },
    {
      icon: <Heart className="w-8 h-8 text-terracotta" />,
      title: "Handcrafted with Love",
      description: "Each piece is carefully crafted by skilled artisan Archana"
    },
    {
      icon: <Star className="w-8 h-8 text-terracotta" />,
      title: "Premium Quality",
      description: "Using finest materials and traditional techniques for lasting beauty"
    }
  ];

  const featuredArtworks = [
    {
      image: '/images/Moon Art Photo.jpg',
      title: 'Traditional Lippan Art',
      description: 'Handcrafted with love',
    },
    {
      image: '/images/Lippan_wall_decor.jpg',
      title: 'Mirror Mosaic Masterpiece',
      description: 'Modern elegance with tradition',
    },
    {
      image: '/images/DipYellow.jpeg',
      title: 'Dot Work Design',
      description: 'Fine details and texture',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Archana Lippan Art Gallery - Traditional Indian Art & Handicrafts</title>
        <meta name="description" content="Discover beautiful traditional Lippan Kaam, mirror work, and glass mosaic art by Archana. Authentic Indian folk art from Gujarat with modern appeal." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
    <section className="relative hero-pattern py-20 lg:py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-between h-full space-y-6"
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-deep-brown drop-shadow-[2px_2px_1px_rgba(0,0,0,0.3)] mb-4">
            Welcome to
          </h2>
          <img
            src="/ALAG_Home.png"
            alt="Welcome ALAG"
            className="w-[320px] h-auto mb-6"
          />
        </motion.section>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-base text-deep-brown/80 leading-relaxed"
        >
          Discover the timeless beauty of traditional Indian folk art.<br />
          Each piece tells a story of heritage, craftsmanship, and cultural pride.<br />
          Rooted in centuries-old customs, our artworks reflect the spirit of rural India.<br />
          From intricate patterns to vibrant mirror work, every detail carries meaning.<br />
          Celebrate the soul of Indian tradition through art that speaks across generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/gallery">
            <Button className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 text-lg group">
              Explore Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/products">
            <Button
              variant="outline"
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-8 py-3 text-lg"
            >
              Shop Artworks
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col justify-between h-full space-y-6"
      >
        <div className="relative rounded-2xl overflow-hidden card-shadow aspect-video">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/lippan_work_V.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <p className="text-lg md:text-lg text-deep-brown/90 leading-relaxed">
          भारतीय पारंपरिक लोक कला की शाश्वत सुंदरता को खोजिए।<br />
          हर कलाकृति विरासत, शिल्पकौशल और सांस्कृतिक गौरव की एक कहानी कहती है।<br />
          सदियों पुरानी परंपराओं में रची-बसी यह कला ग्रामीण भारत की आत्मा को दर्शाती है।<br />
          जटिल डिज़ाइन से लेकर चमकदार शीशे के काम तक, हर विवरण में एक अर्थ छिपा है।<br />
          पीढ़ियों से संवाद करती इस कला के माध्यम से भारतीय संस्कृति की आत्मा का उत्सव मनाइए।
        </p>
      </motion.div>

    </div>
  </div>
</section>
    {/* Features Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deep-brown mb-4">
                Why Choose Our Art
              </h2>
              <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
                Experience the authentic beauty of traditional Indian craftsmanship with modern artistic vision
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-2xl card-shadow hover-lift"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-terracotta/10 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-deep-brown mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-deep-brown/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Artworks Preview */}
        <section className="py-20 mandala-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deep-brown mb-4">
                Featured Artworks
              </h2>
              <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
                A glimpse into our beautiful collection of traditional and contemporary pieces
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {featuredArtworks.map((art, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl card-shadow hover-lift">
        <img  
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          alt={art.title}
          src={art.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-playfair text-lg font-semibold">{art.title}</h3>
            <p className="text-sm opacity-90">{art.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/gallery">
                <Button className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 text-lg">
                  View Full Gallery
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-terracotta text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Bring Traditional Art to Your Home
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Each piece is a unique work of art that adds warmth, culture, and beauty to any space. 
                Connect with us to commission custom artwork or purchase from our collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-white text-terracotta hover:bg-warm-beige px-8 py-3 text-lg">
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-terracotta px-8 py-3 text-lg">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
