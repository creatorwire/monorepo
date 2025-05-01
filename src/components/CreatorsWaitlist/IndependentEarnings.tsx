import React from "react";

const earningOptions = [
  "Less than £250",
  "£250 - £500",
  "£500 - £1,000",
  "£1,000 - £3,000",
  "£3,000 - £5,000",
  "£5,000 - £10,000",
  "£10,000+",
  "I prefer not to disclose",
];

function IndependentEarnings({
  selectedEarning,
  setSelectedEarning,
}: {
  selectedEarning: string;
  setSelectedEarning: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleRadioChange = (type: string) => {
    setSelectedEarning(type);
  };
  return (
    <div className="min-h-[69vh] md:min-h-[60vh] flex-1">
      <h5 className="text-[#121212] mt-3 mb-2 font-medium md:text-lg lg:text-lg">
        How much monthly income do you earn from creating?
      </h5>
      <p className="text-xs italic">
        From content creation, creative entrepreneurship, freelance work & other
        independent income
      </p>
      <div className="space-y-1 mt-3">
        {earningOptions.map((type) => (
          <label
            key={type}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="independentEarnings"
              value={type}
              checked={selectedEarning === type}
              onChange={() => handleRadioChange(type)}
              className="form-radio h-4 w-4 text-purple-600 border-gray-300 focus:ring-0 rounded-full"
            />
            <span className="text-sm text-[#121212]">{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default IndependentEarnings;
