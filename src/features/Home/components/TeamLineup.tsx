import { Rating } from "@/features/Shared/components/Rating";
import { TeamEmblem } from "./TeamEmblem";
import { LineupTable } from "./LineupTable";

export const TeamLineup = () => {
  return (
    <div className="border-[0.5px] rounded text-xs">
      <div className="flex py-5 px-2 items-center justify-between bg-tagoma rounded">
        <div className="flex items-center gap-1">
          <TeamEmblem
            src="/images/argentina.png"
            name="ARL"
            className="flex-row-reverse text-xs"
            teamType="country"
            logoClassName="h-5 w-5"
          />
          <span>#5</span>
        </div>
        <span> 4-2-3-1</span>
        <Rating rating={3} />
      </div>

      <LineupTable />
    </div>
  );
};
