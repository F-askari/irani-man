import { useId } from 'react'
import { ArrowLeft } from './Icons.jsx'

function SpringScene() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ban-spring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#67866A" />
          <stop offset="1" stopColor="#46604D" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#ban-spring)" />
      <circle cx="520" cy="90" r="70" fill="#fff" opacity="0.08" />
      <circle cx="520" cy="90" r="46" fill="#fff" opacity="0.08" />
      {[...Array(9)].map((_, i) => {
        const x = 60 + (i * 71) % 560
        const y = 40 + ((i * 97) % 300)
        const r = (i * 37) % 90
        return (
          <path
            key={i}
            d={`M ${x} ${y} c -12 -14 -30 -10 -30 6 c 0 16 18 26 30 34 c 12 -8 30 -18 30 -34 c 0 -16 -18 -20 -30 -6 z`}
            fill="#fff"
            opacity={0.05 + (i % 3) * 0.02}
            transform={`rotate(${r} ${x} ${y})`}
          />
        )
      })}
    </svg>
  )
}

function AutumnScene() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ban-autumn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A06844" />
          <stop offset="1" stopColor="#6E422C" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#ban-autumn)" />
      <circle cx="120" cy="80" r="70" fill="#fff" opacity="0.07" />
      {[...Array(9)].map((_, i) => {
        const x = 60 + (i * 83) % 540
        const y = 30 + ((i * 113) % 320)
        const r = (i * 53) % 120
        return (
          <path
            key={i}
            d={`M ${x} ${y} c -12 -14 -30 -10 -30 6 c 0 16 18 26 30 34 c 12 -8 30 -18 30 -34 c 0 -16 -18 -20 -30 -6 z`}
            fill={['#C98A54', '#B57538', '#8A5636'][i % 3]}
            opacity="0.35"
            transform={`rotate(${r} ${x} ${y})`}
          />
        )
      })}
    </svg>
  )
}

function Banner({ Scene, eyebrow, title, sub, id }) {
  return (
    <a href="#shop" className={`relative block rounded-3xl overflow-hidden h-64 md:h-72 group ${id}`}>
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative h-full p-7 md:p-9 flex flex-col justify-end text-white">
        <p className="text-white/75 text-xs font-semibold mb-1.5">{eyebrow}</p>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-1.5">{title}</h3>
        <p className="text-white/85 text-sm mb-4">{sub}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold">
          مشاهده‌ی کالکشن
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        </span>
      </div>
    </a>
  )
}

export default function Banners() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-5">
        <Banner
          Scene={SpringScene}
          eyebrow="تازه رسید"
          title="کالکشنِ بهاره"
          sub="پارچه‌های سبُک برای روزهای گرم"
          id="banner-spring"
        />
        <Banner
          Scene={AutumnScene}
          eyebrow="هوای خنک"
          title="کالکشنِ پاییزه"
          sub="لایه‌های گرم برای روزهای خنک"
          id="banner-autumn"
        />
      </div>
    </section>
  )
}
