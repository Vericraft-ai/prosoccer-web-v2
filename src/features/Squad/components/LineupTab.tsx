import { AddPlayerBtn } from "@/features/Shared/components/AddPlayerBtn";
import { Rating } from "@/features/Shared/components/Rating";
import Image from "next/image";
import { JerseyComponent } from "./JerseyComponent";
import { LineupTable } from "./LineupTable";
import { AddPlayerModal } from "./AddPlayerModal";
import { FormationModal } from "./FormationModal";

export const LineupTab = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col md:flex-row lg:flex-col gap-x-5 w-full lg:w-2/5 lg:pr-2.5 lg:border-r border-piccolo">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-semibold md:text-2xl">Your Squad</h2>
              <div className="flex gap-2 items-center">
                <Rating rating={2} />
                <span>2</span>
              </div>
            </div>
            <FormationModal formation={"4-4-2-A"} />
          </div>

          <div className="mt-5">
            <Image
              src={"/images/field-horizontal.svg"}
              width={415}
              height={572}
              alt="field"
            />
          </div>
        </div>

        <div className="md:h-[572px] lg:h-auto md:mb-2 lg:mb-0 md:mt-auto mt-6 lg:mt-6 flex md:flex-col lg:flex-row items-center gap-[3.25rem] py-4 px-8 border justify-center bg-piccolo">
          <JerseyComponent
            playerNumber={24}
            playerName={"Rex Igajah"}
            position="LF"
          />
          <JerseyComponent
            playerNumber={24}
            playerName={"Rex Igajah"}
            position="LF"
          />
          <AddPlayerModal />
          <AddPlayerModal />
        </div>
      </div>
      <div className="mt-5 lg:mt-0 lg:pl-2.5 w-full lg:w-3/5">
        <LineupTable />
      </div>
    </div>
  );
};
