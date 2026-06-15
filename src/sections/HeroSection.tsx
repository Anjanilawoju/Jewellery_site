import { ArrowRight } from "lucide-react";
import { heroImages } from "../data/mockApi";
import type { NavigateFn } from "../App";

interface HeroSectionProps {
  onNavigate: NavigateFn;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
              New Collection 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Timeless
              <br />
              <span className="text-amber-700">Elegance</span> in
              <br />
              Every Gem
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed max-w-md">
              Discover handcrafted jewellery that tells your story — from delicate everyday pieces to statement heirlooms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("products")}
                className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-amber-200"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("products", { tag: "new" })}
                className="flex items-center gap-2 border-2 border-stone-300 hover:border-amber-600 text-stone-700 hover:text-amber-700 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                View Lookbook
              </button>
            </div>
            <div className="flex gap-8 pt-4">
              {[["5K+", "Happy Clients"], ["200+", "Collections"], ["15+", "Years of Craft"]].map(
                ([num, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-stone-900">{num}</p>
                    <p className="text-xs text-stone-500">{label}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-3 gap-2 h-[420px]">
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
              <img
                src={heroImages[0]}
                alt="jewellery"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2">
              {heroImages.slice(1, 3).map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden">
                  <img
                    src={src}
                    alt="jewellery"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-2">
              {heroImages.slice(3).map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden">
                  <img
                    src={src}
                    alt="jewellery"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
