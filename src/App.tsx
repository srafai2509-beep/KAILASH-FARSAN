import { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BestSellers } from './components/BestSellers';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { SpecialFeatures } from './components/SpecialFeatures';
import { FestivalCatering } from './components/FestivalCatering';
import { OnlineOrdering } from './components/OnlineOrdering';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, weight: string, price: number) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.weight === weight
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            gujaratiName: product.gujaratiName,
            weight: weight,
            unitPrice: price,
            quantity: 1,
            image: product.image,
            cookingMedium: product.cookingMedium,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (
    productId: string,
    weight: string,
    delta: number
  ) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.productId === productId && item.weight === weight) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (productId: string, weight: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.weight === weight)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div id="top" className="min-h-screen bg-[#faf7f2] text-stone-900 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#3a080e]">
      
      {/* Sticky 3-Zone Navbar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenInquiry={() => scrollToSection('contact')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOrderNow={() => setIsCartOpen(true)}
          onExploreMenu={() => scrollToSection('products')}
        />

        {/* Best Sellers Showcase */}
        <BestSellers
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onExploreAll={() => scrollToSection('products')}
        />

        {/* About Section: Heritage, Pure Groundnut Oil & Cow Ghee */}
        <AboutSection />

        {/* Products Section with Weight selector & Category filters */}
        <ProductsSection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 6 Special Pillars */}
        <SpecialFeatures />

        {/* Festival Hampers & Interactive Wedding Catering Calculator */}
        <FestivalCatering />

        {/* Online Ordering: Swiggy, Zomato, WhatsApp & Store Pickup */}
        <OnlineOrdering onOpenCart={() => setIsCartOpen(true)} />

        {/* Gallery Section with Lightbox Zoom */}
        <GallerySection onOrderNow={() => setIsCartOpen(true)} />

        {/* Customer Testimonials & Proof */}
        <ReviewsSection />

        {/* Contact, Google Maps & Direct Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating WhatsApp Quick Ordering Button */}
      <FloatingWhatsApp />
    </div>
  );
}
