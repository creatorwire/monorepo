"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Agencies() {
  const points = [
    {
      title: "simplify client reporting",
      caption: "Clean, error-free, exportable data",
    },
    {
      title: "full visibility",
      caption: "Track deliverables, approvals and payments in one dashboard",
    },
    {
      title: "deliver results on time, every time",
      caption: "Accelerate campaign execution",
    },
    {
      title: "eliminate cashflow strain and manual admin",
      caption: "Automate creator payouts",
    },
  ];
  const router = useRouter();

  return (
    <>
      <div className="bg-[#1c1c1c]">
        <div className="max-w-screen-2xl mx-auto w-full p-4 relative text-white">
          <h5
            id="agencies"
            className="bg-[#8E22EA] py-0.5 px-2.5 uppercase rounded-2xl text-xs md:text-sm font-semibold text-[#FBF7FF] w-fit absolute xl:hidden top-6"
          >
            For Agencies
          </h5>
          <div className="max-w-screen-xl w-full mx-auto flex flex-col-reverse xl:flex-row items-center gap-4 md:gap-12 my-12 md:my-24">
            {/* TEXT COLUMN */}
            <div className="flex-1 flex flex-col gap-3 xl:gap-4 items-start text-left pl-2">
              <h5
                id="agencies"
                className="bg-[#8E22EA] py-0.5 px-2.5 uppercase rounded-2xl text-xs md:text-sm font-semibold text-[#FBF7FF] w-fit hidden xl:block"
              >
                For Agencies
              </h5>
              <h3 className="text-xl md:text-2xl lg:text-3xl max-w-xl mt-2">
                Track deliverables, manage budgets, and pay creators easily
              </h3>
              <p className="text-[13px] md:text-lg lg:text-xl">
                No more chasing for deliverables, floating payments, or manually
                gathering data for client reports
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-8 max-w-2xl w-full my-2">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <img
                      src="/checkmark-badge.svg"
                      alt="check"
                      className="min-w-6 "
                    />
                    <p>
                      <span className="text-sm md:text-base">
                        {point.caption} –{" "}
                      </span>
                      <span className="text-sm md:text-base font-semibold">
                        {point.title}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push("/agency-signup-form")}
                className="bg-custom-gradient text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-8 w-fit rounded-full shadow-demoShadow drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition mt-4"
              >
                Sign up as an Agency
              </button>
            </div>

            {/* IMAGE COLUMN */}
            <div className="max-w-lg">
              <Image
                src="/agency-card.svg"
                alt=""
                width={0}
                height={0}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row justify-between md:items-center gap-4">
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
          <Link
            href="mailto:hello@creatorwire.com"
            target="_blank"
            className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase"
          >
            Contact us
          </Link>
          <a
            href="/privacy-policy"
            target="_blank"
            className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase"
          >
            Privacy policy
          </a>
          <a
            href="/cookie-policy"
            target="_blank"
            className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase"
          >
            Cookie policy
          </a>
          <a
            href="/terms"
            target="_blank"
            className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase"
          >
            Terms and conditions
          </a>
          <div className="flex items-center gap-3">
            <p className="text-[#808080] text-xs md:text-sm hover:text-[#121212] uppercase">
              Social Media
            </p>
            <Link
              href="https://www.linkedin.com/company/creator-wire/"
              target="_blank"
            >
              <img src="/linkedin.svg" alt="" className="w-4 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/creator.wire" target="_blank">
              <img src="/instagram.svg" alt="" className="w-4 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agencies;
