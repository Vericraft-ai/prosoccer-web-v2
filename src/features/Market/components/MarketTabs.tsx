import { Button } from "@/blocks/components/Button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { bundlesFilterContents } from "@/mocks/bundlesFilterContent";
import { useMarketPlayersQuery } from "../hooks/useMarketPlayersQuery";
import { useMarketQuery } from "../hooks/useMarketQuery";
import { FilterModal } from "./FilterModal";
import { FilterPanel } from "./FilterPanel";
import { MarketCard } from "./MarketCard";

export const MarketTabs = () => {
  const tabs = ["Bundles", "Players", "Scout"];
  const { data: marketData, isLoading } = useMarketQuery();
  const { data: playerData } = useMarketPlayersQuery();

  return (
    <div className="text-broly mt-6 lg:mt-12">
      <Tabs defaultValue="Bundles" className="w-full">
        <div className="space-y-7">
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
        </div>

        <TabsContent value="Bundles">
          <div className="lg:hidden flex justify-between mb-8">
            <FilterModal filterContents={bundlesFilterContents} />
            <Button className="pr-0 font-normal text-frieza" variant={"ghost"}>
              Clear
            </Button>
          </div>
          <div className="grid lg:grid-cols-[80%_auto] gap-5">
            <div className="grid md:grid-cols-3 gap-y-9 gap-x-4">
              {marketData?.bundles?.map((bundle) => (
                <MarketCard key={bundle.id} item={bundle} />
              ))}
            </div>
            <div className="hidden lg:block">
              <FilterPanel filterContents={bundlesFilterContents} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Players">
          <div className="lg:hidden flex justify-between mb-8">
            <FilterModal filterContents={bundlesFilterContents} />
            <Button className="pr-0 font-normal text-frieza" variant={"ghost"}>
              Clear
            </Button>
          </div>
          <div className="grid lg:grid-cols-[80%_auto] gap-5">
            <div className="grid md:grid-cols-3 gap-y-9 gap-x-4">
              {playerData?.players?.map((player) => (
                <MarketCard key={player.id} item={player} itemType="player" />
              ))}
            </div>
            <div className="hidden lg:block">
              <FilterPanel filterContents={bundlesFilterContents} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Scout">
          <h1>Scout</h1>
        </TabsContent>
      </Tabs>
    </div>
  );
};
