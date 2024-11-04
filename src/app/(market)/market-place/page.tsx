import { Suspense } from "react";
import { MarketPlaceSideBar } from "@/app/components/sidebars/MarketPlaceSideBar";
import MarketPlace from "@/app/components/market-components/MarketPlace";
import Market from "@/app/components/market-components";

export default async function MarketPlacePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div className="flex flex-col space-y-6 h-screen mx-">
        <div className="container grid flex-1 gap-12 md:grid-cols-[250px_1fr]">
          <aside className="hidden w-full flex-col md:flex border-[1.3px] border-slate-200 bg-[#FFFFFF] rounded-lg mb-8 h-fit">
            <MarketPlaceSideBar />
          </aside>
          <main className="">
            <Market />
          </main>
        </div>
      </div>
    </Suspense>

  );
}
