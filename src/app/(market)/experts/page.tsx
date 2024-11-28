import React, { Suspense } from 'react'
import { MarketPlaceSideBar } from '@/app/components/sidebars/MarketPlaceSideBar'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>

            <div className="flex flex-col space-y-6 h-screen mx-">
                <div className="relative container grid flex-1 gap-12 md:grid-cols-[250px_1fr]">
                    <aside className="sticky hidden top-[5.25rem] w-full flex-col md:flex border-[1.3px] border-slate-200 bg-[#FFFFFF] rounded-lg mb-8 h-fit">
                        <MarketPlaceSideBar />
                    </aside>
                    <main className="">
                        <h2>Experts</h2>
                    </main>
                </div>
            </div>
        </Suspense>
    )
}
