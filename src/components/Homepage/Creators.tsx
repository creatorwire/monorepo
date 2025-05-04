"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Creators() {
  const router = useRouter();

  return (
    <div id="creators" className="relative h-screen">
      <Image
        src="/creators.jpg"
        alt="happy group"
        fill
        className="object-cover object-center h-full"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1C90] to-[#1C1C1C] sm:from-[20%] sm:via-[40%] sm:to-[70%] md:from-[60%] md:via-[65%] md:to-[70%]" />
      <div className="absolute inset-x-0 -bottom-6 md:bottom-0 lg:bottom-3 text-white">
        <div className="flex flex-col gap-4 md:gap-8 pb-12 px-4 md:px-12 lg:px-24">
          <h5 className="bg-[#8E22EA] py-0.5 px-2.5 uppercase rounded-2xl text-xs md:text-sm font-semibold text-[#FBF7FF] w-fit">
            For creators
          </h5>
          <h3 className="text-xl md:text-2xl lg:text-3xl">
            Focus on your work. We’ll handle the admin and get you paid on time.
          </h3>
          <p className="text-sm md:text-lg lg:text-xl">
            No more chasing payments, waiting months for cash, or drowning in
            paperwork.
          </p>
          <div className="max-w-6xl grid grid-cols-1 gap-y-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <div className="flex gap-2 items-center">
              <img src="/checkmark-badge.svg" alt="check" className="min-w-6" />
              <p className="text-sm md:text-base">
                Automated contracts and invoicing –{" "}
                <span className="font-medium">no more manual admin</span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/checkmark-badge.svg" alt="check" className="min-w-6" />
              <p className="text-sm md:text-base">
                Track your brand deals and payments easily –{" "}
                <span className="font-medium">
                  full visibility in one place
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/checkmark-badge.svg" alt="check" className="min-w-6" />
              <p className="text-sm md:text-base">
                Optional instant payouts once you deliver content –{" "}
                <span className="font-medium">cash when you need it</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push("/creators-signup-form")}
            className="bg-custom-gradient text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-8 w-fit self-center md:self-auto rounded-full shadow-demoShadow drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition mt-4"
          >
            Sign up as a Creator
          </button>
        </div>
      </div>
    </div>
  );
}

export default Creators;
