"use client"
import React, { useState } from 'react'
import PrescriptionCard from '@/app/components/cards/PrescriptionCard'
import Prescription from '@/app/components/market-components/dialog/Prescription'

export default function Page() {

    const [openPrescriptionDialog, setPrescriptionDialog] = useState(false)
    return (
        <>
            <div className='flex flex-col w-full pb-8 px-4 md:px-0'>
                <div className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px] font-medium'>Prescription</div>
                <div className='grid grid-cols-1 mt-4 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <PrescriptionCard setPrescriptionDialog={setPrescriptionDialog} />
                    <PrescriptionCard setPrescriptionDialog={setPrescriptionDialog} />
                    <PrescriptionCard setPrescriptionDialog={setPrescriptionDialog} />
                    <PrescriptionCard setPrescriptionDialog={setPrescriptionDialog} />
                    <PrescriptionCard setPrescriptionDialog={setPrescriptionDialog} />
                    <PrescriptionCard setPrescriptionDialog={setPrescriptionDialog} />
                </div>

            </div>
            <Prescription

                open={openPrescriptionDialog}
                onClose={() => setPrescriptionDialog(false)}
                setPrescriptionDialog={setPrescriptionDialog}

            />
        </>

    )
}
