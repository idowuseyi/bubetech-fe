import { Poppins } from "next/font/google";
import Navbar from "../components/navbar/Navbar";

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
    <html>
      <body className={`${poppins.className} relative flex min-h-screen flex-col bg-[#F6F6F6]`}>
        <Navbar />
        <div className="w-full mx-auto max-w-7xl md:p-5">
          {children}
        </div>
      </body>
    </html>);
}
