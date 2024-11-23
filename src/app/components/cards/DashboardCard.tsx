import React from "react";
import { Interface } from "readline";

interface CardProps {
  title: String;
  statusCode: String;
  amount: String;
}

export default function DashboardCard({
  amount,
  statusCode,
  title,
}: CardProps) {
  return (
    <div className="bg-white shadow w-full flex-1 p-4 rounded-sm">
      <div className="flex items-center justify-between ">
        <div className={`rounded-full bg-[${statusCode}] w-10 h-10`}></div>
        <p className="font-medium text-xl text-[#323232] leading-[30px]">{amount}</p>
      </div>
      <p className="mt-4 lg:mb-6 font-normal text-base text-[#323232]">
        {title}
      </p>
    </div>
  );
}
