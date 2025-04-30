import React from "react";
import { FormData, SocialAccount } from "./p";

const socialPlatforms = [
  "Instagram",
  "YouTube",
  "TikTok",
  "Twitter",
  "Facebook",
  "LinkedIn",
  "Other",
];
const creatorTypeOptions = [
  "Social Media Influencer",
  "UGC Creator",
  "Streamer or Podcaster",
  "Musician, Artist, or Performer",
  "Educator, Expert, or Coach",
  "Freelance Worker",
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
  const toggleCreatorType = (type: string) => {
    setFormData((prev) => {
      const ct = prev.creatorTypes.includes(type)
        ? prev.creatorTypes.filter((t) => t !== type)
        : [...prev.creatorTypes, type];
      return {
        ...prev,
        creatorTypes: ct,
        otherCreatorText: ct.includes("Other (please specify)")
          ? prev.otherCreatorText
          : "",
      };
    });
  };

  const updateSocialAccount = (
    idx: number,
    field: keyof SocialAccount,
    value: string
  ) => {
    setFormData((prev) => {
      const accounts = prev.socialAccounts.map((acc, i) =>
        i === idx ? { ...acc, [field]: value } : acc
      );
      return { ...prev, socialAccounts: accounts };
    });
  };

  const addSocialAccount = () => {
    setFormData((prev) => ({
      ...prev,
      socialAccounts: [...prev.socialAccounts, { platform: "", handle: "" }],
    }));
  };

  // helper: which platforms are already used (non-empty)
  const usedPlatforms = formData.socialAccounts
    .map((acc) => acc.platform)
    .filter((p) => p);

  return (
    <>
      <h5 className="text-[#121212] my-3 font-medium md:text-lg lg:text-lg">
        Please enter your details below
      </h5>
      <form className="flex flex-col gap-3 w-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <h2 className="text-[#344054] text-sm font-medium">First Name*</h2>
            <input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-[#344054] text-sm font-medium">Last Name*</h2>
            <input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
            />
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-[#344054] text-sm font-medium">Email Address*</h2>
          <input
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="p-2 border rounded-[8px] border-[#D0D5DD] bg-white focus-within:ring-0 focus-within:border-[#D0D5DD] focus-within:bg-transparent outline-none w-full"
          />
        </div>
        <div className="space-y-2">
          <div className="space-y-1">
            <h4 className="text-[#344054] font-medium text-sm">
              Creator Type*
            </h4>
            <p className="text-[#ADADAD] text-xs">
              Please select all that apply
            </p>
          </div>
          <div className="space-y-1">
            {creatorTypeOptions.map((type) => (
              <label
                key={type}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.creatorTypes.includes(type)}
                  onChange={() => toggleCreatorType(type)}
                  className="form-checkbox h-4 w-4 text-purple-600 border-gray-300 focus:ring-0 rounded"
                />
                <span className="text-sm text-[#121212]">{type}</span>
              </label>
            ))}
            {formData.creatorTypes.includes("Other (please specify)") && (
              <div className="flex justify-end w-full">
                <input
                  type="text"
                  name="otherCreatorText"
                  placeholder="Specify"
                  value={formData.otherCreatorText}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-[8px] w-[95%]"
                />
              </div>
            )}
          </div>
        </div>

        {/* social accounts */}
        <div className="space-y-2">
          <label className="font-medium text-sm">
            Main Social Media Accounts
          </label>
          <div className="flex flex-col gap-4">
            {formData.socialAccounts.map((acc, idx) => {
              const availablePlatforms = socialPlatforms.filter(
                (p) => p === acc.platform || !usedPlatforms.includes(p)
              );

              return (
                <div key={idx} className="grid grid-cols-2 gap-4">
                  {/* platform */}
                  <div className="w-full">
                    <h4 className="text-[#344054] text-sm font-medium mb-1">
                      Platform
                    </h4>
                    <select
                      name={`social-${idx}-platform`}
                      value={acc.platform}
                      onChange={(e) =>
                        updateSocialAccount(idx, "platform", e.target.value)
                      }
                      className="flex-1 p-2 border border-gray-300 rounded-[8px] outline-none w-full"
                    >
                      {availablePlatforms.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* handle */}
                  <div>
                    <h4 className="text-[#344054] text-sm font-medium mb-1">
                      Handle
                    </h4>
                    <input
                      type="text"
                      name={`social-${idx}-handle`}
                      value={acc.handle}
                      onChange={(e) =>
                        updateSocialAccount(idx, "handle", e.target.value)
                      }
                      placeholder="Handle"
                      className="flex-1 p-2 border border-gray-300 rounded-[8px] outline-none w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={addSocialAccount}
            className="mt-1 text-purple-600 text-sm font-medium"
          >
            Add Another
          </button>
        </div>
      </form>
    </>
  );
}

export default BasicInfo;
