import { ArrowRight } from "lucide-react";
import { featuredCategories } from "../data/mockApi";
import type { NavigateFn } from "../App";

// Maps each featured category card to its products-page filter
const CATEGORY_FILTERS: Record<string, { tag?: string; category?: string }> = {
  "top-most-sale": { tag: "sale" },
  "new-arrivals": { tag: "new" },
  "simple-wears": { category: "Necklace Set" },
};

interface FeaturedCategoriesProps {
  onNavigate: NavigateFn;
}

export default function FeaturedCategories({ onNavigate }: FeaturedCategoriesProps) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-900">Shop by Collection</h2>
          <p className="text-stone-500 mt-2">Curated just for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCategories.map((cat) => {
            const filter = CATEGORY_FILTERS[cat.id] ?? {};
            return (
              <div
                key={cat.id}
                className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4">
                  <h3 className="text-base font-bold text-stone-800 mb-3">{cat.label}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.images.map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-square">
                        <img
                          src={src}
                          alt={cat.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => onNavigate("products", filter)}
                    className="flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/btn"
                  >
                    Explore more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
