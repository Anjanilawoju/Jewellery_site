import { ChevronRight, ChevronLeft, X, ShoppingCart, Trash2 } from "lucide-react";
import type { Product } from "../data/mockApi";

interface CartItem extends Product {
  qty: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onQtyChange: (id: number, delta: number) => void;
}

export default function CartDrawer({ open, onClose, items, onRemove, onQtyChange }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-amber-700" />
            <h2 className="text-lg font-bold text-stone-800">Your Cart</h2>
            {items.length > 0 && (
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-stone-400 py-20">
              <ShoppingCart className="w-12 h-12 stroke-1" />
              <p className="font-medium">Your cart is empty</p>
              <button onClick={onClose} className="text-sm text-amber-700 hover:underline">
                Continue shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 bg-stone-50 rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-stone-800 line-clamp-1">{item.name}</p>
                  <p className="text-xs text-amber-700 capitalize">{item.category}</p>
                  <p className="text-sm font-bold text-stone-900 mt-1">${item.price.toLocaleString()}</p>
                </div>
                <div className="flex flex-col items-end justify-between shrink-0">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="p-1 rounded hover:bg-rose-50 text-stone-400 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQtyChange(item.id, -1)}
                      className="w-6 h-6 rounded-full bg-white border border-stone-200 hover:bg-stone-100 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => onQtyChange(item.id, 1)}
                      className="w-6 h-6 rounded-full bg-white border border-stone-200 hover:bg-stone-100 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-stone-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-medium">Subtotal</span>
              <span className="text-stone-900 font-bold text-lg">${total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-amber-700 hover:bg-amber-800 active:scale-98 text-white font-semibold py-3 rounded-full transition-all duration-150">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium py-3 rounded-full transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
