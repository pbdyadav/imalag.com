import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Ancient History of Lippan Kaam",
    excerpt: "Discover the roots of traditional mud and mirror work from the Kutch region of Gujarat and how it evolved over centuries.",
    date: "Dec 22, 2025",
    image: "/blogs/blog1.png",
    path: "/blog/history-of-lippan"
  },
  {
    id: 2,
    title: "7 Essential Tools for Lippan Art",
    excerpt: "From specific mirrors to the right clay binders, we list the must-have tools for every aspiring Lippan artist.",
    date: "Dec 20, 2025",
    image: "/blogs/blog2.png",
    path: "/blog/essential-tools"
  },
  {
    id: 3,
    title: "Preparing the Perfect Mud-Glue Mix",
    excerpt: "The secret to long-lasting Lippan art is in the dough. Learn the ratios for a crack-free finish.",
    date: "Dec 18, 2025",
    image: "/blogs/blog7.png",
    path: "/blog/mud-glue-mix"
  },
  {
    id: 4,
    title: "Symbolism of Mirror Shapes",
    excerpt: "Why are some mirrors round and others diamond-shaped? Explore the tribal meanings behind the sparkle.",
    date: "Dec 15, 2025",
    image: "/images/Lippan_wall_decor.jpg",
    path: "/blog/mirror-symbolism"
  },
  {
    id: 5,
    title: "Lippan Art in Modern Interior Design",
    excerpt: "How to integrate traditional mud work into a contemporary minimalist home without clashing styles.",
    date: "Dec 12, 2025",
    image: "/images/Moon Art Photo.jpg",
    path: "/blog/modern-interiors"
  },
  {
    id: 6,
    title: "Beginner's Guide: Your First Piece",
    excerpt: "A step-by-step walkthrough for creating a small 12x12 Lippan board from scratch.",
    date: "Dec 10, 2025",
    image: "/blogs/Blogs Photo2.png",
    path: "/blog/beginners-guide"
  },
  {
    id: 7,
    title: "Cleaning and Preserving Mud Art",
    excerpt: "Practical tips to ensure your Lippan art doesn't attract moisture or lose its mirrors over time.",
    date: "Dec 08, 2025",
    image: "/blogs/blog6.png",
    path: "/blog/cleaning-tips"
  },
  {
    id: 8,
    title: "Geometric Patterns of Rabari Tribe",
    excerpt: "Deep dive into the math and culture behind the traditional motifs used by the Kutch artisans.",
    date: "Dec 05, 2025",
    image: "/blogs/blog9.png",
    path: "/blog/rabari-patterns"
  },
  {
    id: 9,
    title: "Eco-Friendly Decor: Why Lippan Matters",
    excerpt: "In a world of plastic, mud and mirror work stands out as a sustainable, earth-friendly art choice.",
    date: "Dec 02, 2025",
    image: "/blogs/blog99.jpeg",
    path: "/blog/eco-friendly-art"
  },
  {
    id: 10,
    title: "Choosing Colors for Your Art",
    excerpt: "Traditional white or modern terracotta? How to pick the right background for your mirrors.",
    date: "Nov 30, 2025",
    image: "/blogs/blog10.jpeg",
    path: "/blog/color-theory"
  }
];

const Blog = () => {
  return (
    <div className="gradient-bg min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl text-center text-deep-brown mb-4">Art & Heritage Blog</h1>
        <p className="text-center text-terracotta mb-12 italic">Insights into the world of traditional Indian folk art</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden card-shadow hover-lift border-b-4 border-gold flex flex-col h-full">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-silver uppercase tracking-widest">{post.date}</span>
                <h3 className="font-playfair text-xl text-deep-brown mt-2 mb-3 leading-tight">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{post.excerpt}</p>
                
                <Link 
                  to={post.path} 
                  className="text-terracotta font-semibold hover:text-gold transition-colors inline-block mt-auto pt-4"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;