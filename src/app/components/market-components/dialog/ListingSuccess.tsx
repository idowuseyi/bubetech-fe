import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import tomato from "@/assets/market-place/tomato.jpg";
import Image from "next/image";
import success from "@/assets/market-place/successLogo.png";
import Link from "next/link";

interface SuccessProps {
  open: boolean;
  onClose: () => void;
}

export default function ListingSuccess({ open, onClose }: SuccessProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="flex flex-col w-11/12 max-w-[450px] rounded-[20px]">
        <div className="flex items-center  justify-center">
          <div className="w-16 2xl:w-[126px]">
            <Image
              src={success}
              alt="success-logo"
              className="w-full h-full object-center"
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="w-full text-center">
            <h2 className="text-base leading-9 font-medium text-[#323232]">
              {" "}
              Listing Successful!
            </h2>
            <p className="text-sm font-extralight text-center">
              Your product has been created and listed on
              the marketplace platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Link
            href={"/market-place"}
            className="rounded-[10px] w-full bg-[#6FA521] text-center text-sm text-white flex items-center justify-center h-12"
          >
            Go to Marketplace
          </Link>
          <button
            type="button"
            className="rounded-[10px] w-full bg-transparent text-center text-sm text-[#6FA521] h-12"
            onClick={onClose}
          >
            Share Receipt
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
