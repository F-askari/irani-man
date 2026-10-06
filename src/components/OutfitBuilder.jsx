import { Plus, Equal } from "lucide-react";
import { outfitPieces, outfitResult } from "../data/siteData";

export default function OutfitBuilder() {
  return (
    <section className="bg-navy py-16 sm:py-20 relative overflow-hidden pattern-shamseh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-right mb-10 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-canvas tracking-tight mb-4">
            یک کمد، ترکیب‌های بی‌نهایت
          </h2>
          <p className="text-cream/90 leading-relaxed">
            با ترکیب چند قطعه‌ی اصلی از نخِ ایرانی، استایل‌های متفاوتی برای
            خودتان بسازید؛ سریع، ساده و همیشه هماهنگ.
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap">
          {outfitPieces.map((piece, idx) => (
            <div key={piece.label} className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
              <div className="w-32 sm:w-40 flex-shrink-0 bg-canvas rounded-2xl p-3 text-center">
                <img
                  src={piece.image}
                  alt={piece.alt}
                  className="w-full h-28 sm:h-32 object-cover rounded-xl mb-2"
                />
                <span className="text-xs sm:text-sm font-medium text-navy">{piece.label}</span>
              </div>
              {idx < outfitPieces.length - 1 ? (
                <Plus className="w-6 h-6 text-gold flex-shrink-0" />
              ) : (
                <Equal className="w-6 h-6 text-gold flex-shrink-0" />
              )}
            </div>
          ))}

          <div className="w-32 sm:w-40 flex-shrink-0 bg-canvas rounded-2xl p-3 text-center">
            <img
              src={outfitResult.image}
              alt={outfitResult.alt}
              className="w-full h-28 sm:h-32 object-cover rounded-xl mb-2"
            />
            <span className="text-xs sm:text-sm font-bold text-terracotta">{outfitResult.label}</span>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <button className="h-14 px-8 rounded-xl bg-terracotta text-canvas font-semibold hover:bg-terracotta/90 transition-colors focus-ring">
            ترکیب استایل من
          </button>
        </div>
      </div>
    </section>
  );
}
