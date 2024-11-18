"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import tomato from "@/assets/market-place/tomato.jpg";
import { Minus, Plus } from '@phosphor-icons/react';
import Pin from '../dialog/Pin';
import Success from '../dialog/Success';

export default function CheckoutSummary() {
    const [openPinDialog, setOpenPinDialog] = useState(false)
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false)
    const [quantity, setQuantity] = useState(1);
    const pricePerUnit = 32000;
    const shippingFee = 3500;

    const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrease = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));

    const subtotal = quantity * pricePerUnit;
    const totalFee = subtotal + shippingFee;
    return (
        <>
            <div>
                <div className='bg-[#FFFFFF] w-full flex-1 md:w-[440px] md:flex-[2] rounded-[20px]'>
                    <div className='flex flex-col gap-3 p-6 border-b border-[#DCDCDC]'>
                        <h4 className='text-base font-medium text-[#323232]'>Order Summary</h4>
                        <div className='flex items-end justify-between'>
                            <div className='flex gap-3'>
                                <div className='w-20 h-20 rounded-lg'>
                                    <Image src={tomato} alt="product-image" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className='flex flex-col gap-1 text-[#323232]'>
                                    <h4 className='text-base font-medium'>Tomatoes</h4>
                                    <p className='text-sm text-[#A1A1A1] leading-[18px]'>Size: 5kg</p>
                                    <h4 className='text-base font-medium'>N{pricePerUnit.toLocaleString()}</h4>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 my-2'>
                                <div className='cursor-pointer w-7 h-7 border border-[#B8B8B8] rounded-full flex items-center justify-center' onClick={handleDecrease}>
                                    <Minus className='' />

                                </div>
                                <p>{quantity}</p>
                                <div className='cursor-pointer w-7 h-7 border border-[#6FA521] rounded-full flex items-center justify-center' onClick={handleIncrease}>
                                    <Plus className='text-[#6FA521]' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-4 border-b border-[#DCDCDC] text-[#323232] font-normal text-base">
                        <div className='flex items-center justify-between'>
                            <p>Subtotal</p>
                            <p>N{subtotal.toLocaleString()}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Shipping Fee</p>
                            <p>N{shippingFee.toLocaleString()}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Total Fee</p>
                            <p>N{totalFee.toLocaleString()}</p>
                        </div>

                    </div>
                    <div className="px-6 py-4 border-b border-[#DCDCDC] text-[#323232] font-normal text-base">
                        <div className='flex items-center justify-between'>
                            <p>Name</p>
                            <p>Habeeb Jimoh</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Address</p>
                            <p>8, alimosho road, iyana-ipaja</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Phone Number</p>
                            <p>+2348123456789</p>
                        </div>

                    </div>
                    <div className='p-6'>
                        <button className='rounded-[10px] w-full bg-[#6FA521] text-center text-sm text-white h-12'
                            onClick={() => setOpenPinDialog(true)}
                        >Proceed</button>
                    </div>

                </div>
            </div >
            <Pin
                open={openPinDialog}
                setOpenSuccessDialog={setOpenSuccessDialog}
                onClose={() => setOpenPinDialog(false)}
            />
            <Success
                open={openSuccessDialog}
                onClose={() => setOpenSuccessDialog(false)}
            />
        </>
    )
}
