import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';

interface AcceptOfferProps {
    open: boolean;
    onClose: () => void;
}

export default function AcceptOffer({ open, onClose }: AcceptOfferProps) {
    return (
        <Dialog open={open}>
            <DialogContent className='flex flex-col w-11/12 max-w-[450px] rounded-[20px]'>

                <div className=' w-full flex items-center justify-between'>

                    <h2 className='text-base font-medium text-[#323232]'>Accept Offer</h2>
                    <div className="bg-[#D9D9D9] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <IoCloseOutline size={18} fontWeight={32} onClick={onClose} />
                    </div>
                </div>
                <p className='text-[#6FA521] text-xl leading-[30px]'>1 basket of tomatoes</p>
                <form className='flex flex-col space-y-4'>
                    <div>
                        <input
                            className="w-full p-3 focus:outline-none cursor-text bg-[#DDDDDD] text-[#9D9D9D] border-none rounded-md"
                            type="text"
                            placeholder="N31 000"
                            maxLength={24}
                            readOnly
                        />
                    </div>
                    {/* === Submit Button === */}
                    <Link href={"/market-place/chat"} className='w-full'>
                        <Button
                            className="bg-[#6FA521] rounded-md mt-3 xl:mt-10 w-full h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
                            type="button"
                        >
                            <span className="text-base font-medium" >Accept</span>
                        </Button>
                    </Link>

                </form>


            </DialogContent>
        </Dialog>
    )
}
