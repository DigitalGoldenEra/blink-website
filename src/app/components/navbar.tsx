"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full  bg-white sticky">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 text-[#1f3d36] font-medium cursor-pointer">
          <Link href="#features">Features</Link>
          <Link href="#app">App</Link>
        </div>

        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={Logo} alt="Blinks Logo" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[#1f3d36] font-medium cursor-pointer">
          <Link href="/doc">Doc</Link>
          <a href="#download">
            <button className="hover:opacity-70 hover:text-black transition cursor-pointer bg-gray-200 px-5 py-2 rounded-full">
              Download
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-[#1f3d36] font-medium">
          <Link href="#features">Features</Link>
          <Link href="#app">App</Link>
          <Link href="/doc">Doc</Link>
          <Link href="#download">Download</Link>
        </div>
      )}
    </nav>
  );
}
