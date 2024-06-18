import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { SquadMenuDropdown } from "./SquadMenuDropdown";
import { Button } from "@/blocks/components/Button";
import { LineupTab } from "./LineupTab";
import { TacticsTab } from "./TacticsTab";

export const SquadTabs = () => {
  const tabs = ["Lineup", "Tactics"];
  return (
    <div className="text-broly mt-6 lg:mt-12">
      <Tabs defaultValue="Lineup" className="w-full">
        <div className="flex flex-col lg:flex-row gap-y-9 justify-between lg:items-center">
          <TabsList className="border-b-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                value={tab}
                className="text-[2rem] lg:text-[2.5rem] p-0 before:h-0"
                key={tab}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex items-center gap-[1.125rem]">
            <SquadMenuDropdown />
            <Button className="w-full md:w-auto">Play friendly match</Button>
          </div>
        </div>

        <TabsContent value="Lineup">
          <LineupTab />
        </TabsContent>
        <TabsContent value="Tactics">
          <TacticsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
