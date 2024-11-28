import React from "react";
import Image from "next/image";
import Link from "next/link";
import drug from "@/assets/drug.png";
import avatar from "@/assets/market-place/avatar.jpg";

export default function PharmacyCard() {
  return (
    // <Link href={`/market-place/`}>
    <div className="w-full md:max-w-[300px] border-[1.3px] border-gray-200 rounded-lg">
      <div className="grid grid-rows-2 max-h-[450px] md:h-[300px]">
        <div className=" rounded-lg">
          <Image
            src={drug}
            width={100}
            height={100}
            alt="drug"
            className="w-full h-full rounded-lg object-fit object-center"
          />
        </div>
        <div className="px-4 py-4">
          <p className="text-base font-bold">Paracetamol</p>
          <p className="text-[#737373] text-xs">150mg + 6 capsules</p>
          <p className="text-[#6FA521] text-sm my-1.5">N 2,000</p>
          <div className="flex gap-3">
            <div>
              <Image
                src={avatar}
                width={100}
                height={100}
                alt="owner image"
                className="mb-3 w-[32px] h-[32px] rounded-full"
              />
            </div>
            <div className="text-[#737373] text-xs">
              <p>Soulmate Pharmacy</p>
              <p>Sokoto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}
