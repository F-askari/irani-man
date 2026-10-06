import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
          نخِ ایرانی
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-navy/80 hover:text-turquoise transition-colors font-medium focus-ring rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-label="جست‌وجو"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-navy/5 transition-colors focus-ring"
          >
            <Search className="w-5 h-5 text-navy" />
          </button>
          <button
            aria-label="حساب کاربری"
            className="hidden sm:flex w-11 h-11 items-center justify-center rounded-full hover:bg-navy/5 transition-colors focus-ring"
          >
            <User className="w-5 h-5 text-navy" />
          </button>
          <button
            aria-label="سبد خرید"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-navy/5 transition-colors focus-ring"
          >
            <ShoppingBag className="w-5 h-5 text-navy" />
          </button>
          <button
            aria-label="باز کردن منو"
            onClick={() => setOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-navy/5 transition-colors focus-ring"
          >
            <Menu className="w-6 h-6 text-navy" />
          </button>
        </div>
      </div>
    </header>

      {/* منوی موبایل - از راست باز می‌شود */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-navy/40"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-canvas shadow-2xl p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-extrabold text-navy">نخِ ایرانی</span>
            <button
              aria-label="بستن منو"
              onClick={() => setOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-navy/5 focus-ring"
            >
              <X className="w-6 h-6 text-navy" />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-navy text-lg font-medium hover:text-turquoise transition-colors focus-ring rounded"
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="text-navy text-lg font-medium hover:text-turquoise transition-colors focus-ring rounded">
              حساب کاربری
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
