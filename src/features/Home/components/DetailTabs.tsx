import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { StatsTab } from "./StatsTab";
import { SummaryTab } from "./SummaryTab";

export const DetailTabs = () => {
  const tabs = ["Match", "Stats", "Summary"];
  return (
    <div className="text-broly">
      <Tabs defaultValue="Stats" className="w-full">
        <TabsList className="justify-between">
          {tabs.map((tab) => (
            <TabsTrigger value={tab} key={tab} className="font-medium">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={"Match"}>
          <StatsTab />
        </TabsContent>
        <TabsContent value={"Stats"}>
          <StatsTab />
        </TabsContent>
        <TabsContent value={"Summary"}>
          <SummaryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
