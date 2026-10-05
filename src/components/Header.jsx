import { useState } from 'react'
import Logo from './Logo.jsx'
import { Search, Bag, Heart as _H, Menu, Close } from './Icons.jsx'

export const faNum = (n) =>
  String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])

const LINKS = [
  { label: 'خانه', href: '#home' },
  { label: 'فروشگاه', href: '#shop' },
  { label: 'دسته‌بندی', href: '#categories' },
  { label: 'تخفیف‌ها', href: '#shop' },
]

export default function Header({ cartCount, onSearchClick, onCartClick, onLoginClick }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#home" aria-label="مردِ ایرانی">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm font-medium text-charcoal hover:text-golddark transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={onSearchClick}
            aria-label="جستجو"
            className="hidden sm:grid w-10 h-10 rounded-full hover:bg-sand place-items-center text-charcoal transition-colors"
          >
            <Search />
          </button>
          <button
            onClick={onCartClick}
            aria-label="سبد خرید"
            className="relative grid w-10 h-10 rounded-full hover:bg-sand place-items-center text-charcoal transition-colors"
          >
            <Bag />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -end-0.5 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">
                {faNum(cartCount)}
              </span>
            )}
          </button>
          <button
            onClick={onLoginClick}
            className="hidden md:block border border-teal text-teal hover:bg-teal hover:text-white transition-colors rounded-full px-5 py-2 text-sm font-semibold"
          >
            ورود / ثبت‌نام
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="منو"
            className="md:hidden grid w-10 h-10 rounded-full hover:bg-sand place-items-center text-charcoal"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-72 bg-white p-6 flex flex-col animate-slideIn shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Logo small />
              <button
                onClick={() => setOpen(false)}
                aria-label="بستن"
                className="grid w-10 h-10 rounded-full hover:bg-sand place-items-center"
              >
                <Close />
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-lg font-medium text-charcoal">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="hover:text-golddark transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                setOpen(false)
                onLoginClick()
              }}
              className="mt-auto w-full bg-teal text-white rounded-full py-3 text-sm font-bold"
            >
              ورود / ثبت‌نام
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
