import { Button } from "@/blocks/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/blocks/components/Dialog";
import { Progress } from "@/blocks/components/Progress";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  progress: number;
};

export function TrainingProgressModal({ onOpenChange, open, progress }: Props) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hidden">
          Trigger
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[432px]">
        <h1 className="mt-8 text-center text-xl font-medium">
          Training Process
        </h1>
        <div className="relative w-[222px] h-[107px] rounded-xl bg-black mt-14 flex justify-center items-center mx-auto">
          <h1 className="text-[2.5rem] font-bold">{progress}%</h1>
          <Progress
            className="absolute bottom-0 right-0 left-0 rounded-none rounded-bl-xl rounded-br-xl"
            value={progress}
          />
        </div>

        <div className="mt-14">
          <Button className="w-full" disabled>
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
