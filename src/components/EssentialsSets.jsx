import { essentials } from "../data/siteData";

export default function EssentialsSets() {
  return (
    <section id="essentials" className="bg-canvas py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
        {/* ضروریات کمد */}
        <div className="bg-white rounded-2xl p-6 sm:p-8">
          <div className="flex items-end justify-between mb-6">
            <h3 className="text-xl font-extrabold text-navy">ضروریات کمد</h3>
            <a href="#" className="text-sm text-turquoise font-medium hover:text-navy focus-ring rounded">
              مشاهده‌ی همه
            </a>
          </div>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {essentials.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group text-center focus-ring rounded-xl"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-canvas mb-2">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-navy/70">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* خرید ست، انتخاب هوشمندانه */}
        <div id="sets" className="relative bg-turquoise rounded-2xl p-6 sm:p-8 overflow-hidden text-right">
          <span className="absolute top-6 left-6 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full">
            ۲۰٪ تخفیف
          </span>
          <h3 className="text-xl font-extrabold text-canvas mb-3">
            خرید ست، انتخاب هوشمندانه
          </h3>
          <p className="text-canvas/90 leading-relaxed mb-6 max-w-sm">
            ست‌های آماده و باندل‌های پیشنهادی نخِ ایرانی را ببینید؛ ترکیب‌هایی
            که از قبل برایتان هماهنگ شده‌اند، با قیمتی مناسب‌تر.
          </p>
          <a
            href="#"
            className="inline-flex h-12 px-6 items-center rounded-xl bg-canvas text-navy font-semibold hover:bg-cream transition-colors focus-ring"
          >
            مشاهده‌ی ست‌ها
          </a>
        </div>
      </div>
    </section>
  );
}
