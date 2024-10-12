"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LivestockDetails() {
  const [isSaving, setIsSaving] = useState(false);
  return (
    <div>
      <div className="md:w-[700px] mx-auto pt-10 xl:my-10 md:pb-10 bg-white px-6 md:px-10">
        <div>
          <div className="text-primary mb-8  flex items-center justify-between">
            <p className="font-medium">Farm Details</p>
            <div className="bg-gray-300 p-1 rounded-full cursor-pointer">
              <X size={18} />
            </div>
          </div>
        </div>

        {/* ===FORM SECTION === */}
        <form>
          <section className="items-start space-y-6">
            {/* ===  Livestocks Type === */}
            <div>
              <label htmlFor="" className="text-sm font-extralight">
                Livestocks Type
              </label>
              <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                  <option value="">Cow</option>
                  <option value="">Livestock one</option>
                  <option value="">Livestock one</option>
                </select>
              </div>
            </div>

            <div className="md:flex w-full gap-6">
              {/* === Breed === */}
              <div className="w-full">
                <label htmlFor="" className="text-sm font-extralight">
                  Breed
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                    <option value="" className="text-red-800">
                      Mixed Farming (Crops and Livestocks){" "}
                    </option>
                    <option value="">Breed one</option>
                    <option value="">Breed two</option>
                  </select>
                </div>
              </div>

              {/* === Gender === */}
              <div className="w-full mt-6 md:mt-0">
                <label htmlFor="" className="text-sm font-extralight">
                  Gender
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                    <option value="">Select an option</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="md:flex w-full gap-6">
              {/* === Date of Birth  === */}
              <div className="w-full">
                <label htmlFor="" className="text-sm font-extralight">
                  Date of Birth or Age
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="2 years"
                    maxLength={24}
                  />
                </div>
              </div>

              {/* === Identification Number === */}
              <div className="w-full mt-6 md:mt-0">
                <label htmlFor="" className="text-sm font-extralight">
                  Identification Number
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="AE245"
                    maxLength={40}
                  />
                </div>
              </div>
            </div>

            <div className="md:flex w-full gap-6">
              {/* === Color/Markings  === */}
              <div className="w-full">
                <label htmlFor="" className="text-sm font-extralight">
                  Color/Markings
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="White and black"
                    maxLength={24}
                  />
                </div>
              </div>

              {/* === Weight === */}
              <div className="w-full mt-6 md:mt-0">
                <label htmlFor="" className="text-sm font-extralight">
                  Weight
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="64kg"
                    maxLength={40}
                  />
                </div>
              </div>
            </div>

            {/* === Submit Button === */}
            <div className="flex w-full gap-4 max-w-[420px] mx-auto">
              <div className="text-center bg-white text-[#6FA521] border-[1.3px]  border-[#6FA521] rounded-md w-1/2  mt-10 h-12 px-3.5 py-2.5 text-sm font-medium shadow-sm cursor-pointer">
                <span className="text-base font-medium">Previous</span>
              </div>
              <Button
                disabled={isSaving}
                className="bg-[#6FA521] rounded-md mt-10 w-1/2 h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
              >
                <span className="text-base font-medium">Next</span>
              </Button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
