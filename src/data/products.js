const products = [
  {
    id: 1,
    title: "Traditional Mandla Lippan",
    price: "₹700",
    originalPrice: "₹1,000",
    category: "Lippan Art",
    size: '12" Circle',
    description: "Beautiful design with intricate mirror work on Clay base",
    rating: 5,
    reviews: 12,
    image: "/images/products/Art7.png"
  },
  {
    id: 2,
    title: "White Lippan Art",
    price: "₹700",
    originalPrice: "₹1,000",
    category: "Mirro Mosaic",
    size: '12" Circle',
    description: "Stunning mandala pattern created with mirror pieces",
    rating: 5,
    reviews: 8,
    image: "/images/products/Art8.png"
  },
  {
    id: 3,
    title: "Spiritual Buddha with Tree",
    price: "₹1,100",
    originalPrice: "₹1,800",
    category: "MDF",
    size: '14" Circle',
    description: "Spiritual Buddha with Tree and Mirror in Black colors",
    rating: 5,
    reviews: 15,
    image: "/images/products/Art9.png"
  },
  {
    id: 4,
    title: "Clay Golder Tree",
    price: "₹800",
    originalPrice: "₹1,200",
    category: "Clay",
    size: '14" Circle',
    description: "Vibrant Clay work in Black and Gold colour artwork with traditional Indian motifs",
    rating: 4,
    reviews: 6,
    image: "/images/products/Art10.png"
  },
  {
    id: 5,
    title: "Black Buddha with Holo Light Efects",
    price: "₹3,800",
    originalPrice: "₹5,000",
    category: "Lippan Art",
    size: '17.5" x 17.5"',
    description: "Majestic Black Buddha design with Holo Light Efects for Wall decoration",
    rating: 5,
    reviews: 10,
    image: "/images/products/Art11.png"
  },
  {
    id: 6,
    title: "Green Buddha with Holo Light Efects",
    price: "₹3,800",
    originalPrice: "₹5,000",
    category: "Lippan Art",
    size: '17.5" x 17.5"',
    description: "Majestic Green Tree Buddha design with Holo Light Efects for Wall decoration",
    rating: 5,
    reviews: 9,
    image: "/images/products/Art12.png"
  },
   {
    id: 7,
    title: "Lippan Art work as per Clint",
    price: "₹2,500",
    originalPrice: "₹3,500",
    category: "Lippan Art",
    size: '1 Feet x 1.5 Feet',
    description: "We create beautiful custom Lippan art pieces specially designed as per your choice, space, and theme. Perfect for wedding gifting, home décor, and adding a touch of traditional Indian elegance to any wall.",
    rating: 5,
    reviews: 9,
    image: "/images/products/Lippan Art work for Clint.jpg",
    images: [
      "/images/products/Lippan Art work for Clint.jpg",
      "/images/products/Lippan Art work for ClintO.jpg",
    ],
  },
  {
    id: 8,
    title: "Lippan Art work as per Clint2",
    price: "₹2,500",
    originalPrice: "₹3,500",
    category: "Lippan Art",
    size: '1 Feet x 1.5 Feet',
    description: "We create beautiful custom Lippan art pieces specially designed as per your choice, space, and theme. Perfect for wedding gifting, home décor, and adding a touch of traditional Indian elegance to any wall.",
    rating: 5,
    reviews: 9,
    image: "/images/products/Lippan Art work for Clint2.jpg"
  },
  {
    id: 10,
    title: "Ornament Box",
    price: "₹200",
    originalPrice: "₹300",
    category: "Glass",
    size: '4" x 4"',
    description: "MDF Ornament Box with glass work",
    rating: 5,
    reviews: 9,
    image: "/images/products/Art13.png"
  },
  {
    id: 11,
    title: "Ornament Box",
    price: "₹200",
    originalPrice: "₹300",
    category: "Glass",
    size: '4" x 4"',
    description: "MDF Ornament Box with glass work",
    rating: 5,
    reviews: 9,
    image: "/images/products/Art14.png"
  },
  {
    id: 12,
    title: "Ornament Box",
    price: "₹200",
    originalPrice: "₹300",
    category: "Glass",
    size: '4" x 4"',
    description: "MDF Ornament Box with glass work",
    rating: 5,
    reviews: 9,
    image: "/images/products/Art15.png"
    
  },
  {
    id: 100,
    title: "Round/Circle Shape Glass mirrors for Lippan Art / Mandala Art ",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm",     
    description: "Enhance your creative projects with these premium-quality Circle-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    rating: 5,
    reviews: 5,
    image: "/images/products/RoundShapeMirror.png",
    images: [
      "/images/products/RoundShapeMirror.png",
      "/images/products/RoundShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  
  {
    id: 101,
    title: "Square Shape Glass Mirrors for Lippan Art / Mandala Art",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm", 
    description: "Enhance your creative projects with these premium-quality Square-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    rating: 5,
    reviews: 5,
    image: "/images/products/SQShapeMirror.png",
    images: [
      "/images/products/SQShapeMirror.png",
      "/images/products/SQShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 102,
    title: "Drop/Tilak Shape Mirror Silver Glass",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm", 
    description: "Enhance your creative projects with these premium-quality Drop/Tilak-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    rating: 5,
    reviews: 5,
    image: "/images/products/TikaShapeMirror.png",
    images: [
      "/images/products/TikaShapeMirror.png",
      "/images/products/TikaShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 103,
    title: "Rectangle Shape Mirror Silver Glass",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm", 
    description: "Enhance your creative projects with these premium-quality Drop/Tilak-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    rating: 5,
    reviews: 5,
    image: "/images/products/RTShapeMirror.png",
    images: [
      "/images/products/RTShapeMirror.png",
      "/images/products/RTShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 104,
    title: "Life Shape Mirror Silver Glass",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm",     
    description: "Enhance your creative projects with these premium-quality Life-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    ating: 5,
    reviews: 5,
    image: "/images/products/LifeShapeMirror.png",
    images: [
      "/images/products/LifeShapeMirror.png",
      "/images/products/LifeShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 105,
    title: "Triangle Shape Mirror Silver Glass",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm",      
    description: "Enhance your creative projects with these premium-quality Triangle-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    ating: 5,
    reviews: 5,
    image: "/images/products/TryShapeMirror.png",
    images: [
      "/images/products/TryShapeMirror.png",
      "/images/products/TryShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 106,
    title: "Rhombus/diamond Shape Mirror Silver Glass",
   price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm",     
    description: "Enhance your creative projects with these premium-quality Rhombus/Diamond-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    ating: 5,
    reviews: 5,
    image: "/images/products/DimShapeMirror.png",
    images: [
      "/images/products/DimShapeMirror.png",
      "/images/products/DimShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 107,
    title: "Half Moon Shape Mirror Silver Glass",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm",     
    description: "Enhance your creative projects with these premium-quality Half Moon-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    ating: 5,
    reviews: 5,
    image: "/images/products/HMoonShapeMirror.png",
    images: [
      "/images/products/HMoonShapeMirror.png",
      "/images/products/HMoonShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
  {
    id: 108,
    title: "Long Drop/Tilak Shape Mirror Silver Glass",
    price: "₹99",
    originalPrice: "₹150",
    category: "Glass",
    mirrorSizeRange: "8mm to 20mm (Mixed Sizes)", 
    weight: "100 grams (Approx. 200 pcs)", 
    pricePer200g: "₹180", 
    packageDimensions: "5 cm x 5 cm x 1 cm",     
    description: "Enhance your creative projects with these premium-quality Half Long Drop/Tilak-shaped glass mirrors, specially crafted for traditional Lippan Art and intricate Mandala designs. Their smooth finish and flawless shine add depth, elegance, and a striking reflective effect to any artwork. Whether you're designing wall panels, decorative frames, or handcrafted home décor, these mirrors bring a professional touch and elevate the overall aesthetic. Perfect for artists, hobbyists, and craft enthusiasts looking to add brilliance and sophistication to their creations.",
    ating: 5,
    reviews: 5,
    image: "/images/products/LTikaShapeMirror.png",
    images: [
      "/images/products/LTikaShapeMirror.png",
      "/images/products/LTikaShapeMirrorH.png"
    ],
    features: [
      "High-quality silver glass mirrors",
      "Perfect for Lippan and Mandala art",
      "Durable and long-lasting",
      "Easy to apply on any surface"
    ]
  },
];

export default products;
