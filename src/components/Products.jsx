import { products } from '../data/products.js'
import ProductArt from './ProductArt.jsx'
import { Heart, Plus, ArrowLeft } from './Icons.jsx'

export default function Products({ onAdd, wishlist, onToggleWish }) {
  return (
    <section id="shop" className="py-14 md:py-20 bg-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-golddark font-semibold text-xs md:text-sm mb-1.5">فروشگاه</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal">منتخبِ این فصل</h2>
          </div>
          <a href="#shop" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-golddark hover:text-teal transition-colors">
            مشاهده‌ی همه
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => {
            const wished = wishlist.has(p.id)
            return (
              <article
                key={p.id}
                className="group relative bg-white rounded-2xl border border-line overflow-hidden hover:shadow-[0_14px_34px_rgba(26,47,51,0.10)] transition-shadow"
              >
                <div className="relative aspect-square bg-cream flex items-center justify-center overflow-hidden">
                  <ProductArt
                    type={p.type}
                    color={p.color}
                    dark={p.dark}
                    className="w-[74%] transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.off && (
                    <span className="absolute top-3 start-3 bg-gold text-white text-[11px] font-bold rounded-full px-2.5 py-1">
                      {p.off}
                    </span>
                  )}
                  <button
                    onClick={() => onToggleWish(p.id)}
                    aria-label="افزودن به علاقه‌مندی‌ها"
                    aria-pressed={wished}
                    className={`absolute top-3 end-3 w-9 h-9 rounded-full bg-white shadow-sm grid place-items-center transition-colors ${
                      wished ? 'text-gold' : 'text-[#9AA0A2] hover:text-gold'
                    }`}
                  >
                    <Heart filled={wished} className="w-[18px] h-[18px]" />
                  </button>
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm sm:text-[15px] mb-1">{p.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-golddark font-bold text-[15px]">
                        {p.price} <span className="text-[11px] font-medium">تومان</span>
                      </span>
                      {p.old && <span className="text-xs text-[#ABAFB0] line-through">{p.old}</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => onAdd(p)}
                    aria-label={`افزودن ${p.title} به سبد`}
                    className="shrink-0 w-10 h-10 rounded-full bg-teal text-white grid place-items-center hover:bg-golddark transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
