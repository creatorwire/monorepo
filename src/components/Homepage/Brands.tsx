"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Brands() {
  const points = [
    {
      title: "one payment for all your creators",
      caption: "We handle individual payouts for you",
    },
    {
      title: "fewer errors, faster campaigns",
      caption: "Reduce operational costs and time",
    },
    {
      title: "full visibility",
      caption:
        "Real-time tracking of deliverables, payment statuses, and budgets",
    },
    {
      title: "stay compliant and efficient easily",
      caption: "Automated invoicing and clean financial reporting",
    },
  ];
  const router = useRouter();

  return (
    <div className="bg-[#1C1C1C] pt-32 py-12 px-4">
      <div className="flex flex-col gap-4 w-full items-center">
        <h5
          id="brands"
          className="bg-[#8E22EA] py-0.5 px-2.5 uppercase rounded-2xl text-xs md:text-sm font-semibold text-[#FBF7FF] w-fit"
        >
          For Brands
        </h5>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white text-center max-w-2xl">
          Simplify how you manage creator projects and payments – track
          everything in one place
        </h3>
        <p className="text-white text-sm md:text-lg lg:text-xl text-center max-w-[720px]">
          CreatorWire consolidates invoices, automates approvals, and gives
          creators the option to get paid instantly - while you pay on standard
          terms.
        </p>
        <div className="flex justify-center items-center -space-x-[4rem] md:-space-x-[6rem] w-full my-12 mx-auto">
          <Image
            src="/glowup.svg"
            alt=""
            width={0}
            height={0}
            className="w-[11rem] md:w-1/3 md:h-full hover:scale-105 transition-all duration-300 hover:z-10 -rotate-[15deg] mt-10 scale-95"
          />
          <Image
            src="/group-payment.svg"
            alt=""
            width={0}
            height={0}
            className="w-[11rem] md:w-1/3 md:h-full hover:scale-105 transition-all duration-300 hover:z-10 z-5 md:z-0"
          />
          <Image
            src="/campaign.png"
            alt=""
            width={150}
            height={150}
            className="w-[11rem] md:w-1/3 md:h-full hover:scale-105 transition-all duration-300 md:hidden hover:z-10 rotate-[15deg] mt-10 scale-95"
          />
          <Image
            src="/campaign.svg"
            alt=""
            width={0}
            height={0}
            className="w-full md:w-1/3 md:h-full hover:scale-105 transition-all hidden md:block duration-300 hover:z-10 rotate-[15deg] mt-10 scale-95"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-2xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left max-w-[230px] md:max-w-full"
            >
              <img
                src="/checkmark-badge.svg"
                alt="checkmark"
                className="min-w-6 mt-1"
              />
              <p>
                <span className="text-white text-sm md:text-base">
                  {point.caption} –{" "}
                </span>
                <span className="text-sm md:text-base font-semibold text-white">
                  {point.title}
                </span>
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => router.push("/brands-signup-form")}
          className="bg-black-gradient text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-8 w-fit rounded-full shadow-[inset_0_4px_1px_rgba(255,255,255,0.28)] drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition mt-12"
        >
          Sign up as a Brand
        </button>
      </div>
    </div>
  );
}

export default Brands;
