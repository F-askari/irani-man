import { Shield, Truck, Headset } from './Icons.jsx'

const ITEMS = [
  {
    Icon: Shield,
    title: 'کیفیتِ ممتاز',
    text: 'پارچه‌های طبیعی و دوختِ دقیق؛ ساخته‌شده برای ماندن، نه برای یک فصل.',
  },
  {
    Icon: Truck,
    title: 'ارسالِ سریع و مطمئن',
    text: 'ارسال به سراسرِ ایران — رایگان برای سفارش‌های بالای دو میلیون تومان.',
  },
  {
    Icon: Headset,
    title: 'پشتیبانیِ همیشگی',
    text: 'تیمِ ما هر روزِ هفته پاسخ‌گوی شماست؛ پیش و پس از خرید.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-golddark font-semibold text-xs md:text-sm mb-1.5">چرا ما؟</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal">چرا مردِ ایرانی؟</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {ITEMS.map(({ Icon, title, text }) => (
            <div key={title} className="bg-cream rounded-3xl p-8 text-center border border-transparent hover:border-line transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F0E6D2] text-golddark grid place-items-center">
                <Icon className="w-7 h-7" sw={1.5} />
              </div>
              <h3 className="font-bold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-sub leading-6">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
