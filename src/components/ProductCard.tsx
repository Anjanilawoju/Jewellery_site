import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "../data/mockApi";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick?: () => void;
}

const tagStyles: Record<string, string> = {
  bestseller: "bg-amber-100 text-amber-800",
  new: "bg-emerald-100 text-emerald-800",
  sale: "bg-rose-100 text-rose-700",
};

const tagLabels: Record<string, string> = {
  bestseller: "Best Seller",
  new: "New",
  sale: "Sale",
};

export default function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  const originalPrice = product.originalPrice || product.original_price;
  const discount = originalPrice
    ? Math.round(((originalPrice - product.price) / originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 hover:border-amber-200 transition-all duration-300 flex flex-col cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span
            className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${tagStyles[product.tag]}`}
          >
            {tagLabels[product.tag]}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-amber-700 hover:text-white whitespace-nowrap"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-xs text-amber-700 font-medium uppercase tracking-wide">{product.category}</p>
        <h3 className="text-sm font-semibold text-stone-800 leading-snug line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-xs text-stone-600 font-medium">{product.rating}</span>
          <span className="text-xs text-stone-400">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-base font-bold text-stone-900">${product.price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-stone-400 line-through">${originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
