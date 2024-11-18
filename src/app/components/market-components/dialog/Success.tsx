import React from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog";
import tomato from "@/assets/market-place/tomato.jpg";
import Image from 'next/image';
import success from "@/assets/market-place/successLogo.png"
import Link from 'next/link';

interface SuccessProps {
    open: boolean;
    onClose: () => void;
}

export default function Success({ open, onClose, }: SuccessProps) {
    return (
        <Dialog open={open}>
            <DialogContent className="flex flex-col w-11/12 max-w-[450px] rounded-[20px]">
                <div className='flex items-center  justify-center'>
                    <div className='w-16 2xl:w-[126px]'>
                        <Image
                            src={success}
                            alt='success-logo'
                            className='w-full h-full object-center'
                        />
                    </div>
                </div>
                <div className="w-full flex items-start justify-between">
                    <div className="w-full text-center">
                        <h2 className="text-base leading-9 font-medium text-[#323232]"> Payment Successful!</h2>
                        <p className="text-sm font-extralight text-center">
                            Congratulations, your payment has been seen. A
                            notification will be sent to you shortly.
                        </p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='w-16 2xl:w-20 2xl:h-20 rounded-lg'>
                        <Image src={tomato} alt="product-image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className='flex flex-col text-[#323232]'>
                        <h4 className='text-base font-medium'>Tomatoes</h4>
                        <p className='text-sm text-[#A1A1A1] leading-[18px]'>Size: 5kg</p>
                        <h4 className='text-base font-medium'>N32,000</h4>
                    </div>
                </div>
                <div className="px-6 py-4 border-t border-[#DCDCDC] text-[#323232] font-normal text-base">
                    <div className='flex items-center justify-between'>
                        <p>Subtotal</p>
                        <p>N35,000</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Shipping Fee</p>
                        <p>N3,500</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Total Fee</p>
                        <p>N38,000</p>
                    </div>


                </div>
                <div className='flex flex-col gap-1'>
                    <Link href={"/market-place"} className='rounded-[10px] w-full bg-[#6FA521] text-center text-sm text-white flex items-center justify-center h-12'
                    >Go to Marketplace</Link>
                    <button
                        type='button'
                        className='rounded-[10px] w-full bg-transparent text-center text-sm text-[#6FA521] h-12'
                        onClick={onClose}
                    >Share Receipt</button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
