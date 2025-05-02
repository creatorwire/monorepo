"use client";

import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="px-2 md:px-4 py-2 md:py-4 bg-white h-screen">
      <div className="relative bg-gray-400 bg-opacity-20 backdrop-blur-lg flex max-h-[98vh] h-full items-center justify-center rounded-2xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 w-[40vw] aspect-square bg-purple-400 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-0 w-[45vw] aspect-square bg-pink-400 rounded-full filter blur-3xl opacity-60 animate-blob2"></div>
          <div className="absolute bottom-20 left-1/2 w-[35vw] aspect-square bg-blue-300 rounded-full filter blur-3xl opacity-50 animate-blob3"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto h-full w-full flex flex-col items-center justify-center relative">
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-2xl w-full flex flex-col gap-8 2xl:gap-12 items-center max-h-[600px] 2xl:max-h-full overflow-auto scrollbar-hide py-8 md:mb-12 md:-mt-12">
            <img
              src="/logo.svg"
              alt="creatorwire"
              className="mx-auto hidden md:block"
            />
            <img
              src="/small-logo.png"
              alt="creatorwire"
              className="mx-auto md:hidden w-[12rem] -my-12"
            />
            <div className="w-full text-center">
              <h1 className="text-[#121212] font-poppins font-extrabold text-3xl md:text-4xl 2xl:text-6xl leading-tight uppercase tracking-tighter">
                Getting creators paid early or on time, every time — with zero
                admin stress
              </h1>
              <p className="font-medium text-[#626262] md:text-lg lg:text-xl mt-4">
                Fast, reliable payments for content creators, creative
                entrepreneurs and freelancers, with full visibility and simple
                tracking for brands and agencies.
              </p>
            </div>
            <button
              onClick={() => window.scrollTo(0, window.innerHeight)}
              className="bg-custom-gradient text-white text-sm md:text-base py-3 px-8 w-fit rounded-full shadow-demoShadow drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition"
            >
              Get Started
            </button>
          </div>

          {/* Bottom nav pill */}
          <div className="absolute bottom-2 xl:bottom-[3vh] left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-gray-400 shadow-md py-2 px-6 hidden md:flex items-center justify-between min-w-[35%] gap-4">
            <Link href="/">
              <img src="/logoIcon.svg" alt="" />
            </Link>
            {["About Us", "Creators", "Brands", "Agencies"].map((tab, i) => (
              <Link
                href={`#${tab.toLowerCase().replace(" ", "-")}`}
                key={i}
                className="text-[#BFBFBF] font-medium text-sm md:text-base lg:text-lg hover:text-[#121212] whitespace-nowrap"
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
