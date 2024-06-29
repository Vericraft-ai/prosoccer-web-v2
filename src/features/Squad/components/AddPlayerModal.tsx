import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/blocks/components/Dialog";
import { AddPlayerBtn } from "@/features/Shared/components/AddPlayerBtn";
import { LineupTable } from "./LineupTable";

export function AddPlayerModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <AddPlayerBtn />
      </DialogTrigger>
      <DialogContent className="block md:grid w-full px-4 md:max-w-[744px] md:px-5 lg:px-[3.5rem] pt-12">
        <LineupTable />
      </DialogContent>
    </Dialog>
  );
}
