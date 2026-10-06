import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import OutfitBuilder from "./components/OutfitBuilder";
import EssentialsSets from "./components/EssentialsSets";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-vazir" dir="rtl">
      <Navbar />
      <Hero />
      <Collections />
      <OutfitBuilder />
      <EssentialsSets />
      <BrandStory />
      <Testimonials />
      <Footer />
    </div>
  );
}
