import React, { Suspense } from 'react'
import { MarketPlaceSideBar } from '@/app/components/sidebars/MarketPlaceSideBar'
import PharmacyCard from '@/app/components/cards/PharmacyCard'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>

            <div className="flex flex-col w-full pb-8 px-4 md:px-0">
                <div className="relative container grid flex-1 gap-4 xl:gap-12 md:grid-cols-[250px_1fr]">
                    <aside className="sticky hidden top-[5.25rem] w-full flex-col md:flex border-[1.3px] border-slate-200 bg-[#FFFFFF] rounded-lg mb-8 h-fit">
                        <MarketPlaceSideBar />
                    </aside>
                    <main className="">
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px] font-medium'>Pharmacy</h2>
                            <div className='bg-[#FFFFFF] w-1/3 flex rounded-[10px] p-2 items-center justify-between'>
                                <p className='text-sm text-[#323232] 2xl:text-base'>Have a prescription? </p>
                                <h5 className='text-sm cursor-pointer 2xl:text-base text-[#6FA521] underline'>Upload</h5>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 mt-4 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                            <PharmacyCard />
                        </div>
                    </main>
                </div>
            </div>
        </Suspense>
    )
}
