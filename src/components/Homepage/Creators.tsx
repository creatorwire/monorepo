"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Creators() {
  const router = useRouter();

  return (
    <div className="relative h-screen">
      <Image
        src="/happy-group.jpg"
        alt="happy group"
        fill
        className="object-cover object-center h-full"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, #1C1C1C90 50%, #1C1C1C 70%)",
        }}
      />
      <div id="creators" className="absolute inset-x-0 bottom-0 text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 py-12 px-4 md:px-12 lg:px-24">
          <h5 className="bg-[#8E22EA] py-0.5 px-2.5 uppercase rounded-2xl text-xs md:text-sm font-semibold text-[#FBF7FF] w-fit">
            For creators
          </h5>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white max-w-2xl">
            Focus on your work. We’ll handle the admin and get you paid on time.
          </h3>
          <p className="text-white text-sm md:text-lg lg:text-xl max-w-2xl">
            No more chasing payments, waiting months for cash, or drowning in
            paperwork.
          </p>
          <div className="max-w-2xl grid grid-cols-1 gap-y-1 md:grid-cols-3">
            <div className="flex gap-2 items-center">
              <img src="/checkmark-badge.svg" alt="check" />
              <p className="text-white text-xs md:tex-base">
                Automated contracts and invoicing – no more manual admin
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/checkmark-badge.svg" alt="check" />
              <p className="text-white text-xs md:tex-base">
                Track your brand deals and payments easily – full visibility in
                one place
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/checkmark-badge.svg" alt="check" />
              <p className="text-white text-xs md:tex-base">
                Optional instant payouts once you deliver content – cash when
                you need it
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push("/creator-waitlist")}
            className="bg-custom-gradient text-white text-sm md:text-base py-3 px-8 w-fit rounded-full shadow-demoShadow transition mt-4"
          >
            Sign up as a Creator
          </button>
        </div>
      </div>
    </div>
  );
}

export default Creators;
