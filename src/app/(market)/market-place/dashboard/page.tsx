"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import plus from "@/assets/plus.png";
import { CaretLeft, MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import DashboardCard from '@/app/components/cards/DashboardCard';


const CardData = [
    {
        id: 0,
        title: "Active listings",
        amount: "5",
        statusCode: "#F9EDFF"
    },
    {
        id: 1,
        title: "Inactive listings",
        amount: "2",
        statusCode: "#E2F8FF"
    },
    {
        id: 2,
        title: "Sales made from listings",
        amount: "NGN720,000",
        statusCode: "#F9EDFF"
    },
    {
        id: 3,
        title: "Review",
        amount: "4",
        statusCode: "#FBD5E1"
    }
]

export default function Page() {
    const router = useRouter();
    const [openCreateOfferDialog, setOpenCreateOfferDialog] = useState(false)
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false)

    const handleGoBack = () => {
        router.back();
    };
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className="flex items-center justify-between mb-4 min-h-14">
                <div className='flex items-center gap-2' onClick={handleGoBack}>
                    <CaretLeft size={20} className='cursor-pointer' />
                    <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px] font-medium'>Dashboard</h2>
                </div>
                <button
                    className="bg-[#6FA521] rounded-[10px] text-white text-center flex items-center gap-1 py-3 2xl:py-4 px-4 2lx:px-8"
                // onClick={() => setOpenListingDialog(true)}
                >
                    <Image
                        src={plus}
                        width={100}
                        height={100}
                        alt="tomato image"
                        className="w-4 h-4  object-fit object-center"
                    />
                    New Listing
                </button>
            </div>
            <div className='w-full grid grid-cols-2 md:flex md:flex-row items-center gap-4 lg:gap-6'>
                {CardData.map((i) => {
                    return (
                        <DashboardCard key={i.id} statusCode={i.statusCode} title={i.title} amount={i.amount} />)
                })}
            </div>
            <div className="flex items-center mt-5 justify-between mb-4 min-h-14">
                <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-2xl font-medium'>Product List</h2>
                <div className="flex items-center bg-[#FFFFFF] border py-1 sm:h-[45px] px-2 sm:p-2 rounded-[20px] gap-2 w-[546px]">
                    <MagnifyingGlass size={24} className="text-[#B0B0B0] w-6 h-6" />
                    <input
                        placeholder='Search'
                        className="placeholder:text-[#B0B0B0] font-normal w-full
           bg-transparent outline-none border-none text-base leading-[22.4px]"
                    />

                </div>
            </div>
        </div>
    )
}
