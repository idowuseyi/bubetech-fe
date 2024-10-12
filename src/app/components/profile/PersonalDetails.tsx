"use client";
import { Camera, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProfileDetails() {
  const [isSaving, setIsSaving] = useState(false);
  const [invoiceFile, setInvoiceFile] = useState<string>();
  const [selectedInvoiceFile, setSelectedInvoiceFile] = useState(null);

  // Uploading Invoice File logic
  const handleUserFileChange = ({ target: { files } }: any) => {
    const file = files[0];
    console.log(files[0]?.type, "this is the file type");

    if (file) {
      const fileType = files[0].type;
      if (
        fileType === "image/jpg" ||
        fileType === "image/png" ||
        fileType === "image/jpeg"
      ) {
        setInvoiceFile(URL.createObjectURL(files[0]));
        setSelectedInvoiceFile(file);
      }
    }
  };

  return (
    <div>
      <div className="md:w-[700px] mx-auto pt-10 xl:my-10 md:pb-10 bg-white px-6 md:px-10">
        <div>
          <div className="text-primary mb-8  flex items-center justify-between">
            <p className="font-medium">Personal Details</p>
            <div className="bg-gray-300 p-1 rounded-full cursor-pointer">
              <X size={18} />
            </div>
          </div>
        </div>

        {/* ===FORM SECTION === */}
        <form>
          <section className="items-start space-y-6">
            {/* === User File Image ==== */}
            <div className="mt-4">
              <label
                htmlFor="fileInput"
                className="border-[1.3px] border-slate-300 p- flex justify-between tracking-wide cursor-pointer text-[#575D72] h-[100px] w-[100px] rounded-full"
              >
                <div className="flex w-full items-center justify-between gap-2 relative">
                  {invoiceFile ? (
                    <div>
                      <Image
                        src={invoiceFile}
                        alt="user avatar"
                        width={100}
                        height={100}
                        className="rounded-full h-[100px] w-[100px]"
                      />
                    </div>
                  ) : (
                    <p className="w-full flex justify-center">
                      <User size={32} />
                    </p>
                  )}
                  <input
                    type="file"
                    name="user_Image"
                    id="fileInput"
                    accept=".png,  .jpg, .jpeg"
                    className="hidden input-field"
                    onChange={handleUserFileChange}
                  />

                  {invoiceFile && (
                    <div className="absolute border-[1.3px] border-slate-200 rounded-full left-[60px] top-10 mx-auto w-[50px] h-[50px] bg-white flex items-center justify-center">
                      <Camera className="text-[#6FA521]" />
                    </div>
                  )}
                </div>
              </label>
            </div>
            {/* === Full  Name === */}
            <div>
              <label htmlFor="" className="text-sm font-extralight">
                Full Name
              </label>
              <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-md">
                <input
                  className="w-full py-2 focus:outline-none cursor-text bg-transparent text-black"
                  type="text"
                  placeholder="Enter the purpose of creating this group"
                  maxLength={24}
                />
              </div>
            </div>

            <div className="md:flex w-full gap-6">
              {/* === Phone Number === */}
              <div className="w-full">
                <label htmlFor="" className="text-sm font-extralight">
                  Phone Number
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="Enter your local government"
                    maxLength={24}
                  />
                </div>
              </div>

              {/* === Email Input === */}
              <div className="w-full mt-6 md:mt-0">
                <label htmlFor="" className="text-sm font-extralight">
                  Email Address
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="email"
                    placeholder="Enter your ward"
                    maxLength={40}
                  />
                </div>
              </div>
            </div>

            <div className="md:flex w-full gap-6">
              {/* === Date of Birth === */}
              <div className="w-full">
                <label htmlFor="" className="text-sm font-extralight">
                  Date of Birth
                </label>
                <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                  <input
                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                    type="text"
                    placeholder="Enter your cluster name"
                    maxLength={24}
                  />
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

            {/* === Submit Button === */}
            <div className="flex w-full gap-4 max-w-[420px] mx-auto">
              <div className="text-center bg-white text-[#9E9E9E] border-[1.3px]  border-slate-300 rounded-md w-1/2  mt-10 h-12 px-3.5 py-2.5 text-sm font-medium shadow-sm cursor-pointer">
                <span className="text-base font-medium">Discard</span>
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
