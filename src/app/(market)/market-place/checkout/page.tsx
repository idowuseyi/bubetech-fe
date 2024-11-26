"use client"
import React, { Suspense } from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter, useSearchParams } from 'next/navigation';
import CheckoutSummary from '@/app/components/market-components/checkout/CheckoutSummary';
import OrderCheckout from '@/app/components/market-components/checkout/OrderCheckout';

const PageContent = () => {
    const searchParams = useSearchParams()
    const router = useRouter();

    // Check if the query parameter 'rent' exists
    const isindividualRent = searchParams.has("rent");
    const isGroupRent = searchParams.has("group-rent");

    const handleGoBack = () => {
        router.back();
    };
    return (
        <div>
            <div className='flex items-center gap-2' onClick={handleGoBack}>
                <CaretLeft size={18} className='cursor-pointer' />
                <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px] font-medium'>Checkout</h2>
            </div>
            <div className='flex flex-col md:flex-row items-start gap-10 2xl:gap-14 mt-4 sm:mt-8 2xl:mt-16'>
                <OrderCheckout isGroupRent={isGroupRent} />
                <CheckoutSummary />
            </div>
        </div>
    )
}

const Page = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
    </Suspense>
);

export default Page;
