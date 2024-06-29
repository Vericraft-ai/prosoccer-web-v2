import { Button } from "@/blocks/components/Button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { useMarketPlayersQuery } from "@/features/Market/hooks/useMarketPlayersQuery";
import { Dropdown } from "@/features/Shared/components/Dropdown";
import { useState } from "react";
import { PlayerCard } from "./PlayerCard";
import { TrainingProgressModal } from "./TrainingProgressModal";

export const SelectPlayerTabs = () => {
  const tabs = ["All", "Goalkeepers", "Defenders", "Midfielders", "Forwards"];
  const { data: playerData } = useMarketPlayersQuery();
  const [openProgress, setOpenProgress] = useState(false);

  return (
    <div className="text-broly mt-4 lg:mt-5 w-full">
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
          <div className="flex items-center gap-2.5">
            <p className="whitespace-nowrap text-frieza">Sort by</p>
            <Dropdown
              className="lg:w-[174px]"
              options={[
                "Condition Desc",
                "Condition Asc",
                "Price Desc",
                "Price Asc",
              ]}
            />
            <Button variant={"outline"} className="ml-4">
              Select All
            </Button>
          </div>
        </div>

        <>
          {tabs.map((tab) => (
            <TabsContent value={tab} key={tab}>
              <CardWrapper>
                {playerData?.players?.map((player) => (
                  <PlayerCard
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
      <TrainingProgressModal
        open={openProgress}
        onOpenChange={setOpenProgress}
        progress={81}
      />
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
        <Button className="px-10">Continue</Button>
      </div>
    </div>
  );
};
