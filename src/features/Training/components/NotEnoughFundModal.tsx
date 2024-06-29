import { Button } from "@/blocks/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/blocks/components/Dialog";
import { CoinIcon } from "@/blocks/icons/CoinIcon";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

export const NotEnoughFundModal = ({ onOpenChange, open }: Props) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="hidden">
          Trigger
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[381px] px-6 md:px-12">
        <h1 className="mt-8 text-xl text-center font-medium">
          Not enough funds
        </h1>
        <div className="mt-7 lg:mt-11 space-y-2">
          <p className="text-frieza text-base text-center">
            You don’t have enough training token. Get some from the store
          </p>
        </div>

        <div className="flex items-center justify-between mt-8">
          <p>Total Token</p>
          <div className="border-r"></div>
          <div className="flex items-center gap-1">
            <span>2</span>
            <CoinIcon />
          </div>
        </div>

        <div className="mt-7 lg:mt-14 flex gap-7">
          <Button className="w-full" variant={"outline"}>
            Not now
          </Button>
          <Button className="w-full">Go to store</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
