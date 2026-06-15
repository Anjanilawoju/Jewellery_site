export interface Product {
  id?: string | number;
  name: string;
  price: number;
  original_price?: number;
  originalPrice?: number;
  image: string;
  category: string;
  collection?: string;
  collection_id?: string;
  description: string;
  tag?: "bestseller" | "new" | "sale";
  rating: number;
  reviews: number;
  sku: string;
  material: string;
  weight: string;
}

export interface Category {
  id: string;
  label: string;
  images: string[];
}

export const heroImages = [
  "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export const featuredCategories: Category[] = [
  {
    id: "top-most-sale",
    label: "Top Most Sale",
    images: [
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: "new-arrivals",
    label: "New Arrivals",
    images: [
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: "simple-wears",
    label: "Simple Wears",
    images: [
      "https://images.pexels.com/photos/3641052/pexels-photo-3641052.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370753/pexels-photo-5370753.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
];

// American Diamond Set - Necklace Set
export const americanDiamondSet: Product[] = [
  {
    id: 101,
    name: "Gold Chain American Diamond Necklace",
    price: 450,
    originalPrice: 620,
    image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "American Diamond Set",
    description: "Stunning gold-plated necklace with American diamond stones. Perfect for daily wear and special occasions.",
    tag: "sale",
    rating: 4.8,
    reviews: 145,
    sku: "AND-NECK-101",
    material: "Gold Plated, American Diamond",
    weight: "8.5g",
  },
  {
    id: 102,
    name: "Gold Chain American Diamond Earrings",
    price: 250,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    collection: "American Diamond Set",
    description: "Elegant drop earrings featuring American diamond stones with gold plating.",
    tag: "new",
    rating: 4.9,
    reviews: 98,
    sku: "AND-EAR-102",
    material: "Gold Plated, American Diamond",
    weight: "3.2g",
  },
  {
    id: 103,
    name: "Gold Plated Bracelet with American Diamonds",
    price: 320,
    originalPrice: 450,
    image: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    collection: "American Diamond Set",
    description: "Delicate gold bracelet adorned with American diamond stones. Adjustable fit.",
    tag: "sale",
    rating: 4.7,
    reviews: 76,
    sku: "AND-BRAC-103",
    material: "Gold Plated, American Diamond",
    weight: "5.1g",
  },
  {
    id: 104,
    name: "American Diamond Ring with Gold Band",
    price: 380,
    image: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    collection: "American Diamond Set",
    description: "Classic solitaire-style ring with American diamond center stone.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 203,
    sku: "AND-RING-104",
    material: "Gold Plated, American Diamond",
    weight: "4.8g",
  },
  {
    id: 105,
    name: "Gold Chain Necklace with Pendant",
    price: 520,
    originalPrice: 720,
    image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "American Diamond Set",
    description: "Premium gold chain with diamond-studded pendant. Statement piece for any occasion.",
    tag: "sale",
    rating: 4.8,
    reviews: 112,
    sku: "AND-PEND-105",
    material: "Gold Plated, American Diamond",
    weight: "9.3g",
  },
  {
    id: 106,
    name: "Cluster American Diamond Earrings",
    price: 290,
    image: "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    collection: "American Diamond Set",
    description: "Multi-stone cluster earrings that sparkle and shine beautifully.",
    tag: "new",
    rating: 4.8,
    reviews: 84,
    sku: "AND-EAR-106",
    material: "Gold Plated, American Diamond",
    weight: "3.8g",
  },
  {
    id: 107,
    name: "Gold Bangle with Diamond Stones",
    price: 410,
    originalPrice: 580,
    image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    collection: "American Diamond Set",
    description: "Rigid bangle-style bracelet with scattered American diamond accents.",
    tag: "sale",
    rating: 4.7,
    reviews: 91,
    sku: "AND-BANG-107",
    material: "Gold Plated, American Diamond",
    weight: "6.5g",
  },
  {
    id: 108,
    name: "Diamond Halo Ring",
    price: 470,
    image: "https://images.pexels.com/photos/3641052/pexels-photo-3641052.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    collection: "American Diamond Set",
    description: "Stunning halo design with center stone surrounded by diamond accents.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 167,
    sku: "AND-HALO-108",
    material: "Gold Plated, American Diamond",
    weight: "5.2g",
  },
];

// Temple Jewellery Set
export const templeJewellerySet: Product[] = [
  {
    id: 201,
    name: "Traditional Temple Necklace",
    price: 680,
    originalPrice: 950,
    image: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "Temple Jewellery Set",
    description: "Authentic temple-inspired necklace with traditional gold designs.",
    tag: "sale",
    rating: 4.9,
    reviews: 234,
    sku: "TEMP-NECK-201",
    material: "Gold Plated, Brass",
    weight: "12.5g",
  },
  {
    id: 202,
    name: "Temple Design Earrings with Stones",
    price: 420,
    image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    collection: "Temple Jewellery Set",
    description: "Intricately carved temple earrings with colored stone accents.",
    tag: "bestseller",
    rating: 4.8,
    reviews: 156,
    sku: "TEMP-EAR-202",
    material: "Gold Plated, Semi-precious Stones",
    weight: "4.9g",
  },
  {
    id: 203,
    name: "Temple Bangles Set (4 pieces)",
    price: 550,
    originalPrice: 780,
    image: "https://images.pexels.com/photos/5370753/pexels-photo-5370753.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    collection: "Temple Jewellery Set",
    description: "Set of 4 traditional temple-design bangles with intricate patterns.",
    tag: "sale",
    rating: 4.7,
    reviews: 108,
    sku: "TEMP-BANG-203",
    material: "Gold Plated, Brass",
    weight: "18.0g",
  },
  {
    id: 204,
    name: "Temple Ring with Engraved Details",
    price: 320,
    image: "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    collection: "Temple Jewellery Set",
    description: "Wide band temple ring with detailed engraved patterns.",
    tag: "new",
    rating: 4.8,
    reviews: 89,
    sku: "TEMP-RING-204",
    material: "Gold Plated, Brass",
    weight: "6.8g",
  },
  {
    id: 205,
    name: "Temple Jhumka Earrings Large",
    price: 380,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    collection: "Temple Jewellery Set",
    description: "Traditional jhumka style temple earrings with long drop length.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 198,
    sku: "TEMP-JHU-205",
    material: "Gold Plated, Brass",
    weight: "5.1g",
  },
  {
    id: 206,
    name: "Temple Pendant Necklace",
    price: 490,
    originalPrice: 680,
    image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "Temple Jewellery Set",
    description: "Sacred temple pendant with ornate gold designs.",
    tag: "sale",
    rating: 4.8,
    reviews: 122,
    sku: "TEMP-PEND-206",
    material: "Gold Plated, Brass",
    weight: "10.2g",
  },
  {
    id: 207,
    name: "Temple Bracelet with Beads",
    price: 340,
    image: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    collection: "Temple Jewellery Set",
    description: "Temple-inspired bracelet with colored bead accents.",
    tag: "new",
    rating: 4.7,
    reviews: 74,
    sku: "TEMP-BRAC-207",
    material: "Gold Plated, Glass Beads",
    weight: "7.1g",
  },
  {
    id: 208,
    name: "Temple Haaram Necklace",
    price: 720,
    originalPrice: 1000,
    image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "Temple Jewellery Set",
    description: "Long traditional haaram necklace with temple motifs.",
    tag: "sale",
    rating: 4.9,
    reviews: 187,
    sku: "TEMP-HAAR-208",
    material: "Gold Plated, Brass",
    weight: "14.8g",
  },
];

// Oxidised Jewellery Set
export const oxidisedSet: Product[] = [
  {
    id: 301,
    name: "Oxidised Silver Necklace",
    price: 380,
    originalPrice: 520,
    image: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "Oxidised Jewellery",
    description: "Classic oxidised silver necklace with vintage appeal.",
    tag: "sale",
    rating: 4.7,
    reviews: 143,
    sku: "OXI-NECK-301",
    material: "Oxidised Silver",
    weight: "8.9g",
  },
  {
    id: 302,
    name: "Oxidised Drop Earrings",
    price: 260,
    image: "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    collection: "Oxidised Jewellery",
    description: "Lightweight oxidised earrings perfect for everyday wear.",
    tag: "new",
    rating: 4.8,
    reviews: 96,
    sku: "OXI-EAR-302",
    material: "Oxidised Silver",
    weight: "3.5g",
  },
  {
    id: 303,
    name: "Oxidised Silver Bangles Set",
    price: 420,
    originalPrice: 600,
    image: "https://images.pexels.com/photos/3641052/pexels-photo-3641052.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    collection: "Oxidised Jewellery",
    description: "Vintage-style oxidised bangles with intricate designs.",
    tag: "sale",
    rating: 4.7,
    reviews: 118,
    sku: "OXI-BANG-303",
    material: "Oxidised Silver",
    weight: "14.2g",
  },
  {
    id: 304,
    name: "Oxidised Statement Ring",
    price: 280,
    image: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    collection: "Oxidised Jewellery",
    description: "Bold oxidised silver ring with cultural designs.",
    tag: "bestseller",
    rating: 4.8,
    reviews: 152,
    sku: "OXI-RING-304",
    material: "Oxidised Silver",
    weight: "5.3g",
  },
  {
    id: 305,
    name: "Oxidised Chandbali Earrings",
    price: 320,
    image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    collection: "Oxidised Jewellery",
    description: "Traditional chandbali design in oxidised silver.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 201,
    sku: "OXI-CHAND-305",
    material: "Oxidised Silver",
    weight: "4.1g",
  },
  {
    id: 306,
    name: "Oxidised Long Pendant Necklace",
    price: 450,
    originalPrice: 650,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "Oxidised Jewellery",
    description: "Long oxidised necklace with ornamental pendant.",
    tag: "sale",
    rating: 4.8,
    reviews: 134,
    sku: "OXI-PEND-306",
    material: "Oxidised Silver",
    weight: "11.5g",
  },
  {
    id: 307,
    name: "Oxidised Bangle Bracelet",
    price: 290,
    image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    collection: "Oxidised Jewellery",
    description: "Single oxidised bangle with timeless design.",
    tag: "new",
    rating: 4.7,
    reviews: 87,
    sku: "OXI-BRAC-307",
    material: "Oxidised Silver",
    weight: "6.8g",
  },
  {
    id: 308,
    name: "Oxidised Silver Choker",
    price: 380,
    image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    collection: "Oxidised Jewellery",
    description: "Elegant oxidised choker style necklace.",
    tag: "new",
    rating: 4.8,
    reviews: 109,
    sku: "OXI-CHOK-308",
    material: "Oxidised Silver",
    weight: "7.2g",
  },
];

export const bestSellerProducts: Product[] = [
  americanDiamondSet[3], // Diamond Halo Ring
  americanDiamondSet[0], // Gold Chain American Diamond Necklace
  templeJewellerySet[1], // Temple Design Earrings
  oxidisedSet[3], // Oxidised Statement Ring
  americanDiamondSet[2], // Gold Plated Bracelet
  templeJewellerySet[4], // Temple Jhumka Earrings
];

export const topSellerProducts: Product[] = [
  americanDiamondSet[0], // Gold Chain American Diamond Necklace
  templeJewellerySet[0], // Traditional Temple Necklace
  oxidisedSet[4], // Oxidised Chandbali Earrings
  americanDiamondSet[3], // Diamond Halo Ring
  templeJewellerySet[2], // Temple Bangles Set
];

export const shopByCategory: Category[] = [
  {
    id: "earrings",
    label: "Earrings",
    images: [
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: "rings",
    label: "Ring",
    images: [
      "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: "bracelets",
    label: "Bracelets",
    images: [
      "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5370753/pexels-photo-5370753.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3641052/pexels-photo-3641052.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
];

export const allProducts: Product[] = [
  ...americanDiamondSet,
  ...templeJewellerySet,
  ...oxidisedSet,
];

export const productCollections = [
  {
    id: "all",
    label: "All Products",
    count: allProducts.length,
  },
  {
    id: "american-diamond-set",
    label: "Necklace Set",
    count: americanDiamondSet.length,
  },
  {
    id: "temple-jewellery",
    label: "Temple Jewellery Set",
    count: templeJewellerySet.length,
  },
  {
    id: "oxidised",
    label: "Oxidised set",
    count: oxidisedSet.length,
  },
];

export const categoryFilters = ["All", "Necklace Set", "Earrings", "Ring", "Bracelet"];
