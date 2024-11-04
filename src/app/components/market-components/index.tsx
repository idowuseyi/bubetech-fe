"use client"
import { useSearchParams } from "next/navigation";
import { useValidateTab } from "../common/RedirectTab";
import TabsBtn from "../common/TabBtn";
import MarketPlace from "./MarketPlace";
import Image from "next/image";
import plus from "@/assets/plus.png"
import { useState } from "react";
import CreateListing from "./dialog/CreateListing";
import DiscardListing from "./dialog/DiscardListing";



function Market() {
    const searchParams = useSearchParams();
    const selectedTabs = searchParams.get("tab") ?? "Buy";
    const [openListingDialog, setOpenListingDialog] = useState(false)
    const [openDiscardListingDialog, setOpenDiscardListingDialog] = useState(false)

    const tabVariants = [
        {
            tab: "Buy",
            tabName: "Buy",
            name: "Buy",
            tabCount: undefined,
        },

        {
            tab: "Sell",
            tabName: "Sell",
            name: "Sell",
            tabCount: undefined,
        }
    ];

    const currentTab = useValidateTab({
        tabVariants,
        selectedTabs,
        fallbackRoute: `/market-place`,
    });
    return (
        <>
            <div className="flex items-center justify-between mb-4 min-h-14">
                <div className=" flex w-fit  2xl:mb-7 items-end overflow-x-auto border-b border-[#E4E7EC]">
                    {tabVariants.map((tab) => (
                        <TabsBtn
                            key={tab.tab}
                            tabCount={tab.tabCount}
                            tabName={tab.tabName}
                            name={tab.name}
                            tab={currentTab}
                            activeColor="border-[#6FA521] text-[#6FA521]"
                            notActiveColor="text-[#A4A4A4]"
                        />
                    ))}
                </div>
                <button
                    className={`transition-all duration-500 transform ${selectedTabs === "Sell"
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 pointer-events-none"
                        } bg-[#6FA521] rounded-[10px] text-white text-center flex items-center gap-1 py-3 2xl:py-4 px-4 2lx:px-8`}
                    onClick={() => setOpenListingDialog(true)}
                >
                    <Image
                        src={plus}
                        width={100}
                        height={100}
                        alt="tomato image"
                        className="w-4 h-4  object-fit object-center"
                    />
                    New Listing
                </button>
            </div>

            {currentTab === "Buy" && <MarketPlace />}
            {currentTab === "Sell" && <MarketPlace />}
            <CreateListing
                open={openListingDialog}
                onClose={() => setOpenListingDialog(false)}
                setOpenDiscardListingDialog={setOpenDiscardListingDialog}
            />
            <DiscardListing
                open={openDiscardListingDialog}
                onClose={() => {
                    setOpenListingDialog(false);
                    setOpenDiscardListingDialog(false)
                }}
                setOpenListingDialog={setOpenListingDialog}
                setOpenDiscardListingDialog={setOpenDiscardListingDialog}
            />
        </>
    )
}

export default Market;