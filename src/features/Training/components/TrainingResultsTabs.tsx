import { Button } from "@/blocks/components/Button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { cn } from "@/blocks/utils/cn";
import { useMarketPlayersQuery } from "@/features/Market/hooks/useMarketPlayersQuery";
import { useState } from "react";
import { ResultCard } from "./ResultCard";

export const TrainingResultsTabs = () => {
  const tabs = ["All", "Goalkeepers", "Defenders", "Midfielders", "Forwards"];
  const { data: playerData } = useMarketPlayersQuery();
  const [openProgress, setOpenProgress] = useState(false);

  return (
    <div className="text-broly mt-4 lg:mt-5 w-full">
      <div className="pb-3.5 border-b mb-4 border-piccolo flex justify-center">
        <div className="flex items-center  gap-[94px] md:gap-[246px] lg:gap-[18.75rem]">
          <ScoreItem title="Attack" value={"+23"} className="text-[#E726F7]" />
          <ScoreItem title="Defense" value={"+15"} className="text-[#039CEC]" />
          <ScoreItem
            title="Men.&Phy"
            value={"+10"}
            className="text-[#3AB83A]"
          />
        </div>
      </div>
      <Tabs defaultValue={tabs[0]} className="w-full">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-9 justify-between lg:items-center">
          <TabsList className="border-b-transparent p-0 overflow-x-auto gap-5 md:gap-20">
            {tabs.map((tab) => (
              <TabsTrigger
                value={tab}
                className="text-[2rem] text-base md:text-2xl font-normal p-0 before:h-0"
                key={tab}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <>
          {tabs.map((tab) => (
            <TabsContent value={tab} key={tab}>
              <CardWrapper>
                {playerData?.players?.map((player) => (
                  <ResultCard
                    key={player.id}
                    item={player}
                    onClick={() => setOpenProgress((prev) => !prev)}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {children}
      </div>
      <div className="my-12 flex justify-end">
        <Button className="px-10">Done</Button>
      </div>
    </div>
  );
};

type ScoreItemProps = {
  title: string;
  value: string | number;
  className?: string;
};

export const ScoreItem = ({ title, value, className }: ScoreItemProps) => {
  return (
    <div className="text-center">
      <p className={cn("md:text-lg font-medium", className)}>{value}</p>
      <p className="text-sm md:text-base text-frieza">{title}</p>
    </div>
  );
};
