export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* متن - سمت راست در RTL */}
          <div className="order-1 text-right">
            <span className="inline-block text-terracotta font-semibold mb-4 text-sm tracking-wide">
              کپسول پوشاک مردانه
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-navy leading-[1.1] tracking-tight mb-6">
              سادگی، بافت
              <br />و اصالت
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed mb-8 max-w-md">
              پوشاک مردانه‌ی سبک و خوش‌دوخت، برای هر روز
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="h-14 px-8 flex items-center justify-center rounded-xl bg-terracotta text-canvas font-semibold hover:bg-terracotta/90 transition-colors focus-ring"
              >
                مشاهده‌ی مجموعه
              </a>
              <a
                href="#essentials"
                className="h-14 px-8 flex items-center justify-center rounded-xl border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-canvas transition-colors focus-ring"
              >
                کشف محصولات
              </a>
            </div>
          </div>

          {/* تصویر اصلی - بدون کراپ، با حفظ نسبت تصویر */}
          <div className="order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-cream/30 p-3 pattern-shamseh-light">
              <img
                src="https://media.base44.com/images/public/6ac3b3d1648ca3ade2255353/cecb2be5a_MinimalTexturedShirtsforMen_LightweightCasualSummerShirtsCollection.jpg"
                alt="مجموعه پیراهن‌های بافت‌دار مردانه با رنگ‌های متنوع، سبک و خوش‌دوخت"
                className="w-full h-auto rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
