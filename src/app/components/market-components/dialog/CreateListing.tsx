import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { IoCloseOutline } from 'react-icons/io5';

interface CreateListingProps {
    open: boolean;
    onClose: () => void;
    setOpenDiscardListingDialog: any;
    setOpenListingSuccessDialog: any;
}


export default function CreateListing({ open, onClose, setOpenDiscardListingDialog, setOpenListingSuccessDialog }: CreateListingProps) {
    return (
        <Dialog open={open}>
            <DialogContent className='flex flex-col gap-3 xl:gap-10 w-11/12 md:w-3/5 h-fit max-h-full overflow-y-auto'>

                <div className=' w-full flex items-center justify-between'>

                    <h2 className='text-base font-medium text-[#323232]'>New Listing</h2>
                    <div className="bg-[#D9D9D9] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
                        <IoCloseOutline size={18} fontWeight={32} onClick={onClose} />
                    </div>
                    {/* <Button className='bg-[#6FA521] z-10 w-24 outline-none'>Post</Button> */}
                </div>
                <form className='flex flex-col space-y-4'>
                    <div>
                        <label htmlFor="" className="text-sm mb-2 font-extralight">
                            Product Name
                        </label>
                        <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-md">
                            <input
                                className="w-full py-2 focus:outline-none cursor-text bg-transparent text-black"
                                type="text"
                                placeholder="Enter the product name"
                                maxLength={24}
                            />
                        </div>
                    </div>

                    <div className="md:flex w-full gap-6">
                        {/* === Price === */}
                        <div className="w-full">
                            <label htmlFor="" className="text-sm font-extralight">
                                Price
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="text"
                                    placeholder="Enter the price"
                                    maxLength={24}
                                />
                            </div>
                        </div>

                        {/* === Quantity === */}
                        <div className="w-full mt-6 md:mt-0">
                            <label htmlFor="" className="text-sm font-extralight">
                                Quantity
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="email"
                                    placeholder="Enter the quantity"
                                    maxLength={40}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex w-full gap-6">
                        {/* === Weight === */}
                        <div className="w-full">
                            <label htmlFor="" className="text-sm font-extralight">
                                Weight (kg)
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="text"
                                    placeholder="Enter the weight of your product"
                                    maxLength={24}
                                />
                            </div>
                        </div>

                        {/* === Category === */}
                        <div className="w-full mt-6 md:mt-0">
                            <label htmlFor="" className="text-sm font-extralight">
                                Category
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <select className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black">
                                    <option value="">Select an option</option>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Fruits">Fruits</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex w-full gap-6">
                        {/* === Location === */}
                        <div className="w-full">
                            <label htmlFor="" className="text-sm font-extralight">
                                Location
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="text"
                                    placeholder="Enter your location"
                                    maxLength={24}
                                />
                            </div>
                        </div>

                        {/* === Photos === */}
                        <div className="w-full mt-6 md:mt-0">
                            <label htmlFor="" className="text-sm font-extralight">
                                Add Photos
                            </label>
                            <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                                <input
                                    className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                    type="text"
                                    placeholder=""
                                    maxLength={24}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6 md:mt-0">
                        <label htmlFor="" className="text-sm font-extralight">
                            Description (Optional)
                        </label>
                        <div className="pt-2 px-4 pb-1 border-[1.3px] border-[#6C748B] rounded-lg">
                            <input
                                className="w-full py-2 focus:outline-none cursor-text custom-placeholder bg-transparent text-black"
                                type="text"
                                placeholder=""
                                maxLength={24}
                            />
                        </div>
                    </div>

                    {/* === Submit Button === */}
                    <div className="flex w-full gap-4 max-w-[420px] mx-auto">
                        <div className="text-center bg-white text-[#9E9E9E] border-[1.3px]  border-slate-300 rounded-md w-1/2 mt-3 xl:mt-10 h-12 px-3.5 py-2.5 text-sm font-medium shadow-sm cursor-pointer" onClick={() => setOpenDiscardListingDialog(true)}>
                            <span className="text-base font-medium">Discard</span>
                        </div>
                        <Button
                            className="bg-[#6FA521] rounded-md mt-3 xl:mt-10 w-1/2 h-12 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
                            onClick={() => { setOpenListingSuccessDialog(true); onClose() }}
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
