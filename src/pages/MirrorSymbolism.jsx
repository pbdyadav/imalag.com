import React from 'react';
import SEO from '@/components/SEO';

const MirrorSymbolism = () => {
    return (
        <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
            <SEO
                title="The Symbolism of Mirror Shapes"
                description="Explore the meaning behind circles, diamonds, triangles, and squares in traditional Lippan mirror work."
                url="https://www.imalag.com/blog/mirror-symbolism"
            />
            <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-gold">
                <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-6">
                    The Symbolism of Mirror Shapes
                </h1>
                <p className="text-silver mb-8 italic">Published on December 15, 2025</p>

                <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
                    <p>In the heart of the Thar Desert, where the sun beats down on white salt lands, Lippan art serves a dual purpose: it cools the home and reflects the light of the soul. The mirrors used in this art form, locally called <strong>Aabhalas,</strong> are not placed randomly. In traditional tribal culture, every shape carries a specific meaning.</p>

                    

                    <h2 className="text-2xl font-playfair text-terracotta">1. The Circle: The Sun and Completion</h2>
                    <p>The circular mirror is the most common element in any Lippan mural. It represents the Sun, the source of all life in the desert. In a mandala-style Lippan piece, a large central circle represents the "Bindu" or the center of the universe. Smaller circles often represent seeds or flowers, symbolizing fertility and growth.</p>

                    <h2 className="text-2xl font-playfair text-terracotta">2. The Diamond: Nature and Protection</h2>
                    <p>The diamond shape (Rhombus) is frequently used in the borders of Bhungas (mud huts). It is a geometric representation of a leaf or a grain. To the nomadic tribes, this symbolizes the harvest and the abundance of nature. Additionally, the sharp angles of the diamond are believed to deflect the "evil eye," protecting the household from negative energy.</p>

                    <h2 className="text-2xl font-playfair text-terracotta">3. The Triangle: The Earth and Divine Connection</h2>
                    <p>Triangles in Lippan art often represent the three worlds or the three primary Hindu deities. When grouped together, they form "Pankhi" (fan) patterns. These patterns mimic the mountain ranges or the vast expanse of the earth, rooting the artwork in the physical geography of Gujarat.</p>

                    <h2 className="text-2xl font-playfair text-terracotta">4. The Square: Stability and the Sacred Home</h2>
                    <p>Square mirrors represent the four cardinal directions—North, South, East, and West. They symbolize a grounded, stable home and the boundary between the wild desert and the safe sanctuary of the family. Using squares provides a structural balance to the fluid, swirling patterns of the mud work.</p>
                </div>
            </article>
        </div>
    );
};

export default MirrorSymbolism;
