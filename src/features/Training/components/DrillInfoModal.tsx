import { Button } from "@/blocks/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/blocks/components/Dialog";

export const DrillInfoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="self-start">
          Drill info
        </Button>
      </DialogTrigger>
      <DialogContent className=" md:max-w-[605px] lg:max-w-[756px]">
        <h1 className="mt-8 text-xl font-medium">Drill info</h1>
        <div className="mt-7 lg:mt-14 space-y-2">
          <Button
            variant={"outline"}
            size={"tactics"}
            className="bg-[#31B18BA6]"
          >
            +50% Result
          </Button>
          <h2 className="">Awaiting approval</h2>
          <p className="text-frieza">
            Extremely high detailed custom female soccer player in custom made
            jersey. Ready for Mixamo auto rigg. V ray rendering in 3DS Max,
            default scanline in C4D. Lights included in the scene. SSS materials
            for body. Textures that are included: - Color - Epidermal
          </p>
        </div>

        <div className="mt-7 lg:mt-14 space-y-2">
          <Button variant={"outline"} size={"tactics"}>
            Focus improvement
          </Button>
          <h2 className="">Awaiting approval</h2>
          <p className="text-frieza">
            Extremely high detailed custom female soccer player in custom made
            jersey. Ready for Mixamo auto rigg. V ray rendering in 3DS Max,
            default scanline in C4D. Lights included in the scene. SSS materials
            for body. Textures that are included: - Color - Epidermal
          </p>
        </div>

        <div className="mt-7 lg:mt-14">
          <Button className="w-full">Done</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
