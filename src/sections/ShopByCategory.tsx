import { ArrowRight } from "lucide-react";
import { shopByCategory } from "../data/mockApi";
import type { NavigateFn } from "../App";

// Maps each card's id to the category filter value used on ProductsPage
const CATEGORY_MAP: Record<string, string> = {
  earrings: "Earrings",
  rings: "Ring",
  bracelets: "Bracelet",
};

interface ShopByCategoryProps {
  onNavigate: NavigateFn;
}

export default function ShopByCategory({ onNavigate }: ShopByCategoryProps) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-900">Browse by Category</h2>
          <p className="text-stone-500 mt-2">Find the perfect piece for every occasion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shopByCategory.map((cat) => {
            const category = CATEGORY_MAP[cat.id] ?? "All";
            return (
              <div
                key={cat.id}
                className="group rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-stone-50"
              >
                <div className="p-4">
                  <h3 className="text-base font-bold text-stone-800 mb-3">{cat.label}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.images.slice(0, 2).map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
                        <img
                          src={src}
                          alt={cat.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                    {cat.images.slice(2).map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
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
                    onClick={() => onNavigate("products", { category })}
                    className="flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/btn"
                  >
                    See more
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
