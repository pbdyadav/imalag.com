import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "@/data/productsData";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "@/components/SEO";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const siteOrigin =
    typeof window !== "undefined" ? window.location.origin : "https://www.imalag.com";
  const images =
    product && product.images && product.images.length > 0
      ? product.images
      : product
        ? [product.image]
        : [];
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    setMainImage(images[0] || "");
  }, [id, images]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <SEO
          title="Product Not Found"
          description="The requested product could not be found."
          url={`https://www.imalag.com/product/${id}`}
          noindex
        />
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600">The product you are looking for doesn’t exist.</p>
      </div>
    );
  }

  const seoPrice = Number(String(product.price || "").replace(/[^\d.]/g, ""));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO
        title={product.title}
        description={product.description}
        image={`${siteOrigin}${product.image.startsWith('/') ? product.image : `/${product.image}`}`}
        url={`https://www.imalag.com/product/${product.id}`}
        type="product"
        product={{
          name: product.title,
          description: product.description,
          image: `${siteOrigin}${product.image.startsWith('/') ? product.image : `/${product.image}`}`,
          price: Number.isFinite(seoPrice) ? seoPrice : undefined,
          stock: product.stock ?? 1,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: IMAGES */}
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />

          <div className="flex gap-4 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? "border-black" : "border-transparent"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <p className="text-gray-600 mb-3">
            {product.category && <span className="font-semibold">Category:</span>} {product.category}
          </p>

          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          {/* PRICE */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-green-700">{product.price}</span>
            {product.originalPrice && (
              <span className="line-through text-gray-500">{product.originalPrice}</span>
            )}
          </div>

          {/* EXTRA DETAILS */}
          <div className="space-y-2 text-gray-700 mb-6">
            {product.size && <p><b>Size:</b> {product.size}</p>}
            {product.mirrorSizeRange && <p><b>Mirror Size Range:</b> {product.mirrorSizeRange}</p>}
            {product.weight && <p><b>Weight:</b> {product.weight}</p>}
            {product.pricePer100g && <p><b>Price per 100g:</b> {product.pricePer100g}</p>}
            {product.packageDimensions && <p><b>Package Dimensions:</b> {product.packageDimensions}</p>}
          </div>

          {/* FEATURES */}
          {product.features && product.features.length > 0 && (
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              {product.features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          )}

          {/* WHATSAPP ORDER BUTTON */}
          <a
            href={`https://wa.me/919893137595?text=Hello, I want to order *${product.title}* (ID: ${product.id})`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            <FaWhatsapp size={22} /> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
