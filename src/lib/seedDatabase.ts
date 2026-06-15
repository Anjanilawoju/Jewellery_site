import { supabase } from "./supabase";

// Collection data
const collectionsData = [
  {
    label: "American Diamond Set",
    description: "Gold-plated jewellery with American diamond stones",
  },
  {
    label: "Temple Jewellery Set",
    description: "Traditional temple-inspired designs with cultural motifs",
  },
  {
    label: "Oxidised Jewellery",
    description: "Vintage-style oxidised silver pieces with timeless appeal",
  },
];

// Products data organized by collection
const productsData = [
  // American Diamond Set (8 products)
  {
    name: "Gold Chain American Diamond Necklace",
    price: 450,
    original_price: 620,
    image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Stunning gold-plated necklace with American diamond stones. Perfect for daily wear and special occasions.",
    tag: "sale",
    rating: 4.8,
    reviews: 145,
    sku: "AND-NECK-101",
    material: "Gold Plated, American Diamond",
    weight: "8.5g",
    collection_label: "American Diamond Set",
  },
  {
    name: "Gold Chain American Diamond Earrings",
    price: 250,
    original_price: null,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    description: "Elegant drop earrings featuring American diamond stones with gold plating.",
    tag: "new",
    rating: 4.9,
    reviews: 98,
    sku: "AND-EAR-102",
    material: "Gold Plated, American Diamond",
    weight: "3.2g",
    collection_label: "American Diamond Set",
  },
  {
    name: "Gold Plated Bracelet with American Diamonds",
    price: 320,
    original_price: 450,
    image: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    description: "Delicate gold bracelet adorned with American diamond stones. Adjustable fit.",
    tag: "sale",
    rating: 4.7,
    reviews: 76,
    sku: "AND-BRAC-103",
    material: "Gold Plated, American Diamond",
    weight: "5.1g",
    collection_label: "American Diamond Set",
  },
  {
    name: "American Diamond Ring with Gold Band",
    price: 380,
    original_price: null,
    image: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    description: "Classic solitaire-style ring with American diamond center stone.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 203,
    sku: "AND-RING-104",
    material: "Gold Plated, American Diamond",
    weight: "4.8g",
    collection_label: "American Diamond Set",
  },
  {
    name: "Gold Chain Necklace with Pendant",
    price: 520,
    original_price: 720,
    image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Premium gold chain with diamond-studded pendant. Statement piece for any occasion.",
    tag: "sale",
    rating: 4.8,
    reviews: 112,
    sku: "AND-PEND-105",
    material: "Gold Plated, American Diamond",
    weight: "9.3g",
    collection_label: "American Diamond Set",
  },
  {
    name: "Cluster American Diamond Earrings",
    price: 290,
    original_price: null,
    image: "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    description: "Multi-stone cluster earrings that sparkle and shine beautifully.",
    tag: "new",
    rating: 4.8,
    reviews: 84,
    sku: "AND-EAR-106",
    material: "Gold Plated, American Diamond",
    weight: "3.8g",
    collection_label: "American Diamond Set",
  },
  {
    name: "Gold Bangle with Diamond Stones",
    price: 410,
    original_price: 580,
    image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    description: "Rigid bangle-style bracelet with scattered American diamond accents.",
    tag: "sale",
    rating: 4.7,
    reviews: 91,
    sku: "AND-BANG-107",
    material: "Gold Plated, American Diamond",
    weight: "6.5g",
    collection_label: "American Diamond Set",
  },
  {
    name: "Diamond Halo Ring",
    price: 470,
    original_price: null,
    image: "https://images.pexels.com/photos/3641052/pexels-photo-3641052.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    description: "Stunning halo design with center stone surrounded by diamond accents.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 167,
    sku: "AND-HALO-108",
    material: "Gold Plated, American Diamond",
    weight: "5.2g",
    collection_label: "American Diamond Set",
  },
  // Temple Jewellery Set (8 products)
  {
    name: "Traditional Temple Necklace",
    price: 680,
    original_price: 950,
    image: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Authentic temple-inspired necklace with traditional gold designs.",
    tag: "sale",
    rating: 4.9,
    reviews: 234,
    sku: "TEMP-NECK-201",
    material: "Gold Plated, Brass",
    weight: "12.5g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Design Earrings with Stones",
    price: 420,
    original_price: null,
    image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    description: "Intricately carved temple earrings with colored stone accents.",
    tag: "bestseller",
    rating: 4.8,
    reviews: 156,
    sku: "TEMP-EAR-202",
    material: "Gold Plated, Semi-precious Stones",
    weight: "4.9g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Bangles Set (4 pieces)",
    price: 550,
    original_price: 780,
    image: "https://images.pexels.com/photos/5370753/pexels-photo-5370753.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    description: "Set of 4 traditional temple-design bangles with intricate patterns.",
    tag: "sale",
    rating: 4.7,
    reviews: 108,
    sku: "TEMP-BANG-203",
    material: "Gold Plated, Brass",
    weight: "18.0g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Ring with Engraved Details",
    price: 320,
    original_price: null,
    image: "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    description: "Wide band temple ring with detailed engraved patterns.",
    tag: "new",
    rating: 4.8,
    reviews: 89,
    sku: "TEMP-RING-204",
    material: "Gold Plated, Brass",
    weight: "6.8g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Jhumka Earrings Large",
    price: 380,
    original_price: null,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    description: "Traditional jhumka style temple earrings with long drop length.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 198,
    sku: "TEMP-JHU-205",
    material: "Gold Plated, Brass",
    weight: "5.1g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Pendant Necklace",
    price: 490,
    original_price: 680,
    image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Sacred temple pendant with ornate gold designs.",
    tag: "sale",
    rating: 4.8,
    reviews: 122,
    sku: "TEMP-PEND-206",
    material: "Gold Plated, Brass",
    weight: "10.2g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Bracelet with Beads",
    price: 340,
    original_price: null,
    image: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    description: "Temple-inspired bracelet with colored bead accents.",
    tag: "new",
    rating: 4.7,
    reviews: 74,
    sku: "TEMP-BRAC-207",
    material: "Gold Plated, Glass Beads",
    weight: "7.1g",
    collection_label: "Temple Jewellery Set",
  },
  {
    name: "Temple Haaram Necklace",
    price: 720,
    original_price: 1000,
    image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Long traditional haaram necklace with temple motifs.",
    tag: "sale",
    rating: 4.9,
    reviews: 187,
    sku: "TEMP-HAAR-208",
    material: "Gold Plated, Brass",
    weight: "14.8g",
    collection_label: "Temple Jewellery Set",
  },
  // Oxidised Jewellery (8 products)
  {
    name: "Oxidised Silver Necklace",
    price: 380,
    original_price: 520,
    image: "https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Classic oxidised silver necklace with vintage appeal.",
    tag: "sale",
    rating: 4.7,
    reviews: 143,
    sku: "OXI-NECK-301",
    material: "Oxidised Silver",
    weight: "8.9g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Drop Earrings",
    price: 260,
    original_price: null,
    image: "https://images.pexels.com/photos/950316/pexels-photo-950316.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    description: "Lightweight oxidised earrings perfect for everyday wear.",
    tag: "new",
    rating: 4.8,
    reviews: 96,
    sku: "OXI-EAR-302",
    material: "Oxidised Silver",
    weight: "3.5g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Silver Bangles Set",
    price: 420,
    original_price: 600,
    image: "https://images.pexels.com/photos/3641052/pexels-photo-3641052.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    description: "Vintage-style oxidised bangles with intricate designs.",
    tag: "sale",
    rating: 4.7,
    reviews: 118,
    sku: "OXI-BANG-303",
    material: "Oxidised Silver",
    weight: "14.2g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Statement Ring",
    price: 280,
    original_price: null,
    image: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Ring",
    description: "Bold oxidised silver ring with cultural designs.",
    tag: "bestseller",
    rating: 4.8,
    reviews: 152,
    sku: "OXI-RING-304",
    material: "Oxidised Silver",
    weight: "5.3g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Chandbali Earrings",
    price: 320,
    original_price: null,
    image: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Earrings",
    description: "Traditional chandbali design in oxidised silver.",
    tag: "bestseller",
    rating: 4.9,
    reviews: 201,
    sku: "OXI-CHAND-305",
    material: "Oxidised Silver",
    weight: "4.1g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Long Pendant Necklace",
    price: 450,
    original_price: 650,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Long oxidised necklace with ornamental pendant.",
    tag: "sale",
    rating: 4.8,
    reviews: 134,
    sku: "OXI-PEND-306",
    material: "Oxidised Silver",
    weight: "11.5g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Bangle Bracelet",
    price: 290,
    original_price: null,
    image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bracelet",
    description: "Single oxidised bangle with timeless design.",
    tag: "new",
    rating: 4.7,
    reviews: 87,
    sku: "OXI-BRAC-307",
    material: "Oxidised Silver",
    weight: "6.8g",
    collection_label: "Oxidised Jewellery",
  },
  {
    name: "Oxidised Silver Choker",
    price: 380,
    original_price: null,
    image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Necklace Set",
    description: "Elegant oxidised choker style necklace.",
    tag: "new",
    rating: 4.8,
    reviews: 109,
    sku: "OXI-CHOK-308",
    material: "Oxidised Silver",
    weight: "7.2g",
    collection_label: "Oxidised Jewellery",
  },
];

