"use client";
import React, { useState, useEffect } from "react";

const productInterestOptions = [
  "Pay all creators with one invoice (we handle the split payouts)",
  "Let creators get paid instantly (we front the funds)",
  "Track payment status for every creator in real time",
  "Track deliverables and deadlines across all campaigns",
  "View all creator activity in one dashboard",
  "Monitor campaign budgets and remaining spend",
  "Get automatic reminders for deadlines and deliverables",
  "Receive one consolidated invoice for all creators",
  "Download clean, finance-ready tax and payment reports",
  "Auto-match creator invoices to payments and campaigns",
  "Reduce manual admin across legal, ops, and finance",
  "Other (please specify)",
];

function ProductInterest({
  productInterest,
  setProductInterest,
}: {
  productInterest: string[];
  setProductInterest: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [otherText, setOtherText] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  // Sync checkbox state with productInterest
  useEffect(() => {
    const hasOtherEntry = productInterest.some(
      (item) => !productInterestOptions.includes(item)
    );
    setIsOtherSelected(hasOtherEntry);

    // Find and set current other text
    const currentOther = productInterest.find(
      (item) => !productInterestOptions.includes(item)
    );
    setOtherText(currentOther || "");
  }, [productInterest]);

  const handleCheckboxChange = (type: string) => {
    if (type === "Other (please specify)") {
      if (!isOtherSelected) {
        setProductInterest((prev) => [...prev, ""]);
      } else {
        setProductInterest((prev) =>
          prev.filter((item) => productInterestOptions.includes(item))
        );
      }
    } else {
      setProductInterest((prev) =>
        prev.includes(type)
          ? prev.filter((item) => item !== type)
          : [...prev, type]
      );
    }
  };

  const handleOtherTextChange = (value: string) => {
    setOtherText(value);
    // Update the other entry in productInterest
    setProductInterest((prev) => {
      const baseItems = prev.filter((item) =>
        productInterestOptions.includes(item)
      );
      return value ? [...baseItems, value] : baseItems;
    });
  };

  return (
    <div className="min-h-[60vh] flex-1">
      <h5 className="text-[#121212] mt-3 mb-2 font-medium md:text-lg lg:text-lg">
        Product Interest
      </h5>
      <p className="text-[#ADADAD] text-xs">Please select all that apply</p>

      <div className="space-y-1 mt-3">
        {productInterestOptions.map((type) => (
          <label
            key={type}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={
                type === "Other (please specify)"
                  ? isOtherSelected
                  : productInterest.includes(type)
              }
              onChange={() => handleCheckboxChange(type)}
              className="form-checkbox h-4 w-4 text-purple-600 border-gray-300 focus:ring-0 rounded"
            />
            <span className="text-sm text-[#121212]">{type}</span>
          </label>
        ))}

        {isOtherSelected && (
          <div className="flex justify-end w-full mt-2">
            <input
              type="text"
              placeholder="Specify"
              value={otherText}
              onChange={(e) => handleOtherTextChange(e.target.value)}
              className="p-2 border border-gray-300 rounded-[8px] w-[95%] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductInterest;
