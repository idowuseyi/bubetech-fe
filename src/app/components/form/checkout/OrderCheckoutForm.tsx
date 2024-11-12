import React from 'react'

export default function OrderCheckoutForm() {
    return (
        <div className=' relative  h-full rounded-[20px] flex-1 w-full max-w-[852px] md:flex-[7]'>
            <div className='bg-[#FFFFFF] px-6 py-8 rounded-[20px] flex flex-col gap-3 xl:gap-10 h-fit max-h-full overflow-y-auto'>
                <form className='flex flex-col space-y-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Name
                        </label>
                        <div className="p-3 text-[#898989] bg-[#DCDCDC] border-none rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="Usman Salami"
                                maxLength={24}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="md:flex w-full gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="" className="text-sm font-extralight">
                                Phone Number 1
                            </label>
                            <div className="p-3 text-[#898989] bg-[#DCDCDC] border-none rounded-md">
                                <input
                                    className="w-full focus:outline-none cursor-text bg-transparent"
                                    type="text"
                                    placeholder="09071779807"
                                    maxLength={24}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="" className="text-sm font-extralight">
                                Phone Number (Optional)
                            </label>
                            <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                                <input
                                    className="w-full focus:outline-none cursor-text bg-transparent"
                                    type="text"
                                    placeholder="Enter your full name"
                                    maxLength={24}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Address
                        </label>
                        <div className="p-3 text-[#898989] bg-[#DCDCDC] border-none rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="8, alimosho road, iyana-ipaja"
                                maxLength={24}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Delivery Address
                        </label>
                        <div className="p-3 text-[#898989] bg-transparent border-[#BABABA] border rounded-md">
                            <input
                                className="w-full focus:outline-none cursor-text bg-transparent"
                                type="text"
                                placeholder="Enter your delivery address"
                                maxLength={24}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className="text-sm font-extralight">
                            Collection Method
                        </label>
                        <div className="p-3  bg-transparent border-[#BABABA] border rounded-md">
                            <select className="w-full focus:outline-none cursor-text custom-placeholder bg-transparent text-[#343F42]/40 font-medium text-base">
                                <option value="">Select an option</option>
                                {/* <option value="Vegetables">Vegetables</option>
                                <option value="Fruits">Fruits</option> */}
                            </select>
                        </div>
                    </div>



                </form>


            </div>
        </div>

    )
}
