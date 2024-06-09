import { Banner } from "@/features/Home/components/Banner";
import { CompetitionsBlock } from "@/features/Home/components/CompetitionsBlock";
import { Hero } from "@/features/Home/components/Hero";
import { HomePageTabs } from "@/features/Home/components/HomePageTabs";
import { TopScorerBlock } from "@/features/Home/components/TopScorerBlock";
import { YourSquad } from "@/features/Home/components/YourSquad";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { useState } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <Wrapper>
      <div className="flex flex-col w-full">
        <Header search isConnected={isConnected} />

        {/* Mobile + Tablet view */}
        <div className="flex lg:hidden flex-col mt-[2.375rem]">
          <Hero />
          {!isConnected && <Banner />}
          {isConnected && <YourSquad />}
          <div className="flex flex-col md:flex-row gap-10 w-full mt-6">
            <CompetitionsBlock />
            <TopScorerBlock />
          </div>
          <HomePageTabs />
        </div>
        {/* Mobile + Tablet view end */}

        {/* Desktop view */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-[4.25rem] mt-[2.375rem]">
          <div className="w-full lg:w-[65%]">
            <Hero />
            {!isConnected && <Banner />}
            {isConnected && <YourSquad />}
            <HomePageTabs />
          </div>
          <div className="flex md:flex-row md:gap-10 lg:block w-full lg:w-[35%]">
            <CompetitionsBlock />
            <TopScorerBlock />
          </div>
        </div>
        {/* Desktop view end */}
      </div>
    </Wrapper>
  );
}
