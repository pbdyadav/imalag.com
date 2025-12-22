
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Lightbox from '@/components/Lightbox';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'lippan', name: 'Lippan Work' },
    { id: 'mosaic', name: 'Mirror Mosaic' },
    // { id: 'dot', name: 'Dot Work' },
    { id: 'glass', name: 'Glass Work' }
  ];

  const artworks = [
    {
      id: 1,
      title: "Traditional Mandla Lippan",
      category: "lippan",

      description: "Beautiful design with intricate mirror work on Clay base",
      src: "products/Art7.png",
      alt: "Traditional Mandla Lippan art with colorful mirrors and Clay work"
    },
    {
      id: 2,
      title: "White Lippan Art",
      category: "mosaic",
      description: "Stunning mandala pattern created with mirror pieces",
      src: "products/Art8.png",
      alt: "Intricate White Lippan Art with geometric patterns"
    },
    {
      id: 3,
      title: "Spiritual Buddha with Tree",
      category: "MDF",
      description: "Spiritual Buddha with Tree and Mirror in Black colors",
      src: "products/Art9.png",
      alt: "Spiritual Buddha with Tree and Mirror in Black colors"
    },
    {
      id: 4,
      title: "Clay Golder Tree",
      category: "Clay",
      description: "ibrant Clay work in Black and Gold colour artwork with traditional Indian motifs",
      src: "products/Art10.png",
      alt: "Vibrant Clay work in Black and Gold colour artwork with traditional Indian motifs"
    },
    {
      id: 5,
      title: "Black Buddha with Holo Light Efects",
      category: "lippan",
      description: "Majestic Black Buddha design with Holo Light Efects for Wall decoration",
      src: "products/Art11A.png",
      alt: "Majestic Buddha design with Holo Light Efects for Wall decoration"
    },
    {
      id: 6,
      title: "Green Buddha with Holo Light Efects",
      category: "lippan",
      description: "Majestic Green Tree Buddha design with Holo Light Efects for Wall decoration",
      src: "products/Art12A.png",
      alt: "Majestic Green Tree Buddha design with Holo Light Efects for Wall decoration"
    },
    {
      id: 7,
      title: "Lippan Art work as per Clint",
      category: "lippan",
      description: "We create beautiful custom Lippan art pieces specially designed as per your choice.",
      src: "products/Lippan Art work for Clint.jpg",
      alt: "We create beautiful custom Lippan art pieces specially designed as per your choice, space, and theme. Perfect for wedding gifting, home decor, and adding a touch of traditional Indian elegance to any wall."
    },
    {
      id: 8,
      title: "Lippan Art work as per Clint2",
      category: "lippan",
      description: "We create beautiful custom Lippan art pieces specially designed as per your choice.",
      src: "products/Lippan Art work for Clint2.jpg",
      alt: "We create beautiful custom Lippan art pieces specially designed as per your choice, space, and theme. Perfect for wedding gifting, home decor, and adding a touch of traditional Indian elegance to any wall."
    },
    {
      id: 9,
      title: "Moon Lippan Art Handcrafted",
      category: "lippan",
      description: "We create beautiful custom Lippan art pieces specially designed as per your choice.",
      src: "Moon Art Photo.jpg",
      alt: "We create beautiful custom Lippan art pieces specially designed as per your choice, space, and theme. Perfect for wedding gifting, home decor, and adding a touch of traditional Indian elegance to any wall."
    },
    {
      id: 10,
      title: "Ornament Box",
      category: "glass",
      description: "MDF Ornament Box with glass work",
      src: "products/Art13.png",
      alt: "MDF Ornament Box with glass work"
    },
    {
      id: 11,
      title: "Ornament Box",
      category: "glass",
      description: "MDF Ornament Box with glass work",
      src: "products/Art14.png",
      alt: "MDF Ornament Box with glass work"
    },
    {
      id: 12,
      title: "Ornament Box",
      category: "glass",
      description: "MDF Ornament Box with glass work",
      src: "products/Art15.png",
      alt: "MDF Ornament Box with glass work"
    }
  ];

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredArtworks.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredArtworks.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Helmet>
        <title>Art Gallery - Traditional Lippan Art & Mirror Work Collection</title>
        <meta name="description" content="Browse our stunning collection of traditional Lippan art, mirror work, dot paintings, and glass mosaics. Each piece showcases authentic Indian folk art techniques." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
              Art <span className="text-terracotta">Gallery</span>
            </h1>
            <p className="text-lg text-deep-brown/80 max-w-5xl mx-auto text-left leading-relaxed space-y-4">
              <span className="block mb-4">
                Step into a world of heritage, creativity, and artistic excellence. Our
                <strong> Art Gallery </strong> showcases a curated collection of handcrafted
                <strong> Lippan mud art, mirror mosaic pieces, glass décor,</strong> and
                <strong> custom artworks </strong> created using traditional Indian craft techniques.
              </span>

              <span className="block mb-4">
                Each artwork reflects the cultural beauty of Gujarat's folk traditions,
                blended with modern design, premium craftsmanship, and attention to detail —
                perfect for luxury interiors, gifting, décor styling, and creative inspiration.
              </span>

              <h2 className="text-xl font-semibold text-terracotta mt-6">✨ What You'll Experience in Our Gallery:</h2>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Authentic handmade Lippan mud and mirror art</li>
                <li>Elegant mirror mosaic wall décor pieces</li>
                <li>Exclusive glass work and MDF décor units</li>
                <li>Rare custom artwork designs made for interiors</li>
                <li>Art inspired by culture, nature, and spirituality</li>
              </ul>

              <h2 className="text-xl font-semibold text-terracotta mt-6">🌟 Why Our Art Stands Out:</h2>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Premium handcrafted finishes and materials</li>
                <li>Timeless folk tradition blended with modern style</li>
                <li>Perfect for home, office, hotels, studios, and gifting</li>
                <li>Available in custom sizes, colours & themes</li>
                <li>Every piece tells a real cultural story</li>
              </ul>

              <span className="block mt-6">
                Explore our gallery below to experience the richness of traditional Indian art infused
                with modern elegance — designed to transform any space with depth, beauty, and identity.
              </span>
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-terracotta text-white shadow-lg'
                  : 'bg-white text-deep-brown hover:bg-terracotta/10 border border-terracotta/20'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl card-shadow hover-lift">
                  <img
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={artwork.alt}
                    src={`/images/${artwork.src}`}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-playfair text-xl font-semibold mb-2">
                        {artwork.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {artwork.description}
                      </p>
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                          {categories.find(cat => cat.id === artwork.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-terracotta/50 rounded-2xl transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-deep-brown/70">
                No artworks found in this category.
              </p>
            </motion.div>
          )}
        </div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={filteredArtworks}
          currentIndex={currentImageIndex}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>
    </>
  );
};

export default Gallery;
