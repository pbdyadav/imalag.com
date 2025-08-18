
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent! 📧",
      description: "Thank you for your message. We'll get back to you within 24 hours!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-terracotta" />,
      title: "Phone",
      details: "+91 98931 37595",
      action: "tel:+919893137595"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp",
      details: "+91 98931 37595",
      action: "https://wa.me/919893137595"
    },
    {
      icon: <Mail className="w-6 h-6 text-terracotta" />,
      title: "Email",
      details: "imalagart@gmail.com",
      action: "mailto:imalagart@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-terracotta" />,
      title: "Location",
      details: "ALAG, 21/4, New Palasia, opp. Prince Laundry, Indore, MP - 452001",
      action: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Archana Lippan Art Gallery | Get in Touch</title>
        <meta name="description" content="Contact Archana Lippan Art Gallery for custom orders, inquiries, or to learn more about traditional Indian folk art. Located in Indore, Madhya Pradesh." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
              Contact <span className="text-terracotta">Us</span>
            </h1>
            <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions about our art, want to place a custom order, 
              or simply want to connect, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 card-shadow"
            >
              <h2 className="font-playfair text-2xl font-bold text-deep-brown mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-deep-brown font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="mt-2 border-terracotta/20 focus:border-terracotta"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-deep-brown font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="mt-2 border-terracotta/20 focus:border-terracotta"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-deep-brown font-medium">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your inquiry, custom order requirements, or any questions you have..."
                    rows={6}
                    className="mt-2 border-terracotta/20 focus:border-terracotta resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3 text-lg"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-terracotta/5 rounded-lg">
                <p className="text-sm text-deep-brown/70">
                  <Clock className="w-4 h-4 inline mr-2" />
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 card-shadow">
                <h2 className="font-playfair text-2xl font-bold text-deep-brown mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-terracotta/10 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-brown mb-1">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-deep-brown/70 hover:text-terracotta transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <span className="text-deep-brown/70">{info.details}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 card-shadow">
                <h3 className="font-playfair text-xl font-bold text-deep-brown mb-4">
                  Follow Our Journey
                </h3>
                <p className="text-deep-brown/70 mb-6">
                  Stay updated with our latest creations and behind-the-scenes content
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/919893137595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/archanalippanart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

             {/* Embedded Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.0026290872506!2d75.88522759263556!3d22.726677814563452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb84eb8311b%3A0x1677ed667cfc5bf9!2sArchana%20Lippan%20Art%20Gallery!5e0!3m2!1sen!2sin!4v1755511481208!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Archana Lippan Art Gallery Location"
          />
</div>

              {/* Quick Actions */}
              <div className="bg-terracotta text-white rounded-2xl p-8">
                <h3 className="font-playfair text-xl font-bold mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => {
                      const message = "Hi! I'd like to know more about your custom artwork services.";
                      const whatsappUrl = `https://wa.me/919893137595?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="w-full bg-white text-terracotta hover:bg-warm-beige"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp for Custom Orders
                  </Button>
                  <Button
                    onClick={() => window.open('tel:+919893137595')}
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-terracotta"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
