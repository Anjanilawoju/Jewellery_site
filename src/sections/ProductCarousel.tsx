import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../data/mockApi";
import type { NavigateFn } from "../App";

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: NavigateFn;
  viewAllTag?: string;
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  onAddToCart,
  onNavigate,
  viewAllTag,
}: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-7">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">{title}</h2>
            {subtitle && <p className="text-stone-500 text-sm mt-1">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("products", viewAllTag ? { tag: viewAllTag } : {})}
              className="flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/link"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-1">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-stone-200 bg-white hover:bg-amber-700 hover:border-amber-700 hover:text-white text-stone-600 flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-stone-200 bg-white hover:bg-amber-700 hover:border-amber-700 hover:text-white text-stone-600 flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="w-52 shrink-0">
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))
          ) : (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-52 shrink-0 h-72 bg-stone-100 rounded-2xl animate-pulse" />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
