import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import products from '../src/data/productsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputPath = path.join(rootDir, 'public', 'google-merchant-feed.xml');
const siteUrl = 'https://www.imalag.com';
const brandName = 'Archana Lippan Art Gallery';

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\u0000/g, '');
}

function toPriceValue(rawPrice) {
  const normalized = String(rawPrice || '')
    .replace(/[^\d.,]/g, '')
    .replace(/,/g, '');
  const parsed = Number.parseFloat(normalized);

  return Number.isFinite(parsed) ? parsed.toFixed(2) : null;
}

function toAvailability(product) {
  const stock = Number(product?.stock);

  if (Number.isFinite(stock) && stock <= 0) {
    return 'out of stock';
  }

  return 'in stock';
}

function encodeUrl(url) {
  return encodeURI(url);
}

const items = products
  .map((product) => {
    const priceValue = toPriceValue(product.price);

    if (!priceValue || !product.title || !product.image) {
      return null;
    }

    const category = Array.isArray(product.category)
      ? product.category[0]
      : (product.category || product.ccategory || '');

    const productUrl = encodeUrl(`${siteUrl}/product/${product.id}`);
    const imageUrl = encodeUrl(`${siteUrl}${product.image.startsWith('/') ? product.image : `/${product.image}`}`);

    return {
      id: String(product.id),
      title: product.title,
      description: product.description || product.title,
      link: productUrl,
      imageLink: imageUrl,
      price: `${priceValue} INR`,
      availability: toAvailability(product),
      condition: 'new',
      brand: brandName,
      identifierExists: 'no',
      category,
    };
  })
  .filter(Boolean);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(brandName)} Product Feed</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(`${brandName} product catalog for Google Merchant Center`)}</description>
${items
  .map(
    (item) => `    <item>
      <g:id>${escapeXml(item.id)}</g:id>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${escapeXml(item.link)}</link>
      <g:image_link>${escapeXml(item.imageLink)}</g:image_link>
      <g:price>${escapeXml(item.price)}</g:price>
      <g:availability>${escapeXml(item.availability)}</g:availability>
      <g:condition>${escapeXml(item.condition)}</g:condition>
      <g:brand>${escapeXml(item.brand)}</g:brand>
      <g:identifier_exists>${escapeXml(item.identifierExists)}</g:identifier_exists>
      <g:product_type>${escapeXml(item.category || 'handmade art')}</g:product_type>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

fs.writeFileSync(outputPath, xml, 'utf8');

console.log(`Generated ${items.length} Merchant Center items at ${outputPath}`);
