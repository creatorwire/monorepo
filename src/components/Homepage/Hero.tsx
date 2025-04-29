"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="p-4 bg-white h-screen">
      <div className="relative bg-gray-400 bg-opacity-20 backdrop-blur-lg flex max-h-[98vh] h-full items-center justify-center rounded-2xl overflow-hidden">
        {/* Animated blobs - moved outside content container */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-400 rounded-full filter blur-3xl opacity-60 animate-blob2"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-50 animate-blob3"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto h-full w-full flex flex-col items-center justify-center relative">
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-2xl w-full flex flex-col justify-between items-center max-h-[550px] md:max-h-[700px] h-full py-12 md:mb-12">
            <img src="/logo.svg" alt="creatorwire" className="mx-auto" />
            <div className="w-full text-center">
              <h1 className="text-[#121212] font-poppins font-extrabold text-3xl md:text-4xl lg:text-6xl uppercase tracking-tighter">
                Getting creators paid early or on time, every time — with zero
                admin stress
              </h1>
              <p className="mt-4 font-medium text-[#626262] md:text-lg lg:text-xl">
                Fast, reliable payments for content creators, creative
                entrepreneurs and freelancers, with full visibility and simple
                tracking for brands and agencies.
              </p>
            </div>
            <button
              onClick={() => router.push("/creator-waitlist")}
              className="bg-custom-gradient text-white text-sm md:text-base py-3 px-8 w-fit rounded-full shadow-demoShadow transition"
            >
              Get Started
            </button>
          </div>

          {/* Bottom nav pill */}
          <div className="absolute bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-gray-400 shadow-md py-2 px-6 hidden md:flex items-center gap-4">
            <Link href="/">
              <img src="/logoIcon.svg" alt="" />
            </Link>
            {["About Us", "Creators", "Brands", "Agencies"].map((tab, i) => (
              <Link
                href={`#${tab.toLowerCase().replace(" ", "-")}`}
                key={i}
                className="text-[#BFBFBF] font-medium text-sm md:text-base lg:text-lg hover:text-[#121212]"
              >
                {tab}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
