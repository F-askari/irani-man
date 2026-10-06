export default function BrandStory() {
  return (
    <section id="story" className="bg-canvas py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
            alt="بافت طبیعی پارچه و گیاه در فضای روشن، نماد انتخاب آگاهانه مواد اولیه"
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/70 via-navy/20 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-md px-6 sm:px-12 text-right text-canvas">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                انتخابی آگاهانه، ماندگارتر
              </h2>
              <p className="leading-relaxed mb-6 text-canvas/90">
                ما پارچه‌ها را با دقت انتخاب می‌کنیم و لباس‌هایی می‌دوزیم که
                سال‌ها همراه شما بمانند؛ کیفیتی که در هر بار پوشیدن حس می‌شود.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold border-b-2 border-gold text-canvas hover:text-gold transition-colors focus-ring"
              >
                داستان ما را بخوانید
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
