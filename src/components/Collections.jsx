import { collections } from "../data/siteData";

export default function Collections() {
  return (
    <section id="collections" className="bg-canvas py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            مجموعه‌های پوشاک
          </h2>
          <a
            href="#"
            className="text-turquoise font-medium hover:text-navy transition-colors focus-ring rounded hidden sm:inline-block"
          >
            مشاهده‌ی همه‌ی مجموعه‌ها ←
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {collections.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow focus-ring"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-right">
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-navy/60">{item.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
