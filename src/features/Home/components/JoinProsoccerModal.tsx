"use client";

import { Button } from "@/blocks/components/Button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/blocks/components/Sheet";
import { Cross2Icon } from "@radix-ui/react-icons";
import { RewardsTabs } from "./RewardsTabs";

export function JoinProsoccerModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={"bg-popo"}>Join Pro Soccer League</Button>
      </SheetTrigger>
      <SheetContent side={"full"}>
        <SheetHeader className="py-6 lg:py-12 border-b border-piccolo px-7 lg:px-[7.5rem] flex-row justify-between items-center">
          <SheetTitle className="lg:text-2xl text-white">
            Join Pro Soccer league
          </SheetTitle>
          <SheetClose>
            <Cross2Icon className="h-[17.41px] w-[17.41px]" />
          </SheetClose>
        </SheetHeader>

        <div className="px-7 lg:px-[7.5rem] flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/4 lg:pr-[3.18rem] pt-4 lg:pt-10 lg:border-r border-piccolo">
            <h1 className="text-2xl lg:text-[2.5rem] font-bold text-zeno">
              Pro Soccer League Info
            </h1>
            <p className="text-frieza text-sm  mt-6 lg:mt-14">
              Got questions about dominating the pitch in Prosoccer? Explore our
              FAQ section to find answers on everything from gameplay mechanics
              and earning prizes to player development and building your dream
              team Got questions about dominating the pitch in Prosoccer?
              Explore our FAQ section to find answers on everything from
              gameplay mechanics Got questions about dominating the pitch in
              Prosoccer? Explore our FAQ section to find answers on everything
              from gameplay mechanics and earning prizes to player development
              and building your dream team Got questions about dominating the
              pitch in Prosoccer? Explore our FAQ section to find answers on
              everything from gameplay mechanics{" "}
            </p>

            <h2 className="lg:text-lg font-medium mt-6 text-zeno">
              Rules and Logoistics
            </h2>
            <p className="text-frieza text-sm mt-3">
              Got questions about dominating the pitch in Prosoccer? Explore our
              FAQ section to find answers on everything from gameplay mechanics
              and earning prizes to player development and building your dream
              team Got questions about dominating the pitch in Prosoccer?
              Explore our FAQ section to find answers on everything from
              gameplay mechanics Got questions about dominating the pitch in
              Prosoccer? Explore our FAQ section to find answers on everything
              from gameplay mechanics and earning prizes to player development
              and building your dream team Got questions about dominating the
              pitch in Prosoccer? Explore our FAQ section to find answers on
              everything from gameplay mechanics
            </p>
          </div>
          <div className="w-full lg:w-2/4 pt-10 lg:pl-1.5">
            <h1 className="text-2xl lg:text-[2.5rem] font-bold text-zeno">
              Rewards
            </h1>

            <div className="mt-6">
              <RewardsTabs />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
