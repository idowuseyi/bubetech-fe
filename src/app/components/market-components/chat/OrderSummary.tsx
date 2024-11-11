"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import tomato from "@/assets/market-place/tomato.jpg";
import AcceptOffer from '../dialog/AcceptOffer';

export default function OrderSummary() {
    const [openAcceptOfferDialog, setOpenAcceptOfferDialog] = useState(false)
    return (
        <>
            <div className='bg-[#FFFFFF] w-full flex-1 md:w-[440px] md:flex-[2] rounded-[20px] p-6'>
                <div className='flex flex-col gap-3 pb-4'>
                    <h4 className='text-base font-medium text-[#323232]'>Order Summary</h4>
                    <div className='flex gap-3'>
                        <div className='w-20 h-20 rounded-lg'>
                            <Image src={tomato} alt="product-image" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className='flex flex-col gap-1 text-[#323232]'>
                            <h4 className='text-base font-medium'>Tomatoes</h4>
                            <p className='text-sm text-[#A1A1A1] leading-[18px]'>Size: 5kg</p>
                            <h4 className='text-base font-medium'>N32,000</h4>
                        </div>
                    </div>
                    <button className='border  border-[#767676] mt-14 rounded-[10px] w-full text-center text-sm text-[#767676] h-12' onClick={() => setOpenAcceptOfferDialog(true)}>Accept Offer</button>
                </div>

            </div>
            <AcceptOffer open={openAcceptOfferDialog}
                onClose={() => setOpenAcceptOfferDialog(false)} />
        </>
    )
}
