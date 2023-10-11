import React, { useState } from "react";
import CheckBoxComponent from "../UI/checkBox/CheckBox";
import BorderedInput from "../UI/input/bordered/Input";

export default function Left() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  // Function to toggle the filter value
  const toggleFilter = () => {
    setIsFilterActive(!isFilterActive); // Toggle between true and false
  };

  return (
    <div className="min-w-screen max-w-screen md:min-w-[30vw] md:max-w-[30vw] w-full py-24 md:py-6 px-0 md:px-5 h-full md:h-screen bg-[#141414] flex flex-col relative">
      <h1 className="text-8xl font-bold text-white px-4 py-2">EXPLORE</h1>
      <div className=" border-2 border-white "></div>
      <div className="relative bottom-0">
        <br />
        <h1 className="text-5xl font-bold text-white text-start px-4 py-2">
          FILTERS
        </h1>
        <div className=" border-2 border-white w-[300px]"></div>
      </div>
      <div>
        <div className="px-4 rounded-lg my-2">
          <p className="text-5xl font-bold text-white text-start my-2">
            Listing Type
          </p>
          <div className="flex flex-col gap-2 my-6">
            <CheckBoxComponent title="Buy Now" />
            <CheckBoxComponent title="Auction" />
          </div>
        </div>
        <div className="border-2 border-white "></div>
        <div className="p-4 rounded-lg mt-3 my-2">
          <h1 className="text-5xl uppercase font-bold text-white text-start">
            Price
          </h1>
          <div className="flex items-center gap-4 text-[#999999]">
            <h1 className="text-3xl font-bold mt-5">$</h1>
            <BorderedInput placeholder="Minumum" />
            <p className="text-white font-bold text-4xl"> - </p>
            <BorderedInput placeholder="Maximum" />
          </div>
        </div>
        <div className="border-2 border-white "></div>
        <div className="p-4 b rounded-lg mt-3 my-2">
          <h1 className="text-5xl font-bold text-white text-start">
            Verified Seller
          </h1>
          <div>
            <div className="flex flex-col gap-2 mt-10">
              <CheckBoxComponent title="Yes" />
              <CheckBoxComponent title="No" />
            </div>
          </div>
        </div>
        <div className=" border-2 border-white"></div>
      </div>
    </div>
  );
}
