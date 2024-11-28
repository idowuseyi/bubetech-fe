import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';

interface PrescriptionProps {
    open: boolean;
    onClose: () => void;
    setPrescriptionDialog: any;
}

export default function Prescription({ open, onClose, setPrescriptionDialog }: PrescriptionProps) {
    return (
        <Dialog open={open}>
            <DialogContent className='flex flex-col w-11/12 max-w-[350px] rounded-[20px]'>

                <div className=' w-full flex items-center justify-between'>

                    <h2 className='text-base font-medium text-[#323232]'>New Prescription</h2>
                    <div className="bg-[#D9D9D9] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <IoCloseOutline size={18} fontWeight={32} onClick={onClose} />
                    </div>
                </div>
                <div className='flex flex-col space-y-3 w-full pb-3 mt-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium text-sm text-[#323232]'>Doxycycline</h2>
                        <p className='flex items-center text-[#A1A1A1] font-normal text-sm'>14 Aug, 2024</p>
                    </div>
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

                    <Link href={"/pharmacy"} className='w-full'>
                        <Button
                            className="bg-[#6FA521] rounded-md mt-3 w-full h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
                            type="button"
                        >
                            <span className="text-base font-medium" >Order Drugs</span>
                        </Button>
                    </Link>
                    <Button
                        className="bg-transparent mt-1 w-full px-3 text-sm font-medium text-[#6FA521]"
                        type="button"
                    >
                        <span className="text-base font-medium" >Download Prescription</span>
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    )
}
