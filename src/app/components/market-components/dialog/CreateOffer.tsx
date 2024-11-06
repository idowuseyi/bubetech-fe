import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { IoCloseOutline } from 'react-icons/io5';

interface CreateOfferProps {
    open: boolean;
    onClose: () => void;
}

export default function CreateOffer({ open, onClose }: CreateOfferProps) {
    return (
        <Dialog open={open}>
            <DialogContent className='flex flex-col w-11/12 max-w-[350px] rounded-[20px]'>

                <div className=' w-full flex items-center justify-between'>

                    <h2 className='text-base font-medium text-[#323232]'>Make an Offer</h2>
                    <div className="bg-[#D9D9D9] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <IoCloseOutline size={18} fontWeight={32} onClick={onClose} />
                    </div>
                </div>
                <form className='flex flex-col space-y-4'>
                    <div>

                        <input
                            className="w-full p-3 focus:outline-none cursor-text bg-transparent text-black border-[1.3px] border-[#6C748B] rounded-md"
                            type="text"
                            placeholder="Enter your bid here"
                            maxLength={24}
                        />
                    </div>
                    {/* === Submit Button === */}
                    <div className='w-full'>
                        <Button
                            className="bg-[#6FA521] rounded-md mt-3 xl:mt-10 w-full h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
                            type="button"
                        >
                            <span className="text-base font-medium" >Send</span>
                        </Button>
                    </div>

                </form>


            </DialogContent>
        </Dialog>
    )
}

