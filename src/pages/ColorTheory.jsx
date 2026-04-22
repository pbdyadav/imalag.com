import React from 'react';
import SEO from '@/components/SEO';

const ColorTheory = () => {
    return (
        <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
            <SEO
                title="Choosing the Perfect Colors for Your Lippan Art"
                description="Pick the right palette for Lippan art, from traditional white to terracotta and modern jewel tones."
                url="https://imalag.com/blog/color-theory"
            />
            <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-gold">
                <header className="mb-8">
                    <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-4">
                        Choosing the Perfect Colors for Your Lippan Art
                    </h1>
                    <p className="text-silver italic">Tradition vs. Modern Palette Selection</p>
                </header>

                <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
                    <p>
                        While the mirrors provide the sparkle, the <strong>background color</strong> provides the soul of a 
                        Lippan piece. Choosing the right palette can transform a traditional craft into a modern masterpiece 
                        that complements your specific home interior.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta mt-8">The Traditional White (The Kutch Aesthetic)</h2>
                    <p>
                        Traditionally, Lippan art was white. Made with white clay and river sand, it symbolized purity. 
                        A white-on-white piece is timeless. It relies on <strong>shadows and highlights</strong> created 
                        by the raised mud work. This is perfect for dark-colored walls where you want the art to "pop" 
                        without adding extra colors.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta">Terracotta and Earth Tones</h2>
                    <p>
                        To bring warmth to a room, terracotta is the best choice. It mimics the natural color of 
                        fired clay and the desert landscape. Earthy tones like ochre, sienna, and burnt umber create 
                        a rustic, cozy feel that works beautifully in living rooms with wooden furniture.
                    </p>

                    

                    <h2 className="text-2xl font-playfair text-terracotta">Modern Jewel Tones</h2>
                    <p>
                        If you want a bold statement, modern Lippan art looks stunning in jewel tones:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Royal Blue:</strong> Creates a majestic contrast with silver mirrors.</li>
                        <li><strong>Emerald Green:</strong> Brings a lush, botanical feel to the geometric patterns.</li>
                        <li><strong>Deep Charcoal:</strong> An industrial, high-fashion look that makes the mirrors shine like diamonds.</li>
                    </ul>

                    <h2 className="text-2xl font-playfair text-terracotta">Pro-Tip: The Contrast Rule</h2>
                    <p>
                        Always choose a color that is at least two shades lighter or darker than your wall color. 
                        If your wall is beige, avoid a cream background for your art; instead, go for a deep 
                        Terracotta or a stark White to ensure the intricate patterns are visible.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default ColorTheory;
