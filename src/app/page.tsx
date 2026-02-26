import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import ServicesSection from "./components/services";
import AboutSection from "./components/about";
import ProcessSection from "./components/process";
import WorkSection from "./components/work";
import ContactSection from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="hero h-auto lg:h-screen px-4">
        <Navbar />
        <HeroSection />
      </div>
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
