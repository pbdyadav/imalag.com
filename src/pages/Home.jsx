
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Palette, Heart, Star } from 'lucide-react';
import Lightbox from "@/components/Lightbox";

const Home = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
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
    { image: '/images/Moon Art Photo.jpg', title: 'Traditional Lippan Art', description: 'Handcrafted with love' },
    { image: '/images/Lippan_wall_decor.jpg', title: 'Mirror Mosaic Masterpiece', description: 'Modern elegance with tradition' },
    { image: '/images/DipYellow.jpeg', title: 'Dot Work Design', description: 'Fine details and texture' },
  ];


  return (
    <>
      <Helmet>
        <title>Buy Lippan Art Material, Kits & Raw Materials | Archana Lippan Art Gallery</title>

        <meta
          name="description"
          content="Shop premium Lippan art material, Lippan art kits, and raw materials handcrafted by Archana. Traditional Lippan Kaam, mirror work, MDF art, glass mosaic work, and custom wall decor. Fast delivery across India."
        />

        <meta
          name="keywords"
          content="Lippan art material, Lippan art kit, Lippan art raw material, Lippan Kaam, Mud mirror art, Buy Lippan art online, Mirror mosaic materials, MDF art tools, Lippan clay"
        />

        <link rel="canonical" href="https://imalag.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Archana Lippan Art Gallery - Lippan Art, Kits & Raw Materials" />
        <meta property="og:description" content="Premium handcrafted Lippan art materials, kits, and traditional mirror work pieces." />
        <meta property="og:image" content="https://imalag.com/ALAG_Home.png" />
        <meta property="og:url" content="https://imalag.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter / Instagram */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Archana Lippan Art Gallery - Lippan Art, Kits & Materials" />
        <meta name="twitter:description" content="Shop premium Lippan art materials, kits, raw materials & handcrafted decor." />
        <meta name="twitter:image" content="https://imalag.com/ALAG_Home.png" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Archana Lippan Art Gallery",
        "url": "https://imalag.com",
        "image": "https://imalag.com/ALAG_Home.png",
        "description": "Premium Lippan art materials, kits, raw materials and handcrafted Lippan Kaam by artisan Archana.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    `}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative hero-pattern py-20 lg:py-32 overflow-hidden">
          <h1 className="sr-only">
            Premium Lippan art and Lippan Art Material, Lippan Art Kits & Raw Materials - Archana Lippan Art Gallery
          </h1>
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

                <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="text-lg md:text-base text-deep-brown/80 leading-relaxed space-y-4"
>
  <p>Discover premium authentic<strong> Mud/clay and Mirror Work art </strong>and premium <strong>Lippan art material.</strong> We offer handcrafted
  <strong> Lippan art kits</strong> and high-quality
  <strong> raw materials</strong> — all crafted using traditional Gujarat techniques 
  with a modern, durable finish. Perfect for<strong> Indian home decor</strong>, artists, 
  and hobbyists who want to create stunning, original artworks. Each piece and product reflects the
  <strong> timeless beauty, heritage, and cultural pride of traditional Indian folk art</strong>
  , featuring intricate patterns and vibrant <strong>mirror work </strong>that speaks across generations.</p>

  <p><strong>INTRODUCTION</strong></p>
                  <p><strong>Lippan Art,</strong> also known as Mud and Mirror Work, is a traditional wall art form from the Kutch region of <strong>Gujarat, India. </strong> 
                  For generations, this style has been used to beautify village homes, temples, and havelis. Today, 
                  Lippan Art has become one of the most loved interior decor styles, blending tradition with modern design.
                  From clay patterns to sparkling mirrors, every Lippan artwork tells a story — of nature, community, culture, and craftsmanship.</p>
                  <p><strong>HISTORY OF LIPPAN ART</strong></p>
                  <p>The roots of Lippan Art can be traced back hundreds of years. It was originally created by the <strong>Rabari community,</strong> who decorated the walls of mud houses using cow dung, 
                  clay, and small mirrors.</p>
                  <p>The word <strong>“Lippan”</strong> means to <strong>apply.</strong> Traditionally, women created motifs of animals, trees, mandalas, birds, 
                  and geometric designs. The purpose was not only decoration but also heat control — clay walls helped keep homes cool in the desert climate of Kutch.</p>
                </motion.div>


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
                  
                  प्रीमियम असली <strong>मड/क्ले और मिरर वर्क आर्ट</strong> और प्रीमियम <strong>लिप्पन आर्ट मटीरियल</strong> खोजें।<br />
                  हम हाथ से बने <strong>लिप्पन आर्ट किट</strong> और हाई-क्वालिटी <strong>रॉ मटीरियल</strong> देते हैं — ये<br />
                  सभी मॉडर्न, ड्यूरेबल फिनिश के साथ पारंपरिक गुजरात टेक्नीक का इस्तेमाल<br />
                  करके बनाए गए हैं।<strong> इंडियन होम डेकोर</strong>, आर्टिस्ट और हॉबी करने वालों<br />
                  के लिए एकदम सही है जो शानदार, ओरिजिनल आर्टवर्क बनाना चाहते हैं।<br />
                  हर पीस और प्रोडक्ट पारंपरिक इंडियन लोक कला की हमेशा रहने वाली <strong>सुंदरता,<br />
                  विरासत और कल्चरल गर्व को दिखाता है</strong>, जिसमें बारीक पैटर्न और 
                  वाइब्रेंट <strong>मिरर वर्क</strong> है जो पीढ़ियों तक बोलता है।</p>
                <p><strong>परिचय</strong></p>
                <p><strong>लिप्पन आर्ट,</strong> जिसे मिट्टी और शीशे का काम भी कहा जाता है, <strong>भारत के गुजरात</strong> के कच्छ क्षेत्र की एक पारंपरिक दीवार कला है।
                 पीढ़ियों से, इस शैली का इस्तेमाल गाँव के घरों, मंदिरों और हवेलियों को सुंदर बनाने के लिए किया जाता रहा है। आज, <strong>लिप्पन आर्ट</strong> सबसे पसंदीदा इंटीरियर डेकोर शैलियों में से एक बन गई है, 
                 जो परंपरा को आधुनिक डिज़ाइन के साथ मिलाती है। मिट्टी के पैटर्न से लेकर चमकते शीशों तक, हर लिप्पन कलाकृति एक कहानी कहती है - प्रकृति, समुदाय, संस्कृति और कारीगरी की।</p>
                 <p><strong>लिप्पन आर्ट का इतिहास</strong></p>
                 <p>लिप्पन आर्ट की जड़ें सैकड़ों साल पुरानी हैं। इसे मूल रूप से रबारी समुदाय ने बनाया था, जो गाय के गोबर, मिट्टी और छोटे शीशों का इस्तेमाल करके मिट्टी के घरों की दीवारों को सजाते थे।</p>
                 <p><strong>"लिप्पन"</strong> शब्द का मतलब है लगाना। पारंपरिक रूप से, महिलाएं जानवरों, पेड़ों, मंडलों, पक्षियों और ज्यामितीय डिज़ाइनों के मोटिफ बनाती थीं। इसका मकसद सिर्फ सजावट नहीं था, 
                  बल्कि गर्मी को कंट्रोल करना भी था - मिट्टी की दीवारें कच्छ के रेगिस्तानी मौसम में घरों को ठंडा रखने में मदद करती थीं।</p>
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
                We combine the timeless elegance of Lippan Art with modern creativity to bring visually striking works 
                that fit perfectly in today's homes. Each design is handcrafted using high-quality materials, 
                ensuring durability, originality, and artistic detail that makes your decor truly stand out.
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
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-zoom-in"
                      alt={art.title}
                      src={art.image}
                      onClick={() => setSelectedImage(art.image)}
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

            {/* Lightbox should stay OUTSIDE the loop */}
            {selectedImage && (
              <Lightbox
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            )}

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