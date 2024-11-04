import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { BsImage } from "react-icons/bs";
import { LiaUserTagSolid } from "react-icons/lia";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { Input } from '@/components/ui/input';
import { IoCloseOutline } from 'react-icons/io5';

interface CreateListingProps {
    open: boolean;
    onClose: () => void;
    setOpenDiscardListingDialog: any
}


export default function CreateListing({ open, onClose, setOpenDiscardListingDialog }: CreateListingProps) {
    return (
        <Dialog open={open}>
            <DialogContent className='flex flex-col gap-10'>

                <div className=' w-full flex items-center justify-between'>

                    <h2 className='text-base font-medium text-[#323232]'>New Listing</h2>
                    <div className="bg-[#D9D9D9] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <IoCloseOutline size={18} fontWeight={32} onClick={onClose} />
                    </div>
                    {/* <Button className='bg-[#6FA521] z-10 w-24 outline-none'>Post</Button> */}
                </div>
                <form>
                    <div>
                        <label htmlFor="" className="text-sm font-extralight">
                            Product Name
                        </label>
                        <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-md">
                            <input
                                className="w-full py-2 focus:outline-none cursor-text bg-transparent text-black"
                                type="text"
                                placeholder="Enter the purpose of creating this group"
                                maxLength={24}
                            />
                        </div>
                    </div>

                    <div className="md:flex w-full gap-6">
                        {/* === Phone Number === */}
                        <div className="w-full">
                            <label htmlFor="" className="text-sm font-extralight">
                                Phone Number
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="text"
                                    placeholder="Enter your local government"
                                    maxLength={24}
                                />
                            </div>
                        </div>

                        {/* === Email Input === */}
                        <div className="w-full mt-6 md:mt-0">
                            <label htmlFor="" className="text-sm font-extralight">
                                Email Address
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="email"
                                    placeholder="Enter your ward"
                                    maxLength={40}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex w-full gap-6">
                        {/* === Date of Birth === */}
                        <div className="w-full">
                            <label htmlFor="" className="text-sm font-extralight">
                                Date of Birth
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="text"
                                    placeholder="Enter your cluster name"
                                    maxLength={24}
                                />
                            </div>
                        </div>

                        {/* === Gender === */}
                        <div className="w-full mt-6 md:mt-0">
                            <label htmlFor="" className="text-sm font-extralight">
                                Gender
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                                    <option value="">Select an option</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* === Submit Button === */}
                    <div className="flex w-full gap-4 max-w-[420px] mx-auto">
                        <div className="text-center bg-white text-[#9E9E9E] border-[1.3px]  border-slate-300 rounded-md w-1/2  mt-10 h-12 px-3.5 py-2.5 text-sm font-medium shadow-sm cursor-pointer" onClick={() => setOpenDiscardListingDialog(true)}>
                            <span className="text-base font-medium">Discard</span>
                        </div>
                        <Button
                            // disabled={isSaving}
                            className="bg-[#6FA521] rounded-md mt-10 w-1/2 h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
                            // onClick={onNext}
                            type="button"
                        >
                            <span className="text-base font-medium" >Submit</span>
                        </Button>
                    </div>
                </form>


            </DialogContent>
        </Dialog>
    )
}
