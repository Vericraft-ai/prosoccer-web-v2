import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Sidebar } from "@/features/Layout/components/SideBar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-center justify-between ${inter.className}`}
    >
      <Sidebar />
      <ConnectButton />
    </main>
  );
}