export async function seedDatabase() {
  try {
    // Check if collections already exist
    const { data: existingCollections, error: checkError } = await supabase
      .from("collections")
      .select("id")
      .limit(1);

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Error checking collections:", checkError);
      return;
    }

    // If collections already seeded, skip
    if (existingCollections && existingCollections.length > 0) {
      console.log("Database already seeded");
      return;
    }

    // Insert collections
    const { data: insertedCollections, error: collectionError } = await supabase
      .from("collections")
      .insert(collectionsData)
      .select("id, label");

    if (collectionError) {
      console.error("Error inserting collections:", collectionError);
      return;
    }

    console.log("Collections inserted:", insertedCollections);

    // Create a map of collection labels to IDs
    const collectionMap = new Map(
      insertedCollections?.map((c: { id: string; label: string }) => [c.label, c.id]) || []
    );

    // Prepare products with correct collection_id
    const productsToInsert = productsData.map((p) => ({
      name: p.name,
      price: p.price,
      original_price: p.original_price,
      image: p.image,
      category: p.category,
      collection_id: collectionMap.get(p.collection_label),
      description: p.description,
      tag: p.tag,
      rating: p.rating,
      reviews: p.reviews,
      sku: p.sku,
      material: p.material,
      weight: p.weight,
    }));

    // Insert products in batches
    const batchSize = 5;
    for (let i = 0; i < productsToInsert.length; i += batchSize) {
      const batch = productsToInsert.slice(i, i + batchSize);
      const { error: productError } = await supabase.from("products").insert(batch);

      if (productError) {
        console.error(`Error inserting products batch ${i / batchSize + 1}:`, productError);
        return;
      }
    }

    console.log("All products inserted successfully!");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}
