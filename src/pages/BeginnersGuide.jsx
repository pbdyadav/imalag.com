import React from 'react';
import SEO from '@/components/SEO';

const BeginnersGuide = () => {
    return (
        <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
            <SEO
                title="Beginner's Guide: Creating Your First Lippan Art Piece"
                description="A step-by-step beginner guide for creating your first Lippan art piece with simple tools, coils, mirrors, and finishing tips."
                url="https://imalag.com/blog/beginners-guide"
            />
            <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-gold">
                <header className="mb-8 text-center">
                    <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-4">
                        Beginner's Guide: Creating Your First Lippan Art Piece
                    </h1>
                    <p className="text-terracotta italic">A Step-by-Step Tutorial for Aspiring Folk Artists</p>
                    <div className="h-1 w-20 bg-gold mx-auto mt-4"></div>
                </header>

                <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
                    <p>
                        Have you ever looked at a shimmering mud-and-mirror mural and wondered if you could create one yourself? 
                        The good news is that <strong>Lippan Kaam</strong> is a very forgiving art form. It doesn't require 
                        expensive machinery or a professional studio—just patience, a steady hand, and a love for patterns.
                    </p>

                    <p>In this guide, we will walk you through the process of creating a 12x12 inch Lippan wall hanging from scratch.</p>

                    

                    <h2 className="text-2xl font-playfair text-terracotta mt-8">Phase 1: Preparation</h2>
                    <p>
                        Before you touch the clay, you need a plan. On your 12x12 inch MDF board, use a pencil and a 
                        compass to draw your design. For beginners, a **Mandala (circular)** or a **Geometric Grid** is easiest.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li>Mark the exact center of the board.</li>
                        <li>Draw 3-4 concentric circles starting from the center.</li>
                        <li>Use a ruler to divide the circles into 8 equal slices (like a pizza).</li>
                    </ul>

                    <h2 className="text-2xl font-playfair text-terracotta">Phase 2: Preparing the Dough</h2>
                    <p>
                        Mix your ceramic powder and white glue (PVA) until it reaches the consistency of soft play-dough. 
                        It should be smooth and non-sticky. If it sticks to your fingers, add more powder. If it cracks 
                        when you roll it, add a drop of glue. 
                    </p>
                    <p><strong>Pro Tip:</strong> Keep your dough in a damp cloth while working so it doesn't dry out!</p>

                    <h2 className="text-2xl font-playfair text-terracotta">Phase 3: The Coiling Technique</h2>
                    <p>
                        Take a small lime-sized ball of dough and roll it between your palms or on a flat surface to 
                        create a "long string" or **coil**. 
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-base">
                        <li>Apply a thin line of glue over your pencil marks.</li>
                        <li>Carefully place the clay coil over the glue.</li>
                        <li>Use your thumb to gently press and shape the coil so it stands slightly raised.</li>
                    </ol>

                    <h2 className="text-2xl font-playfair text-terracotta">Phase 4: Embedding the Mirrors</h2>
                    <p>
                        This is the most exciting part! While the clay coils are still slightly wet (damp), place 
                        your mirrors into the gaps. 
                    </p>
                    <p>
                        Apply a small drop of glue to the back of the mirror and press it into the clay work. The 
                        clay borders will hold the mirror in place as they dry. Ensure you wipe away any excess 
                        glue from the mirror surface immediately using a cotton bud.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta">Phase 5: Drying and Finishing</h2>
                    <p>
                        Let your masterpiece dry naturally in a cool, shaded area for <strong>24 to 48 hours</strong>. 
                        Do not use a hair dryer, as rapid drying causes the mud to crack.
                    </p>
                    <p>
                        Once dry, you can leave it in its natural white state or paint the background with acrylic 
                        colors. Finally, apply a coat of clear varnish to protect the clay from moisture.
                    </p>

                    <div className="mt-10 p-6 bg-terracotta/5 rounded-xl border-l-4 border-terracotta">
                        <h3 className="font-playfair text-xl mb-2">Ready to start?</h3>
                        <p className="text-sm italic">
                            Don't worry if your first few coils aren't perfect. The beauty of folk art lies in its 
                            handmade, organic feel. Every crack and curve tells a story!
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BeginnersGuide;
