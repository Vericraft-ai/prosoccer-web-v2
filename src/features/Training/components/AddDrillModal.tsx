import { Button } from "@/blocks/components/Button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/blocks/components/Sheet";
import { MoveBackIcon } from "@/blocks/icons/MoveBackIcon";
import { Cross2Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { DrillTabs } from "./DrillTabs";
import { DrillTabsMenu } from "./DrillTabsMenu";
import { SelectPlayerTabs } from "./SelectPlayerTabs";
import { TrainingResultsTabs } from "./TrainingResultsTabs";

export function AddDrillModal() {
  const [page, setPage] = useState<"drills" | "players" | "results">("drills");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PlusIcon size={16} />
          <span className="ml-2"> Add Drills</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"full"}>
        <SheetHeader className="py-6 lg:py-12 border-b border-piccolo px-5 lg:px-[7.5rem] flex-row justify-between items-center space-y-0">
          <SheetTitle className="text-sm lg:text-2xl text-white">
            {page === "drills"
              ? "Drills"
              : page === "players"
                ? "Players"
                : "Training Results "}
          </SheetTitle>
          {page !== "results" && <DrillTabsMenu activePage={page} />}
          <SheetClose>
            <Cross2Icon className="h-[17.41px] w-[17.41px]" />
          </SheetClose>
        </SheetHeader>

        {page === "players" && (
          <div className="px-7 lg:px-[7.5rem] mt-8">
            <button onClick={() => setPage("drills")}>
              <MoveBackIcon className="w-8 h-8" />
            </button>
          </div>
        )}

        <div className="px-7 lg:px-[7.5rem] flex flex-col lg:flex-row">
          {page === "drills" && (
            <DrillTabs onClick={() => setPage("players")} />
          )}
          {page === "players" && <SelectPlayerTabs />}
          {page === "results" && <TrainingResultsTabs />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
