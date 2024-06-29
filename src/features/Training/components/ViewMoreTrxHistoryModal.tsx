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
import { TrxHistoryTable } from "./TrxHistoryTable";

export function ViewMoreTrxHistoryModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-vegeta">
          View all
        </Button>
      </SheetTrigger>
      <SheetContent side={"full"}>
        <SheetHeader className="py-6 lg:py-12 border-b border-piccolo px-5 lg:px-[7.5rem] flex-row justify-between items-center space-y-0">
          <SheetTitle className="text-sm lg:text-2xl text-white">
            Training history
          </SheetTitle>
          <SheetClose>
            <Cross2Icon className="h-[17.41px] w-[17.41px]" />
          </SheetClose>
        </SheetHeader>

        <div className="px-7 lg:px-[7.5rem]">
          <TrxHistoryTable />
        </div>
      </SheetContent>
    </Sheet>
  );
}
