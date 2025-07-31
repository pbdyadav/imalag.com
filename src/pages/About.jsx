
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Palette } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "15+ Years Experience",
      description: "Mastering traditional Lippan art techniques"
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "500+ Happy Customers",
      description: "Spreading joy through beautiful art"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Cultural Preservation",
      description: "Keeping traditional art forms alive"
    },
    {
      icon: <Palette className="w-8 h-8 text-gold" />,
      title: "Unique Creations",
      description: "Each piece tells its own story"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Lippan Art & Artist Archana - Traditional Indian Folk Art</title>
        <meta name="description" content="Learn about the rich history of Lippan Work from Gujarat and meet artist Archana, who preserves this beautiful traditional Indian art form through her handcrafted creations." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
              About <span className="text-terracotta">Lippan Art</span>
            </h1>
            <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
              Discover the rich heritage of traditional Indian folk art and the passionate artist behind our beautiful creations
            </p>
          </motion.div>

          {/* Lippan Art History */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-deep-brown mb-6">
                  The Heritage of <span className="text-terracotta">Lippan Work</span>
                </h2>
                <div className="space-y-4 text-deep-brown/80">
                  <p>
                    Lippan Work, also known as mud and mirror work, is a traditional art form that originated in the Kutch region of Gujarat, India. This beautiful craft has been passed down through generations, primarily by the women of the Rabari community.
                  </p>
                  <p>
                    The word "Lippan" comes from the Gujarati word for mud plaster. This art form involves creating intricate patterns using a mixture of mud and camel dung, then embedding small pieces of mirrors to create stunning reflective designs that catch and play with light.
                  </p>
                  <p>
                    Originally used to decorate the walls of traditional homes, Lippan art served both aesthetic and practical purposes - the mud helped keep homes cool in the desert climate while the mirrors were believed to ward off evil spirits.
                  </p>
                  <p>
                    Today, this ancient art form has evolved to include modern applications while maintaining its traditional essence, bringing the beauty of Gujarat's cultural heritage to contemporary homes worldwide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden card-shadow">
                  <img  
                    className="w-full h-96 object-cover"
                    alt="Traditional Lippan art showing the historical mud and mirror work technique from Gujarat"
                   src="https://images.unsplash.com/photo-1698055689397-7e421b54c98f" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta/20 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="mb-20 bg-white/50 rounded-3xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-playfair text-3xl font-bold text-deep-brown mb-4">
                Cultural Significance
              </h2>
              <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
                Understanding the deeper meaning behind this beautiful art form
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gold/10 rounded-full">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-deep-brown mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-deep-brown/70 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Meet Archana */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden card-shadow">
                  <img  
                    className="w-full h-96 object-cover"
                    alt="Artist Archana working on a beautiful Lippan art piece in her studio"
                   src="https://images.unsplash.com/photo-1620562623585-8c4a7dc450de" />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-deep-brown mb-6">
                  Meet <span className="text-terracotta">Archana</span>
                </h2>
                <div className="space-y-4 text-deep-brown/80">
                  <p>
                    Archana is a passionate artist and cultural preservationist who has dedicated her life to mastering and promoting the traditional art of Lippan Work. Born and raised in Indore, she discovered her love for this ancient craft during a visit to Gujarat, where she was mesmerized by the intricate beauty of traditional mud and mirror work.
                  </p>
                  <p>
                    Over the past 15 years, Archana has studied under master craftspeople from the Kutch region, learning not just the techniques but also the cultural stories and spiritual significance behind each pattern and design. Her work beautifully bridges traditional methods with contemporary aesthetics.
                  </p>
                  <p>
                    Today, Archana creates stunning pieces that range from traditional wall panels to modern decorative items, each infused with the authentic spirit of Gujarati folk art. Her mission is to keep this beautiful tradition alive while making it accessible to art lovers around the world.
                  </p>
                  <p>
                    "Every piece I create carries the soul of our ancestors and the hope for future generations to appreciate and preserve our cultural heritage," says Archana.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Art Forms */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-playfair text-3xl font-bold text-deep-brown mb-4">
                Our Art Forms
              </h2>
              <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
                Explore the different traditional techniques we specialize in
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Traditional Lippan Work",
                  description: "Authentic mud and mirror work using traditional techniques and patterns passed down through generations.",
                  image: "Traditional Lippan Work with authentic mud and mirror work patterns"
                },
                {
                  title: "Glass Mosaic Work",
                  description: "Beautiful glass mosaic designs that create stunning visual effects with light and color.",
                  image: "Colorful glass mosaic artwork with intricate patterns and vibrant colors"
                },
                {
                  title: "Dot Painting",
                  description: "Intricate dot work creating mesmerizing patterns and mandala designs with spiritual significance.",
                  image: "Beautiful dot painting with mandala patterns and spiritual designs"
                },
                {
                  title: "MDF Wall Panels",
                  description: "Modern decorative panels on MDF base, perfect for contemporary homes while maintaining traditional aesthetics.",
                  image: "Modern MDF wall panel with traditional Lippan art design for contemporary homes"
                }
              ].map((artForm, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift"
                >
                  <img  
                    className="w-full h-48 object-cover"
                    alt={`${artForm.title} - ${artForm.description}`}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-deep-brown mb-3">
                      {artForm.title}
                    </h3>
                    <p className="text-deep-brown/70">
                      {artForm.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
