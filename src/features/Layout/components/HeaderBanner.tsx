import React from "react";
import Link from "next/link";
import { Button } from "@/blocks/components/Button";
import { HeaderBannerProps } from "../@types";
import { HomePageTabs } from "./HomePageTabs";
import { Gamepad2, Trophy } from "lucide-react";
import { MatchTable } from "./MatchTable";
import { CompetitionsBlock } from "./CompetitionsBlock";
import { TopScorerBlock } from "./TopScorerBlock";

export const HeaderBanner = ({ title, content, image }: HeaderBannerProps) => {
  const tabList = [
    {
      title: "Matches",
      icon: <Gamepad2 size={33} />,
      children: <MatchTable />
    },
    {
      title: "Standings",
      icon: <Trophy size={30} />,
      children: <MatchTable />
    }
  ];

  return (
    <div className="banner-wrapper flex flex-row justify-between">
      {/* league banner section */}
      <div className="flex flex-col">
        <section className="flex flex-row w-full my-12 space-x-6">
          <div className="flex flex-row bg-piccolo rounded-xl text-broly">
            <div className="w-[333px] p-4 grid grid-cols content-center ">
              {/* this div will accept the banner title */}
              <h4 className="text-broly text-2xl">Play a Match</h4>
              {/* this paragrahp will contain the banner description */}
              <p className="text-base mt-5 mb-5">
                Your team does not have any next match. Join a competition and
                start winning prizes
              </p>
              {/* this button will accept the call to action link */}
              <Button className="w-1/2 text-xs bg-popo px-2 py-4">
                <Link href="/" className="">
                  Join Pro Soccer League
                </Link>
              </Button>
            </div>

            {/* this will be replaced with the image prop */}
            <div className="relative">
              <img
                src="/banner1.svg"
                alt="banner-background"
                className="w-full"
              />
              <img
                src="/banner2.svg"
                alt="banner-hero"
                className="absolute top-0 left-0 bottom-0 w-full h-full mt-3 pt-4"
              />
            </div>
          </div>
        </section>

        {/* squad banner section */}
        <section className="flex flex-row w-full my-12 space-x-6">
          <div className="flex flex-row bg-piccolo rounded-xl text-broly">
            <Link href="/squad">
              <img
                src="/banner4.svg"
                alt="banner-background"
                className="w-full"
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
