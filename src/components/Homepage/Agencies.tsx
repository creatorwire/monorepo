"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Agencies() {
  const points = [
    "Clean, error-free, exportable data  and simplify client reporting",
    "Accelerate campaign execution and deliver results on time, every time",
    "Track deliverables, approvals and payments in one dashboard  –  full visibility",
    "Automate creator payouts and eliminate cashflow strain and manual admin",
  ];
  const router = useRouter();

  return (
    <div className="max-w-screen-2xl mx-auto w-full p-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 my-12 md:my-24">
        {/* TEXT COLUMN */}
        <div className="flex-1 flex flex-col gap-4items-start text-left">
          <h5
            id="agencies"
            className="bg-[#8E22EA] py-0.5 px-2.5 uppercase rounded-2xl text-xs md:text-sm font-semibold text-[#FBF7FF] w-fit"
          >
            For Agencies
          </h5>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-[#121212] max-w-xl mt-2">
            Track deliverables, manage budgets, and pay creators easily
          </h3>
          <p className="text-[#121212] text-sm md:text-lg lg:text-xl max-w-2xl">
            No more chasing for deliverables, floating payments, or manually
            gathering data for client reports
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-xl w-full">
            {points.map((point, index) => (
              <div key={index} className="flex gap-2 items-center">
                <img src="/checkmark-badge.svg" alt="check" />
                <p className="text-[#121212] text-xs md:tex-base">{point}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push("/agency-waitlist")}
            className="bg-custom-gradient text-white text-sm md:text-base py-3 px-8 rounded-full shadow-demoShadow transition w-fit mt-4 md:mt-12"
          >
            Sign up as an Agency
          </button>
        </div>

        {/* IMAGE COLUMN */}
        <div className="max-w-xl">
          <Image
            src="/agency-card.svg"
            alt=""
            width={0}
            height={0}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between md:items-center gap-4">
        <img
          src="/logo.svg"
          alt="creatorwire"
          className="w-[200px] hidden md:block"
        />
        <img
          src="/small-logo.png"
          alt="creatorwire"
          className="md:hidden w-[8rem]"
        />
        {["Contact us", "Privacy policy", "Terms and conditions"].map(
          (tab, i) => (
            <Link
              href="#"
              key={i}
              className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase"
            >
              {tab}
            </Link>
          )
        )}
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase"
          >
            socials
          </Link>
          <img src="/linkedin.svg" alt="" className="w-4 cursor-pointer" />
          <img src="/instagram.svg" alt="" className="w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Agencies;
