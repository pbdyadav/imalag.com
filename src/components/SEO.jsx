// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, image }) {
  const siteName = "Archana Lippan Art Gallery";
  return (
    <Helmet>
      <title>{title ? `${title} — ${siteName}` : siteName}</title>
      <meta name="description" content={description || 'Handcrafted Lippan, mirror mosaic and traditional Indian art.'} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url || 'https://www.imalag.com/'} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || 'Handcrafted Lippan art.'} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
