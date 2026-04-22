import React from 'react';
import SEO from '@/components/SEO';

const CleaningTips = () => {
    return (
        <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
            <SEO
                title="Cleaning and Preserving Your Lippan Mud Art"
                description="Practical care tips to clean, preserve, and protect Lippan mud art so it stays beautiful for years."
                url="https://imalag.com/blog/cleaning-tips"
            />
            <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-gold">
                <header className="mb-8">
                    <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-4">
                        Cleaning and Preserving Your Lippan Mud Art
                    </h1>
                    <div className="flex items-center text-silver text-sm italic">
                        <span>Published on December 08, 2025</span>
                        <span className="mx-2">•</span>
                        <span>6 min read</span>
                    </div>
                </header>

                <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
                    <p>
                        A beautiful piece of <strong>Lippan Art</strong> is an investment in heritage. Because it is 
                        made from earth-based materials and delicate mirrors, it requires a different kind of care 
                        than a standard oil painting or a plastic decor item. 
                    </p>

                    <p>
                        Whether you have a traditional white mud mural or a modern colorful panel, following these 
                        preservation steps will ensure your artwork remains as radiant as the day it was created.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta mt-8">1. The Golden Rule: No Water</h2>
                    <p>
                        Since Lippan art is primarily made of clay and binders, moisture is its biggest enemy. 
                        <strong>Never use a wet cloth</strong> or liquid spray directly on the mud work. Water can 
                        soften the clay, leading to cracks, or cause the mirrors to lose their grip and fall off. 
                        If liquid spills on the art, blot it immediately with a dry, absorbent paper towel.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta">2. Daily Dusting Techniques</h2>
                    <p>
                        Dust tends to settle in the intricate grooves of the clay coils. For regular cleaning:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li>Use a <strong>soft-bristled paintbrush</strong> (like a makeup brush or a high-quality painting brush) to gently whisk away dust from the corners.</li>
                        <li>A micro-fiber duster is also effective for the flat surfaces.</li>
                        <li>Avoid using rough scrubbing pads which can chip the delicate clay lines.</li>
                    </ul>

                    <h2 className="text-2xl font-playfair text-terracotta">3. Cleaning the Mirrors (Aabhalas)</h2>
                    <p>
                        Over time, the mirrors may become cloudy or dusty, losing their sparkle. To clean them without 
                        touching the mud work:
                    </p>
                    <p>
                        Take a cotton bud (Q-tip), dip it slightly in a glass cleaner or rubbing alcohol, and 
                        gently wipe <strong>only the glass surface</strong>. Immediately wipe it dry with the 
                        other side of the cotton bud. This keeps the reflections sharp without introducing 
                        moisture to the clay base.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta">4. Protecting Against Humidity</h2>
                    <p>
                        In very humid climates, mud art can sometimes attract fungus or "bloom" with white salt 
                        patches. To prevent this, ensure your Lippan art is hung in a <strong>well-ventilated area</strong>. 
                        Avoid hanging it directly opposite a bathroom door or in a kitchen where steam is constant.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta">5. Seasonal Inspection</h2>
                    <p>
                        Once a year, inspect your piece for "hairline cracks." If you find any, they can usually 
                        be filled with a tiny amount of ceramic powder and glue paste. Applying a fresh coat 
                        of <strong>matte spray varnish</strong> every 2-3 years can also act as a protective 
                        shield against the elements.
                    </p>

                    <div className="bg-gold/10 p-6 rounded-lg border-dashed border-2 border-gold/30 mt-10">
                        <h3 className="font-playfair text-xl text-deep-brown mb-2">Important Note:</h3>
                        <p className="text-sm">
                            Traditional Lippan art is meant to age gracefully. Small, natural variations in the 
                            clay texture over time are normal and often add to the "antique" charm of the piece.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default CleaningTips;
