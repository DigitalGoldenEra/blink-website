import Navbar from "./components/navbar";
import Image from "next/image";
import Onboarding from "../../public/Onboarding.svg";
import Playstore from "../../public/playstoreicon.svg";
import Apple from "../../public/appleicon.svg";
import Coin from "../../public/coinicon.svg";
import NFC from "../../public/nfcicon.svg";
import Footer from "./components/footer";
export default function Home() {

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // sequential animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div className="">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A4B4A] leading-tight">
                TAP TO PAY <br /> ANYWHERE.
              </h1>

              <p className="text-gray-600 text-lg">
                Blinks is a payment app built on Stellar that lets you tap or
                scan to pay using stable coins.
              </p>

              <button className="flex items-center justify-center lg:justify-start gap-3 bg-gray-200 px-6 py-3 rounded-full w-fit mx-auto lg:mx-0 hover:scale-105 transition cursor-pointer">
                <Image src={Playstore} alt="Play Store" className="w-6 h-6" />
                <span className="font-medium text-gray-700">Play Store</span>
              </button>
            </div>

            <div className="flex justify-center">
              <Image
                src={Onboarding}
                alt="Blinks App"
                className="w-[280px] md:w-[350px] lg:w-[400px] object-contain"
              />
            </div>

            <div className="space-y-6 leading-tight lg:text-left ">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A4B4A] ">
                ACCEPT CRYPTO, GET PAID IN FIAT.
              </h1>

              <p className="text-gray-600 text-lg">
                Anyone can accept payments. Anyone can send them. No banks. No
                cards. No volatility.
              </p>

              <button className="flex items-center justify-center lg:justify-end gap-3 bg-gray-200 px-6 py-3 rounded-full w-fit mx-auto lg:ml-auto hover:scale-105 transition cursor-pointer">
                <Image src={Apple} alt="Apple Store" className="w-6 h-6" />
                <span className="font-medium text-gray-700">Apple Store</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="features" className="w-full bg-[#F5F5F5] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center">
            <Image
              src={Coin}
              alt="Crypto Icon"
              className="w-24 md:w-52 object-contain"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1c4a43] mb-6">
            A challenge we all face
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Crypto is global, but spending it in the real world is still
            difficult. Traditional payment systems rely on banks, cards, and
            closed ecosystems. Merchants face volatility risk. Users face
            complexity and wallet address errors.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="app" className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-center">
              <Image
                src={NFC}
                alt="NFC Payment Technology"
                className="w-[320px] md:w-[280px] lg:w-[320px] object-contain"
              />
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c4a43]">
                The Blink Solution
              </h2>

              <ul className="space-y-5 text-gray-700 text-lg md:text-xl">
                <li className="flex items-start justify-center lg:justify-start gap-4">
                  <span className="w-3 h-3 bg-[#1c4a43] rounded-full mt-2"></span>
                  <span>BLINKS removes the friction.</span>
                </li>

                <li className="flex items-start justify-center lg:justify-start gap-4">
                  <span className="w-3 h-3 bg-[#1c4a43] rounded-full mt-2"></span>
                  <span>Every user gets a unique wallet.</span>
                </li>

                <li className="flex items-start justify-center lg:justify-start gap-4">
                  <span className="w-3 h-3 bg-[#1c4a43] rounded-full mt-2"></span>
                  <span>Every user can accept payments.</span>
                </li>

                <li className="flex items-start justify-center lg:justify-start gap-4">
                  <span className="w-3 h-3 bg-[#1c4a43] rounded-full mt-2"></span>
                  <span>All payments settle instantly in local currency.</span>
                </li>

                <li className="flex items-start justify-center lg:justify-start gap-4 pl-0">
                  <span className="w-3 h-3 bg-[#1c4a43] rounded-full mt-2"></span>
                  <span>
                    Each wallet provides a secure backup option for recovery.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* use blinks section */}
      <section id="download" className="w-full bg-[#74D88A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#123c34]">
            Use Blinks.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Play Store */}
            <button className="flex items-center gap-4 bg-[#66C97D] hover:scale-105 transition px-8 py-4 rounded-full cursor-pointer">
              <Image src={Playstore} alt="Play Store" className="w-8 h-8" />
              <span className="font-semibold text-[#123c34] text-lg">
                Play Store
              </span>
            </button>

            {/* Apple Store */}
            <button className="cursor-pointer flex items-center gap-4 bg-[#66C97D] hover:scale-105 transition px-8 py-4 rounded-full">
              <Image
                src={Apple}
                alt="Apple Store"
                className="w-8 h-8"
              />
              <span className="font-semibold text-[#123c34] text-lg">
                Apple Store
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
