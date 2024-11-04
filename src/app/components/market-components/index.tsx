"use client"
import { useSearchParams } from "next/navigation";
import { useValidateTab } from "../common/RedirectTab";
import TabsBtn from "../common/TabBtn";
import MarketPlace from "./MarketPlace";

function Market() {
    const searchParams = useSearchParams();
    const selectedTabs = searchParams.get("tab") ?? "Buy";

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
        <div>
            <>
                <div className=" flex w-fit mb-4 2xl:mb-7 items-end overflow-x-auto border-b border-[#E4E7EC]">
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

                {currentTab === "Buy" && <MarketPlace />}
                {currentTab === "Sell" && <MarketPlace />}
            </>
        </div>
    )
}

export default Market;