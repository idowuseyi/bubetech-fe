"use client";
import { useState } from "react";
import { sortItems, categoryItems, regionItems, weightItems } from "@/lib/linksData";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function MarketPlaceSideBar() {
  const [activeSortIndex, setActiveSortIndex] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeRegionIndex, setActiveRegionIndex] = useState(0);
  const [activeWeightIndex, setActiveWeightIndex] = useState(0);

  return (
    <nav className="grid items-start gap-2">
      <div className="border-b border-[#D9D9D9 p-4 w-full">
        <div className="flex items-center gap-2 py-2 px-5 w-full bg-[#F6F6F6] rounded-[20px]">
          <button className="text-[#858585]">
            <MagnifyingGlass size={18} />
          </button>
          <input
            placeholder="Search"
            className="bg-transparent w-full font-normal outline-none text-sm text-[#858585]"
          />
        </div>
      </div>

      {/* Sort by Section */}
      <div className="border-b border-[#D9D9D9] p-4 2xl:px-5 3xl:py-6 w-full text-[#323232]">
        <h4 className="font-medium text-base">Sort by</h4>
        {sortItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-md px-2 py-1 text-sm font-normal"
            onClick={() => setActiveSortIndex(index)}
          >
            <p className="cursor-pointer">{item.name}</p>
            <button
              className="cursor-pointer border border-[#6FA521] flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full"
            >
              <span
                className={`w-3 h-3 2xl:w-[15px] 2xl:h-[15px] rounded-full ${activeSortIndex === index ? "bg-[#6FA521]" : ""
                  }`}
              ></span>
            </button>
          </div>
        ))}
      </div>

      {/* Category Section */}
      <div className="border-b border-[#D9D9D9] p-4 2xl:px-5 3xl:py-6 w-full text-[#323232]">
        <h4 className="font-medium text-base">Category</h4>
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-md px-2 py-1 text-sm font-normal"
            onClick={() => setActiveCategoryIndex(index)}
          >
            <p className="cursor-pointer">{item.name}</p>
            <button
              className="cursor-pointer border border-[#6FA521] flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full"
            >
              <span
                className={`w-3 h-3 2xl:w-[15px] 2xl:h-[15px] rounded-full ${activeCategoryIndex === index ? "bg-[#6FA521]" : ""
                  }`}
              ></span>
            </button>
          </div>
        ))}
      </div>

      {/* Region Section */}
      <div className="border-b border-[#D9D9D9] p-4 2xl:px-5 3xl:py-6 w-full text-[#323232]">
        <h4 className="font-medium text-base">Region</h4>
        {regionItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-md px-2 py-1 text-sm font-normal"
            onClick={() => setActiveRegionIndex(index)}
          >
            <p className="cursor-pointer">{item.name}</p>
            <button
              className="cursor-pointer border border-[#6FA521] flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full"
            >
              <span
                className={`w-3 h-3 2xl:w-[15px] 2xl:h-[15px] rounded-full ${activeRegionIndex === index ? "bg-[#6FA521]" : ""
                  }`}
              ></span>
            </button>
          </div>
        ))}
      </div>

      {/* Weight Section */}
      <div className="border-b border-[#D9D9D9] p-4 2xl:px-5 3xl:py-6 w-full text-[#323232]">
        <h4 className="font-medium text-base">Weight</h4>
        {weightItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-md px-2 py-1 text-sm font-normal"
            onClick={() => setActiveWeightIndex(index)}
          >
            <p className="cursor-pointer">{item.name}</p>
            <button
              className="cursor-pointer border border-[#6FA521] flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full"
            >
              <span
                className={`w-3 h-3 2xl:w-[15px] 2xl:h-[15px] rounded-full ${activeWeightIndex === index ? "bg-[#6FA521]" : ""
                  }`}
              ></span>
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
