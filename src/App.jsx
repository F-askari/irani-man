import { useCallback, useRef, useState } from 'react'
import Header, { faNum } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'
import Banners from './components/Banners.jsx'
import WhyUs from './components/WhyUs.jsx'
import Footer from './components/Footer.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [wishlist, setWishlist] = useState(() => new Set())
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  const showToast = useCallback((msg) => {
    setToast(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 2200)
  }, [])

  const addToCart = useCallback(() => {
    setCartCount((c) => c + 1)
    showToast('به سبدِ خرید اضافه شد')
  }, [showToast])

  const toggleWish = useCallback((id) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const openCart = useCallback(() => {
    showToast(cartCount > 0 ? `${faNum(cartCount)} قلم کالا در سبدِ شماست` : 'سبدِ خریدِ شما خالی است')
  }, [cartCount, showToast])

  const soon = useCallback(() => {
    showToast('این بخش به‌زودی راه‌اندازی می‌شود')
  }, [showToast])

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans pb-14 md:pb-0">
      <Header
        cartCount={cartCount}
        onSearchClick={soon}
        onCartClick={openCart}
        onLoginClick={soon}
      />
      <main>
        <Hero />
        <Categories />
        <Products onAdd={addToCart} wishlist={wishlist} onToggleWish={toggleWish} />
        <Banners />
        <WhyUs />
      </main>
      <Footer onSubscribe={() => showToast('عضویتِ شما در خبرنامه ثبت شد')} />
      <BottomNav cartCount={cartCount} onCartClick={openCart} onProfileClick={soon} />

      {toast && (
        <div className="fixed bottom-20 md:bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
          <div className="animate-fadeUp bg-teal text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}
