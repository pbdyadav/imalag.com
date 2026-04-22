import React from 'react';
import SEO from '@/components/SEO';

const BlogPost = () => {
  return (
    <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
      <SEO
        title="The Ancient History and Significance of Lippan Kaam"
        description="Explore the cultural roots of Lippan Kaam, its origin in Kutch, and why mud and mirror work remains a powerful Indian folk art."
        url="https://imalag.com/blog/history-of-lippan"
      />
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-terracotta">
        <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-6">
          The Ancient History and Significance of Lippan Kaam
        </h1>
        <p className="text-silver mb-8 italic">Published on December 22, 2025 by Archana Lippan Art Gallery</p>
        
        <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
          <p>
            Lippan Kaam, often known as Mud and Mirror Work, is a traditional mural craft from the Kutch region of Gujarat, India. 
            Historically, this art form was used by the nomadic communities like the Rabaris to keep their mud huts (Bhungas) cool 
            during the scorching desert summers. 
          </p>
          
          <h2 className="font-playfair text-2xl text-terracotta mt-8">The Cultural Roots</h2>
          <p>
            The art is more than just decoration; it is a symbol of the harmony between nature and human creativity. 
            Using a mixture of clay and camel dung (now replaced by alternative binders for modern homes), 
            artisans create intricate geometric patterns...
          </p>
          
          {/* Add more paragraphs here to reach 800+ words */}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
