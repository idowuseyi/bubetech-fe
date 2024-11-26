import React, { Suspense } from 'react'
import { MarketPlaceSideBar } from '@/app/components/sidebars/MarketPlaceSideBar'
import ResourceCard from '@/app/components/cards/ResourceCard'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>

            <div className="flex flex-col space-y-6 h-screen mx-">
                <div className="relative container grid flex-1 gap-4 xl:gap-12 md:grid-cols-[250px_1fr]">
                    <aside className="sticky hidden top-[5.25rem] w-full flex-col md:flex border-[1.3px] border-slate-200 bg-[#FFFFFF] rounded-lg mb-8 h-fit">
                        <MarketPlaceSideBar />
                    </aside>
                    <main className="">
                        <div className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px] font-medium'>Resource</div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                            <ResourceCard />
                        </div>
                    </main>
                </div>
            </div>
        </Suspense>
    )
}
