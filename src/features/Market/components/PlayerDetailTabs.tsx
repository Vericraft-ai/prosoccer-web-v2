import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { PlayerOverviewTab } from "./PlayerOverviewTab";
import { PlayerSkillsTab } from "./PlayerSkillsTab";

export const PlayerDetailTabs = () => {
  return (
    <div className="text-broly">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview" className="">
            Overview
          </TabsTrigger>
          <TabsTrigger value="skills" className="">
            Skills
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <PlayerOverviewTab />
        </TabsContent>
        <TabsContent value="skills">
          <PlayerSkillsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
