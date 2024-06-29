import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/blocks/components/Dialog";
import { FilterPanel } from "./FilterPanel";
import { Button } from "@/blocks/components/Button";

type Props = {
  filterContents: {
    title: string;
    options: { label: string; value: string }[];
  }[];
};

export const FilterModal = ({ filterContents }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="pl-0 text-lg" variant={"ghost"}>
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[369px] px-[3.5rem] py-12">
        <FilterPanel filterContents={filterContents} />
      </DialogContent>
    </Dialog>
  );
};
