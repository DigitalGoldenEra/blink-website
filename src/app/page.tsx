import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import FeaturesSection from "./components/features-drift";
import FrictionSection from "./components/friction";
import ChainsSection from "./components/chains";
import AudienceSection from "./components/audience";
import Marquee from "./components/marquee";
import FaqSection from "./components/faq";
import DownloadSection from "./components/download";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6E4CF]">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <FrictionSection />
      <ChainsSection />
      <AudienceSection />
      <Marquee />
      <FaqSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
