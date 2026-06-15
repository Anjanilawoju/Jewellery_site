import { useState, useEffect } from "react";
import ProductDetail from "../components/ProductDetail";
import ProductCard from "../components/ProductCard";
import { getAllProducts, getAllCollections } from "../lib/queries";
import type { Product } from "../data/mockApi";
import type { DbCollection } from "../lib/queries";
import type { NavigateFn } from "../App";

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
  onNavigate: NavigateFn;
  initialCategory?: string;
  initialTag?: string;
}

const TAG_LABELS: Record<string, string> = {
  sale: "On Sale",
  new: "New Arrivals",
  bestseller: "Best Sellers",
};

export default function ProductsPage({
  onAddToCart,
  onNavigate,
  initialCategory,
  initialTag,
}: ProductsPageProps) {
  const [selectedCollection, setSelectedCollection] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory ?? "All");
  const [selectedTag, setSelectedTag] = useState<string>(initialTag ?? "all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<DbCollection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      const cols = await getAllCollections();
      setAllProducts(products as Product[]);
      setCollections(cols);
      setIsLoading(false);
    })();
  }, []);

  // Re-apply initial filters whenever they change (navigation from home sections)
  useEffect(() => {
    setSelectedCategory(initialCategory ?? "All");
    setSelectedTag(initialTag ?? "all");
    setSelectedCollection("all");
  }, [initialCategory, initialTag]);

  const categoryFilters = ["All", "Necklace Set", "Earrings", "Ring", "Bracelet"];
  const tagFilters = [
    { id: "all", label: "All" },
    { id: "sale", label: "On Sale" },
    { id: "new", label: "New Arrivals" },
    { id: "bestseller", label: "Best Sellers" },
  ];

  const productCollections = [
    { id: "all", label: "All Products", count: allProducts.length },
    ...collections.map((col) => ({
      id: col.id,
      label: col.label,
      count: allProducts.filter((p) => p.collection_id === col.id).length,
    })),
  ];

  const filteredProducts = allProducts.filter((product) => {
    const collectionMatch =
      selectedCollection === "all" || product.collection_id === selectedCollection;
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const tagMatch =
      selectedTag === "all" || product.tag === selectedTag;
    return collectionMatch && categoryMatch && tagMatch;
  });

  const activeLabel = selectedTag !== "all"
    ? TAG_LABELS[selectedTag]
    : selectedCategory !== "All"
    ? selectedCategory
    : productCollections.find((c) => c.id === selectedCollection)?.label ?? "All Products";

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center py-24">
        <p className="text-stone-500">Loading products...</p>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-stone-500 mb-8">
          <button onClick={() => onNavigate("home")} className="hover:text-stone-700">Home</button>
          <span>/</span>
          <span className="text-stone-900 font-medium">Products</span>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-48 shrink-0 hidden lg:block">
            <div className="sticky top-20 space-y-6">
              {/* Collections */}
              <div>
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                  Collections
                </h3>
                <div className="space-y-1">
                  {productCollections.map((col) => (
                    <button
                      key={col.id}
                      onClick={() => { setSelectedCollection(col.id); setSelectedTag("all"); }}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                        selectedCollection === col.id && selectedTag === "all"
                          ? "bg-amber-700 text-white"
                          : "text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {col.label}
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          selectedCollection === col.id && selectedTag === "all"
                            ? "bg-white/20 text-white"
                            : "bg-stone-200 text-stone-600"
                        }`}>
                          {col.count}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                  Category
                </h3>
                <div className="space-y-1">
                  {categoryFilters.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setSelectedTag("all"); setSelectedCollection("all"); }}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                        selectedCategory === cat && selectedTag === "all" && selectedCollection === "all"
                          ? "bg-amber-700 text-white"
                          : "text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                  Filter
                </h3>
                <div className="space-y-1">
                  {tagFilters.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setSelectedTag(t.id); setSelectedCollection("all"); setSelectedCategory("All"); }}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                        selectedTag === t.id && t.id !== "all"
                          ? "bg-amber-700 text-white"
                          : t.id === "all" && selectedTag === "all"
                          ? ""
                          : "text-stone-700 hover:bg-stone-100"
                      } ${t.id === "all" ? "hidden" : ""}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h1 className="text-3xl font-bold text-stone-900">{activeLabel}</h1>
                <p className="text-stone-500 mt-1 text-sm">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                </p>
              </div>
              {(selectedTag !== "all" || selectedCategory !== "All" || selectedCollection !== "all") && (
                <button
                  onClick={() => { setSelectedTag("all"); setSelectedCategory("All"); setSelectedCollection("all"); }}
                  className="text-sm text-amber-700 hover:underline font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Mobile filter pills */}
            <div className="lg:hidden mb-4 flex gap-2 overflow-x-auto pb-1">
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setSelectedTag("all"); setSelectedCollection("all"); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat && selectedTag === "all"
                      ? "bg-amber-700 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer"
                  >
                    <ProductCard product={product} onAddToCart={onAddToCart} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-stone-400 text-lg">No products match this filter.</p>
                <button
                  onClick={() => { setSelectedTag("all"); setSelectedCategory("All"); setSelectedCollection("all"); }}
                  className="mt-4 text-amber-700 font-semibold hover:underline"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </main>
  );
}
