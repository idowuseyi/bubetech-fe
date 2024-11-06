import { Star } from "@phosphor-icons/react";
import React from "react";

export default function Feedback() {
  return <div className="bg-white rounded-[20px] shadow-sm w-full p-4">
    <div className="w-full flex justify-between items-center">
      <h4 className="font-medium text-xl leading-[30px] text-[#323232]">Customers Feedbacks</h4>
      <p className="text-[#6FA521] text-base cursor-pointer">See all</p>
    </div>
    <div className="flex flex-col mt-8">
      <div className="flex flex-col gap-3 py-2">
        <div className="flex items-center gap-1">
          <Star color="#F4B400" className="" size={16} />
          <Star color="#F4B400" className="" size={16} />
          <Star color="#F4B400" className="" size={16} />
          <Star color="#F4B400" className="" size={16} />
        </div>
        <p className="font-normal text-base text-[#323232]">I love that these tomatoes are organic and sustainably grown. They make a huge difference in my cooking.</p>
        <div className="font-normal text-base text-[#949494]">
          <p>12hrs ago</p>
          <p>James T.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t py-2 border-[#BCBCBC]">
        <div className="flex items-center gap-1">
          <Star color="#F4B400" className="" size={16} />
          <Star color="#F4B400" className="" size={16} />
          <Star color="#F4B400" className="" size={16} />
          <Star color="#F4B400" className="" size={16} />
        </div>
        <p className="font-normal text-base text-[#323232]">The best tomatoes I&apos;ve ever tasted! Fresh, juicy, and perfect for my salads.</p>
        <div className="font-normal text-base text-[#949494]">
          <p>2 days ago</p>
          <p>Sarah M.</p>
        </div>
      </div>
    </div>
  </div>;
}
