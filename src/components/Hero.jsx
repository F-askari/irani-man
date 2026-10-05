import HeroRack from './HeroRack.jsx'
import { Waves, Leaf, Wind } from './Icons.jsx'

const FEATURES = [
  { Icon: Waves, label: 'بافتِ خوش‌دست' },
  { Icon: Leaf, label: 'پارچه‌ی سبُک' },
  { Icon: Wind, label: 'خنک و نَفَس‌کِش' },
]

export default function Hero() {
  return (
    <section id="home" className="bg-[#EFECE6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 md:pt-20 text-center">
        <p className="text-golddark font-semibold mb-3 text-sm md:text-base">پوشاکِ مردانهِ ایرانی</p>
        <h1 className="font-nastaliq text-4xl sm:text-5xl md:text-6xl text-[#26302B] pb-2">سادگیِ ضروری</h1>
        <div className="w-16 h-px bg-gold mx-auto my-5" aria-hidden="true" />
        <p className="text-[#555F58] font-medium text-sm md:text-base">سبُک. خنک. همیشه در مد.</p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <a
            href="#shop"
            className="bg-teal text-white rounded-full px-8 py-3.5 text-sm font-bold hover:bg-tealsoft transition-colors"
          >
            خریدِ کالکشن‌ها
          </a>
          <a
            href="#categories"
            className="text-sm font-semibold text-[#26302B] underline underline-offset-8 decoration-gold decoration-2 hover:text-golddark transition-colors"
          >
            مشاهده‌ی ضروری‌ها
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-4">
        <HeroRack className="w-full" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-12 pt-2">
        <div className="grid grid-cols-3">
          {FEATURES.map(({ Icon, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-2 py-6 ${i > 0 ? 'border-s border-[#D8D2C6] ps-4 md:ps-8' : ''}`}
            >
              <Icon className="w-6 h-6 text-[#3A423D]" sw={1.5} />
              <span className="text-[11px] md:text-xs font-semibold text-[#3A423D]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
