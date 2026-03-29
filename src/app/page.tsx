import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import ServicesSection from "./components/services";
import AboutSection from "./components/about";
import ProcessSection from "./components/process";
import WorkSection from "./components/work";
import WaitlistSection from "./components/contact";
import BlockchainsSection from "./components/blockchains";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-auto lg:h-screen px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sky-bg.avif')" }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <BlockchainsSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <WorkSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
