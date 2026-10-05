import { Home, Grid, Bag, User } from './Icons.jsx'
import { faNum } from './Header.jsx'

export default function BottomNav({ cartCount, onCartClick, onProfileClick }) {
  const item =
    'flex flex-col items-center justify-center gap-1 text-[10px] font-medium text-sub py-2 transition-colors'
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-line">
      <div className="grid grid-cols-5">
        <a href="#home" className={item}>
          <Home className="w-5 h-5" />
          خانه
        </a>
        <a href="#categories" className={item}>
          <Grid className="w-5 h-5" />
          دسته‌بندی
        </a>
        <a href="#shop" className={item}>
          <Bag className="w-5 h-5" />
          فروشگاه
        </a>
        <button onClick={onCartClick} className={`${item} relative`}>
          <Bag className="w-5 h-5" />
          سبد خرید
          {cartCount > 0 && (
            <span className="absolute top-1 end-4 bg-gold text-white text-[9px] font-bold w-4 h-4 rounded-full grid place-items-center">
              {faNum(cartCount)}
            </span>
          )}
        </button>
        <button onClick={onProfileClick} className={item}>
          <User className="w-5 h-5" />
          حساب
        </button>
      </div>
    </nav>
  )
}
