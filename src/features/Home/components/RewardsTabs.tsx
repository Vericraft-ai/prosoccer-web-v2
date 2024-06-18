import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/blocks/components/Tabs";
import { LogoOnly } from "@/blocks/icons/LogoOnly";
import { cn } from "@/blocks/utils/cn";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

export const RewardsTabs = () => {
  const tabs = ["Division A", "Division B", "Division C", "Division D"];
  return (
    <div className="text-broly mt-6 lg:mt-12">
      <Tabs defaultValue={tabs[0]} className="w-full">
        <TabsList className="overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger value={tab} key={tab} className="font-medium">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent value={tab} key={tab}>
            <div className="font-semibold">
              {Array.from({ length: 9 }, (_, i) => i + 1).map((rank) => (
                <div
                  className={cn(
                    "flex items-center justify-between py-2.5 px-1.5 border-b-[0.2px] border-b-piccolo border-l-[4px] first:rounded-t-[4px] last:rounded-b-[4px] border-l-transparent",
                    {
                      "border-l-quitela": rank < 4,
                      "border-l-kettol": rank > 6,
                    }
                  )}
                  key={rank}
                >
                  <span className=" ">{rank}th</span>

                  {rank === 1 && (
                    <div className="flex items-center gap-1">
                      <ArrowUpIcon className="w-5 h-5 text-quitela" />
                      <span>Promoted</span>
                      <ArrowUpIcon className="w-5 h-5 text-quitela" />
                    </div>
                  )}

                  {rank > 6 && (
                    <div className="flex items-center gap-1">
                      <ArrowDownIcon className="w-5 h-5 text-kettol" />
                      <span>Relegated</span>
                      <ArrowDownIcon className="w-5 h-5 text-kettol" />
                    </div>
                  )}

                  <div className="flex items-center gap-2.5">
                    <LogoOnly className="h-3 w-3" />
                    <span className="font-normal">90,000</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
