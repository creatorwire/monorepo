"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import greenCheck from "../../../public/green-check.svg";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import ProductInterest from "./ProductInterest";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export interface SocialAccount {
  platform: string;
  handle: string;
}

export interface FormData {
  brandName: string;
  contactName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  numberOfCreators: number;
}

function Waitlist() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Basic Information", "Product Interest"];

  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    contactName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    numberOfCreators: 0,
  });
  const [productInterest, setProductInterest] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const pathname = usePathname();
  const [selectedType, setSelectedType] = useState("brand");

  useEffect(() => {
    if (pathname.includes("/brands-signup-form")) {
      setSelectedType("/brands-signup-form");
    } else if (pathname.includes("/agency-signup-form")) {
      setSelectedType("/agency-signup-form");
    } else if (pathname.includes("/creators-signup-form")) {
      setSelectedType("/creators-signup-form");
    }
  }, [pathname]);

  const handleSubmit = async () => {
    try {
      const { countryCode, phoneNumber, ...rest } = formData;

      const payload = {
        ...rest,
        numberOfCreators: Number(formData.numberOfCreators),
        phoneNumber: `${countryCode}${phoneNumber}`,
        productInterest,
        userType: "Brand",
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/waitlist`,
        payload
      );

      if (res.status === 201) {
        toast.success("Successfully signed up for the waitlist");
        setShowSuccess(true);
      } else {
        toast.error("Something went wrong. Please try again later");
      }
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  const router = useRouter();

  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden lg:block">
        {/* background photo */}
        <Image
          src="/happy-group.jpg"
          alt="happy group"
          fill
          className="object-cover object-top"
          priority
        />

        {/* single seamless gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, #E9A2A2 70%, #C974BB 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 pb-16 px-12 text-white">
          <h3 className="text-xl md:text-2xl font-medium text-white max-w-lg uppercase">
            Simplify how you manage creator PROJECTS and payments – track
            everything in one place
          </h3>
          <p className="text-white text-xs md:text-sm mt-2">
            With CreatorWire, you make one payment for all your creators — we
            handle individual payouts, track deliverables and budgets in real
            time, and provide clean, automated reporting to help you stay
            efficient, compliant, and in control.
          </p>
        </div>
      </div>

      {showSuccess ? (
        <div className="h-screen w-full max-w-xl mx-auto flex-col flex items-center justify-center p-2 md:p-4 gap-4">
          <Link href="/">
            <img
              src="/logo.svg"
              alt=""
              className="w-[165px] py-5 hidden md:block"
            />
            <img
              src="/small-logo.png"
              alt="creatorwire"
              className="md:hidden w-[10rem]"
            />
          </Link>
          <div className="flex items-center gap-0.5 md:gap-3 w-full">
            {steps.map((step, index) => (
              <div key={step} className="flex-1 flex flex-col items-center">
                <div className="flex items-centr justify-between w-full">
                  <span
                    className={`font-medium text-[10px] md:text-xs whitespace-nowrap ${
                      index === currentStep ? "text-black" : "text-[#808080]"
                    }`}
                  >
                    {step}
                  </span>
                  {index <= currentStep && (
                    <Image
                      src={greenCheck}
                      alt="completed"
                      width={16}
                      height={16}
                      className="block"
                    />
                  )}
                </div>

                {/* underline */}
                <div
                  className={`mt-2 h-[3px] w-full rounded-full ${
                    index <= currentStep ? "bg-[#16AF38]" : "bg-gray-200"
                  }`}
                />
              </div>
            ))}
          </div>
          <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl text-center">
            Thanks for signing up
          </h2>
          <p className="text-[#808080] text-base md:text-lg lg:text-xl max-w-[400px] text-center">
            We’ll be in touch soon regarding how we can support your team.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-custom-gradient text-white text-sm md:text-base py-3 px-8 rounded-full shadow-demoShadow drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition mt-4"
          >
            Go back to homepage
          </button>
        </div>
      ) : (
        <div className="w-full h-screen overflow-auto scrollbar-hide">
          <div className="max-w-xl mx-auto flex justify-between items-center w-full px-4">
            <Link href="/">
              <img
                src="/logo.svg"
                alt=""
                className="w-[165px] py-5 hidden md:block"
              />
              <img
                src="/small-logo.png"
                alt="creatorwire"
                className="md:hidden w-[10rem]"
              />
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-[#808080] text-sm">Sign up as</span>
              <select
                value={selectedType}
                onChange={(e) => router.push(e.target.value)}
                className="text-purple-700 px-3 py-1 text-sm appearance-none bg-transparent border-none focus:outline-none focus:ring-0 active:outline-none active:ring-0 pr-8 -ml-4"
              >
                <option value="/brands-signup-form">Brand</option>
                <option value="/agency-signup-form">Agency</option>
                <option value="/creators-signup-form">Creator</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="max-w-xl w-full p-2 md:p-4 mx-auto">
            <h5 className="bg-[#8E22EA] py-1 px-3 uppercase rounded-2xl text-xs font-semibold text-[#FBF7FF] w-fit">
              brands
            </h5>
            <h4 className="my-4 text-[#121212] font-medium text-lg md:text-xl lg:text-2xl uppercase">
              Sign up now
            </h4>

            {/* progress bar */}
            <div className="flex items-center gap-3">
              {steps.map((step, index) => (
                <div key={step} className="flex-1 flex flex-col items-center">
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-medium text-[10px] md:text-xs ${
                        index === currentStep ? "text-black" : "text-[#808080]"
                      }`}
                    >
                      {step}
                    </span>
                    {index <= currentStep - 1 && (
                      <Image
                        src={greenCheck}
                        alt="completed"
                        width={16}
                        height={16}
                        className="block"
                      />
                    )}
                  </div>

                  {/* underline */}
                  <div
                    className={`mt-2 h-[3px] w-full rounded-full ${
                      index <= currentStep - 1 ? "bg-[#16AF38]" : "bg-gray-200"
                    }`}
                  />
                </div>
              ))}
            </div>
            {
              {
                0: <BasicInfo formData={formData} setFormData={setFormData} />,
                1: (
                  <ProductInterest
                    productInterest={productInterest}
                    setProductInterest={setProductInterest}
                  />
                ),
              }[currentStep]
            }
          </div>
          <hr />
          {
            {
              0: (
                <span className="w-full max-w-xl mx-auto flex justify-end p-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-custom-gradient text-white text-xs md:text-sm py-3 px-16 rounded-full shadow-demoShadow drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition"
                  >
                    Next
                  </button>
                </span>
              ),
              1: (
                <div className="flex max-w-xl mx-auto w-full justify-between items-center p-4">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="text-[#8E22EA] font-medium text-xs md:text-sm py-3 px-16"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-custom-gradient text-white text-xs md:text-sm py-3 px-16 rounded-full shadow-demoShadow drop-shadow-[1px_2px_19px_rgba(142,34,234,0.52)] transition"
                  >
                    Next
                  </button>
                </div>
              ),
            }[currentStep]
          }
        </div>
      )}
    </div>
  );
}

export default Waitlist;
