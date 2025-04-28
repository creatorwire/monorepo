import React from "react";
import { FormData } from "./p";
import PhoneInput from "../PhoneInput";

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

  return (
    <>
      <h5 className="text-[#121212] my-3 font-medium md:text-lg lg:text-lg">
        Please enter your details below
      </h5>
      <form className="flex flex-col gap-3 w-full">
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">Brand Name*</h2>
          <input
            placeholder="Brand Name"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm">Contact Name*</h2>
          <input
            placeholder="Full Name"
            name="contactName"
            value={formData.contactName}
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
            placeholder="Number of creators"
            name="numberOfCreators"
            value={formData.numberOfCreators}
            onChange={handleChange}
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
      </form>
    </>
  );
}

export default BasicInfo;
