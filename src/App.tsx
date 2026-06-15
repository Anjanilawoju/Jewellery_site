import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import HeroSection from "./sections/HeroSection";
import FeaturedCategories from "./sections/FeaturedCategories";
import ProductCarousel from "./sections/ProductCarousel";
import ShopByCategory from "./sections/ShopByCategory";
import PerksBar from "./sections/PerksBar";
import Newsletter from "./sections/Newsletter";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import { seedDatabase } from "./lib/seedDatabase";
import { getProductsBestSellers, getProductsNew } from "./lib/queries";
import type { Product } from "./data/mockApi";

interface CartItem extends Product {
  qty: number;
}

export interface ProductsFilter {
  category?: string;
  tag?: string;
}

export type NavigateFn = (
  page: "home" | "products" | "contact",
  filter?: ProductsFilter
) => void;

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentPage, setCurrentPage] = useState<"home" | "products" | "contact">("home");
  const [productsFilter, setProductsFilter] = useState<ProductsFilter>({});
  const [bestSellerProducts, setBestSellerProducts] = useState<Product[]>([]);
  const [topSellerProducts, setTopSellerProducts] = useState<Product[]>([]);
  const [isSeeding, setIsSeeding] = useState(true);

  useEffect(() => {
    (async () => {
      await seedDatabase();
      setIsSeeding(false);
      const best = await getProductsBestSellers();
      const top = await getProductsNew();
      setBestSellerProducts(best as Product[]);
      setTopSellerProducts(top as Product[]);
    })();
  }, []);

  const navigate: NavigateFn = (page, filter = {}) => {
    setCurrentPage(page);
    if (page === "products") setProductsFilter(filter);
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string | number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const changeQty = (id: string | number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const totalCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const cartDrawer = (
    <CartDrawer
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      items={cartItems}
      onRemove={removeFromCart}
      onQtyChange={changeQty}
    />
  );

  if (isSeeding) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-stone-500">Loading jewellery collection...</p>
      </div>
    );
  }

  if (currentPage === "products") {
    return (
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Navbar cartCount={totalCount} onCartClick={() => setCartOpen(true)} onNavigate={navigate} />
        <ProductsPage
          onAddToCart={addToCart}
          onNavigate={navigate}
          initialCategory={productsFilter.category}
          initialTag={productsFilter.tag}
        />
        <Footer />
        {cartDrawer}
      </div>
    );
  }

  if (currentPage === "contact") {
    return (
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Navbar cartCount={totalCount} onCartClick={() => setCartOpen(true)} onNavigate={navigate} />
        <ContactPage />
        <Footer />
        {cartDrawer}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar cartCount={totalCount} onCartClick={() => setCartOpen(true)} onNavigate={navigate} />
      <main>
        <HeroSection onNavigate={navigate} />
        <PerksBar />
        <FeaturedCategories onNavigate={navigate} />
        <ProductCarousel
          title="Best Seller Products"
          subtitle="Our customers love these"
          products={bestSellerProducts}
          onAddToCart={addToCart}
          onNavigate={navigate}
          viewAllTag="sale"
        />
        <ProductCarousel
          title="New Arrivals"
          subtitle="Fresh additions to our collection"
          products={topSellerProducts}
          onAddToCart={addToCart}
          onNavigate={navigate}
          viewAllTag="new"
        />
        <ShopByCategory onNavigate={navigate} />
        <Newsletter />
      </main>
      <Footer />
      {cartDrawer}
    </div>
  );
}
