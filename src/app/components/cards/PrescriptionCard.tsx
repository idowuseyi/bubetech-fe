import React from 'react'

export default function PrescriptionCard() {
    return (
        <div className='bg-white rounded-[10px] flex flex-col p-2'>
            <div className='flex items-center py-1 border-b border-[#F2EFEF] justify-between'>
                <h2 className='font-medium text-sm text-[#323232]'>Doxycycline</h2>
                <p className='flex items-center text-[#A1A1A1] font-normal text-sm'>14 Aug, 2024</p>
            </div>
            <div className='flex flex-col space-y-3 w-full pb-3 mt-2'>
                <div className='flex items-center w-full justify-between text-[#323232]'>
                    <p className='font-normal text-sm'>Dosage</p>
                    <p className='font-medium text-sm'>2 Tablets</p>
                </div>
                <div className='flex items-center w-full justify-between text-[#323232]'>
                    <p className='font-normal text-sm'>Times</p>
                    <p className='font-medium text-sm'>Morning, Evening</p>
                </div>
                <div className='flex items-center w-full justify-between text-[#323232]'>
                    <p className='font-normal text-sm'>To be taken</p>
                    <p className='font-medium text-sm'>After Meal</p>
                </div>
                <div className='flex items-center w-full justify-between text-[#323232]'>
                    <p className='font-normal text-sm'>Repeat</p>
                    <p className='font-medium text-sm'>Everyday</p>
                </div>
                <div className='flex items-center w-full justify-between text-[#323232]'>
                    <p className='font-normal text-sm'>Duration</p>
                    <p className='font-medium text-sm'>1 Week</p>
                </div>
                <div className='flex items-center w-full justify-between text-[#323232]'>
                    <p className='font-normal text-sm'>Status</p>
                    <p className='font-medium text-sm text-[#6FA521]'>New Prescription</p>
                </div>
                <button className='border mt-4 border-[#6FA521] rounded-[10px] text-center p-3 font-medium text-xs text-[#6FA521]'>Order Drugs</button>
            </div>

        </div>
    )
}
