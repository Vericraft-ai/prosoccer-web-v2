import { Button } from "@/blocks/components/Button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/blocks/components/Sheet";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DetailTabs } from "./DetailTabs";
import { TeamEmblem } from "./TeamEmblem";
import { TeamLineup } from "./TeamLineup";

type Props = {
  matchId: string;
};

export function MatchDetailModal({ matchId }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-zeno/15 h-8">Full - Time</Button>
      </SheetTrigger>
      <SheetContent side={"full"}>
        <SheetHeader className="py-6 lg:py-12 border-b border-piccolo px-5 lg:px-[7.5rem] flex-row justify-between items-center">
          <SheetTitle className="text-2xl text-white">Match</SheetTitle>
          <SheetClose>
            <Cross2Icon className="h-[17.41px] w-[17.41px]" />
          </SheetClose>
        </SheetHeader>

        <div className="px-5 lg:px-[7.5rem]">
          <div className="h-[7.5rem] bg-white/5 w-full rounded-lg flex flex-col items-center justify-center gap-4 mt-8">
            <div className="flex gap-6 lg:gap-20 items-center">
              <TeamEmblem
                src="/TeamLogo.svg"
                name="ARL"
                className="flex-row-reverse"
              />
              <Button className="">2-5</Button>
              <TeamEmblem src="/TeamLogo.svg" name="ARL" />
            </div>
            <div className="text-sm">Finished</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-[29%_auto_29%] gap-4 mt-7">
            <div className="w-full">
              <TeamLineup />
            </div>
            <div className="w-full  order-3 lg:order-2 md:col-span-full md:w-1/2 lg:w-full md:justify-self-center lg:col-auto">
              <DetailTabs />
              <Button className="w-full mt-8">Match Report</Button>
            </div>
            <div className="w-full order-2 lg:order-3">
              <TeamLineup />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
