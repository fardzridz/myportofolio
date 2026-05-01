"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
      {/* KIRI: Logo */}
      <div className="pointer-events-auto">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* KANAN: Tulisan RIDZ */}
      <div className="text-xl font-bold tracking-tighter pointer-events-auto">
        {siteConfig.personal.shortName}
      </div>
    </nav>
  );
}
