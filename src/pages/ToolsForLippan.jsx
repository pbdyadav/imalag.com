// src/pages/ToolsForLippan.jsx
import React from 'react';
import SEO from '@/components/SEO';

const ToolsForLippan = () => {
    return (
        <div className="bg-cream min-h-screen pt-28 pb-12 px-4">
            <SEO
                title="7 Essential Tools Every Lippan Artist Needs"
                description="Learn the core tools and materials every Lippan artist needs, from MDF boards and binders to mirrors and varnish."
                url="https://www.imalag.com/blog/essential-tools"
            />
            <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-8 border-gold">
                <h1 className="font-playfair text-3xl md:text-5xl text-deep-brown mb-6">
                    7 Essential Tools Every Lippan Artist Needs
                </h1>
                <p className="text-silver mb-8 italic">Published on December 20, 2025</p>

                <div className="space-y-6 text-deep-brown leading-relaxed text-lg">
                    <p>Lippan Kaam, the traditional mud and mirror art of Kutch, is a beautiful paradox—it is humble in its origins
                        but incredibly sophisticated in its visual impact. While the nomadic Rabari women traditionally
                        used locally sourced clay and camel dung to create these murals, the modern artist has access to more durable and
                        refined materials.</p>
                    <p>If you are looking to create high-quality Lippan art that lasts for decades and catches the light perfectly,
                        you need the right toolkit. Here are the seven essential tools and materials that form the backbone of
                        a professional Lippan art studio.</p>
                    {/* Paste the full text above here using <p> and <h2> tags */}
                    <h2 className="text-2xl font-playfair text-terracotta">1. The Base Board (MDF or Plywood)</h2>
                    <p>In traditional architecture, the "canvas" was the mud wall of a Bhunga (hut). For portable, modern art,
                        <strong>MDF (Medium Density Fiberboard)</strong> is the gold standard. It provides a perfectly flat,
                        smooth surface that doesn't warp easily. For larger, heavier commissions, seasoned plywood is preferred.
                        Ensure your board is at least 6mm to 8mm thick to support the weight of the clay and mirrors.</p>
                    {/* Continue for all 7 tools */}
                    <h2 className="text-2xl font-playfair text-terracotta">2. Architectural Grade Ceramic Powder or Marble Dust</h2>
                    <p>To achieve that signature white, stone-like finish, modern artisans use ceramic powder or fine marble dust
                        mixed with binders. Unlike school-grade modeling clay, this mixture allows for extremely fine detailing and
                        dries to a rock-hard consistency. It provides the "body" of the artwork where the mirrors are embedded.</p>
                    <h2 className="text-2xl font-playfair text-terracotta">3. Synthetic Binders and Adhesives</h2>
                    <p>Traditional camel dung acted as a natural binder, but for indoor art that must remain odorless and
                        durable, <strong>Polyvinyl Acetate (PVA) glue</strong> (like Fevicol SH or MR) is essential. Mixing this with your
                        clay powder creates a "dough" that is pliable, slow-drying (giving you time to work), and
                        incredibly strong once cured.</p>
                    <h2 className="text-2xl font-playfair text-terracotta">4. Precision Sculpting Tools (Clay Tools)</h2>
                    <p>While many traditional artists use only their fingers to create the "coils" (the raised lines of the art),
                        precision tools are a must for complex geometric patterns. Small wooden or plastic spatulas, needle tools
                        for cleaning edges, and rolling pins for uniform thickness ensure your work looks gallery-ready rather
                        than amateur.</p>
                    <h2 className="text-2xl font-playfair text-terracotta">5. High-Refractive Mirrors (Aabhalas)</h2>
                    <p>The "soul" of Lippan art is the mirror work. Traditional mirrors are often hand-cut, but
                        for professional results, you should stock a variety of shapes:</p>
                    <p>Round: For centers of mandalas.

                        Diamond/Rhombus: For borders and "leaf" patterns.

                        Triangle: For filling sharp corners.

                        Square: For modern, structured designs. High-quality mirrors with clean edges are vital; if the edges are chipped, the light will not reflect uniformly.</p>
                    <h2 className="text-2xl font-playfair text-terracotta">6. Sandpaper (Fine Grit)</h2>
                    <p>Many beginners skip this step, but it is the secret to a professional finish. 
                        Once your mud work is completely dry (usually 24-48 hours), using a fine-grit sandpaper 
                        (around 220 or 320 grit) allows you to smooth out any accidental fingerprints or bumps in 
                        the clay before the final painting or sealing.</p>
                    <h2 className="text-2xl font-playfair text-terracotta">7. Acrylic Sealant or Varnish</h2>
                    <p>Lippan art is porous. If left unsealed, it can absorb moisture and develop cracks or yellow over time. 
                        A clear <strong>matte or satin varnish</strong> protects the clay work while keeping the mirrors sparkling. 
                        This ensures the artwork is easy to clean with a simple dry cloth—a major selling point for collectors.</p>
                </div>
            </article>
        </div>
    );
};

export default ToolsForLippan;
