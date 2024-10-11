import MenuBar from "./MenuBar";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import BottomNavbar from "../components/navigation/BottomNavbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <div className={`${poppins.className} relative flex min-h-screen flex-col bg-[#F6F6F6]`}>
            <Navbar />
            <div className="mx-auto flex w-full max-w-7xl grow gap-5 md:p-5">
                <MenuBar className="hidden sticky top-[5.25rem] h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
                {children}
            </div>
            <BottomNavbar />
            {/* <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" /> */}
        </div>
    );
}