"use client";

import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import X from "../../../public/twitter.svg";
import Telegram from "../../../public/telegram.svg";
import Github from "../../../public/github.svg";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconHover = {
    initial: { backgroundColor: "#000000", scale: 1 },
    whileHover: {
      scale: 1.1,
      backgroundColor: "#1DA1F2",
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="w-full bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={Logo} alt="Blinks Logo" />
            <span className="text-xl font-semibold text-[#123c34]">Blinks</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[#123c34] font-medium">
            <Link href="#features">Features</Link>
            <Link href="#app">App</Link>
            <Link href="/doc">Doc</Link>
            <Link href="#download">Download</Link>
          </div>

          <div className="flex gap-4">
            <motion.div
              variants={iconHover}
              initial="initial"
              whileHover="whileHover"
              className="rounded-full"
            >
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center"
              >
                <Image src={X} alt="X Logo" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ backgroundColor: "#000" }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0088cc",
                transition: { duration: 0.3 },
              }}
              className="rounded-full"
            >
              <Link
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center"
              >
                <Image src={Telegram} alt="Telegram Logo" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ backgroundColor: "#000" }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#333",
                transition: { duration: 0.3 },
              }}
              className="rounded-full"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center"
              >
                <Image src={Github} alt="Github Logo" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="text-center text-gray-500">
          © {currentYear} Blinks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
