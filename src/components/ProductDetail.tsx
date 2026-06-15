import { useState } from "react";
import { X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../data/mockApi";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl my-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Image */}
            <div className="bg-stone-100 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-amber-700 font-bold uppercase tracking-widest mb-1">
                  {product.collection || "Jewellery"}
                </p>
                <h1 className="text-2xl font-bold text-stone-900">{product.name}</h1>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-stone-900">${product.price}</span>
                {(product.originalPrice || product.original_price) && (
                  <span className="text-lg text-stone-400 line-through">
                    ${product.originalPrice || product.original_price}
                  </span>
                )}
              </div>

              <p className="text-stone-600 leading-relaxed">{product.description}</p>

              <div className="space-y-3 bg-stone-50 p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600 font-medium">SKU</span>
                  <span className="text-stone-900 font-semibold">{product.sku}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600 font-medium">Material</span>
                  <span className="text-stone-900 font-semibold">{product.material}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600 font-medium">Weight</span>
                  <span className="text-stone-900 font-semibold">{product.weight}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-amber-400" : "text-stone-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-stone-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="mt-4 w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
