import { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, Gem } from "lucide-react";
import type { NavigateFn } from "../App";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate?: NavigateFn;
}

const navLinks = [
  { label: "Home", href: "#home", page: "home" as const },
  { label: "Products", href: "#products", page: "products" as const },
  { label: "Contact", href: "#contact", page: "contact" as const },
];

export default function Navbar({ cartCount, onCartClick, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Gem className="w-7 h-7 text-amber-600" />
            <span className="text-xl font-bold tracking-wide text-stone-800">
              SPARKLE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.page) {
                    e.preventDefault();
                    onNavigate?.(link.page);
                  }
                }}
                className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Search */}
          <div
            className={`hidden md:flex items-center bg-stone-50 border transition-all duration-200 rounded-full px-4 py-2 gap-2 ${
              searchFocused ? "border-amber-400 shadow-sm bg-white" : "border-stone-200"
            }`}
          >
            <Search className="w-4 h-4 text-stone-400 shrink-0" />
            <input
              type="text"
              placeholder="Search jewellery..."
              className="bg-transparent outline-none text-sm text-stone-700 placeholder-stone-400 w-48"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-amber-50 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-stone-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-full hover:bg-amber-800 active:scale-95 transition-all duration-150">
              <User className="w-4 h-4" />
              Sign In
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-stone-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 pb-4 pt-2 flex flex-col gap-4">
          <div className="flex items-center bg-stone-50 border border-stone-200 rounded-full px-4 py-2 gap-2">
            <Search className="w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search jewellery..."
              className="bg-transparent outline-none text-sm text-stone-700 placeholder-stone-400 flex-1"
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.page) {
                  e.preventDefault();
                  onNavigate?.(link.page as "home" | "products");
                }
              }}
              className="text-stone-700 font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-full w-fit">
            <User className="w-4 h-4" />
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
