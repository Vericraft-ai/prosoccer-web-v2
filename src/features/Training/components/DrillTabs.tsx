import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { Button } from "@/blocks/components/Button";
import { DrillCard } from "./DrillCard";
import drills from "@/mocks/drills.json";
import { DrillInfoModal } from "./DrillInfoModal";

type Props = {
  onClick?: () => void;
};

export const DrillTabs = ({ onClick }: Props) => {
  const tabs = ["Attack", "Defense", "Mental & Physical"];
  return (
    <div className="text-broly mt-6 lg:mt-12 w-full">
      <Tabs defaultValue={tabs[0]} className="w-full">
        <div className="flex flex-col md:flex-row gap-y-3.5 md:gap-y-9 justify-between lg:items-center">
          <TabsList className="border-b-transparent p-0 overflow-x-auto">
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
          <DrillInfoModal />
        </div>

        <>
          {tabs.map((tab) => (
            <TabsContent value={tab} key={tab}>
              <CardWrapper>
                {drills.map((drill) => (
                  <DrillCard
                    title={drill.title}
                    attributes={drill.attributes}
                    condition={drill.condition}
                    players={drill.players}
                    cost={drill.cost}
                    key={drill.title}
                    onClick={onClick}
                  />
                ))}
              </CardWrapper>
            </TabsContent>
          ))}
        </>
      </Tabs>
    </div>
  );
};

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {children}
      </div>
      <div className="my-12 flex justify-end">
        <Button className="px-10">Next</Button>
      </div>
    </div>
  );
};
