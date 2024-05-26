import React from "react";
import Link from "next/link";
import { Button } from "@/blocks/components/Button";
import { HeaderBannerProps } from "../../Layout/@types";
import { HomePageTabs } from "./HomePageTabs";
import { MatchTable } from "./MatchTable";
import { CompetitionsBlock } from "./CompetitionsBlock";
import { TopScorerBlock } from "./TopScorerBlock";
import { StandingsTable } from "./StandingsTable";
import Image from "next/image";

export const HeaderBanner = ({ title, content, image }: HeaderBannerProps) => {
  const tabList = [
    {
      title: "Matches",
      icon: (
        <Image src="./ballicon.svg" alt="ballicon" width={20} height={20} />
      ),
      children: <MatchTable />
    },
    {
      title: "Standings",
      icon: <Image src="/trophy.svg" alt="trophyicon" width={20} height={20} />,
      children: <StandingsTable />
    }
  ];

  return (
    <div className="banner-wrapper flex flex-row  justify-between  px-8">
      {/* league banner section */}
      <div className="flex flex-col w-full mr-10">
        <section className="flex flex-row w-full space-x-6">
          <div className="w-full flex flex-row bg-piccolo rounded-xl text-broly min-h-[300px] min-w-[300px]">
            <div className="w-full p-4 grid grid-cols content-center ">
              {/* this div will accept the banner title */}
              <h4 className="text-broly text-2xl">Play a Match</h4>
              {/* this paragrahp will contain the banner description */}
              <p className="text-base mt-5 mb-5">
                Your team does not have any next match. Join a competition and
                start winning prizes
              </p>
              {/* this button will accept the call to action link */}
              <Button className="text-sm bg-popo px-2 py-4 whitespace-nowrap w-[50%]">
                <Link href="/">Join Pro Soccer League</Link>
              </Button>
            </div>
            <div className="relative w-full">
              <Image
                width={300}
                height={300}
                src="/banner1.svg"
                alt="banner-background"
                className="w-full"
              />
              <Image
                width={300}
                height={300}
                src="/banner2.svg"
                alt="banner-hero"
                className="absolute top-0 left-0 bottom-0 w-full h-full mt-3 pt-4"
              />
            </div>
          </div>
        </section>

        {/* squad banner section */}
        <section className="flex flex-row w-full mt-12 space-x-6">
          <div className=" w-full flex flex-row bg-piccolo rounded-xl text-broly min-h-[300px] min-w-[300px]">
            <Link href="/squad">
              <Image
                width={1093}
                height={217}
                src="/banner4.svg"
                alt="banner-background"
                className="min-w-[300px] min-h-[300px] object-cover"
              />
            </Link>
          </div>
        </section>

        <HomePageTabs tabs={tabList} />
      </div>

      <aside className="flex flex-col">
        <CompetitionsBlock />
        <TopScorerBlock />
      </aside>
    </div>
  );
};
