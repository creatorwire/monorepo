import React from "react";
import { FormData } from "./p";
import PhoneInput from "../PhoneInput";

const agencyTypeOptions = [
  "Manage creator campaigns for brands",
  "Manage individual creators / talent",
  "Other (please specify)",
];

const paymentOptions = [
  "Manual bank transfers",
  "Paper check",
  "Paypal",
  "Other (please specify)",
];

function BasicInfo({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const toggleAgencyType = (type: string) => {
    setFormData((prev) => {
      const ct = prev.agencyTypes.includes(type)
        ? prev.agencyTypes.filter((t) => t !== type)
        : [...prev.agencyTypes, type];
      return {
        ...prev,
        agencyTypes: ct,
        otherAgencyText: ct.includes("Other (please specify)")
          ? prev.otherAgencyText
          : "",
      };
    });
  };

  const togglePaymentType = (type: string) => {
    setFormData((prev) => {
      const ct = prev.paymentMethods.includes(type)
        ? prev.paymentMethods.filter((t) => t !== type)
        : [...prev.paymentMethods, type];
      return {
        ...prev,
        paymentMethods: ct,
        otherPaymentText: ct.includes("Other (please specify)")
          ? prev.otherPaymentText
          : "",
      };
    });
  };

  return (
    <>
      <h5 className="text-[#121212] my-3 font-medium md:text-lg lg:text-lg">
        Please enter your details below
      </h5>
      <form className="flex flex-col gap-3 w-full">
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">Agency Name*</h2>
          <input
            placeholder="Agency Name"
            name="agencyName"
            value={formData.agencyName}
            onChange={handleChange}
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
        <div className="space-y-2">
          <div className="space-y-1">
            <h4 className="text-[#344054] font-medium text-sm">Agency Type*</h4>
            <p className="text-[#ADADAD] text-xs">
              Please select all that apply
            </p>
          </div>
          <div className="space-y-1">
            {agencyTypeOptions.map((type) => (
              <label
                key={type}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.agencyTypes.includes(type)}
                  onChange={() => toggleAgencyType(type)}
                  className="form-checkbox h-4 w-4 text-purple-600 border-gray-300 focus:ring-0 rounded"
                />
                <span className="text-sm text-[#121212]">{type}</span>
              </label>
            ))}
            {formData.agencyTypes.includes("Other (please specify)") && (
              <div className="flex justify-end w-full">
                <input
                  type="text"
                  name="otherAgencyText"
                  placeholder="others"
                  value={formData.otherAgencyText}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-[8px] w-[95%]"
                />
              </div>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">Agency Contact Name*</h2>
          <input
            placeholder="Full Name"
            name="agencyContactName"
            value={formData.agencyContactName}
            onChange={handleChange}
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">Email Address*</h2>
          <input
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">Phone Number</h2>
          <PhoneInput formDetails={formData} setFormDetails={setFormData} />
        </div>
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">
            Approximate number of creators managed by your Agency
          </h2>
          <input
            placeholder="Number"
            name="numberOfCreators"
            value={formData.numberOfCreators}
            onChange={handleChange}
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
        <div className="space-y-2">
          <div className="space-y-1">
            <h4 className="text-[#344054] font-medium text-sm">
              How do you currently pay creators?
            </h4>
            <p className="text-[#ADADAD] text-xs">
              Please select all that apply
            </p>
          </div>
          <div className="space-y-1">
            {paymentOptions.map((type) => (
              <label
                key={type}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.paymentMethods.includes(type)}
                  onChange={() => togglePaymentType(type)}
                  className="form-checkbox h-4 w-4 text-purple-600 border-gray-300 focus:ring-0 rounded"
                />
                <span className="text-sm text-[#121212]">{type}</span>
              </label>
            ))}
            {formData.paymentMethods.includes("Other (please specify)") && (
              <div className="flex justify-end w-full">
                <input
                  type="text"
                  name="otherPaymentText"
                  placeholder="others"
                  value={formData.otherPaymentText}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-[8px] w-[95%]"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default BasicInfo;
