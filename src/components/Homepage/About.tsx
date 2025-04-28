import React from "react";
import { SlideInFromBottom } from "../SlideIn";

const points = [
  {
    title: "Automated contracts and invoicing",
    caption: "No messy admin or manual payment chasing",
  },
  {
    title: "Optional instant payouts",
    caption: "Creators access cash faster without disrupting brand workflows",
  },
  {
    title: "Real-time tracking of deliverables, payments, and budgets",
    caption: "Full visibility at every step",
  },
];

function About() {
  return (
    <div className="px-2 pb-8 bg-white">
      <div className="bg-[#1C1C1C] rounded-2xl max-w-screen-2xl w-full mx-auto relative flex flex-col items-center justify-center min-h-[750px]">
        <div
          id="about-us"
          className="flex flex-col gap-4 items-center max-w-3xl z-20 px-4"
        >
          <h5 className="uppercase text-white font-medium text-sm md:text-base">
            About us
          </h5>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-white">
            Getting paid for independent work is messy — from contracts and
            deliverables to payments and admin
          </h3>
          <p className="text-white md:text-lg lg:text-xl max-w-[600px] text-center">
            CreatorWire simplifies it all with automated invoicing, real-time
            tracking, and optional instant payouts — so content creators,
            creative entrepreneurs and freelancers get paid on time, while
            brands and agencies maintain full visibility and control
          </p>
          <ul className="space-y-3 max-w-xs">
            {points.map((point, index) => (
              <SlideInFromBottom>
                <li
                  key={index}
                  className="flex flex-col items-center text-white text-sm md:text-base text-center"
                >
                  <img src="/checkmark-badge.svg" alt="checkmark" />
                  <h5 className="text-white font-medium text-sm md:text-base">
                    {point.title}
                  </h5>
                  <p className="text-xs md:text-sm text-white">
                    {point.caption}
                  </p>
                </li>
              </SlideInFromBottom>
            ))}
          </ul>
        </div>
        <SlideInFromBottom
          className="hidden lg:block absolute left-0 -bottom-1"
          delay={0}
        >
          <img src="/ava-brooks.svg" alt="" />
        </SlideInFromBottom>

        <SlideInFromBottom
          className="hidden lg:block absolute right-0 bottom-0"
          delay={200}
        >
          <img src="/techware.svg" alt="" />
        </SlideInFromBottom>

        <SlideInFromBottom
          className="hidden lg:block absolute right-0 top-[20%]"
          delay={400}
        >
          <img src="/bendford.svg" alt="" />
        </SlideInFromBottom>
      </div>
    </div>
  );
}

export default About;
