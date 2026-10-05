import { categories } from '../data/products.js'
import { CLAY } from './GarmentIcons.jsx'
import { ArrowLeft } from './Icons.jsx'

export default function Categories() {
  return (
    <section id="categories" className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-golddark font-semibold text-xs md:text-sm mb-1.5">دسته‌بندی‌ها</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal">از کجا شروع می‌کنید؟</h2>
          </div>
          <a href="#shop" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-golddark hover:text-teal transition-colors">
            همه‌ی محصولات
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map(({ id, label, count }) => {
            const Icon = CLAY[id]
            return (
              <a
                key={id}
                href="#shop"
                className="flex flex-col items-center gap-3 bg-cream rounded-3xl py-7 px-4 border border-transparent hover:border-line hover:shadow-[0_12px_30px_rgba(26,47,51,0.08)] transition-all"
              >
                <Icon />
                <span className="font-bold text-charcoal text-sm md:text-base">{label}</span>
                <span className="text-xs text-sub -mt-1.5">{count}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
