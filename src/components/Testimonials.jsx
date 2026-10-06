import { useRef } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { testimonials } from "../data/siteData";

export default function Testimonials() {
  const scrollerRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * -1, behavior: "smooth" });
  };

  return (
    <section className="bg-canvas py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            مشتریان ما چه می‌گویند؟
          </h2>
          <div className="hidden sm:flex gap-2">
            <button
              aria-label="نظر قبلی"
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-navy/20 hover:bg-navy/5 transition-colors focus-ring"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
            <button
              aria-label="نظر بعدی"
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-navy/20 hover:bg-navy/5 transition-colors focus-ring"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="snap-start flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[31%] bg-white rounded-2xl p-6 text-right shadow-sm"
            >
              <div className="flex gap-1 mb-3 justify-end">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? "text-gold fill-gold" : "text-navy/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-navy/80 leading-relaxed mb-4">«{t.text}»</p>
              <span className="font-semibold text-navy">{t.name}</span>
            </div>
          ))}
        </div>

        <div className="flex sm:hidden justify-center gap-2 mt-6">
          <button
            aria-label="نظر قبلی"
            onClick={() => scrollByCard(1)}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-navy/20 hover:bg-navy/5 transition-colors focus-ring"
          >
            <ChevronRight className="w-5 h-5 text-navy" />
          </button>
          <button
            aria-label="نظر بعدی"
            onClick={() => scrollByCard(-1)}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-navy/20 hover:bg-navy/5 transition-colors focus-ring"
          >
            <ChevronLeft className="w-5 h-5 text-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}
