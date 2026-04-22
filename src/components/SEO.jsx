// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

function getCurrentURL() {
  if (typeof window === 'undefined') {
    return 'https://www.imalag.com/';
  }

  const current = `${window.location.origin}${window.location.pathname}`;
  return current.replace('http://imalag.com', 'https://www.imalag.com')
    .replace('https://imalag.com', 'https://www.imalag.com');
}

function normalizeCanonicalURL(url) {
  return String(url)
    .replace('http://imalag.com', 'https://www.imalag.com')
    .replace('https://imalag.com', 'https://www.imalag.com');
}

export default function SEO({ title, description, url, image, product, noindex = false, type = 'website' }) {
  const siteName = "Archana Lippan Art Gallery";

  const defaultTitle = "Buy Lippan Art Material, Kits & Raw Materials | Archana Lippan Art Gallery";
  const defaultDescription =
    "Shop premium Lippan art material, Lippan art kits, and raw materials handcrafted by Archana. Traditional Lippan Kaam, mirror work, MDF art, glass mosaic work, and custom wall decor. Fast delivery across India.";
  const defaultKeywords =
    "Lippan art material, Lippan art kit, Lippan art raw material, Lippan Kaam, Mud mirror art, Lippan art online, Buy Lippan art, Mirror mosaic, MDF art tools, Lippan clay material";

  const finalTitle = title ? `${title} — ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalURL = normalizeCanonicalURL(url || getCurrentURL());
  const finalImage = image || "https://www.imalag.com/ALAG_Home.png";
  const robotsContent = noindex ? "noindex,nofollow" : "index,follow";

  /* ------------------------------
     🔹 Schema: LocalBusiness
     ------------------------------ */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": finalImage,
    "url": "https://www.imalag.com/",
    "description": defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  /* ------------------------------
     🔹 Schema: Website + Search Box
     ------------------------------ */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": "https://www.imalag.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.imalag.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  /* ------------------------------
     🔹 Schema: Breadcrumb (Auto)
     ------------------------------ */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.imalag.com/"
      },
      ...(title
        ? [{
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": finalURL
          }]
        : [])
    ]
  };

  /* ------------------------------
     🔹 Schema: Product (Only if product prop is sent)
     product = {
       name,
       description,
       image,
       price,
       stock
     }
     ------------------------------ */
  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": product.price,
          "availability":
            product.stock > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          "url": finalURL
        }
      }
    : null;

  return (
    <Helmet>

      {/* Primary SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <link rel="canonical" href={finalURL} />

      {/* Robots */}
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalURL} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* ALL SCHEMA MARKUP */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {product && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}

    </Helmet>
  );
}
