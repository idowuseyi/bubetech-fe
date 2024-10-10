import { MarketPlaceSideBar } from "@/app/components/sidebars/MarketPlaceSideBar";
import MarketPlace from "@/app/components/market-components/MarketPlace";

export default async function MarketPlacePage() {
  return (
    <>
      <div className="flex flex-col space-y-6 mt-10 h-screen mx-20">
        <div className="container grid flex-1 gap-12 md:grid-cols-[250px_1fr]">
          <aside className="hidden w-full flex-col md:flex border-[1.3px] border-slate-200 bg-[#FFFFFF] p-4 rounded-lg">
            <MarketPlaceSideBar />
          </aside>
          <main className="">
            <MarketPlace />
          </main>
        </div>
      </div>
    </>
  );
}
