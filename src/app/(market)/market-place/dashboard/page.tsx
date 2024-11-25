"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import plus from "@/assets/plus.png";
import tomotoes from "@/assets/market-place/tomato.jpg";
import chicken from "@/assets/market-place/chickens.png";
import potatoe from "@/assets/market-place/potatoes.png";
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
const Products = [
    {
        id: 0,
        img: tomotoes,
        name: "Tomatoes",
        weight: "12kg",
        quantity: "1 basket of Tomatoes",
        price: "N32,000",
        location: "Kano",
        status: "Not Sold",
        action: "Edit",
    },
    {
        id: 1,
        img: chicken,
        name: "Chicken",
        weight: "1kg",
        quantity: "1 Chicken",
        price: "N32,000",
        location: "Kano",
        status: "Sold",
        action: "Edit",
    },
    {
        id: 2,
        img: potatoe,
        name: "Potatoe",
        weight: "12kg",
        quantity: "1 basket of Potatoes",
        price: "N32,000",
        location: "Sokoto",
        status: "Not Sold",
        action: "Edit",
    },
    {
        id: 3,
        img: tomotoes,
        name: "Tomatoes",
        weight: "12kg",
        quantity: "1 basket of Tomatoes",
        price: "N32,000",
        location: "Kano",
        status: "Not Sold",
        action: "Edit",
    },

]

const ProductTable = ({ products }: any) => {
    const TableHeader = () => (
        <thead className="border-b border-gray-300 bg-[#F5FFE6]">
            <tr className="text-[#323232] font text-sm  text-left">
                <th className="py-2"></th>
                <th className="py-2">Product Name</th>
                <th className="py-2">Weight</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
                <th className="py-2">Location</th>
                <th className="py-2">Status</th>
                <th className="py-2">Action</th>
            </tr>
        </thead>
    );
    const TableRow = ({ item }: any) => {
        console.log(item)

        return (
            < tr className="border-b shadow-md rounded-lg border-gray-200 bg-[#FFFFFF]  text-black" >
                <td className="p-2">
                    <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt="tomato image"
                        className="w-8 h-8 mx-auto rounded-sm   object-fit object-center"
                    />

                </td>
                <td className="p-2">
                    <p
                        className="w-fit px-3 py-1 rounded-full text-base font-normal"
                    >
                        {item.name}
                    </p>

                </td>

                <td>
                    <p
                        className="w-fit px-3 py-1 rounded-full text-base font-normal"
                    >
                        {item.weight}
                    </p>
                </td>
                <td className="py-2 text-base font-normal">{item.quantity}</td>
                <td className="py-2 text-base font-normal">{item.price}</td>
                <td className="py-2 text-base font-normal">{item.location}</td>
                <td className={`py-2 text-base font-normal ${item.status === "Sold" ? "text-[#E1645C]" : "text-[#D5A705]"}`}>{item.status}</td>
                <td className="py-2 text-sm text-[#6FA521] cursor-pointer">{item.action}</td>
            </ tr>)
    }


    return (

        <table className="w-full mb-5 h-fit">
            <TableHeader />
            <tbody >
                {products?.map((item: any) => {
                    console.log(item)
                    return (
                        <TableRow key={item?.id} item={item} />
                    )
                })}
            </tbody>
        </table>
    );
};

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
            <div>
                <ProductTable products={Products} />
            </div>
        </div>
    )
}
