"use client"
import React from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation';
import CheckoutSummary from '@/app/components/market-components/checkout/CheckoutSummary';
import OrderCheckout from '@/app/components/market-components/checkout/OrderCheckout';

export default function Page() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };
    return (
        <div>
            <div className='flex items-center gap-2' onClick={handleGoBack}>
                <CaretLeft size={18} className='cursor-pointer' />
                <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px]font-medium'>Checkout</h2>
            </div>
            <div className='flex flex-col md:flex-row items-start gap-10 2xl:gap-14 mt-4 sm:mt-8 2xl:mt-16'>
                <OrderCheckout />
                <CheckoutSummary />
            </div>
        </div>
    )
}
