import { LanguageProvider } from "./context/LanguageContext";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream">
        <Intro />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <WhyUs />
          <Reviews />
          <Visit />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}