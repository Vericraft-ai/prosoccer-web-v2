import { Button } from "@/blocks/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/blocks/components/Dialog";

type Props = {
  formation: string;
};

export const FormationModal = ({ formation }: Props) => {
  const formations = [
    "4-4-2-A",
    "4-4-2-B",
    "4-4-2-C",
    "4-4-2-D",
    "4-4-2-E",
    "4-4-2-F",
    "4-4-2-G",
    "4-4-2-H",
    "4-4-2-I",
    "4-4-2-J",
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm md:text-base">{formation}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[369px] px-[3.5rem] py-12">
        <h1 className="text-center text-xl font-medium">Change Formation</h1>

        <div className="flex justify-between mt-10">
          <div className="flex flex-col items-start gap-10">
            {formations.slice(5, 10).map((f) => (
              <Button
                size={"sm"}
                variant={"outline"}
                className="h-[27px]"
                key={f}
              >
                {f}
              </Button>
            ))}
          </div>
          <div className="border-l border-c6/[0.26]"></div>
          <div className="flex flex-col items-end gap-10">
            {formations.slice(5, 10).map((f) => (
              <Button
                size={"sm"}
                variant={"outline"}
                className="h-[27px]"
                key={f}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
