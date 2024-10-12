"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FarmDetails() {
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
            {/* ===  Farm Name === */}
            <div>
              <label htmlFor="" className="text-sm font-extralight">
                Farm Name
              </label>
              <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                <input
                  className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                  type="text"
                  placeholder="Enter the purpose of creating this group"
                  maxLength={40}
                />
              </div>
            </div>

            <div className="md:flex w-full gap-6">
              {/* === Farm Type === */}
              <div className="w-full">
                <label htmlFor="" className="text-sm font-extralight">
                  Farm Type
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                    <option value="">Select an option </option>
                    <option value="">Farm Type one</option>
                    <option value="">Farm Type two</option>
                  </select>
                </div>
              </div>

              {/* === Farm Size === */}
              <div className="w-full mt-6 md:mt-0">
                <label htmlFor="" className="text-sm font-extralight">
                  Farm Size
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="Enter your ward"
                    maxLength={40}
                  />
                </div>
              </div>
            </div>

            {/* ===  Location === */}
            <div>
              <label htmlFor="" className="text-sm font-extralight">
                Location
              </label>
              <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                <input
                  className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                  type="text"
                  placeholder="Enter the purpose of creating this group"
                  maxLength={40}
                />
              </div>
            </div>

            {/* ===  Crops Grown === */}
            <div>
              <label htmlFor="" className="text-sm font-extralight">
                Crops Grown
              </label>
              <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                  <option value="">Select an option </option>
                  <option value="">Crops Grown one</option>
                  <option value="">Crops Grown two</option>
                </select>
              </div>
            </div>

            {/* ===  Livestocks Grown === */}
            <div>
              <label htmlFor="" className="text-sm font-extralight">
                Livestocks Grown
              </label>
              <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                  <option value="">Select an option </option>
                  <option value="">Livestocks Grown one</option>
                  <option value="">Livestocks Grown two</option>
                </select>
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
