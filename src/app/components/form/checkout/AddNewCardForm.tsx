import React, { useState } from 'react'
import Image from 'next/image';
import mastercard from "@/assets/market-place/mastercard.png"
import visa from "@/assets/market-place/visa.png"
import paypal from "@/assets/market-place/paypal.png"
import banktransfer from "@/assets/market-place/bank-transfer.png"

type AddNewCardFormProps = {
    setAddNewCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddNewCardForm({ setAddNewCard }: AddNewCardFormProps) {
    const [selectNewCard, setSelectNewCard] = useState("")
    return (
        <div className='bg-[#FFFFFF] px-6 py-8 rounded-[20px] flex flex-col gap-3 xl:gap-10 h-fit max-h-full'>
            <div className='flex items-center gap-4'>
                <div className={`w-[120px] cursor-pointer p-2 h-[60px] rounded-xl flex items-center justify-center ${selectNewCard === "" ? "border border-[#2D52B2] bg-[#E9EFFF]" : "bg-[#F6F6F6] border-none"} `} onClick={() => setSelectNewCard("")}>
                    <Image src={mastercard} alt="mastercard" className="w-[60px] h-12 object-cover" />
                </div>
                <div className={`w-[120px] cursor-pointer p-2 h-[60px] rounded-xl flex items-center justify-center ${selectNewCard === "visa" ? "border border-[#2D52B2] bg-[#E9EFFF]" : "bg-[#F6F6F6] border-none"} `} onClick={() => setSelectNewCard("visa")}>
                    <Image src={visa} alt="visa" className="" />
                </div>
                <div className={`w-[120px] cursor-pointer p-2 h-[60px] rounded-xl flex items-center justify-center ${selectNewCard === "paypal" ? "border border-[#2D52B2] bg-[#E9EFFF]" : "bg-[#F6F6F6] border-none"} `} onClick={() => setSelectNewCard("paypal")}>
                    <Image src={paypal} alt="paypal" className="" />
                </div>
                <div className={`w-[120px] cursor-pointer p-2 h-[60px] rounded-xl flex items-center justify-center ${selectNewCard === "banktransfer" ? "border border-[#2D52B2] bg-[#E9EFFF]" : "bg-[#F6F6F6] border-none"} `} onClick={() => setSelectNewCard("banktransfer")}>
                    <Image src={banktransfer} alt="banktransfer" className="" />
                </div>

            </div>
            <form className='flex flex-col space-y-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className="text-sm font-extralight">
                        Cardholder Name
                    </label>
                    <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                        <input
                            className="w-full focus:outline-none cursor-text bg-transparent"
                            type="text"
                            placeholder="Enter your placeholder name"
                            maxLength={24}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className="text-sm font-extralight">
                        Card Number
                    </label>
                    <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                        <input
                            className="w-full focus:outline-none cursor-text bg-transparent"
                            type="text"
                            placeholder="Enter your card number"
                            maxLength={24}
                        />
                    </div>
                </div>
                <div className="md:flex w-full gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="" className="text-sm font-extralight">
                            Date
                        </label>
                        <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="12-11-2024"
                                maxLength={24}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="" className="text-sm font-extralight">
                            CVV
                        </label>
                        <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="667"
                                maxLength={24}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button
                        className="bg-[#6FA521] rounded-md max-w-[390px] xl:mt-10 w-full h-12 px-3.5 py-2.5 mt-10 text-sm font-medium text-white shadow-sm"
                        type="button"
                        onClick={() => setAddNewCard(false)}
                    >
                        <span className="text-base font-medium" >save</span>
                    </button>
                </div>

            </form >
        </div>
    )
}
