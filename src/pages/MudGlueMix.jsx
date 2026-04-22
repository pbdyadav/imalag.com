import React from 'react';
import SEO from '@/components/SEO';

const MudGlueMix = () => {
    return (
        <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
            <SEO
                title="The Secret Ratio: Preparing the Perfect Mud-Glue Mix"
                description="Discover the right mud and glue mix for durable Lippan art, with practical tips on ingredients, kneading, and storage."
                url="https://www.imalag.com/blog/mud-glue-mix"
            />
            <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-gold">
                <header className="mb-8">
                    <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-4">
                        The Secret Ratio: Preparing the Perfect Mud-Glue Mix
                    </h1>
                    <div className="flex items-center text-silver text-sm italic">
                        <span>Published on December 18, 2025</span>
                        <span className="mx-2">•</span>
                        <span>10 min read</span>
                    </div>
                </header>

                <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
                    <p>
                        The durability of Lippan art depends entirely on the quality of the dough. In Kutch, 
                        artisans used camel dung as a natural fiber to prevent cracking. Today, we use 
                        <strong>Marble Dust and synthetic binders</strong> to achieve a professional, odorless finish.
                    </p>

                    

                    <h2 className="text-2xl font-playfair text-terracotta mt-8">The "No-Crack" Ingredient List</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Marble Dust / Ceramic Powder:</strong> 2 parts (The body)</li>
                        <li><strong>Chalk Powder:</strong> 1 part (For smoothness)</li>
                        <li><strong>PVA Glue (White Glue):</strong> Added gradually (The binder)</li>
                        <li><strong>Baby Oil:</strong> A few drops (To prevent sticking to hands)</li>
                    </ul>

                    <h2 className="text-2xl font-playfair text-terracotta">The Mixing Process</h2>
                    <p>
                        1. Sift the powders through a fine sieve to remove lumps.<br />
                        2. Create a "well" in the powder and pour the glue in the center.<br />
                        3. Knead like bread dough until it is soft and elastic.<br />
                        4. <strong>The Stretch Test:</strong> If you roll a thin string (coil) and it breaks when 
                        bent, you need more glue. If it sags, you need more powder.
                    </p>

                    <h2 className="text-2xl font-playfair text-terracotta">Storage Tips</h2>
                    <p>
                        Never leave your dough exposed to air for more than 10 minutes. Always wrap it in a 
                        <strong>damp muslin cloth</strong> or an airtight plastic container to keep it 
                        pliable for your entire working session.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default MudGlueMix;
