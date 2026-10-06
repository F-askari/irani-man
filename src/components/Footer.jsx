import { Instagram, Send, Twitter } from "lucide-react";
import { footerLinks } from "../data/siteData";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-canvas mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-cream/80 hover:text-gold transition-colors focus-ring rounded"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-canvas pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-extrabold mb-3">نخِ ایرانی</h3>
            <p className="text-cream/70 leading-relaxed max-w-xs">
              پوشاک مردانه با الهام از اصالت ایرانی و طراحی امروزی، برای مردی
              که سادگی را می‌پسندد.
            </p>
          </div>

          <FooterColumn title="فروشگاه" links={footerLinks.shop} />
          <FooterColumn title="درباره‌ی ما" links={footerLinks.about} />
          <FooterColumn title="راهنما" links={footerLinks.help} />
        </div>

        {/* عضویت در خبرنامه */}
        <div className="border border-gold/40 rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-right">
            <h4 className="font-bold text-canvas mb-1">عضویت در خبرنامه</h4>
            <p className="text-cream/70 text-sm">
              از تازه‌ترین مجموعه‌ها و تخفیف‌های نخِ ایرانی باخبر شوید.
            </p>
          </div>
          <form className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              required
              placeholder="ایمیل شما"
              className="h-12 flex-1 sm:w-64 rounded-xl px-4 bg-canvas text-navy placeholder:text-navy/40 focus-ring"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-terracotta text-canvas font-semibold hover:bg-terracotta/90 transition-colors focus-ring"
            >
              عضویت
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-canvas/10">
          <p className="text-cream/60 text-sm">
            © ۱۴۰۴ نخِ ایرانی. همه‌ی حقوق محفوظ است.
          </p>
          <div className="flex gap-3">
            <a
              aria-label="اینستاگرام"
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-canvas/20 hover:bg-canvas/10 transition-colors focus-ring"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              aria-label="تلگرام"
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-canvas/20 hover:bg-canvas/10 transition-colors focus-ring"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              aria-label="توییتر"
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-canvas/20 hover:bg-canvas/10 transition-colors focus-ring"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
