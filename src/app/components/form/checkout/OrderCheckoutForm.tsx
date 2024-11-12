"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import card from "@/assets/market-place/payment-card.png";
import transfer from "@/assets/market-place/transfer.png";
import { Plus } from '@phosphor-icons/react';

type OrderCheckoutFormProps = {
    setAddNewCard: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OrderCheckoutForm({ setAddNewCard }: OrderCheckoutFormProps) {
    const [selected, setSelected] = useState("");
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='bg-[#FFFFFF] px-6 py-8 rounded-[20px] flex flex-col gap-3 xl:gap-10 h-fit max-h-full'>
                <form className='flex flex-col space-y-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Name
                        </label>
                        <div className="p-3 text-[#898989] bg-[#DCDCDC] border-none rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="Usman Salami"
                                maxLength={24}
                                readOnly
                            />
                        </div>
                    </div >

                    <div className="md:flex w-full gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="" className="text-sm font-extralight">
                                Phone Number 1
                            </label>
                            <div className="p-3 text-[#898989] bg-[#DCDCDC] border-none rounded-md">
                                <input
                                    className="w-full focus:outline-none cursor-text bg-transparent"
                                    type="text"
                                    placeholder="09071779807"
                                    maxLength={24}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="" className="text-sm font-extralight">
                                Phone Number (Optional)
                            </label>
                            <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                                <input
                                    className="w-full focus:outline-none cursor-text bg-transparent"
                                    type="text"
                                    placeholder="Enter your full name"
                                    maxLength={24}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Address
                        </label>
                        <div className="p-3 text-[#898989] bg-[#DCDCDC] border-none rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="8, alimosho road, iyana-ipaja"
                                maxLength={24}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Delivery Address
                        </label>
                        <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="Enter your delivery address"
                                maxLength={24}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Collection Method
                        </label>
                        <div className="p-3  bg-transparent border-[#BABABA] border rounded-md">
                            <select className="w-full focus:outline-none cursor-text custom-placeholder bg-transparent text-[#343F42]/40 font-medium text-base">
                                <option value="">Select an option</option>
                                {/* <option value="Vegetables">Vegetables</option>
                                <option value="Fruits">Fruits</option> */}
                            </select>
                        </div>
                    </div>



                </form >
            </div >
            <div className='mt-2 bg-[#FFFFFF] px-6 py-8 rounded-[20px] flex flex-col'>
                <div className={`flex items-center justify-between w-full ${selected === "card" ? "bg-[#f0f0f0] rounded-md p-2" : ""}`}>
                    <div
                        onClick={() => setSelected("card")}
                        className="flex items-start gap-2 cursor-pointer"
                    >
                        <Image src={card} alt="payment-card" className="w-6 h-4 object-cover object-center" />
                        <div>
                            <h4 className='text-[#323232] text-base font-normal'>Credit/Debit Card</h4>
                            <p className='text-xs leading-[18px]'>Mastercard....1234</p>
                        </div>
                    </div>
                    <button
                        className="cursor-pointer border border-[#6FA521] flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full"
                        onClick={() => setSelected("card")}
                    >
                        <span
                            className={`w-3 h-3 2xl:w-[15px] 2xl:h-[15px] rounded-full ${selected === "card" ? "bg-[#6FA521]" : ""}`}
                        ></span>
                    </button>
                </div>
                <div className='mt-4 border-b border-[#DCDCDC] pb-3 flex items-center gap-1 text-[#6FA521]'
                    onClick={() => setAddNewCard(true)}
                >
                    <Plus size={18} className='cursor-pointer' />
                    <p className='font-medium text-base leading-5 cursor-pointer'>Add a new card</p>
                </div>
                <div className={`mt-4 flex items-center justify-between w-full ${selected === "transfer" ? "bg-[#f0f0f0] rounded-md p-2" : ""}`}>
                    <div
                        onClick={() => setSelected("transfer")}
                        className={`flex items-center gap-2 cursor-pointer $`}
                    >
                        <Image src={transfer} alt="payment-card" className="w-7 h-7" />
                        <p className='text-xs leading-[18px]'>Instant Transfer</p>
                    </div>
                    <button
                        className="cursor-pointer border border-[#6FA521] flex items-center justify-center w-5 h-5 2xl:w-6 2xl:h-6 rounded-full"
                        onClick={() => setSelected("transfer")}
                    >
                        <span
                            className={`w-3 h-3 2xl:w-[15px] 2xl:h-[15px] rounded-full ${selected === "transfer" ? "bg-[#6FA521]" : ""}`}
                        ></span>
                    </button>
                </div>
            </div>

        </div>

    )
}
