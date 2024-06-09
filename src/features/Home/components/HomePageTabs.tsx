import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { MatchesTable } from "./MatchesTable";
import { StandingsTable } from "./StandingsTable";

export const HomePageTabs = () => {
  return (
    <div className="text-broly mt-6 lg:mt-12">
      <Tabs defaultValue="matches" className="w-full">
        <TabsList>
          <TabsTrigger value="matches" className="">
            Matches ⚽️
          </TabsTrigger>
          <TabsTrigger value="standings" className="">
            Standings 🏆
          </TabsTrigger>
        </TabsList>

        <TabsContent value="matches">
          <MatchesTable />
        </TabsContent>
        <TabsContent value="standings">
          <StandingsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};
