import { useState } from 'react'
import Logo from './Logo.jsx'
import { ArrowLeft, Instagram, Telegram, Youtube } from './Icons.jsx'

const COLS = [
  {
    title: 'فروشگاه',
    links: ['پیراهن', 'تی‌شرت', 'شلوار', 'کمربند', 'بافت'],
  },
  {
    title: 'شرکت',
    links: ['درباره‌ی ما', 'تماس با ما', 'بلاگ', 'فرصت‌های شغلی'],
  },
  {
    title: 'کمک',
    links: ['سوالاتِ متداول', 'راهنمایِ سایز', 'شرایطِ مرجوعی', 'حریمِ خصوصی'],
  },
]

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setEmail('')
      onSubscribe()
    }
  }

  return (
    <footer className="bg-teal text-[#C9C6BE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <Logo light />
          <p className="text-sm leading-7 mt-4 text-[#A9B0AC]">
            پیراهن‌هایی که ماندگارند؛ ساخته‌شده با پارچه‌های طبیعی و دوختِ دقیق، برای مردی که سادگی را انتخاب می‌کند.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[
              { Icon: Instagram, label: 'اینستاگرام' },
              { Icon: Telegram, label: 'تلگرام' },
              { Icon: Youtube, label: 'یوتیوب' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold text-white grid place-items-center transition-colors"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h4 className="text-white font-bold mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#home" className="text-sm text-[#A9B0AC] hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-4 text-sm">در جریانِ اخبار باشید</h4>
          <p className="text-xs leading-6 text-[#A9B0AC] mb-4">
            با عضویت در خبرنامه، ۱۰٪ تخفیفِ اولین خرید را هدیه بگیرید.
          </p>
          <form onSubmit={submit} className="flex items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل شما"
              className="flex-1 min-w-0 bg-white/10 border border-white/15 rounded-full py-2.5 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              aria-label="عضویت در خبرنامه"
              className="shrink-0 w-11 h-11 rounded-full bg-gold hover:bg-golddark text-white grid place-items-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8E958F]">
          <p>© ۱۴۰۵ فروشگاهِ مردِ ایرانی — تمامیِ حقوق محفوظ است.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gold transition-colors">حریمِ خصوصی</a>
            <a href="#home" className="hover:text-gold transition-colors">شرایطِ استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
