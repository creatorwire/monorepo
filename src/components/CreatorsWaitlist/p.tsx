"use client";
import Image from "next/image";
import React, { useState } from "react";
import greenCheck from "../../../public/green-check.svg";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import ProductInterest from "./ProductInterest";
import IndependentEarnings from "./IndependentEarnings";
import { useRouter } from "next/navigation";

export interface SocialAccount {
  platform: string;
  handle: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  otherCreatorText?: string;
  creatorTypes: string[];
  socialAccounts: SocialAccount[];
}

function Waitlist() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Basic Information",
    "Product Interest",
    "Independent Earnings",
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    creatorTypes: [],
    otherCreatorText: "",
    socialAccounts: [{ platform: "", handle: "" }],
  });
  const [productInterest, setProductInterest] = useState<string[]>([]);
  const [selectedEarning, setSelectedEarning] = React.useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBasicNext = () => {
    const filteredTypes = formData.creatorTypes.filter(
      (t) => t !== "Other (please specify)"
    );
    if (formData.creatorTypes.includes("Other (please specify)")) {
      filteredTypes.push(formData.otherCreatorText || "");
    }
    const { otherCreatorText, ...rest } = formData;
    const payload = { ...rest, creatorTypes: filteredTypes };
    console.log("Payload:", payload);
    setCurrentStep(1);
  };
  const handleProductNext = () => {
    console.log("Product Interest:", productInterest);
    setCurrentStep(2);
  };

  const router = useRouter();

  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden lg:block">
        {/* background photo */}
        <Link href="/">
          <Image
            src="/happy-group.jpg"
            alt="happy group"
            fill
            className="object-cover object-top"
            priority
          />
        </Link>

        {/* single seamless gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, #E9A2A2 70%, #C974BB 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 pb-16 px-12 text-white ">
          <h3 className="text-xl md:text-2xl font-medium text-white max-w-xl uppercase">
            Focus on YOUR WORK, We’ll handle the admin and GET YOU PAID ON TIME
          </h3>
          <p className="text-white text-xs md:text-sm mt-2">
            With CreatorWire, you get automated invoicing, accelerated payment
            options, and full visibility over your workflows - all in one place
          </p>
        </div>
      </div>

      {showSuccess ? (
        <div className="h-screen w-full flex-col flex items-center justify-center p-2 gap-4">
          <img src="/logo.svg" alt="" className="w-[165px] py-5" />
          <div className="flex items-center gap-3 w-full">
            {steps.map((step, index) => (
              <div key={step} className="flex-1 flex flex-col items-center">
                <div className="flex items-centr justify-between w-full">
                  <span
                    className={`font-medium text-[10px] md:text-xs ${
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
            Thanks for signing up <br />
            We’ll be in touch soon regarding how we can support your team.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-custom-gradient text-white text-sm md:text-base py-3 px-8 rounded-full shadow-demoShadow transition mt-4"
          >
            Go back to homepage
          </button>
        </div>
      ) : (
        <div className="w-full max-h-screen overflow-auto scrollbar-hide">
          <div className="max-w-xl mx-auto flex">
            <img src="/logo.svg" alt="" className="w-[165px] py-5" />
          </div>
          <hr />
          <div className="max-w-xl w-full p-2 md:p-4 mx-auto">
            <h5 className="bg-[#8E22EA] py-1 px-3 uppercase rounded-2xl text-xs font-semibold text-[#FBF7FF] w-fit">
              creators
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
            {
              {
                0: <BasicInfo formData={formData} setFormData={setFormData} />,
                1: (
                  <ProductInterest
                    productInterest={productInterest}
                    setProductInterest={setProductInterest}
                  />
                ),
                2: (
                  <IndependentEarnings
                    selectedEarning={selectedEarning}
                    setSelectedEarning={setSelectedEarning}
                  />
                ),
              }[currentStep]
            }
          </div>
          <hr />
          {
            {
              0: (
                <span className="w-full max-w-xl mx-auto flex justify-end py-4">
                  <button
                    onClick={handleBasicNext}
                    className="bg-custom-gradient text-white text-xs md:text-sm py-3 px-16 rounded-full shadow-demoShadow transition"
                  >
                    Next
                  </button>
                </span>
              ),
              1: (
                <div className="flex max-w-xl mx-auto w-full justify-between items-center py-4">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="text-[#8E22EA] font-medium text-xs md:text-sm py-3 px-16"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleProductNext}
                    className="bg-custom-gradient text-white text-xs md:text-sm py-3 px-16 rounded-full shadow-demoShadow transition"
                  >
                    Next
                  </button>
                </div>
              ),
              2: (
                <div className="flex max-w-xl mx-auto w-full justify-between items-center py-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-[#8E22EA] font-medium text-xs md:text-sm py-3 px-16"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setShowSuccess(true)}
                    className="bg-custom-gradient text-white text-xs md:text-sm py-3 px-16 rounded-full shadow-demoShadow transition"
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
