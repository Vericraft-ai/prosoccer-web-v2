import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/blocks/components/Tabs";
import { HomePageTabsProps } from "../@types";

export const HomePageTabs: React.FC<{ tabs: HomePageTabsProps }> = ({
  tabs
}) => {
  return (
    <div className="text-broly">
      <Tabs defaultValue={tabs[0]?.title} className="w-full">
        <TabsList>
          {tabs?.map((tab, index) => (
            <TabsTrigger
              value={tab.title!}
              key={index}
              className=" rounded-none data-[state=active]:border-b-2 border-vegeta"
            >
              <div className="text-trunks text-2xl flex flex-row">
                <span className="pr-5"> {tab.title}</span> {tab.icon}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs?.map((tab, index) => (
          <TabsContent value={tab.title!} key={index}>
            <div>{tab.children}</div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
